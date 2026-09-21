import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Starfield } from "@/components/Starfield";
import { BadgeSystem } from "@/components/BadgeSystem";

export const Route = createFileRoute("/badges")({
  head: () => ({
    meta: [
      { title: "My Badges — Still Listening" },
      {
        name: "description",
        content:
          "Track which spacecraft chapters you have visited and unlock your Space Explorer Certificate.",
      },
      { property: "og:title", content: "My Badges — Still Listening" },
      {
        property: "og:description",
        content: "Visit all 8 machines to earn a downloadable Space Explorer Certificate.",
      },
    ],
  }),
  component: BadgesPage,
});

function BadgesPage() {
  return (
    <>
      <Starfield />
      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto max-w-3xl px-4 py-8 sm:px-6"
      >
        <BadgeSystem />
      </motion.main>
    </>
  );
}
