import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Disc3, RotateCcw } from "lucide-react";
import { goldenRecordItems } from "@/data/hardware";
import { useLang } from "@/lib/i18n";

const MAX = 5;

/** Mini-game: pick 5 sounds/images for your own Golden Record. */
export function GoldenRecordGame() {
  const { t } = useLang();
  const [chosen, setChosen] = useState<string[]>([]);
  const done = chosen.length === MAX;

  const toggle = (id: string) =>
    setChosen((prev) =>
      prev.includes(id)
        ? prev.filter((x) => x !== id)
        : prev.length < MAX
          ? [...prev, id]
          : prev,
    );

  const labels = chosen
    .map((id) => goldenRecordItems.find((i) => i.id === id)?.label)
    .filter(Boolean);

  return (
    <section className="panel p-5 sm:p-6">
      <div className="mb-1 flex items-center gap-2">
        <Disc3 className="size-5 text-gold" />
        <h3 className="text-lg font-bold text-gold">{t.goldenRecord}</h3>
      </div>
      <p className="mb-4 text-sm text-muted-foreground">
        {t.goldenRecordHint} ({chosen.length}/{MAX})
      </p>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
        {goldenRecordItems.map((item) => {
          const active = chosen.includes(item.id);
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => toggle(item.id)}
              className={`flex flex-col items-center gap-1 rounded-xl border px-2 py-3 text-center text-xs font-semibold transition-all ${
                active
                  ? "border-gold bg-gold/20 text-gold scale-[1.03]"
                  : "border-border bg-muted/40 hover:border-nebula hover:bg-muted"
              }`}
            >
              <span className="text-2xl" aria-hidden>
                {item.emoji}
              </span>
              {item.label}
            </button>
          );
        })}
      </div>

      <AnimatePresence>
        {done && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-5 rounded-2xl border border-gold/50 bg-gold/10 p-4"
          >
            <p className="font-bold text-gold">🥇 {t.goldenRecordDone}</p>
            <p className="mt-1 text-sm">You chose: {labels.join(", ")}.</p>
            <p className="mt-2 text-xs text-muted-foreground">
              Your record flies for billions of years. Whoever finds it meets Earth
              through your choices.
            </p>
            <button
              type="button"
              onClick={() => setChosen([])}
              className="mt-3 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-xs font-semibold hover:bg-muted"
            >
              <RotateCcw className="size-3.5" /> {t.playAgain}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
