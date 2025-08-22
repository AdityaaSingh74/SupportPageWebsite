// components/Navbar.tsx
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const links = ["About", "Projects", "Resume", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-4 left-4 z-50">
      <button
        className="p-2 bg-cyan-500 bg-opacity-20 rounded"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>
      {open && (
        <motion.ul
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          className="mt-2 p-4 bg-[#131b2a] rounded-lg space-y-2"
        >
          {links.map((page) => (
            <li key={page}>
              {/* <Link href={`/${page.toLowerCase()}`}>
                <a className="text-cyan-300 hover:text-white">Hello</a>
                <a className="text-cyan-300 hover:text-white">Hello</a>
              </Link> */}
            </li>
          ))}
        </motion.ul>
      )}
    </nav>
  );
}
