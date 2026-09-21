import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Starfield } from "@/components/Starfield";
import { SolarSystemMap } from "@/components/SolarSystemMap";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/map")({
  head: () => ({
    meta: [
      { title: "Star Map — Still Listening" },
      {
        name: "description",
        content:
          "A stylized solar system map with 8 NASA spacecraft markers, from Apollo debris on the Moon to Voyager 1 in interstellar space.",
      },
      { property: "og:title", content: "Star Map — Still Listening" },
      {
        property: "og:description",
        content: "Tap any glowing marker to hear that machine's story. Green markers are still awake.",
      },
    ],
  }),
  component: MapPage,
});

function MapPage() {
  const { t } = useLang();

  return (
    <>
      <Starfield />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mx-auto max-w-5xl px-4 py-8 sm:px-6"
      >
        <h1 className="text-center text-2xl font-extrabold sm:text-4xl">
          <span className="text-gradient-gold">{t.mapTitle}</span>
        </h1>
        <p className="mt-2 text-center text-sm text-muted-foreground">{t.mapHint}</p>

        <div className="mt-6 overflow-x-auto">
          <div className="min-w-[520px]">
            <SolarSystemMap />
          </div>
        </div>
      </motion.main>
    </>
  );
}
