import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkle, CheckCircle2, XCircle } from "lucide-react";
import type { QuizQuestion } from "@/data/hardware";
import { useLang } from "@/lib/i18n";

export function QuizCard({ questions }: { questions: QuizQuestion[] }) {
  const { t } = useLang();
  const [picked, setPicked] = useState<Record<number, number>>({});

  const correctCount = questions.filter((q, i) => picked[i] === q.answerIndex).length;

  return (
    <section className="panel p-5 sm:p-6">
      <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-gold">
        <Sparkle className="size-5" /> {t.quizTitle}
      </h3>

      <div className="flex flex-col gap-5">
        {questions.map((q, qi) => {
          const choice = picked[qi];
          const answered = choice !== undefined;
          const isRight = choice === q.answerIndex;

          return (
            <div key={qi}>
              <p className="mb-2 text-sm font-semibold sm:text-base">
                {qi + 1}. {q.question}
              </p>
              <div className="flex flex-col gap-2">
                {q.options.map((opt, oi) => {
                  const chosen = choice === oi;
                  const showRight = answered && oi === q.answerIndex;
                  return (
                    <button
                      key={oi}
                      type="button"
                      disabled={answered}
                      onClick={() => setPicked((p) => ({ ...p, [qi]: oi }))}
                      className={`flex items-center justify-between gap-3 rounded-xl border px-3 py-2 text-left text-sm transition-colors ${
                        showRight
                          ? "border-alive bg-alive/15 text-alive"
                          : chosen
                            ? "border-destructive bg-destructive/15 text-destructive"
                            : "border-border bg-muted/40 hover:border-gold/60 hover:bg-muted"
                      } disabled:cursor-default`}
                    >
                      <span>{opt}</span>
                      {showRight && <CheckCircle2 className="size-4 shrink-0" />}
                      {chosen && !isRight && <XCircle className="size-4 shrink-0" />}
                    </button>
                  );
                })}
              </div>

              <AnimatePresence>
                {answered && isRight && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-3 overflow-hidden"
                  >
                    <div className="rounded-xl border border-gold/40 bg-gold/10 p-3 text-sm">
                      <span className="font-bold text-gold">✨ {t.funFact}: </span>
                      {q.funFact}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {correctCount === questions.length && (
        <p className="mt-5 rounded-xl bg-alive/15 p-3 text-center text-sm font-bold text-alive">
          🎉 {t.quizDone}
        </p>
      )}
    </section>
  );
}
