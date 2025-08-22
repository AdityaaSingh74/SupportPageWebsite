"use client";
import React, { useState, useEffect } from "react";

const Home = ({ children }) => {
  const [step, setStep] = useState(0);
  const targetWidth = "92vw";
  const targetHeight = "89vh";

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 200), // grow vertical "dead" line
      setTimeout(() => setStep(2), 1000), // expand horizontal "dead" slab
      setTimeout(() => setStep(3), 1800), // flicker "alive"
      setTimeout(() => setStep(4), 2200), // steady content
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
        ? "rgba(255,255,255,0.05)" // almost invisible "dead" panel
        : "linear-gradient(135deg, rgba(19,27,42,0.93), rgba(13,24,58,0.93), rgba(11,49,69,0.93))",
    backdropFilter: step < 3 ? "none" : "blur(16px)",
    borderColor: step < 3 ? "rgba(0,255,255,0.1)" : "rgba(0,255,255,0.4)",
    boxShadow:
      step < 3
        ? "0 0 0 rgba(0,255,255,0)"
        : "0 0 20px rgba(0,255,255,0.6), inset 0 0 20px rgba(0,255,255,0.1)",
    borderStyle: "solid",
    borderWidth: "2px",
    overflow: "hidden",
    position: "relative",
    borderRadius: "8px",
  };

  // flicker effect during step 3
  const flickerClass = step === 3 ? "animate-broken-flicker" : "";

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      {/* Matrix Rain Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <MatrixRain />
      </div>

      {/* JARVIS Panel */}
      <div
        className={`${flickerClass}`}
        style={baseStyles}
      >
        {/* Corner Indicators */}
        {step >= 4 && (
          <>
            <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-cyan-400 opacity-60" />
            <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-cyan-400 opacity-60" />
            <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-cyan-400 opacity-60" />
            <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-cyan-400 opacity-60" />
          </>
        )}

        {/* Content */}
        {step >= 4 && (
          <div className="w-full h-full relative">
            {/* Animated scan line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60 animate-scan-line" />
            
            {/* Content area */}
            <div className="w-full h-full p-1">
              {children}
            </div>

            {/* Status indicators */}
            <div className="absolute bottom-1 right-2 flex space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Matrix Rain Effect Component
const MatrixRain = () => {
  const [drops, setDrops] = useState([]);
  
  useEffect(() => {
    const characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
    const columns = Math.floor(window.innerWidth / 20);
    
    const newDrops = Array.from({ length: columns }, (_, i) => ({
      id: i,
      x: i * 20,
      y: Math.random() * -500,
      speed: Math.random() * 3 + 1,
      chars: Array.from({ length: 10 }, () => 
        characters.charAt(Math.floor(Math.random() * characters.length))
      ),
    }));
    
    setDrops(newDrops);
    
    const interval = setInterval(() => {
      setDrops(prevDrops => 
        prevDrops.map(drop => ({
          ...drop,
          y: drop.y > window.innerHeight + 100 ? Math.random() * -100 : drop.y + drop.speed,
          chars: drop.chars.map(() => 
            Math.random() < 0.1 
              ? characters.charAt(Math.floor(Math.random() * characters.length))
              : drop.chars[Math.floor(Math.random() * drop.chars.length)]
          ),
        }))
      );
    }, 50);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="absolute inset-0">
      {drops.map(drop => (
        <div
          key={drop.id}
          className="absolute font-mono text-cyan-400 text-sm leading-4"
          style={{
            left: drop.x,
            top: drop.y,
            textShadow: '0 0 5px #00ffff',
          }}
        >
          {drop.chars.map((char, index) => (
            <div
              key={index}
              style={{
                opacity: Math.max(0, 1 - index * 0.1),
              }}
            >
              {char}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Home;