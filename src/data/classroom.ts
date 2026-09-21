/**
 * Teacher-facing companion content for Classroom Mode.
 *
 * Kept separate from src/data/hardware.ts so the kid-facing story data stays
 * easy to read and edit.
 *
 * TODO(api): serve these notes from the same content API as the hardware data.
 * TODO(bangla): translate bigIdea / prompts / vocabulary for Bangla classrooms.
 */

export interface ClassroomNote {
  /** Matches a Hardware id in src/data/hardware.ts */
  hardwareId: string;
  /** One-line takeaway a teacher can write on the board. */
  bigIdea: string;
  /** Rough time needed for the chapter + discussion, in minutes. */
  minutes: number;
  subjects: string[];
  vocabulary: string[];
  /** Open-ended questions with no single right answer. */
  prompts: string[];
}

export const classroomNotes: ClassroomNote[] = [
  {
    hardwareId: "apollo-lunar-module",
    bigIdea: "Exploring means making hard choices about what to carry and what to leave.",
    minutes: 12,
    subjects: ["History", "Physics"],
    vocabulary: ["lunar module", "payload", "seismometer"],
    prompts: [
      "If you could only take 3 things to the Moon, what would you leave behind and why?",
      "Is leaving hardware on the Moon littering, or is it history? Defend your answer.",
      "The footprints are still there after 50 years. What does that tell us about the Moon?",
    ],
  },
  {
    hardwareId: "viking-1",
    bigIdea: "A result of 'we are not sure' is still a real scientific result.",
    minutes: 12,
    subjects: ["Biology", "Scientific method"],
    vocabulary: ["lander", "experiment", "evidence"],
    prompts: [
      "Viking's life tests gave confusing answers. What should scientists do next?",
      "How would you design a test to check whether soil is alive?",
      "Why send two identical landers instead of one bigger one?",
    ],
  },
  {
    hardwareId: "viking-2",
    bigIdea: "Weather exists on other planets, and patient robots are how we see it.",
    minutes: 10,
    subjects: ["Earth science", "Data"],
    vocabulary: ["frost", "season", "atmosphere"],
    prompts: [
      "Mars has frost and seasons. What else might it share with Earth?",
      "Why is it useful to watch one spot for years instead of flying past once?",
      "What would you measure every single day if you were the lander?",
    ],
  },
  {
    hardwareId: "opportunity",
    bigIdea: "Engineering built to survive 90 days can last 15 years.",
    minutes: 14,
    subjects: ["Engineering", "Geology"],
    vocabulary: ["rover", "mission extension", "dust storm"],
    prompts: [
      "Why do engineers promise less than they hope for?",
      "Opportunity found signs of ancient water. Why does water matter so much?",
      "How should we say goodbye to a robot that worked for 15 years?",
    ],
  },
  {
    hardwareId: "spirit",
    bigIdea: "Failure in one place can still produce discovery from that same place.",
    minutes: 10,
    subjects: ["Engineering", "Resilience"],
    vocabulary: ["traction", "soft soil", "stuck"],
    prompts: [
      "Spirit got stuck and kept doing science. What counts as success here?",
      "What would you redesign about the wheels?",
      "Compare the twins: why did two identical rovers have different fates?",
    ],
  },
  {
    hardwareId: "cassini",
    bigIdea: "Scientists destroyed a working spacecraft to protect possible life.",
    minutes: 15,
    subjects: ["Ethics", "Planetary science"],
    vocabulary: ["planetary protection", "contamination", "grand finale"],
    prompts: [
      "Was destroying Cassini the right call? Argue both sides.",
      "Who gets to decide the rules for protecting another world?",
      "Enceladus may hide an ocean. Should we visit it, or leave it alone?",
    ],
  },
  {
    hardwareId: "voyager-1",
    bigIdea: "Machines from 1977 are still sending data from interstellar space.",
    minutes: 16,
    subjects: ["Physics", "Communication"],
    vocabulary: ["light-hour", "interstellar", "signal delay"],
    prompts: [
      "A message takes many hours each way. How would that change a conversation?",
      "What one sound or picture would you add to the Golden Record?",
      "Voyager will outlive everyone alive. Who is it really talking to?",
    ],
  },
  {
    hardwareId: "voyager-2",
    bigIdea: "One well-aimed flight path can visit four giant planets.",
    minutes: 14,
    subjects: ["Physics", "Maths"],
    vocabulary: ["gravity assist", "trajectory", "flyby"],
    prompts: [
      "How can a planet's gravity speed up a spacecraft for free?",
      "Voyager 2 is still the only visitor to Uranus and Neptune. Should we go back?",
      "What should a 2026 mission carry that 1977 could not?",
    ],
  },
];

export function getClassroomNote(hardwareId: string): ClassroomNote | undefined {
  return classroomNotes.find((n) => n.hardwareId === hardwareId);
}
