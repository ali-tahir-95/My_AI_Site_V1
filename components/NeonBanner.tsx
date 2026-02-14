"use client";
import { useEffect, useState } from "react";

interface NeonBannerProps {
  text?: string[];
  className?: string;
}

export default function NeonBanner({
  text = ["Iconic Artwork", "Never Seen", "Never Heard"],
  className = "",
}: NeonBannerProps) {
  const [flicker, setFlicker] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFlicker(false);
    }, 800);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`neon-container ${className}`}>
      <h2 className={`neon-text ${flicker ? "flicker" : ""}`}>
        {text.map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
      </h2>

      <style jsx>{`
        .neon-container {
          position: relative;
          display: inline-block;
          text-align: center;
          padding: 1.5rem 1rem;
          background: transparent; /* fully transparent */
        }

        .neon-text {
          font-size: clamp(1.6rem, 4vw, 3.4rem);
          font-weight: 400;
          font-family: "Poppins", "Inter", sans-serif;
          letter-spacing: 0.01em;
          line-height: 1.25;
          animation: colorShift 1.72s linear infinite,
                     glowPulse 0.85s ease-in-out infinite;
        }

        @keyframes colorShift {
          0% {
            color: #7d4eff;
            text-shadow:
              0 0 4px #7d4eff,
              0 0 10px #7d4eff,
              0 0 20px #7d4eff;
          }

          33% {
            color: #ce49b4;
            text-shadow:
              0 0 4px #ce49b4,
              0 0 10px #ce49b4,
              0 0 20px #ce49b4;
          }

          66% {
            color: #954dea;
            text-shadow:
              0 0 4px #954dea,
              0 0 10px #954dea,
              0 0 20px #954dea;
          }

          100% {
            color: #7d4eff;
            text-shadow:
              0 0 4px #7d4eff,
              0 0 10px #7d4eff,
              0 0 20px #7d4eff;
          }
        }

        @keyframes glowPulse {
          0%, 100% {
            filter: brightness(1);
          }

          50% {
            filter: brightness(1.3);
          }
        }

        .flicker {
          animation: flicker 0.12s infinite alternate;
        }

        @keyframes flicker {
          0% { opacity: 0.4; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
