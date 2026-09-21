import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { Send } from "lucide-react";
import astronautImg from "@/assets/astronaut.png";
import { answerQuestion, astronautQA } from "@/data/hardware";
import { useLang } from "@/lib/i18n";

interface Msg {
  from: "kid" | "astronaut";
  text: string;
}

/**
 * "Ask the Astronaut" chat.
 * TODO(llm): replace `answerQuestion` with a fact-grounded LLM API call from a
 * server function. The UI already treats answering as async-friendly.
 */
export function Chatbot() {
  const { t } = useLang();
  const [messages, setMessages] = useState<Msg[]>([
    {
      from: "astronaut",
      text: "Hi explorer! Ask me anything about the machines we left out there. Tap a suggestion or type your own question.",
    },
  ]);
  const [input, setInput] = useState("");

  const ask = (question: string) => {
    const q = question.trim();
    if (!q) return;
    setInput("");
    setMessages((m) => [...m, { from: "kid", text: q }]);
    // TODO(llm): await a real API answer here instead of the canned lookup.
    setTimeout(() => {
      setMessages((m) => [...m, { from: "astronaut", text: answerQuestion(q) }]);
    }, 450);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    ask(input);
  };

  return (
    <div className="panel flex h-[70vh] min-h-[420px] flex-col overflow-hidden">
      <div className="flex-1 space-y-4 overflow-y-auto p-4">
        {messages.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex items-end gap-2 ${m.from === "kid" ? "flex-row-reverse" : ""}`}
          >
            {m.from === "astronaut" && (
              <img
                src={astronautImg}
                alt="Astronaut"
                loading="lazy"
                width={816}
                height={816}
                className="size-9 shrink-0 rounded-full border border-gold/50 object-cover object-top"
              />
            )}
            <div
              className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                m.from === "kid"
                  ? "bg-primary text-primary-foreground"
                  : "border border-gold/25 bg-card text-card-foreground"
              }`}
            >
              {m.text}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="border-t border-border p-3">
        <div className="mb-3 flex flex-wrap gap-2">
          {astronautQA.slice(0, 4).map((qa) => (
            <button
              key={qa.question}
              type="button"
              onClick={() => ask(qa.question)}
              className="rounded-full border border-nebula/50 bg-secondary/60 px-3 py-1 text-xs font-semibold text-secondary-foreground hover:bg-secondary"
            >
              {qa.question}
            </button>
          ))}
        </div>

        <form onSubmit={onSubmit} className="flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={t.askPlaceholder}
            className="min-w-0 flex-1 rounded-full border border-border bg-input px-4 py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-gold"
          />
          <button
            type="submit"
            aria-label={t.send}
            className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
          >
            <Send className="size-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
