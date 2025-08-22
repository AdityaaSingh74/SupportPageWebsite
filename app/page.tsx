import React from "react";
import PortfolioGrid from "@/components/PortfolioGrid";

export default function HomePage() {
  return (
    <div className="w-full h-full">
      {/* The PortfolioGrid component will fill the JARVIS blue panel */}
      <PortfolioGrid />
    </div>
  );
}