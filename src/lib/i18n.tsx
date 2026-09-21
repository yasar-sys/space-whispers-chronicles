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
  chapter: "Chapter",
  previousChapter: "Previous chapter",
  nextChapter: "Next chapter",
  classroom: "Classroom",
  classroomTitle: "Classroom Mode",
  classroomIntro:
    "A teacher's view of the whole journey: what each chapter covers, how long it takes, and questions to spark discussion.",
  missionOverview: "Mission overview",
  discussionPrompts: "Discussion prompts",
  groupProgress: "Group progress",
  groupProgressHint:
    "This device's progress — use it on the classroom screen, then reset it for the next group.",
  resetProgress: "Reset for next group",
  resetDone: "Progress cleared. Ready for the next group.",
  bigIdea: "Big idea",
  vocabulary: "Vocabulary",
  minutes: "min",
  openChapter: "Open chapter",
  totalTime: "Total lesson time",
  notVisited: "Not yet visited",
};

export type Strings = typeof en;

// TODO(bangla): Add full Bangla translations for narrative dialogue in src/data/hardware.ts and backend content.
const bn: Strings = {
  appTitle: "স্টিল লিসেনিং (এখনও শুনছে)",
  tagline: "মহাকাশে ফেলে আসা যন্ত্রগুলো এখনও কথা বলছে। তুমি কি শুনছো?",
  start: "অভিযাত্রা শুরু করো",
  map: "স্টার ম্যাপ",
  badges: "আমার ব্যাজ",
  ask: "অ্যাস্ট্রোনটকে প্রশ্ন করো",
  mapTitle: "পরিদর্শনের জন্য একটি যন্ত্র বেছে নাও",
  mapHint: "যেকোনো জ্বলজ্বলে মার্কার আলতো চাপো। সবুজগুলো এখনও জেগে আছে।",
  stillActive: "এখনও সক্রিয়",
  lastContact: "শেষ যোগাযোগ",
  launched: "উৎক্ষেপণ",
  whatItFound: "যা আবিষ্কৃত হয়েছে",
  rightNow: "বর্তমান অবস্থা",
  liveSignal: "লাইভ সিগন্যাল",
  demoData: "ডেমো ডাটা — লাইভ না সা DSN ফিডে যুক্ত হবে",
  quizTitle: "দ্রুত মিশন কুইজ",
  quizDone: "অধ্যায় সম্পন্ন!",
  funFact: "মজার তথ্য",
  goldenRecord: "তোমার নিজের গোল্ডেন রেকর্ড তৈরি করো",
  goldenRecordHint: "মহাকাশে পাঠানোর জন্য ৫টি বিষয় নির্বাচন করো।",
  goldenRecordDone: "তোমার রেকর্ড প্রস্তুত",
  playAgain: "পুনরায় নির্বাচন করো",
  back: "ম্যাপে ফিরে যাও",
  progress: "অভিযাত্রীর অগ্রগতি",
  visited: "পরিদর্শিত",
  certificate: "স্পেস এক্সপ্লোরার সার্টিফিকেট",
  certificateLocked: "তোমার সার্টিফিকেট আনলক করতে ৮টি যন্ত্রই পরিদর্শন করো।",
  download: "সার্টিফিকেট ডাউনলোড করো",
  askPlaceholder: "মহাকাশ সম্পর্কে যেকোনো প্রশ্ন করো…",
  send: "পাঠাও",
  soundOn: "শব্দ চালু",
  soundOff: "শব্দ বন্ধ",
  imagePlaceholderNote: "প্লেসহোল্ডার ছবি — নাসা আর্কাইভ ছবি দিয়ে পরিবর্তন করা হবে",
  chapter: "অধ্যায়",
  previousChapter: "পূর্ববর্তী অধ্যায়",
  nextChapter: "পরবর্তী অধ্যায়",
  classroom: "শ্রেণীকক্ষ",
  classroomTitle: "ক্লাসরুম মোড",
  classroomIntro:
    "শিক্ষকদের জন্য সম্পূর্ণ যাত্রার রূপরেখা: প্রতিটি অধ্যায়ে কী রয়েছে, কত সময় লাগবে এবং আলোচনার প্রশ্নসমূহ।",
  missionOverview: "মিশন ওভারভিউ",
  discussionPrompts: "আলোচনার প্রশ্নাবলী",
  groupProgress: "গ্রুপের অগ্রগতি",
  groupProgressHint:
    "এই ডিভাইসের অগ্রগতি — ক্লাসরুম স্ক্রিনে ব্যবহার করুন, তারপর নতুন গ্রুপের জন্য রিসেট করুন।",
  resetProgress: "পরবর্তী গ্রুপের জন্য রিসেট করুন",
  resetDone: "অগ্রগতি রিসেট করা হয়েছে। নতুন গ্রুপের জন্য তৈরি।",
  bigIdea: "মূল ধারণা",
  vocabulary: "শব্দভাণ্ডার",
  minutes: "মিনিট",
  openChapter: "অধ্যায় খুলুন",
  totalTime: "মোট পাঠের সময়",
  notVisited: "এখনও দেখা হয়নি",
};

const dictionaries: Record<Lang, Strings> = { en, bn };

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
