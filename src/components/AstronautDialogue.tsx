import { motion } from "motion/react";
import astronautImg from "@/assets/astronaut.png";
import kidImg from "@/assets/kid.png";
import type { DialogueLine } from "@/data/hardware";

/**
 * Comic speech-bubble dialogue between the Astronaut Mentor and Kid Explorer.
 * TODO(tts): add text-to-speech narration per line (play when sound is on).
 */
export function AstronautDialogue({ lines }: { lines: DialogueLine[] }) {
  return (
    <div className="flex flex-col gap-4">
      {lines.map((line, i) => {
        const isAstronaut = line.speaker === "astronaut";
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.18, duration: 0.4 }}
            className={`flex items-end gap-3 ${isAstronaut ? "" : "flex-row-reverse"}`}
          >
            <img
              src={isAstronaut ? astronautImg : kidImg}
              alt={isAstronaut ? "Astronaut mentor" : "Kid explorer"}
              loading="lazy"
              width={816}
              height={816}
              className="size-14 shrink-0 rounded-full border-2 border-gold/50 bg-secondary/60 object-cover object-top sm:size-16"
            />
            <div
              className={`relative max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed sm:text-base ${
                isAstronaut
                  ? "bg-card text-card-foreground border border-gold/30"
                  : "bg-secondary text-secondary-foreground border border-nebula/40"
              }`}
            >
              <p className="mb-1 text-xs font-bold uppercase tracking-wide text-gold">
                {isAstronaut ? "Astronaut" : "You"}
              </p>
              {line.text}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
