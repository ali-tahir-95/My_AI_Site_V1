"use client";

interface NeonFlourishProps {
  flipped?: boolean;
}

export default function NeonFlourish({ flipped = false }: NeonFlourishProps) {
  return (
    <div className={`flourish ${flipped ? "flipped" : ""}`}>
      <svg viewBox="0 0 800 200" preserveAspectRatio="none">

        {/* Thin Main Line */}
        <path
          d="
            M0 120
            C200 60, 400 160, 800 100
          "
          className="neon-line"
        />

      </svg>

      <style jsx>{`
        .flourish {
          width: 100%;
        }

        svg {
          width: 100%;
          height: 90px;
        }

        .flipped {
          transform: scaleX(-1);
        }

        .neon-line {
          fill: none;
          stroke-width: 3.5; /* VERY THIN */
          stroke-linecap: round;
          stroke-linejoin: round;
          animation: flourishColorShift 1.2s linear infinite,
                     flourishGlowPulse 0.6s ease-in-out infinite;
        }

        @keyframes flourishColorShift {
          0% {
            stroke: #7d4eff;
            filter: drop-shadow(0 0 3px #7d4eff)
                    drop-shadow(0 0 8px #7d4eff);
          }
          33% {
            stroke: #ce49b4;
            filter: drop-shadow(0 0 3px #ce49b4)
                    drop-shadow(0 0 8px #ce49b4);
          }
          66% {
            stroke: #954dea;
            filter: drop-shadow(0 0 3px #954dea)
                    drop-shadow(0 0 8px #954dea);
          }
          100% {
            stroke: #7d4eff;
            filter: drop-shadow(0 0 3px #7d4eff)
                    drop-shadow(0 0 8px #7d4eff);
          }
        }

        @keyframes flourishGlowPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.9; }
        }
      `}</style>
    </div>
  );
}
