"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useAnimation, useMotionValue } from 'framer-motion';
import { IconArrowsHorizontal } from '@tabler/icons-react';

export const Compare = ({
  firstImage,
  secondImage,
  className = "",
  firstImageClassName = "",
  secondImageClassName = "",
  initialSliderPercentage = 50,
  slideMode = "drag", // 'hover' or 'drag'
  showHandlebar = true,
  autoplay = false,
  autoplayDuration = 3000,
}) => {
  const [sliderPosition, setSliderPosition] = useState(initialSliderPercentage);
  const [isDragging, setIsDragging] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isAutoplayEnabled, setIsAutoplayEnabled] = useState(autoplay);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  const sliderControls = useAnimation();
  const x = useMotionValue(0);
  const autoplayRef = useRef(null);
  const autoplayDirectionRef = useRef(1); // 1 for right, -1 for left

  // Detect mobile devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Initialize container width and slider position
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        setContainerWidth(width);
        // Set initial position
        const initialX = (initialSliderPercentage / 100) * width;
        x.set(initialX);
      }
    };

    // Run once on mount
    updateDimensions();
    
    // Add resize listener
    window.addEventListener('resize', updateDimensions);
    
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, [initialSliderPercentage, x]);

  // Update slider position when x changes
  useEffect(() => {
    const unsubscribe = x.onChange((latest) => {
      if (containerWidth > 0) {
        const newPercentage = (latest / containerWidth) * 100;
        setSliderPosition(newPercentage);
      }
    });
    
    return unsubscribe;
  }, [x, containerWidth]);

  // Handle autoplay
  useEffect(() => {
    if (!isAutoplayEnabled || isDragging) return;
    
    const interval = setInterval(() => {
      if (containerWidth === 0) return;
      
      // Change direction when reaching edges
      if (sliderPosition >= 95) autoplayDirectionRef.current = -1;
      if (sliderPosition <= 5) autoplayDirectionRef.current = 1;
      
      const step = 0.5; // Smaller step for smoother animation
      const newPosition = sliderPosition + (autoplayDirectionRef.current * step);
      const newX = (newPosition / 100) * containerWidth;
      
      x.set(newX);
    }, 30);
    
    return () => clearInterval(interval);
  }, [isAutoplayEnabled, isDragging, sliderPosition, containerWidth, x]);

  // Handle mouse movement for hover mode
  const handleMouseMove = (e) => {
    if (slideMode !== 'hover' || !containerRef.current) return;
    
    // Disable autoplay on user interaction
    setIsAutoplayEnabled(false);
    
    const rect = containerRef.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const clampedX = Math.max(0, Math.min(rect.width, offsetX));
    
    x.set(clampedX);
  };

  // Handle drag start
  const handleDragStart = () => {
    setIsDragging(true);
    setIsAutoplayEnabled(false);
  };

  // Handle drag end
  const handleDragEnd = () => {
    setIsDragging(false);
  };

  // Handle container click
  const handleContainerClick = (e) => {
    if (!containerRef.current || slideMode !== 'drag') return;
    
    setIsAutoplayEnabled(false);
    
    // Set slider position to click position
    const rect = containerRef.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const clampedX = Math.max(0, Math.min(rect.width, offsetX));
    
    x.set(clampedX);
  };

  return (
    <div 
      ref={containerRef}
      className={`relative w-full overflow-hidden rounded-xl shadow-lg ${className}`}
      style={{ 
        aspectRatio: isMobile ? '4/5' : '16/9', 
        touchAction: 'none', 
        direction: 'ltr',
        maxHeight: isMobile ? '70vh' : '80vh'
      }}
      onMouseMove={handleMouseMove}
      onClick={handleContainerClick}
    >
      {/* First Image (Right Side in RTL) */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={firstImage}
          alt="לפני"
          fill
          className={`object-cover ${firstImageClassName}`}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
        />
      </div>

      {/* Second Image (Left Side in RTL - Revealed by Slider) */}
      <div 
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <Image
          src={secondImage}
          alt="אחרי"
          fill
          className={`object-cover ${secondImageClassName}`}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
        />
      </div>

      {/* Slider Handle */}
      <motion.div
        className="absolute top-0 bottom-0 w-1 bg-[#ffffff] cursor-ew-resize shadow-lg z-10"
        style={{ 
          x,
          left: 0,
        }}
        drag={slideMode === 'drag' ? 'x' : false}
        dragConstraints={{ left: 0, right: containerWidth }}
        dragElastic={0}
        dragMomentum={false}
        onDragStart={handleDragStart}
        onDrag={(e, info) => x.set(info.point.x)}
        onDragEnd={handleDragEnd}
      >
        {showHandlebar && (
          <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${isMobile ? 'w-8 h-8' : 'w-10 h-10'} rounded-full bg-[#ffffff] shadow-md flex items-center justify-center`}>
            <IconArrowsHorizontal 
              className="text-[#242422]" 
              size={isMobile ? 16 : 20} 
              stroke={2.5}
            />
          </div>
        )}
      </motion.div>

      {/* Labels (Adjusted for RTL) */}
      <div className={`absolute bottom-4 right-4 bg-[#242422] bg-opacity-70 text-[#ffffff] px-3 py-1 rounded-md ${isMobile ? 'text-xs' : 'text-sm'} font-medium`}>
        לפני
      </div>
      <div className={`absolute bottom-4 left-4 bg-[#242422] bg-opacity-70 text-[#ffffff] px-3 py-1 rounded-md ${isMobile ? 'text-xs' : 'text-sm'} font-medium`}>
        אחרי
      </div>
      
      {/* Autoplay indicator (optional) */}
      {autoplay && (
        <div className="absolute top-4 left-4 transition-opacity duration-300" style={{ opacity: isAutoplayEnabled ? 1 : 0 }}>
          <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
        </div>
      )}
      
      {/* Mobile instruction hint - shows briefly on mobile */}
      {isMobile && (
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#242422] bg-opacity-80 text-white px-4 py-2 rounded-full text-xs font-medium text-center pointer-events-none transition-opacity duration-500"
          style={{ 
            opacity: isAutoplayEnabled ? 0.8 : 0,
            maxWidth: '80%'
          }}
        >
          גרור את המחוון להשוואה
        </div>
      )}
    </div>
  );
}; 