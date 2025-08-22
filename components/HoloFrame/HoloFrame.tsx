// components/HoloFrame.tsx
"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface HoloFrameProps { children: React.ReactNode; }

const HoloFrame: React.FC<HoloFrameProps> = ({ children }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 200),
      setTimeout(() => setStep(2), 1000),
      setTimeout(() => setStep(3), 1800),
      setTimeout(() => setStep(4), 2200),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  // dead vs alive styles
  const base = {
    dead: {
      background: "rgba(255,255,255,0.05)",
      border: "1px solid rgba(0,255,255,0.1)",
      boxShadow: "none",
      backdropFilter: "none",
    },
    alive: {
      background: "linear-gradient(135deg, rgba(19,27,42,0.93), rgba(13,24,58,0.93), rgba(11,49,69,0.93))",
      border: "1px solid rgba(0,255,255,0.4)",
      boxShadow: "0 0 20px rgba(0,255,255,0.6)",
      backdropFilter: "blur(16px)",
    },
  };

  return (
    <motion.div
      initial={{ width: 0, height: 0, opacity: 0 }}
      animate={{
        width: step >= 2 ? "92vw" : step >= 1 ? "2px" : 0,
        height: step >= 1 ? "89vh" : 0,
        opacity: step >= 1 ? 1 : 0,
      }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={step < 3 ? base.dead : base.alive}
      className="relative m-auto overflow-hidden rounded-lg"
    >
      {step >= 3 && (
        <div className="absolute inset-0 animate-broken-flicker bg-black/60" />
      )}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: step === 4 ? 1 : 0 }}
        transition={{ delay: 2.2, duration: 0.3 }}
        className="relative w-full h-full"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default HoloFrame;
