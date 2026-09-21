/**
 * ALL story content lives here so it is easy to edit — and easy to replace
 * with a real API later.
 *
 * TODO(api): swap this static file for a fetch from a NASA-backed content API.
 * TODO(images): every `imageUrl` below is a clearly-labelled PLACEHOLDER.
 *   Replace with real NASA archival imagery (images.nasa.gov) before launch.
 * TODO(bangla): every string here needs a `bn` translation (see src/lib/i18n.tsx).
 */

export type Speaker = "astronaut" | "kid";

export interface DialogueLine {
  speaker: Speaker;
  text: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  answerIndex: number;
  funFact: string;
}

export interface LiveSignal {
  /** DEMO DATA — static placeholders. */
  distanceFromEarth: string;
  signalDelay: string;
  speed: string;
}

export interface Hardware {
  id: string;
  name: string;
  place: string;
  /** Where the marker sits on the solar-system map, in % of the map box. */
  marker: { x: number; y: number };
  launchYear: number;
  isActive: boolean;
  lastContactYear?: number;
  tagline: string;
  mission: string;
  discovered: string[];
  currentStatus: string;
  /** PLACEHOLDER IMAGE — swap for real NASA archival photo. */
  imageUrl: string;
  imageCaption: string;
  dialogue: DialogueLine[];
  quiz: QuizQuestion[];
  /** Only Voyager 1 & 2 have these. */
  liveSignal?: LiveSignal;
  hasGoldenRecord?: boolean;
}

/** PLACEHOLDER art — labelled in the UI, replace with NASA archive images. */
const placeholder = (seed: string) =>
  `https://picsum.photos/seed/${seed}/800/500`;

