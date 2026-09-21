import { hardware } from "@/data/hardware";
import { HardwareMarker } from "@/components/HardwareMarker";
import { useAppState } from "@/lib/app-state";

/**
 * Stylized 2D CSS solar system.
 * TODO(3d): optional upgrade — replace this with a Three.js 3D solar system.
 */
const planets = [
  { name: "Mercury", size: 8, orbit: 9, speed: 16, color: "oklch(0.7 0.03 60)" },
  { name: "Venus", size: 12, orbit: 13, speed: 24, color: "oklch(0.82 0.09 80)" },
  { name: "Earth", size: 13, orbit: 17, speed: 34, color: "oklch(0.66 0.13 240)" },
  { name: "Mars", size: 11, orbit: 21, speed: 46, color: "oklch(0.62 0.16 35)" },
  { name: "Jupiter", size: 22, orbit: 28, speed: 62, color: "oklch(0.74 0.09 60)" },
  { name: "Saturn", size: 19, orbit: 34, speed: 80, color: "oklch(0.83 0.1 90)" },
  { name: "Uranus", size: 15, orbit: 40, speed: 96, color: "oklch(0.75 0.09 200)" },
  { name: "Neptune", size: 15, orbit: 46, speed: 112, color: "oklch(0.64 0.12 250)" },
];

export function SolarSystemMap() {
  const { visited } = useAppState();

  return (
    <div className="relative mx-auto aspect-square w-full max-w-3xl">
      {/* Orbits + planets */}
      <div className="absolute inset-0">
        {planets.map((p) => (
          <div
            key={p.name}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-border/50"
            style={{
              width: `${p.orbit * 2}%`,
              height: `${p.orbit * 2}%`,
              animation: `orbit-spin ${p.speed}s linear infinite`,
            }}
          >
            <span
              className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                width: `${p.size}px`,
                height: `${p.size}px`,
                backgroundColor: p.color,
                boxShadow: `0 0 12px ${p.color}`,
              }}
              title={p.name}
            />
          </div>
        ))}

        {/* Sun */}
        <div
          className="absolute left-1/2 top-1/2 size-[9%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold"
          style={{ boxShadow: "0 0 60px oklch(0.85 0.14 86 / 0.7)" }}
        />
      </div>

      {/* Hardware markers */}
      <div className="absolute inset-0">
        {hardware.map((item, i) => (
          <HardwareMarker
            key={item.id}
            item={item}
            index={i}
            visited={visited.includes(item.id)}
          />
        ))}
      </div>
    </div>
  );
}
