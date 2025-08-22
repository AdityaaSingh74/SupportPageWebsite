"use client";
import React, { useState, useEffect } from "react";

const Home = ({ children }) => {
  const [step, setStep] = useState(0);
  const targetWidth = "92vw";
  const targetHeight = "89vh";

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 200),   // grow vertical â€œdeadâ€ line
      setTimeout(() => setStep(2), 1000),  // expand horizontal â€œdeadâ€ slab
      setTimeout(() => setStep(3), 1800),  // flicker â€œaliveâ€
      setTimeout(() => setStep(4), 2200),  // steady content
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  // size transitions
  const width = step >= 2 ? targetWidth : step >= 1 ? "2px" : "0";
  const height = step >= 1 ? targetHeight : "0";
  const transition = "height 0.8s ease-out, width 0.8s ease-out";

  // base panel style: dead until flicker
  const baseStyles = {
    width,
    height,
    transition,
    background:
      step < 3
        ? "rgba(255,255,255,0.05)"    // almost invisible â€œdeadâ€ panel
        : "linear-gradient(135deg, rgba(19,27,42,0.93), rgba(13,24,58,0.93), rgba(11,49,69,0.93))",
    backdropFilter: step < 3 ? "none" : "blur(16px)",
    borderColor: step < 3 ? "rgba(0,255,255,0.1)" : "rgba(0,255,255,0.4)",
    boxShadow:
      step < 3
        ? "0 0 0 rgba(0,255,255,0)"
        : "0 0 20px rgba(0,255,255,0.6)",
    borderStyle: "solid",
    borderWidth: "2px",
    overflow: "hidden",
    position: "relative",
  };

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-[#0a0a0a] to-[#161820] flex items-center justify-center overflow-hidden">
      {/* Static grid background */}
      <div className="absolute inset-0 z-0 w-full h-full bg-[#111111] bg-[linear-gradient(32deg,rgba(8,8,8,0.74)_30px,transparent)] bg-[size:60px_60px] bg-[position:-5px_-5px]" />

      {/* Centered panel */}
      <div className="relative z-10 flex items-center justify-center w-full h-full ">
        <div style={baseStyles}>
          {/* Flicker â€œaliveâ€ overlay */}
          {step >= 3 && step < 4 && (
            <div className="absolute inset-0 broken-flicker" />
          )}

          {/* Content */}
          <div
            className={`relative p-8 text-slate-100 flex items-center justify-center w-full h-full transition-opacity duration-300 ${
              step === 4 ? "opacity-100" : "opacity-0"
            }`}
          >
            {children}
          </div>
        </div>
      </div>

      <style jsx>{`
        .broken-flicker {
          animation: brokenFlicker 0.3s infinite;
          background: rgba(0, 0, 0, 0.7);
        }
        @keyframes brokenFlicker {
          0% { opacity: 0.1; }
          25% { opacity: 0.9; }
          40% { opacity: 0.2; }
          60% { opacity: 1; }
          75% { opacity: 0.4; }
          100% { opacity: 0.1; }
        }
      `}</style>
    </div>
  );
};

export default Home;