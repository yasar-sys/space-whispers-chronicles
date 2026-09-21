import { Radio, Clock, Rocket } from "lucide-react";
import type { LiveSignal } from "@/data/hardware";
import { useLang } from "@/lib/i18n";

/**
 * Voyager 1 & 2 only.
 * TODO(live-data): replace these static numbers with real JPL Horizons
 * ephemeris + NASA DSN Now feed values fetched from a server function.
 */
export function LiveSignalWidget({ signal }: { signal: LiveSignal }) {
  const { t } = useLang();

  const rows = [
    { icon: Rocket, label: "Distance from Earth", value: signal.distanceFromEarth },
    { icon: Clock, label: "Signal delay", value: signal.signalDelay },
    { icon: Radio, label: "Speed", value: signal.speed },
  ];

  return (
    <section className="panel border-alive/40 p-5">
      <div className="mb-3 flex items-center gap-2">
        <span className="size-2.5 rounded-full bg-alive animate-alive-pulse" />
        <h3 className="text-lg font-bold text-alive">{t.liveSignal}</h3>
      </div>

      <dl className="flex flex-col gap-3">
        {rows.map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex items-center gap-3">
            <Icon className="size-4 shrink-0 text-gold" />
            <dt className="text-sm text-muted-foreground">{label}</dt>
            <dd className="ml-auto text-right text-sm font-bold tabular-nums">{value}</dd>
          </div>
        ))}
      </dl>

      <p className="mt-4 rounded-lg bg-muted px-3 py-2 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
        [{t.demoData}]
      </p>
    </section>
  );
}
