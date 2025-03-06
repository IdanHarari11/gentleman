"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const SectionHeader = ({
  title,
  description,
  className,
  noDivider = false,
  noAnimation = false,
  bgColor = "bg-[#e2dfce]",
  textColor = "text-[#242422]",
  paddingY = "py-12 md:py-16",
  paddingX = "px-4 md:px-8",
  maxWidth = "max-w-4xl",
  paddingBottom = "0px",
  dividerColor = "bg-[#242422] opacity-30",
  ...props
}) => {
  const HeaderComponent = noAnimation ? "div" : motion.div;
  
  const animationProps = noAnimation 
    ? {} 
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
      };

  return (
    <div 
      className={cn(paddingY, paddingX, bgColor)} 
      style={{ paddingBottom }}
      {...props}
    >
      <HeaderComponent
        className={cn(`${maxWidth} mx-auto text-center`, className)}
        {...animationProps}
      >
        <h2 className={cn(`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${textColor} tracking-tight`)}>
          {title}
        </h2>
        
        {!noDivider && (
          <div className={cn(`w-24 h-1 ${dividerColor} mx-auto mb-8 rounded-full`)}></div>
        )}

        {description && (
          <p className={cn(`text-lg ${textColor} opacity-80 mb-6`)}>
            {description}
          </p>
        )}
      </HeaderComponent>
    </div>
  );
};

export { SectionHeader }; 