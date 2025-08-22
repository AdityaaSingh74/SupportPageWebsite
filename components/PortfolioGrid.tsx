"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Skills Data with levels (0-100)
const skillsData = [
  { name: "Python", level: 85, category: "Programming" },
  { name: "JavaScript", level: 90, category: "Programming" },
  { name: "React", level: 88, category: "Frontend" },
  { name: "Node.js", level: 82, category: "Backend" },
  { name: "MongoDB", level: 78, category: "Database" },
  { name: "CSS3", level: 92, category: "Frontend" },
  { name: "HTML5", level: 95, category: "Frontend" },
  { name: "C", level: 75, category: "Programming" }
];

// Avatar Component with Holographic Effect
const HolographicAvatar = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <motion.div
        className="relative w-32 h-32 md:w-48 md:h-48 rounded-lg overflow-hidden cursor-pointer"
        onMouseMove={handleMouseMove}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        {/* Holographic Overlay */}
        <div
          className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `
              radial-gradient(
                circle at ${mousePosition.x}% ${mousePosition.y}%,
                rgba(0, 255, 255, 0.3),
                rgba(255, 0, 255, 0.2),
                rgba(255, 255, 0, 0.1),
                transparent 70%
              )
            `,
            mixBlendMode: "overlay",
          }}
        />
        
        {/* Avatar Image Placeholder */}
        <div className="w-full h-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center">
          <div className="text-white font-bold text-2xl md:text-4xl">AS</div>
        </div>
        
        {/* Animated Border */}
        <div className="absolute inset-0 rounded-lg border-2 border-cyan-400 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 rounded-lg animate-pulse bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30" />
        </div>
      </motion.div>
      
      {/* Name and Title */}
      <div className="absolute bottom-0 left-0 right-0 text-center p-2">
        <h3 className="text-cyan-400 font-bold text-sm md:text-lg">Aditya Singh</h3>
        <p className="text-cyan-300 text-xs md:text-sm opacity-80">Full-Stack Developer</p>
      </div>
    </div>
  );
};

