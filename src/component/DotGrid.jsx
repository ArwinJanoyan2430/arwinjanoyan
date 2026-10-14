
import { useEffect, useState } from "react";

const systemShapes = [
  { type: "square", x: "12%", y: "18%", size: 46, speed: 0.18, rotate: 45 },
  { type: "circle", x: "82%", y: "14%", size: 20, speed: -0.12, rotate: 0 },
  { type: "cross", x: "72%", y: "32%", size: 32, speed: 0.24, rotate: 0 },
  { type: "square", x: "88%", y: "48%", size: 34, speed: -0.16, rotate: 15 },
  { type: "circle", x: "18%", y: "58%", size: 26, speed: 0.14, rotate: 0 },
  { type: "diamond", x: "62%", y: "68%", size: 36, speed: -0.2, rotate: 0 },
  { type: "cross", x: "32%", y: "82%", size: 28, speed: 0.16, rotate: 0 },
  { type: "square", x: "80%", y: "82%", size: 40, speed: -0.13, rotate: 30 },
  { type: "circle", x: "46%", y: "42%", size: 14, speed: 0.2, rotate: 0 },
  { type: "diamond", x: "8%", y: "38%", size: 24, speed: -0.15, rotate: 0 },
];

const binaryStreams = [
  { x: "5%", y: "12%", speed: 0.12 },
  { x: "24%", y: "38%", speed: -0.16 },
  { x: "43%", y: "18%", speed: 0.1 },
  { x: "66%", y: "60%", speed: -0.14 },
  { x: "84%", y: "22%", speed: 0.18 },
  { x: "94%", y: "68%", speed: -0.11 },
];

function generateBinary(length = 16) {
  return Array.from({ length }, () =>
    Math.random() > 0.5 ? "1" : "0"
  ).join("\n");
}

function SystemShape({ shape, scrollY, index }) {
  const duration = 3000 + (index % 4) * 700;
  const amplitude = 24 + (index % 3) * 10;
  const phase = index * 0.9;

  const floatStyle = {
    "--float-distance": `${amplitude}px`,
    "--float-duration": `${duration}ms`,
    "--float-delay": `${-(index * 0.35)}s`,
  };

  const movement = scrollY * shape.speed;

  return (
    <div
      className="absolute text-zinc-200 dark:text-zinc-300/60"
      style={{
        left: shape.x,
        top: shape.y,
        transform: `translate3d(0, ${movement}px, 0)`,
        willChange: "transform",
      }}
    >
      <div
        className="dotgrid-float"
        style={{
          ...floatStyle,
          transform: `rotate(${shape.rotate + phase * 10}deg)`,
          filter: "drop-shadow(0 0 5px currentColor)",
        }}
      >
        {shape.type === "square" && (
          <div
            className="border-2 border-current"
            style={{ width: shape.size, height: shape.size }}
          >
            <div className="m-2 h-2 w-2 bg-current" />
          </div>
        )}

        {shape.type === "circle" && (
          <div
            className="rounded-full border-2 border-current"
            style={{ width: shape.size, height: shape.size }}
          />
        )}

        {shape.type === "diamond" && (
          <div
            className="rotate-45 border-2 border-current"
            style={{ width: shape.size, height: shape.size }}
          />
        )}

        {shape.type === "cross" && (
          <svg
            width={shape.size}
            height={shape.size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <path d="M12 2V22M2 12H22" />
            <circle cx="12" cy="12" r="4" />
          </svg>
        )}
      </div>
    </div>
  );
}

function BinaryStream({ stream, scrollY, index }) {
  const [code, setCode] = useState(() => generateBinary());

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCode(generateBinary());
    }, 1400);

    return () => window.clearInterval(interval);
  }, []);

  const movement = scrollY * stream.speed;

  return (
    <div
      className="absolute select-none font-mono text-xs font-semibold
        leading-[1.8] tracking-[0.35em] text-zinc-300 
        dark:text-zinc-300/60"
      style={{
        left: stream.x,
        top: stream.y,
        opacity: 0.75,
        transform: `translate3d(0, ${movement}px, 0)`,
        textShadow: "0 0 8px currentColor",
        willChange: "transform",
      }}
    >
      <div
        className="dotgrid-binary"
        style={{
          animationDuration: `${3.5 + index * 0.4}s`,
          animationDelay: `${-(index * 0.6)}s`,
        }}
      >
        {code.split("\n").map((bit, bitIndex) => (
          <div key={bitIndex}>{bit}</div>
        ))}
      </div>
    </div>
  );
}

function DotGrid() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let frameId = null;

    const handleScroll = () => {
      if (frameId !== null) return;

      frameId = window.requestAnimationFrame(() => {
        setScrollY(window.scrollY);
        frameId = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden
        bg-white transition-colors duration-500 dark:bg-[#070707]"
    >
      {/* Technical grid */}
      <div
  className="absolute inset-0 opacity-100 dark:opacity-30"
  style={{
    backgroundImage: `
      linear-gradient(rgba(0,0,0,0.035) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0,0,0,0.035) 1px, transparent 1px)
    `,
    backgroundSize: "48px 48px",
  }}
>
  <div
    className="absolute inset-0 hidden dark:block"
    style={{
      backgroundImage: `
        linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)
      `,
      backgroundSize: "48px 48px",
    }}
  />
</div>

      {/* Ambient lighting: disabled in light mode */}
      <div
        className="absolute left-1/2 top-[-300px] h-[700px] w-[900px]
          -translate-x-1/2 rounded-full bg-white/0 blur-[140px]
          dark:bg-zinc-400/[0.12]"
      />

      <div
        className="absolute left-[-220px] top-[15%] h-[550px] w-[550px]
          rounded-full bg-white/0 blur-[150px]
          dark:bg-slate-300/[0.07]"
      />

      <div
        className="absolute right-[-220px] top-[40%] h-[600px] w-[600px]
          rounded-full bg-white/0 blur-[160px]
          dark:bg-neutral-400/[0.08]"
      />

      <div
        className="absolute bottom-[-350px] left-[15%] h-[650px] w-[750px]
          rounded-full bg-white/0 blur-[170px]
          dark:bg-gray-300/[0.06]"
      />

      {/* Dotted texture */}
      <div
        className="absolute inset-0 opacity-100 dark:opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(rgba(0,0,0,0.22) 0.6px, transparent 0.6px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Floating geometric shapes */}
      {systemShapes.map((shape, index) => (
        <SystemShape
          key={`${shape.type}-${index}`}
          shape={shape}
          scrollY={scrollY}
          index={index}
        />
      ))}

      {/* Binary streams */}
      {binaryStreams.map((stream, index) => (
        <BinaryStream
          key={`binary-${index}`}
          stream={stream}
          scrollY={scrollY}
          index={index}
        />
      ))}

      {/* Edge shading */}
      <div
        className="absolute inset-0 bg-gradient-to-b
          from-transparent via-transparent to-white/10
          dark:from-black/15 dark:via-transparent dark:to-[#070707]/60"
      />

      {/* Animation styles */}
      <style>{`
        @keyframes dotgrid-float {
          0%, 100% {
            translate: 0 0;
          }
          50% {
            translate: 0 var(--float-distance);
          }
        }

        @keyframes dotgrid-binary {
          0%, 100% {
            translate: 0 0;
          }
          50% {
            translate: 0 -12px;
          }
        }

        .dotgrid-float {
          animation: dotgrid-float var(--float-duration) ease-in-out infinite;
          animation-delay: var(--float-delay);
        }

        .dotgrid-binary {
          animation: dotgrid-binary ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .dotgrid-float,
          .dotgrid-binary {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}

export default DotGrid;
