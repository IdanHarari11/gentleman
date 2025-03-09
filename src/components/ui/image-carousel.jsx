"use client";
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

export const ImageCarousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);
  const slideRefs = useRef([]);

  // Initialize slide refs
  useEffect(() => {
    slideRefs.current = slideRefs.current.slice(0, images.length);
  }, [images]);

  // Handle scroll events to update active indicator
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      const scrollPosition = scrollContainer.scrollLeft;
      const containerWidth = scrollContainer.clientWidth;
      
      // Calculate which slide is most visible based on scroll position
      let closestIndex = 0;
      let closestDistance = Infinity;
      
      slideRefs.current.forEach((slide, index) => {
        if (!slide) return;
        
        const slidePosition = slide.offsetLeft;
        const distance = Math.abs(slidePosition - scrollPosition);
        
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });
      
      if (closestIndex !== activeIndex) {
        setActiveIndex(closestIndex);
      }
    };

    // Use both scroll and touchend events for better mobile support
    scrollContainer.addEventListener('scroll', handleScroll);
    scrollContainer.addEventListener('touchend', handleScroll);
    
    // Initial check
    setTimeout(handleScroll, 100);
    
    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
      scrollContainer.removeEventListener('touchend', handleScroll);
    };
  }, [activeIndex, images.length]);

  // Scroll to specific slide
  const scrollToSlide = (index) => {
    if (!scrollRef.current || index < 0 || index >= images.length) return;
    
    // Get the specific slide element
    const slideElement = slideRefs.current[index];
    
    if (slideElement) {
      // Scroll to the element's position
      scrollRef.current.scrollTo({
        left: slideElement.offsetLeft - 8, // Adjust for padding
        behavior: 'smooth'
      });
      
      setActiveIndex(index);
    }
  };

  // Determine if we should show condensed indicators (for many images)
  const showCondensedIndicators = images.length > 5;

  // Generate appropriate indicators based on number of images
  const renderIndicators = () => {
    if (!showCondensedIndicators) {
      // Standard indicators for 5 or fewer images
      return images.map((_, index) => (
        <button
          key={`indicator-${index}`}
          onClick={() => scrollToSlide(index)}
          className={`w-6 h-1.5 rounded-full transition-all duration-300 ${
            activeIndex === index 
              ? 'bg-[#242422] opacity-80 w-8' 
              : 'bg-[#242422] opacity-30'
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ));
    } else {
      // Condensed indicators for more than 5 images
      // Show first, last, active, and one on each side of active
      const indicatorIndexes = new Set();
      
      // Always include first and last
      indicatorIndexes.add(0);
      indicatorIndexes.add(images.length - 1);
      
      // Include active and adjacent
      indicatorIndexes.add(activeIndex);
      if (activeIndex > 0) indicatorIndexes.add(activeIndex - 1);
      if (activeIndex < images.length - 1) indicatorIndexes.add(activeIndex + 1);
      
      // Convert to array and sort
      const sortedIndexes = Array.from(indicatorIndexes).sort((a, b) => a - b);
      
      // Create indicators with ellipses where needed
      return sortedIndexes.map((index, i) => {
        // Add ellipsis if there's a gap
        const showEllipsisBefore = i > 0 && sortedIndexes[i-1] < index - 1;
        
        return (
          <React.Fragment key={`indicator-group-${index}`}>
            {showEllipsisBefore && (
              <span className="text-[#242422] opacity-50 mx-1">•••</span>
            )}
            <button
              key={`indicator-${index}`}
              onClick={() => scrollToSlide(index)}
              className={`w-6 h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === index 
                  ? 'bg-[#242422] opacity-80 w-8' 
                  : 'bg-[#242422] opacity-30'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          </React.Fragment>
        );
      });
    }
  };

  // Determine grid columns based on image count
  const getGridClass = () => {
    const count = images.length;
    
    // For 1-3 images, use one row
    if (count <= 3) return "md:grid-cols-3";
    
    // For 4 images, use 2x2 grid
    if (count === 4) return "md:grid-cols-2";
    
    // For 5-6 images, use 3x2 grid (3 columns)
    if (count <= 6) return "md:grid-cols-3";
    
    // For 7-8 images, use 4x2 grid (4 columns)
    if (count <= 8) return "md:grid-cols-4";
    
    // For 9+ images, use 3 columns with multiple rows
    return "md:grid-cols-3";
  };

  return (
    <>
      {/* Desktop: Grid layout with dynamic columns */}
      <div className={`hidden md:grid ${getGridClass()} gap-4 md:gap-6`}>
        {images.map((image, index) => (
          <div 
            key={`desktop-${index}`}
            className="relative aspect-[3/4] max-w-xs mx-auto w-full overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <Image 
              src={image.src} 
              alt={image.alt || `Image ${index + 1}`} 
              fill
              className="object-cover object-center rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
          </div>
        ))}
      </div>
      
      {/* Mobile: Horizontal scrollable row with scroll snap */}
      <div 
        ref={scrollRef}
        className="md:hidden overflow-x-auto pb-4 hide-scrollbar snap-x snap-mandatory scroll-smooth"
      >
        <div className="flex space-x-4 min-w-max px-2">
          {images.map((image, index) => (
            <div 
              key={`mobile-${index}`}
              ref={el => slideRefs.current[index] = el}
              className="relative aspect-[3/4] w-64 flex-shrink-0 overflow-hidden rounded-xl snap-center"
              onClick={() => scrollToSlide(index)}
            >
              <Image 
                src={image.src} 
                alt={image.alt || `Image ${index + 1}`} 
                fill
                className="object-cover object-center rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 active:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Scroll indicator for mobile */}
      <div className="flex justify-center mt-4 md:hidden">
        <div className="flex space-x-2 items-center">
          {renderIndicators()}
        </div>
      </div>
    </>
  );
}; 