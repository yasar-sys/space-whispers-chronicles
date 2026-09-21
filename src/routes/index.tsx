import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Rocket, Radio } from "lucide-react";
import { Starfield } from "@/components/Starfield";
import astronautImg from "@/assets/astronaut.png";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Still Listening — NASA hardware that never stopped talking" },
      {
        name: "description",
        content:
          "An interactive story for kids about the spacecraft NASA left on the Moon, Mars and deep space — and the two Voyagers that are still answering.",
      },
      { property: "og:title", content: "Still Listening" },
      {
        property: "og:description",
        content:
          "The machines we left behind are still talking. Explore 8 NASA spacecraft, play the Golden Record game and earn your explorer certificate.",
      },
    ],
  }),
  component: Landing,
});

function Landing() {
  const { t } = useLang();

  return (
    <>
      <Starfield count={130} />
      <main className="mx-auto flex min-h-[calc(100vh-3.5rem)] max-w-4xl flex-col items-center justify-center px-5 py-12 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-alive/40 bg-alive/10 px-3 py-1 text-xs font-bold text-alive"
        >
          <Radio className="size-3.5" /> 2 spacecraft are still transmitting right now
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold leading-tight sm:text-7xl"
        >
          <span className="text-gradient-gold">{t.appTitle}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-5 max-w-xl text-balance text-base text-muted-foreground sm:text-xl"
        >
          {t.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-9"
        >
          <Link
            to="/map"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-lg font-extrabold text-primary-foreground shadow-glow transition-transform hover:scale-105"
          >
            <Rocket className="size-5" /> {t.start}
          </Link>
        </motion.div>

        <motion.img
          src={astronautImg}
          alt="Your astronaut mentor"
          width={816}
          height={816}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.7 }}
          className="mt-10 w-48 animate-float-soft sm:w-64"
        />
      </main>
    </>
  );
}
