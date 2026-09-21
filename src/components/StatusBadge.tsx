import { useLang } from "@/lib/i18n";

export function StatusBadge({
  isActive,
  lastContactYear,
  size = "md",
}: {
  isActive: boolean;
  lastContactYear?: number | undefined;
  size?: "sm" | "md" | undefined;
}) {
  const { t } = useLang();
  const pad = size === "sm" ? "px-2 py-0.5 text-[11px]" : "px-3 py-1 text-sm";

  if (isActive) {
    return (
      <span
        className={`inline-flex items-center gap-2 rounded-full border border-alive/50 bg-alive/15 font-semibold text-alive animate-alive-pulse ${pad}`}
      >
        <span className="size-2 rounded-full bg-alive" />
        🟢 {t.stillActive}
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-silent/40 bg-muted font-semibold text-muted-foreground ${pad}`}
    >
      <span className="size-2 rounded-full bg-silent" />
      🔴 {t.lastContact}: {lastContactYear}
    </span>
  );
}
