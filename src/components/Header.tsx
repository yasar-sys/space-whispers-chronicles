import { Link } from "@tanstack/react-router";
import { Volume2, VolumeX, Map, Award, MessageCircleQuestion } from "lucide-react";
import { useAppState } from "@/lib/app-state";
import { useLang } from "@/lib/i18n";

export function Header() {
  const { soundOn, toggleSound } = useAppState();
  const { t, lang, setLang } = useLang();

  const navClass =
    "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground sm:text-sm";

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-2 px-3 py-2.5 sm:px-6">
        <Link to="/" className="mr-auto font-display text-base font-bold sm:text-lg">
          <span className="text-gradient-gold">{t.appTitle}</span>
        </Link>

        <nav className="flex items-center">
          <Link to="/map" className={navClass} activeProps={{ className: `${navClass} text-gold` }}>
            <Map className="size-4" />
            <span className="hidden sm:inline">{t.map}</span>
          </Link>
          <Link to="/badges" className={navClass} activeProps={{ className: `${navClass} text-gold` }}>
            <Award className="size-4" />
            <span className="hidden sm:inline">{t.badges}</span>
          </Link>
          <Link to="/ask" className={navClass} activeProps={{ className: `${navClass} text-gold` }}>
            <MessageCircleQuestion className="size-4" />
            <span className="hidden sm:inline">{t.ask}</span>
          </Link>
        </nav>

        {/* Language toggle — TODO(bangla): add real Bangla strings. */}
        <div className="flex overflow-hidden rounded-full border border-border text-[11px] font-bold">
          {(["en", "bn"] as const).map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => setLang(l)}
              className={`px-2.5 py-1 uppercase transition-colors ${
                lang === l ? "bg-primary text-primary-foreground" : "text-muted-foreground"
              }`}
            >
              {l === "en" ? "EN" : "বাং"}
            </button>
          ))}
        </div>

        {/* Sound toggle — TODO(audio): wire narration + ambience. */}
        <button
          type="button"
          onClick={toggleSound}
          aria-label={soundOn ? t.soundOn : t.soundOff}
          className="inline-flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:text-gold"
        >
          {soundOn ? <Volume2 className="size-4" /> : <VolumeX className="size-4" />}
        </button>
      </div>
    </header>
  );
}