export const hardware: Hardware[] = [
  {
    id: "apollo-lunar-module",
    name: "Apollo Lunar Module Debris",
    place: "The Moon",
    marker: { x: 62, y: 28 },
    launchYear: 1969,
    isActive: false,
    lastContactYear: 1972,
    tagline: "The first footprints came with leftovers.",
    mission:
      "Apollo astronauts flew down to the Moon in a two-part spider-shaped ship called the Lunar Module. Only the top half flew home — the legs, the landing stages and lots of tools were left behind on purpose to save weight.",
    discovered: [
      "Humans can land, walk, work and take off again from another world.",
      "Moon dust is sharp, sticky and smells like burnt gunpowder.",
      "Moonquakes are real — seismometers left behind kept recording them.",
    ],
    currentStatus:
      "Still sitting exactly where it was parked. With no wind and no rain, the footprints and the hardware barely change.",
    imageUrl: placeholder("apollo-lunar-module"),
    imageCaption: "PLACEHOLDER IMAGE — replace with NASA Apollo archival photo.",
    dialogue: [
      { speaker: "kid", text: "Wait… we left junk on the Moon?" },
      {
        speaker: "astronaut",
        text: "Not junk — luggage we couldn't carry home. Every kilogram we dropped was fuel we got to keep.",
      },
      { speaker: "kid", text: "Is it still there?" },
      {
        speaker: "astronaut",
        text: "All of it. No wind, no rain, no rust. The Moon is the best museum in the solar system.",
      },
    ],
    quiz: [
      {
        question: "Why did astronauts leave parts of the Lunar Module behind?",
        options: ["They forgot", "To save weight for the trip home", "It was broken"],
        answerIndex: 1,
        funFact:
          "Every extra kilogram lifted off the Moon needed extra fuel — so the descent stage stayed forever.",
      },
      {
        question: "What happens to footprints on the Moon?",
        options: ["Wind erases them", "Rain washes them", "They stay for a very long time"],
        answerIndex: 2,
        funFact: "With almost no atmosphere, Apollo footprints may last millions of years.",
      },
      {
        question: "What did the instruments left behind keep detecting?",
        options: ["Moonquakes", "Moon rain", "Moon birds"],
        answerIndex: 0,
        funFact: "Apollo seismometers recorded thousands of moonquakes before being switched off in 1977.",
      },
    ],
  },
  {
    id: "viking-1",
    name: "Viking 1 Lander",
    place: "Mars — Chryse Planitia",
    marker: { x: 31, y: 59 },
    launchYear: 1975,
    isActive: false,
    lastContactYear: 1982,
    tagline: "The first robot to survive Mars.",
    mission:
      "Viking 1 touched down in 1976 and became the first spacecraft to land on Mars and keep working. It photographed the surface and scooped soil to test it for signs of life.",
    discovered: [
      "The first clear photos ever taken from the surface of Mars.",
      "Martian soil is full of iron — that's why the planet looks red.",
      "Mars weather reports: freezing, dusty, and very thin air.",
    ],
    currentStatus:
      "A wrong command in 1982 accidentally shut down its antenna. Nobody ever heard from it again.",
    imageUrl: placeholder("viking-1"),
    imageCaption: "PLACEHOLDER IMAGE — replace with NASA Viking 1 archival photo.",
    dialogue: [
      { speaker: "kid", text: "It stopped because of a typo?!" },
      {
        speaker: "astronaut",
        text: "Almost. A software update moved its antenna the wrong way. Six years of work, ended by one bad line of code.",
      },
      { speaker: "kid", text: "That's kind of sad." },
      {
        speaker: "astronaut",
        text: "It is. But it taught every engineer after us to test twice and send once.",
      },
    ],
    quiz: [
      {
        question: "What was Viking 1 the first to do?",
        options: [
          "Land on Mars and keep working",
          "Fly past Jupiter",
          "Land on the Moon",
        ],
        answerIndex: 0,
        funFact: "Viking 1 worked on Mars for over 6 years — far longer than its 90-day plan.",
      },
      {
        question: "Why does Mars look red?",
        options: ["Red rocks are painted", "Iron in the soil has rusted", "It is very hot"],
        answerIndex: 1,
        funFact: "Mars is basically a rusty planet — iron oxide dust covers nearly everything.",
      },
      {
        question: "How did contact with Viking 1 end?",
        options: ["A bad command moved its antenna", "A meteor hit it", "It ran out of film"],
        answerIndex: 0,
        funFact: "The signal was lost on 13 November 1982 and never recovered.",
      },
    ],
  },
  {
    id: "viking-2",
    name: "Viking 2 Lander",
    place: "Mars — Utopia Planitia",
    marker: { x: 41, y: 69 },
    launchYear: 1975,
    isActive: false,
    lastContactYear: 1980,
    tagline: "It watched frost creep across Mars.",
    mission:
      "Viking 2 landed further north than Viking 1 in 1976. From there it saw something nobody expected: a thin coat of water frost on the ground in winter.",
    discovered: [
      "Water frost forms on the Martian surface in winter.",
      "Marsquakes and dust storms were measured up close.",
      "Soil chemistry results that scientists still argue about today.",
    ],
    currentStatus: "Its batteries failed in 1980 and the lander went quiet.",
    imageUrl: placeholder("viking-2"),
    imageCaption: "PLACEHOLDER IMAGE — replace with NASA Viking 2 archival photo.",
    dialogue: [
      { speaker: "kid", text: "Frost? On Mars? Like on my window?" },
      {
        speaker: "astronaut",
        text: "Exactly like that — a thin white blanket, photographed by a robot that had no idea how beautiful it was.",
      },
      { speaker: "kid", text: "Did anyone see it live?" },
      {
        speaker: "astronaut",
        text: "Scientists on Earth, days later. Space photos always arrive a little late.",
      },
    ],
    quiz: [
      {
        question: "What surprising thing did Viking 2 photograph?",
        options: ["Water frost on the ground", "A river", "Green plants"],
        answerIndex: 0,
        funFact: "The frost was thinner than a human hair — but it proved water exists at the surface.",
      },
      {
        question: "Why did Viking 2 stop working?",
        options: ["Battery failure", "It flew away", "Dust storm blew it over"],
        answerIndex: 0,
        funFact: "Its batteries died in April 1980 after nearly four years of science.",
      },
      {
        question: "Where did Viking 2 land?",
        options: ["Utopia Planitia", "Olympus Mons", "Valles Marineris"],
        answerIndex: 0,
        funFact: "Utopia Planitia is a huge, flat northern plain — a safe place for a first-generation lander.",
      },
    ],
  },
  {
    id: "opportunity",
    name: "Opportunity Rover",
    place: "Mars — Meridiani Planum",
    marker: { x: 32, y: 39.5 },
    launchYear: 2003,
    isActive: false,
    lastContactYear: 2018,
    tagline: "Planned for 90 days. Drove for 15 years.",
    mission:
      "Opportunity was a golf-cart-sized rover sent to look for signs that Mars was once wet. It drove more than 45 kilometres — a marathon on another planet.",
    discovered: [
      "Rocks that only form in liquid water: Mars used to be wet.",
      "Tiny mineral spheres nicknamed 'blueberries'.",
      "The first meteorite ever identified on another planet.",
    ],
    currentStatus:
      "A planet-wide dust storm blocked its solar panels in June 2018. Its last message home is often summed up as: 'My battery is low and it's getting dark.'",
    imageUrl: placeholder("opportunity-rover"),
    imageCaption: "PLACEHOLDER IMAGE — replace with NASA Opportunity archival photo.",
    dialogue: [
      { speaker: "kid", text: "Fifteen years? That's older than me!" },
      {
        speaker: "astronaut",
        text: "It was built for three months. Engineers kept nursing it along, one sunrise at a time.",
      },
      { speaker: "kid", text: "What happened at the end?" },
      {
        speaker: "astronaut",
        text: "A dust storm swallowed the sky. No sunlight, no power. We called out for eight months. Nothing came back.",
      },
    ],
    quiz: [
      {
        question: "How long was Opportunity designed to last?",
        options: ["About 90 days", "15 years", "Forever"],
        answerIndex: 0,
        funFact: "It outlived its mission plan roughly 60 times over.",
      },
      {
        question: "What ended the mission?",
        options: ["A giant dust storm", "A crash", "A wrong turn"],
        answerIndex: 0,
        funFact: "The 2018 storm covered the whole planet and blocked the sunlight its panels needed.",
      },
      {
        question: "What big thing did Opportunity prove about Mars?",
        options: ["It had liquid water long ago", "It has oceans now", "It has trees"],
        answerIndex: 0,
        funFact: "Minerals like hematite 'blueberries' only form with water around.",
      },
    ],
  },
  {
    id: "spirit",
    name: "Spirit Rover",
    place: "Mars — Gusev Crater",
    marker: { x: 41, y: 31 },
    launchYear: 2003,
    isActive: false,
    lastContactYear: 2010,
    tagline: "Opportunity's twin, stuck in soft sand.",
    mission:
      "Spirit landed three weeks before its twin Opportunity, on the other side of Mars. It climbed hills, dragged a broken wheel, and kept doing science anyway.",
    discovered: [
      "Evidence of ancient hot springs and volcanic activity.",
      "Pure silica deposits — a clue to past habitable water.",
      "Proof that a rover can work with a broken wheel for years.",
    ],
    currentStatus:
      "It got trapped in soft soil in 2009, couldn't tilt its panels toward the winter Sun, and sent its last signal in March 2010.",
    imageUrl: placeholder("spirit-rover"),
    imageCaption: "PLACEHOLDER IMAGE — replace with NASA Spirit archival photo.",
    dialogue: [
      { speaker: "kid", text: "It drove with a broken wheel?" },
      {
        speaker: "astronaut",
        text: "Dragged it like a limp. And that dragging scraped open the soil — which is how it found bright silica underneath.",
      },
      { speaker: "kid", text: "So the broken wheel helped?" },
      {
        speaker: "astronaut",
        text: "Space is like that. Sometimes the failure is the discovery.",
      },
    ],
    quiz: [
      {
        question: "What did Spirit's dragging wheel accidentally reveal?",
        options: ["Bright silica soil", "A tunnel", "Ice cubes"],
        answerIndex: 0,
        funFact: "The scraped trench exposed silica that hinted at ancient hot water.",
      },
      {
        question: "Why couldn't Spirit survive Martian winter?",
        options: [
          "It was stuck and couldn't tilt toward the Sun",
          "It froze in rain",
          "It fell in a crater",
        ],
        answerIndex: 0,
        funFact: "Solar rovers must lean toward the winter Sun to stay warm enough to live.",
      },
      {
        question: "Who was Spirit's twin?",
        options: ["Opportunity", "Curiosity", "Viking 1"],
        answerIndex: 0,
        funFact: "Both rovers launched in 2003 and landed in January 2004.",
      },
    ],
  },
  {
    id: "cassini",
    name: "Cassini",
    place: "Saturn",
    marker: { x: 67, y: 79 },
    launchYear: 1997,
    isActive: false,
    lastContactYear: 2017,
    tagline: "It chose to burn up — to protect life it might find.",
    mission:
      "Cassini orbited Saturn for 13 years, flew through the rings, and dropped the Huygens probe onto the moon Titan.",
    discovered: [
      "Lakes of liquid methane on Titan.",
      "Giant water jets erupting from the moon Enceladus.",
      "New moons, and the true structure of Saturn's rings.",
    ],
    currentStatus:
      "Low on fuel, engineers deliberately flew it into Saturn's atmosphere on 15 September 2017 so it could never crash into — and contaminate — an ocean moon.",
    imageUrl: placeholder("cassini-saturn"),
    imageCaption: "PLACEHOLDER IMAGE — replace with NASA Cassini archival photo.",
    dialogue: [
      { speaker: "kid", text: "You crashed it on purpose? That's mean!" },
      {
        speaker: "astronaut",
        text: "It was the kindest option. Enceladus may hide an ocean with life. A dead spacecraft carrying Earth germs could ruin it forever.",
      },
      { speaker: "kid", text: "So it protected aliens it never met." },
      {
        speaker: "astronaut",
        text: "It sent data the whole way down. Talking until the very last second.",
      },
    ],
    quiz: [
      {
        question: "Why was Cassini flown into Saturn on purpose?",
        options: [
          "To avoid contaminating moons that might host life",
          "It was out of control",
          "For a pretty photo",
        ],
        answerIndex: 0,
        funFact: "This is called planetary protection — keeping other worlds clean of Earth life.",
      },
      {
        question: "Which Saturn moon shoots water jets into space?",
        options: ["Enceladus", "Titan", "Phobos"],
        answerIndex: 0,
        funFact: "Cassini flew straight through the plumes and tasted salty water and organic molecules.",
      },
      {
        question: "What is on the surface of Titan?",
        options: ["Lakes of liquid methane", "Forests", "Lava oceans"],
        answerIndex: 0,
        funFact: "Titan has rain, rivers and lakes — just made of methane instead of water.",
      },
    ],
  },
  {
    id: "voyager-1",
    name: "Voyager 1",
    place: "Interstellar space",
    marker: { x: 88, y: 18 },
    launchYear: 1977,
    isActive: true,
    tagline: "The farthest human-made object. Still talking.",
    mission:
      "Voyager 1 toured Jupiter and Saturn, then kept going. In 2012 it crossed out of the Sun's bubble and into interstellar space — the first machine to leave.",
    discovered: [
      "Volcanoes erupting on Jupiter's moon Io.",
      "Details of Saturn's rings and its moon Titan.",
      "The 'Pale Blue Dot' photo of Earth from 6 billion km away.",
      "What it sounds like outside the Sun's bubble.",
    ],
    currentStatus:
      "STILL ACTIVE. Its nuclear battery is fading, instruments are being switched off one by one, but it answers when we call.",
    imageUrl: placeholder("voyager-1"),
    imageCaption: "PLACEHOLDER IMAGE — replace with NASA Voyager archival photo.",
    dialogue: [
      { speaker: "kid", text: "Hold on. That one is still ON?" },
      {
        speaker: "astronaut",
        text: "Right now. Older than your parents, further than anything we've ever built, and it still answers the radio.",
      },
      { speaker: "kid", text: "Can I say hi?" },
      {
        speaker: "astronaut",
        text: "You could — but you'd wait most of a day for the answer. Its whisper is fainter than a fridge light bulb.",
      },
    ],
    liveSignal: {
      // TODO(live-data): replace with real JPL Horizons distance + DSN Now signal feed.
      distanceFromEarth: "24.9 billion km (~166 AU)",
      signalDelay: "23.1 light-hours (one way)",
      speed: "~61,000 km/h away from the Sun",
    },
    hasGoldenRecord: true,
    quiz: [
      {
        question: "What makes Voyager 1 special?",
        options: [
          "It is the farthest human-made object",
          "It landed on Mars",
          "It carries astronauts",
        ],
        answerIndex: 0,
        funFact: "It left the Sun's protective bubble in 2012 and is now in interstellar space.",
      },
      {
        question: "How long does its radio signal take to reach Earth?",
        options: ["A few seconds", "About a day", "A hundred years"],
        answerIndex: 1,
        funFact: "Roughly 23 hours each way — a conversation would take two days.",
      },
      {
        question: "What is the Golden Record?",
        options: [
          "Sounds and pictures of Earth bolted to the spacecraft",
          "A music award",
          "A map of Mars",
        ],
        answerIndex: 0,
        funFact: "It holds greetings in 55 languages, whale song, thunder, and Beethoven.",
      },
    ],
  },
  {
    id: "voyager-2",
    name: "Voyager 2",
    place: "Interstellar space",
    marker: { x: 86, y: 84 },
    launchYear: 1977,
    isActive: true,
    tagline: "The only ship to visit all four giant planets.",
    mission:
      "Voyager 2 launched 16 days before Voyager 1 and took the slow, grand tour: Jupiter, Saturn, Uranus and Neptune. It is still the only spacecraft to see the last two.",
    discovered: [
      "Uranus is tipped on its side and has a lopsided magnetic field.",
      "Neptune has supersonic winds and a moon with ice geysers (Triton).",
      "Dozens of new moons and rings across the outer solar system.",
    ],
    currentStatus:
      "STILL ACTIVE. It entered interstellar space in 2018 and keeps sending science data home every day.",
    imageUrl: placeholder("voyager-2"),
    imageCaption: "PLACEHOLDER IMAGE — replace with NASA Voyager archival photo.",
    dialogue: [
      { speaker: "kid", text: "It visited FOUR planets?" },
      {
        speaker: "astronaut",
        text: "A once-in-176-years alignment let it hop from one to the next, using each planet's gravity as a slingshot.",
      },
      { speaker: "kid", text: "And it's still awake too?" },
      {
        speaker: "astronaut",
        text: "Still awake. Two old twins, in opposite directions, both still listening for us.",
      },
    ],
    liveSignal: {
      // TODO(live-data): replace with real JPL Horizons distance + DSN Now signal feed.
      distanceFromEarth: "20.8 billion km (~139 AU)",
      signalDelay: "19.3 light-hours (one way)",
      speed: "~55,000 km/h away from the Sun",
    },
    hasGoldenRecord: true,
    quiz: [
      {
        question: "Which planets has ONLY Voyager 2 visited up close?",
        options: ["Uranus and Neptune", "Mars and Venus", "Mercury and Pluto"],
        answerIndex: 0,
        funFact: "No other spacecraft has flown past Uranus or Neptune — still true today.",
      },
      {
        question: "How did Voyager 2 speed up between planets?",
        options: [
          "Gravity assists — planetary slingshots",
          "Giant rockets",
          "Solar sails",
        ],
        answerIndex: 0,
        funFact: "Each flyby stole a little energy from the planet's motion to fling the probe onward.",
      },
      {
        question: "When did Voyager 2 reach interstellar space?",
        options: ["2018", "1989", "2030"],
        answerIndex: 0,
        funFact: "It crossed the heliopause in November 2018, six years after its twin.",
      },
    ],
  },
];

