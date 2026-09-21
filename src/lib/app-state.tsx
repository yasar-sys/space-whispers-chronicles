import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { hardware } from "@/data/hardware";

const STORAGE_KEY = "still-listening:visited";

interface Ctx {
  visited: string[];
  visit: (id: string) => void;
  reset: () => void;
  total: number;
  allVisited: boolean;
  soundOn: boolean;
  toggleSound: () => void;
}

const AppStateContext = createContext<Ctx | null>(null);

export function AppStateProvider({ children }: { children: ReactNode }) {
  const [visited, setVisited] = useState<string[]>([]);
  // TODO(audio): wire real narration / ambience to this flag.
  const [soundOn, setSoundOn] = useState(true);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setVisited(JSON.parse(raw) as string[]);
    } catch {
      /* ignore */
    }
  }, []);

  const visit = useCallback((id: string) => {
    setVisited((prev) => {
      if (prev.includes(id)) return prev;
      const next = [...prev, id];
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        /* ignore */
      }
      return next;
    });
  }, []);

  const reset = useCallback(() => {
    setVisited([]);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
  }, []);

  const value = useMemo<Ctx>(
    () => ({
      visited,
      visit,
      reset,
      total: hardware.length,
      allVisited: visited.length >= hardware.length,
      soundOn,
      toggleSound: () => setSoundOn((s) => !s),
    }),
    [visited, visit, reset, soundOn],
  );

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
}

export function useAppState(): Ctx {
  const ctx = useContext(AppStateContext);
  if (!ctx) throw new Error("useAppState must be used inside AppStateProvider");
  return ctx;
}
