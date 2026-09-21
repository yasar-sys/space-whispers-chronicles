import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Award, Check, Lock, Download } from "lucide-react";
import { hardware } from "@/data/hardware";
import { useAppState } from "@/lib/app-state";
import { useLang } from "@/lib/i18n";
import { StatusBadge } from "@/components/StatusBadge";

export function BadgeSystem() {
  const { visited, total, allVisited } = useAppState();
  const { t } = useLang();
  const pct = Math.round((visited.length / total) * 100);

  const downloadCertificate = () => {
    const canvas = document.createElement("canvas");
    canvas.width = 1200;
    canvas.height = 800;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.fillStyle = "#0e1233";
    ctx.fillRect(0, 0, 1200, 800);
    ctx.strokeStyle = "#e8bf5a";
    ctx.lineWidth = 8;
    ctx.strokeRect(36, 36, 1128, 728);

    ctx.textAlign = "center";
    ctx.fillStyle = "#e8bf5a";
    ctx.font = "bold 66px system-ui, sans-serif";
    ctx.fillText("Space Explorer Certificate", 600, 210);

    ctx.fillStyle = "#ffffff";
    ctx.font = "34px system-ui, sans-serif";
    ctx.fillText("awarded for visiting all 8 machines in", 600, 300);
    ctx.font = "bold 52px system-ui, sans-serif";
    ctx.fillText("Still Listening", 600, 370);

    ctx.font = "28px system-ui, sans-serif";
    ctx.fillStyle = "#c9c6e8";
    ctx.fillText(
      "“The machines we left behind are still talking. Are you listening?”",
      600,
      460,
    );
    ctx.fillText("Voyager 1 & 2 are still out there — and still answering.", 600, 520);
    ctx.fillText(new Date().toLocaleDateString(), 600, 640);

    const link = document.createElement("a");
    link.download = "space-explorer-certificate.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <div className="flex flex-col gap-6">
      <section className="panel p-5">
        <h2 className="text-xl font-bold text-gold">{t.progress}</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          {visited.length} / {total} {t.visited}
        </p>
        <div className="mt-3 h-3 overflow-hidden rounded-full bg-muted">
          <motion.div
            className="h-full rounded-full bg-primary"
            initial={{ width: 0 }}
            animate={{ width: `${pct}%` }}
            transition={{ duration: 0.8 }}
          />
        </div>
      </section>

      <div className="grid gap-3 sm:grid-cols-2">
        {hardware.map((item) => {
          const done = visited.includes(item.id);
          return (
            <Link
              key={item.id}
              to="/hardware/$hardwareId"
              params={{ hardwareId: item.id }}
              className={`panel flex items-center gap-3 p-4 transition-colors hover:border-gold/60 ${
                done ? "" : "opacity-70"
              }`}
            >
              <span
                className={`flex size-10 shrink-0 items-center justify-center rounded-full ${
                  done ? "bg-alive/20 text-alive" : "bg-muted text-muted-foreground"
                }`}
              >
                {done ? <Check className="size-5" /> : <Lock className="size-4" />}
              </span>
              <span className="min-w-0">
                <span className="block truncate font-bold">{item.name}</span>
                <span className="mt-1 block">
                  <StatusBadge
                    isActive={item.isActive}
                    lastContactYear={item.lastContactYear}
                    size="sm"
                  />
                </span>
              </span>
            </Link>
          );
        })}
      </div>

      <section
        className={`panel p-6 text-center ${allVisited ? "border-gold" : ""}`}
      >
        <Award
          className={`mx-auto size-12 ${allVisited ? "text-gold animate-float-soft" : "text-muted-foreground"}`}
        />
        <h3 className="mt-3 text-lg font-bold">{t.certificate}</h3>
        {allVisited ? (
          <button
            type="button"
            onClick={downloadCertificate}
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-bold text-primary-foreground transition-transform hover:scale-105"
          >
            <Download className="size-4" /> {t.download}
          </button>
        ) : (
          <p className="mt-2 text-sm text-muted-foreground">{t.certificateLocked}</p>
        )}
      </section>
    </div>
  );
}
