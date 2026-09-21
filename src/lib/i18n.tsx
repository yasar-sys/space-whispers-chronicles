import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

/**
 * Tiny translation layer. English only for now.
 * TODO(bangla): add a full `bn` object below with real Bangla translations,
 * plus Bangla versions of the story content in src/data/hardware.ts.
 */

export type Lang = "en" | "bn";

const en = {
  appTitle: "Still Listening",
  tagline: "The machines we left behind are still talking. Are you listening?",
  start: "Start the Journey",
  map: "Star Map",
  badges: "My Badges",
  ask: "Ask the Astronaut",
  mapTitle: "Pick a machine to visit",
  mapHint: "Tap any glowing marker. Green ones are still awake.",
  stillActive: "Still Active",
  lastContact: "Last Contact",
  launched: "Launched",
  whatItFound: "What it found",
  rightNow: "Right now",
  liveSignal: "Live Signal",
  demoData: "DEMO DATA — will connect to live NASA DSN feed",
  quizTitle: "Quick mission check",
  quizDone: "Chapter complete!",
  funFact: "Fun fact",
  goldenRecord: "Build Your Golden Record",
  goldenRecordHint: "Choose 5 things to send into deep space.",
  goldenRecordDone: "Your record is ready",
  playAgain: "Choose again",
  back: "Back to the map",
  progress: "Explorer Progress",
  visited: "visited",
  certificate: "Space Explorer Certificate",
  certificateLocked: "Visit all 8 machines to unlock your certificate.",
  download: "Download certificate",
  askPlaceholder: "Ask me anything about deep space…",
  send: "Send",
  soundOn: "Sound on",
  soundOff: "Sound off",
  imagePlaceholderNote: "PLACEHOLDER IMAGE — to be replaced with NASA archive photo",
};

export type Strings = typeof en;

// TODO(bangla): translate every key. Falls back to English until then.
const bn: Partial<Strings> = {};

const dictionaries: Record<Lang, Partial<Strings>> = { en, bn };

interface Ctx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Strings;
}

const LangContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const value = useMemo<Ctx>(
    () => ({ lang, setLang, t: { ...en, ...dictionaries[lang] } as Strings }),
    [lang],
  );
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang(): Ctx {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
}
