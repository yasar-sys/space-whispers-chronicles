import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect } from "react";
import { motion } from "motion/react";
import { ArrowLeft, Calendar, Telescope, Activity } from "lucide-react";
import { Starfield } from "@/components/Starfield";
import { AstronautDialogue } from "@/components/AstronautDialogue";
import { StatusBadge } from "@/components/StatusBadge";
import { LiveSignalWidget } from "@/components/LiveSignalWidget";
import { QuizCard } from "@/components/QuizCard";
import { GoldenRecordGame } from "@/components/GoldenRecordGame";
import { ChapterNav, ChapterCount } from "@/components/ChapterNav";
import { getHardware } from "@/data/hardware";
import { useAppState } from "@/lib/app-state";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/hardware/$hardwareId")({
  loader: ({ params }) => {
    const item = getHardware(params.hardwareId);
    if (!item) throw notFound();
    return { item };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Unavailable — Still Listening" }, { name: "robots", content: "noindex" }] };
    }
    const { item } = loaderData;
    return {
      meta: [
        { title: `${item.name} — Still Listening` },
        { name: "description", content: item.tagline },
        { property: "og:title", content: `${item.name} — Still Listening` },
        { property: "og:description", content: item.tagline },
      ],
    };
  },
  component: HardwareDetail,
});

function HardwareDetail() {
  const { item } = Route.useLoaderData();
  const { visit } = useAppState();
  const { t } = useLang();

  useEffect(() => {
    visit(item.id);
  }, [item.id, visit]);

  return (
    <>
      <Starfield />
      <motion.main
        key={item.id}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="mx-auto max-w-3xl px-4 py-6 sm:px-6"
      >
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Link
            to="/map"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-gold"
          >
            <ArrowLeft className="size-4" /> {t.back}
          </Link>
          <ChapterCount currentId={item.id} />
        </div>

        <header className="mt-4">
          <p className="text-sm font-semibold text-nebula">{item.place}</p>
          <h1 className="mt-1 text-3xl font-extrabold sm:text-4xl">
            <span className="text-gradient-gold">{item.name}</span>
          </h1>
          <p className="mt-2 text-muted-foreground">{item.tagline}</p>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <StatusBadge isActive={item.isActive} lastContactYear={item.lastContactYear} />
            <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
              <Calendar className="size-4 text-gold" /> {t.launched} {item.launchYear}
            </span>
          </div>
        </header>

        {/* PLACEHOLDER IMAGE — TODO(images): swap for real NASA archival photo. */}
        <figure className="mt-6">
          <img
            src={item.imageUrl}
            alt={item.name}
            loading="lazy"
            className="aspect-[8/5] w-full rounded-2xl border border-border object-cover"
          />
          <figcaption className="mt-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            {item.imageCaption}
          </figcaption>
        </figure>

        <div className="mt-7 flex flex-col gap-6">
          <section className="panel p-5">
            <AstronautDialogue lines={item.dialogue} />
          </section>

          <section className="panel p-5">
            <p className="leading-relaxed">{item.mission}</p>

            <h3 className="mt-5 flex items-center gap-2 font-bold text-gold">
              <Telescope className="size-4" /> {t.whatItFound}
            </h3>
            <ul className="mt-2 flex flex-col gap-2 text-sm">
              {item.discovered.map((d) => (
                <li key={d} className="flex gap-2">
                  <span className="text-gold">★</span>
                  {d}
                </li>
              ))}
            </ul>

            <h3 className="mt-5 flex items-center gap-2 font-bold text-gold">
              <Activity className="size-4" /> {t.rightNow}
            </h3>
            <p className="mt-2 text-sm leading-relaxed">{item.currentStatus}</p>
          </section>

          {item.liveSignal && <LiveSignalWidget signal={item.liveSignal} />}

          {item.hasGoldenRecord && <GoldenRecordGame />}

          <QuizCard questions={item.quiz} />

          <ChapterNav currentId={item.id} />
        </div>
      </motion.main>
    </>
  );
}