// Skills Radar Chart Component
const SkillsRadar = () => {
  const [animatedLevels, setAnimatedLevels] = useState(skillsData.map(() => 0));

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedLevels(skillsData.map(skill => skill.level));
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center">
      <h3 className="text-cyan-400 font-bold mb-4 text-sm md:text-lg">Technical Skills</h3>
      
      {/* Skills Grid */}
      <div className="grid grid-cols-2 gap-2 md:gap-4 w-full max-w-xs">
        {skillsData.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="bg-blue-900/30 rounded-lg p-2 md:p-3 border border-cyan-400/30 hover:border-cyan-400 transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="text-cyan-300 text-xs md:text-sm font-medium mb-1">
              {skill.name}
            </div>
            <div className="w-full bg-blue-900/50 rounded-full h-1.5 md:h-2">
              <motion.div
                className="bg-gradient-to-r from-cyan-400 to-blue-400 h-full rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${animatedLevels[index]}%` }}
                transition={{ duration: 1, delay: index * 0.1 }}
              />
            </div>
            <div className="text-cyan-400 text-xs mt-1">{animatedLevels[index]}%</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Quick Stats Component
const QuickStats = () => {
  const stats = [
    { label: "CGPA", value: "9.29", unit: "/10" },
    { label: "Projects", value: "10+", unit: "" },
    { label: "Experience", value: "6", unit: "months" },
    { label: "Skills", value: "12+", unit: "" }
  ];

  return (
    <div className="grid grid-cols-2 gap-2 md:gap-4 w-full">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          className="bg-blue-900/20 rounded-lg p-3 md:p-4 border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300 hover:bg-blue-900/30"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="text-cyan-400 text-lg md:text-2xl font-bold">
            {stat.value}<span className="text-sm text-cyan-300">{stat.unit}</span>
          </div>
          <div className="text-cyan-300 text-xs md:text-sm opacity-80">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
};

// Experience Timeline Component
const ExperienceTimeline = () => {
  const experience = {
    role: "Full-Stack Developer Intern",
    company: "RANGMANCH",
    period: "Jun 2025 - Present",
    achievements: [
      "Created React & CSS website",
      "Node.js integration",
      "Team collaboration"
    ]
  };

  return (
    <div className="w-full space-y-3">
      <h3 className="text-cyan-400 font-bold text-sm md:text-lg mb-2">Current Role</h3>
      <motion.div
        className="bg-blue-900/20 rounded-lg p-3 md:p-4 border border-cyan-400/30"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-cyan-300 font-bold text-sm md:text-base">{experience.role}</div>
        <div className="text-cyan-400 text-xs md:text-sm">{experience.company}</div>
        <div className="text-cyan-300 text-xs opacity-80 mb-2">{experience.period}</div>
        <div className="space-y-1">
          {experience.achievements.map((achievement, index) => (
            <div key={index} className="text-cyan-300 text-xs flex items-center">
              <div className="w-1 h-1 bg-cyan-400 rounded-full mr-2" />
              {achievement}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

// Matrix Background Effect
const MatrixBackground = () => {
  const [matrixChars, setMatrixChars] = useState<string[]>([]);

  useEffect(() => {
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const newChars = Array.from({ length: 50 }, () => 
      chars.charAt(Math.floor(Math.random() * chars.length))
    );
    setMatrixChars(newChars);

    const interval = setInterval(() => {
      setMatrixChars(prev => prev.map(() => 
        chars.charAt(Math.floor(Math.random() * chars.length))
      ));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
      {matrixChars.map((char, index) => (
        <motion.div
          key={index}
          className="absolute text-cyan-400 text-xs font-mono"
          style={{
            left: `${(index % 10) * 10}%`,
            top: `${Math.floor(index / 10) * 20}%`,
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: index * 0.1,
          }}
        >
          {char}
        </motion.div>
      ))}
    </div>
  );
};

// Main Portfolio Grid Component
const PortfolioGrid = () => {
  return (
    <div className="relative w-full h-full p-4">
      <MatrixBackground />
      
      {/* Header Section */}
      <div className="grid grid-cols-6 grid-rows-6 gap-2 md:gap-3 h-full">
        {/* Top Header - spans full width */}
        <motion.div 
          className="col-span-6 row-span-1 bg-gradient-to-r from-blue-900/40 via-cyan-900/40 to-blue-900/40 rounded-lg border border-cyan-400/30 backdrop-blur-sm flex items-center justify-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center">
            <h1 className="text-cyan-400 font-bold text-lg md:text-2xl tracking-wider">
              JARVIS PORTFOLIO INTERFACE
            </h1>
            <div className="text-cyan-300 text-xs md:text-sm opacity-80">
              Personal Dashboard - ADITYA SINGH
            </div>
          </div>
        </motion.div>

        {/* Left Panel - Avatar */}
        <motion.div 
          className="col-span-2 row-span-4 row-start-2 bg-gradient-to-br from-blue-900/30 via-cyan-900/20 to-blue-900/30 rounded-lg border border-cyan-400/30 backdrop-blur-sm overflow-hidden"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <HolographicAvatar />
        </motion.div>

        {/* Center Top - Quick Stats */}
        <motion.div 
          className="col-span-4 row-span-2 col-start-3 row-start-2 bg-gradient-to-br from-blue-900/30 via-cyan-900/20 to-blue-900/30 rounded-lg border border-cyan-400/30 backdrop-blur-sm p-3 md:p-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <QuickStats />
        </motion.div>

        {/* Bottom Right - Skills */}
        <motion.div 
          className="col-span-2 row-span-3 col-start-5 row-start-4 bg-gradient-to-br from-blue-900/30 via-cyan-900/20 to-blue-900/30 rounded-lg border border-cyan-400/30 backdrop-blur-sm p-2 md:p-3"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <SkillsRadar />
        </motion.div>

        {/* Center Bottom - Experience */}
        <motion.div 
          className="col-span-2 row-span-3 col-start-3 row-start-4 bg-gradient-to-br from-blue-900/30 via-cyan-900/20 to-blue-900/30 rounded-lg border border-cyan-400/30 backdrop-blur-sm p-3 md:p-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <ExperienceTimeline />
        </motion.div>

        {/* Bottom Left - Education */}
        <motion.div 
          className="col-span-2 row-start-6 bg-gradient-to-br from-blue-900/30 via-cyan-900/20 to-blue-900/30 rounded-lg border border-cyan-400/30 backdrop-blur-sm p-2 md:p-3 flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="w-full text-center">
            <div className="text-cyan-400 font-bold text-xs md:text-sm">JUIT Solan</div>
            <div className="text-cyan-300 text-xs opacity-80">B.Tech CSE (AI & ML)</div>
            <div className="text-cyan-400 text-xs font-bold">CGPA: 9.29</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PortfolioGrid;