export const getHardware = (id: string) => hardware.find((h) => h.id === id);

/** Golden Record mini-game choices. */
export interface RecordItem {
  id: string;
  emoji: string;
  label: string;
  kind: "sound" | "image";
}

export const goldenRecordItems: RecordItem[] = [
  { id: "whale", emoji: "🐋", label: "Whale song", kind: "sound" },
  { id: "laughter", emoji: "👶", label: "A child's laughter", kind: "sound" },
  { id: "beethoven", emoji: "🎼", label: "Beethoven", kind: "sound" },
  { id: "thunder", emoji: "⛈️", label: "Thunder and rain", kind: "sound" },
  { id: "heartbeat", emoji: "💓", label: "A human heartbeat", kind: "sound" },
  { id: "greeting", emoji: "👋", label: "Hello in 55 languages", kind: "sound" },
  { id: "birds", emoji: "🐦", label: "Birdsong at sunrise", kind: "sound" },
  { id: "train", emoji: "🚂", label: "A steam train", kind: "sound" },
  { id: "dna", emoji: "🧬", label: "Diagram of DNA", kind: "image" },
  { id: "earth", emoji: "🌍", label: "Earth from space", kind: "image" },
  { id: "family", emoji: "👨‍👩‍👧", label: "A family portrait", kind: "image" },
  { id: "math", emoji: "➗", label: "Simple mathematics", kind: "image" },
];

