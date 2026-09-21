import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Check } from "lucide-react";
import type { Hardware } from "@/data/hardware";

export function HardwareMarker({
  item,
  visited,
  index,
}: {
  item: Hardware;
  visited: boolean;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.15 + index * 0.08, type: "spring", stiffness: 200 }}
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${item.marker.x}%`, top: `${item.marker.y}%` }}
    >
      <Link
        to="/hardware/$hardwareId"
        params={{ hardwareId: item.id }}
        aria-label={`${item.name} — ${item.place}`}
        className="group flex flex-col items-center gap-1 outline-none"
      >
        <span
          className={`flex size-6 items-center justify-center rounded-full border-2 transition-transform group-hover:scale-125 group-focus-visible:scale-125 ${
            item.isActive
              ? "border-alive bg-alive/40 animate-alive-pulse"
              : "border-gold bg-gold/30"
          }`}
        >
          {visited && <Check className="size-3.5 text-foreground" />}
        </span>
        <span className="max-w-[9rem] rounded-full bg-card/85 px-2 py-0.5 text-center text-[10px] font-semibold leading-tight text-card-foreground sm:text-xs">
          {item.name}
        </span>
      </Link>
    </motion.div>
  );
}
