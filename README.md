# Still Listening: Space Echoes

Build a React + TypeScript + Tailwind web app called "Still Listening" — an interactive storytelling experience about NASA's abandoned/active spacecraft hardware on the Moon, Mars, and deep space, made for school-age kids (NASA Space Apps Challenge submission).

## Concept

The app answers: "Are these old machines really silent, or is something still out there listening?" Mix dead hardware (pure history) with still-active spacecraft (Voyager 1 & 2) to create both an emotional and a "wow, it's real" tech moment.

## Characters

- Astronaut Mentor: warm, wise, guide character (illustrated avatar, speech-bubble style dialogue)

- Kid Explorer: the player's in-story avatar, curious, asks simple questions

- Use a friendly comic/storybook illustration style, soft space color palette (deep navy, gold accents, soft purples)

## Pages / Sections

1. Landing page: title "Still Listening", tagline "The machines we left behind are still talking. Are you listening?", big "Start the Journey" button, animated starfield background

2. Solar System Map (main hub): a stylized 2D/CSS-animated solar system (sun + planets in orbit), with 8 clickable hardware markers placed near their real location:

   - Apollo Lunar Module debris (Moon)

   - Viking 1 Lander (Mars)

   - Viking 2 Lander (Mars)

   - Opportunity Rover (Mars, dead 2018)

   - Spirit Rover (Mars, dead 2010)

   - Cassini (deliberately destroyed in Saturn's atmosphere, 2017)

   - Voyager 1 (STILL ACTIVE, deep space, farthest human object)

   - Voyager 2 (STILL ACTIVE, deep space)

3. Hardware Detail Page (opens when marker clicked): 

   - Astronaut + Kid dialogue panel telling that hardware's story (mission, launch year, what it discovered, current status)

   - A real NASA archival image (use placeholder image URLs for now, labeled clearly to swap later)

   - Status badge: "🟢 Still Active" (green, pulsing) for Voyager 1/2, or "🔴 Last Contact: [year]" (muted) for dead hardware

   - For Voyager 1 & 2 ONLY: a mock "Live Signal" widget showing: distance from Earth, signal delay in hours (use static realistic placeholder numbers like "24.3 light-hours", label it clearly as "[DEMO DATA — will connect to live NASA DSN feed]")

   - A short 3-question quiz at the bottom, correct answers reveal a fun fact card

4. Golden Record Mini-Game (only on Voyager 1 & 2 pages): a simple interactive grid where the kid picks 5 sounds/images (out of ~12 options) to "build their own golden record" — shows a fun summary at the end ("You chose: whale song, a child's laughter, Beethoven...")

5. Progress/Badges page: shows which hardware chapters have been visited, unlocks a "Space Explorer Certificate" (downloadable/shareable image) once all are visited

6. Ask the Astronaut (chatbot UI): a chat interface where the kid can type a question; for now, hardcode 5-6 realistic Q&A pairs (e.g. "How far is Voyager 1?", "Why did Cassini crash into Saturn?") that trigger canned astronaut-voice answers — build it so an API call can be swapped in later

7. Language toggle: English / Bangla switch in the header (start with English strings only, structure text so it's easy to add a Bangla translation object later)

## Design requirements

- Mobile responsive

- Smooth page transitions (Framer Motion)

- Sound toggle icon in header (even if no audio wired yet, keep the UI control)

- Clean component structure: /components/AstronautDialogue, /components/HardwareMarker, /components/StatusBadge, /components/GoldenRecordGame, /components/QuizCard, /components/Chatbot, /components/BadgeSystem

- Store all hardware data (facts, images, dialogue, quiz questions) in a single structured /data/hardware.ts file so it's easy to edit and later connect to a real API

## Explicitly mark as TODO in code comments (for later upgrade):

- Replace mock Voyager live-signal numbers with real JPL Horizons API + DSN Now feed data

- Replace hardcoded chatbot answers with a real LLM API call (fact-grounded)

- Add Three.js 3D solar system as an optional upgrade to the current 2D map

- Add real Bangla translations

- Add text-to-speech narration

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://space-whispers-chronicles.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/e1b7c1b3-a5c8-4583-b0e2-b1083a7e2f89).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