/**
 * Canned "Ask the Astronaut" answers.
 * TODO(llm): replace `answerQuestion` with a fact-grounded LLM API call
 * (keep the same function signature so the UI does not change).
 */
export interface QAPair {
  keywords: string[];
  question: string;
  answer: string;
}

export const astronautQA: QAPair[] = [
  {
    keywords: ["how far", "voyager 1", "distance"],
    question: "How far is Voyager 1?",
    answer:
      "About 24.9 billion kilometres away — roughly 166 times the distance from Earth to the Sun. Its radio whisper takes around 23 hours to reach us. [DEMO DATA]",
  },
  {
    keywords: ["cassini", "saturn", "crash", "burn"],
    question: "Why did Cassini crash into Saturn?",
    answer:
      "It was running out of fuel. Rather than risk it drifting into the ocean moon Enceladus and carrying Earth germs there, we flew it into Saturn on purpose. It sent data all the way down.",
  },
  {
    keywords: ["opportunity", "battery", "dust storm", "dark"],
    question: "What happened to Opportunity?",
    answer:
      "A dust storm covered all of Mars in 2018 and blocked the sunlight it needed. Its final message is remembered as: 'My battery is low and it's getting dark.' We listened for eight months.",
  },
  {
    keywords: ["golden record", "record", "music", "aliens"],
    question: "What is the Golden Record?",
    answer:
      "A gold-plated disc bolted to both Voyagers, with greetings in 55 languages, whale song, thunder, heartbeats and music from around the world — a little postcard from Earth.",
  },
  {
    keywords: ["still active", "alive", "working", "listening", "on"],
    question: "Is anything still working out there?",
    answer:
      "Yes! Voyager 1 and Voyager 2 launched in 1977 and are still sending data from interstellar space. Their nuclear batteries are fading, so we switch off instruments to keep them talking longer.",
  },
  {
    keywords: ["moon", "footprints", "apollo", "junk"],
    question: "Is Apollo hardware still on the Moon?",
    answer:
      "All of it. Landing stages, rovers, tools and footprints. With no wind or rain, the Moon keeps everything almost exactly as we left it.",
  },
  {
    keywords: ["mars", "viking", "life"],
    question: "Did we find life on Mars?",
    answer:
      "Not yet. The Viking landers tested Martian soil in 1976 and got confusing results that scientists still debate. What we did find is strong proof that Mars once had liquid water.",
  },
];

export function answerQuestion(input: string): string {
  const text = input.toLowerCase();
  const hit = astronautQA.find((qa) => qa.keywords.some((k) => text.includes(k)));
  if (hit) return hit.answer;
  return "That's a great question, explorer. I don't have that one in my flight manual yet — try asking me about Voyager, Cassini, the rovers, or the Golden Record.";
}
