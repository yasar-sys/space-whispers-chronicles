import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Starfield } from "@/components/Starfield";
import { Chatbot } from "@/components/Chatbot";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/ask")({
  head: () => ({
    meta: [
      { title: "Ask the Astronaut — Still Listening" },
      {
        name: "description",
        content:
          "Type a question about Voyager, Cassini or the Mars rovers and get an answer in the astronaut's voice.",
      },
      { property: "og:title", content: "Ask the Astronaut — Still Listening" },
      {
        property: "og:description",
        content: "A friendly space Q&A for curious kids.",
      },
    ],
  }),
  component: AskPage,
});

function AskPage() {
  const { t } = useLang();

  return (
    <>
      <Starfield />
      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto max-w-2xl px-4 py-8 sm:px-6"
      >
        <h1 className="mb-4 text-2xl font-extrabold sm:text-3xl">
          <span className="text-gradient-gold">{t.ask}</span>
        </h1>
        <Chatbot />
      </motion.main>
    </>
  );
}
