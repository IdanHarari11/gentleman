"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Always keep visible
    setVisible(true);
  });

  // Handle smooth scrolling
  const handleNavClick = (e, href) => {
    // Only handle # links (internal navigation)
    if (href.startsWith('#')) {
      e.preventDefault();
      
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        // Smooth scroll to the element
        targetElement.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.2,
        }}
        style={{
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)" // For Safari support
        }}
        className={cn(
          "flex max-w-fit fixed top-4 sm:top-10 inset-x-0 mx-auto border border-[#a19f8c]/30 rounded-full bg-[#e2dfce]/30 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1)] z-[9999] px-4 sm:px-8 py-2 items-center justify-center gap-3 sm:gap-6 rtl:space-x-reverse",
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <Link
            key={`link-${idx}`}
            href={navItem.link}
            onClick={(e) => handleNavClick(e, navItem.link)}
            className={cn(
              "relative items-center flex text-[#3a3935] hover:text-black px-1 sm:px-3 py-1"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="block text-xs sm:text-sm md:text-base font-medium">{navItem.name}</span>
          </Link>
        ))}
        <button 
          style={{
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)"
          }}
          className="border text-xs sm:text-sm md:text-base font-medium relative border-[#a19f8c]/60 text-[#3a3935] bg-[#d6d3c3]/40 px-3 sm:px-5 py-1 sm:py-2 rounded-full hover:bg-[#c9c6b7]/60 transition-colors"
          onClick={(e) => handleNavClick(e, "#signup")}
        >
          <span>הצטרפות</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-[#a19f8c] to-transparent h-px" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}; 