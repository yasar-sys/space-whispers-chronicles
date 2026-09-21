import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { hardware } from "@/data/hardware";
import { useLang } from "@/lib/i18n";

/** Previous / next chapter links so kids can walk the whole tour in order. */
export function ChapterNav({ currentId }: { currentId: string }) {
  const { t } = useLang();
  const index = hardware.findIndex((h) => h.id === currentId);
  const prev = index > 0 ? hardware[index - 1] : undefined;
  const next = index < hardware.length - 1 ? hardware[index + 1] : undefined;

  const base =
    "panel flex flex-1 items-center gap-3 p-4 text-left transition-colors hover:border-gold/60";

  return (
    <nav className="mt-2 flex flex-col gap-3 sm:flex-row" aria-label="Chapter navigation">
      {prev ? (
        <Link to="/hardware/$hardwareId" params={{ hardwareId: prev.id }} className={base}>
          <ArrowLeft className="size-5 shrink-0 text-gold" />
          <span className="min-w-0">
            <span className="block text-[11px] font-bold uppercase tracking-wide text-muted-foreground">
              {t.previousChapter}
            </span>
            <span className="block truncate font-bold">{prev.name}</span>
          </span>
        </Link>
      ) : (
        <span className="flex-1" />
      )}

      {next ? (
        <Link
          to="/hardware/$hardwareId"
          params={{ hardwareId: next.id }}
          className={`${base} sm:justify-end sm:text-right`}
        >
          <span className="min-w-0 sm:order-1">
            <span className="block text-[11px] font-bold uppercase tracking-wide text-muted-foreground">
              {t.nextChapter}
            </span>
            <span className="block truncate font-bold">{next.name}</span>
          </span>
          <ArrowRight className="size-5 shrink-0 text-gold sm:order-2" />
        </Link>
      ) : (
        <span className="flex-1" />
      )}
    </nav>
  );
}

/** "Chapter 3 of 8" label. */
export function ChapterCount({ currentId }: { currentId: string }) {
  const { t } = useLang();
  const index = hardware.findIndex((h) => h.id === currentId);
  return (
    <span className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
      {t.chapter} {index + 1} / {hardware.length}
    </span>
  );
}
