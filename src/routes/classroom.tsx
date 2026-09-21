import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "motion/react";
import { BookOpen, Clock, MessageSquare, RotateCcw, Check, Lock } from "lucide-react";
import { Starfield } from "@/components/Starfield";
import { StatusBadge } from "@/components/StatusBadge";
import { hardware } from "@/data/hardware";
import { classroomNotes, getClassroomNote } from "@/data/classroom";
import { useAppState } from "@/lib/app-state";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/classroom")({
  head: () => ({
    meta: [
      { title: "Classroom Mode — Still Listening" },
      {
        name: "description",
        content:
          "Teacher overview of every Still Listening chapter: big ideas, timings, discussion prompts and resettable group progress.",
      },
      { property: "og:title", content: "Classroom Mode — Still Listening" },
      {
        property: "og:description",
        content: "Mission overview, discussion prompts and group progress for teachers.",
      },
    ],
  }),
  component: ClassroomPage,
});

function ClassroomPage() {
  const { t } = useLang();
  const { visited, total, reset } = useAppState();
  const [justReset, setJustReset] = useState(false);

  const totalMinutes = classroomNotes.reduce((sum, n) => sum + n.minutes, 0);

  return (
    <>
      <Starfield />
      <motion.main
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="mx-auto max-w-4xl px-4 py-6 sm:px-6"
      >
        <header>
          <p className="inline-flex items-center gap-1.5 text-sm font-semibold text-nebula">
            <BookOpen className="size-4" /> {t.classroom}
          </p>
          <h1 className="mt-1 text-3xl font-extrabold sm:text-4xl">
            <span className="text-gradient-gold">{t.classroomTitle}</span>
          </h1>
          <p className="mt-2 max-w-2xl text-muted-foreground">{t.classroomIntro}</p>
          <p className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold">
            <Clock className="size-4 text-gold" /> {t.totalTime}: ~{totalMinutes} {t.minutes}
          </p>
        </header>

        {/* Group progress — resettable between classes. */}
        <section className="panel mt-7 p-5">
          <h2 className="flex items-center gap-2 text-lg font-bold">
            <Check className="size-5 text-gold" /> {t.groupProgress}
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">{t.groupProgressHint}</p>

          <div className="mt-4 h-3 w-full overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-gold transition-all"
              style={{ width: `${(visited.length / total) * 100}%` }}
            />
          </div>
          <p className="mt-2 text-sm font-bold">
            {visited.length} / {total} {t.visited}
          </p>

          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {hardware.map((h) => {
              const done = visited.includes(h.id);
              return (
                <li
                  key={h.id}
                  className="flex items-center gap-2 rounded-xl border border-border/70 px-3 py-2 text-sm"
                >
                  {done ? (
                    <Check className="size-4 shrink-0 text-alive" />
                  ) : (
                    <Lock className="size-4 shrink-0 text-muted-foreground" />
                  )}
                  <span className={done ? "font-bold" : "text-muted-foreground"}>{h.name}</span>
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            onClick={() => {
              reset();
              setJustReset(true);
            }}
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-bold transition-colors hover:border-gold hover:text-gold"
          >
            <RotateCcw className="size-4" /> {t.resetProgress}
          </button>
          {justReset && visited.length === 0 && (
            <p className="mt-2 text-sm font-semibold text-alive">{t.resetDone}</p>
          )}
        </section>

        {/* Mission overview + discussion prompts. */}
        <section className="mt-8">
          <h2 className="text-lg font-bold">{t.missionOverview}</h2>
          <div className="mt-4 flex flex-col gap-4">
            {hardware.map((h) => {
              const note = getClassroomNote(h.id);
              return (
                <article key={h.id} className="panel p-5">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-display text-lg font-bold">{h.name}</h3>
                    <StatusBadge isActive={h.isActive} lastContactYear={h.lastContactYear} />
                    {note && (
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-muted-foreground">
                        <Clock className="size-3.5 text-gold" /> ~{note.minutes} {t.minutes}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {h.place} · {t.launched} {h.launchYear}
                  </p>

                  {note && (
                    <>
                      <p className="mt-3 text-sm leading-relaxed">
                        <span className="font-bold text-gold">{t.bigIdea}: </span>
                        {note.bigIdea}
                      </p>
                      <p className="mt-2 text-xs text-muted-foreground">
                        <span className="font-bold uppercase tracking-wide">{t.vocabulary}: </span>
                        {note.vocabulary.join(" · ")} — {note.subjects.join(", ")}
                      </p>

                      <h4 className="mt-4 flex items-center gap-2 text-sm font-bold">
                        <MessageSquare className="size-4 text-gold" /> {t.discussionPrompts}
                      </h4>
                      <ol className="mt-2 flex flex-col gap-2 text-sm">
                        {note.prompts.map((p, i) => (
                          <li key={p} className="flex gap-2 leading-relaxed">
                            <span className="font-bold text-gold">{i + 1}.</span>
                            {p}
                          </li>
                        ))}
                      </ol>
                    </>
                  )}

                  <Link
                    to="/hardware/$hardwareId"
                    params={{ hardwareId: h.id }}
                    className="mt-4 inline-flex text-sm font-bold text-nebula hover:text-gold"
                  >
                    {t.openChapter} →
                  </Link>
                </article>
              );
            })}
          </div>
        </section>
      </motion.main>
    </>
  );
}
