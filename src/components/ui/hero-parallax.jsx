"use client";
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const HeroParallax = ({
  products,
  enableHover = true
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Enhanced spring configuration for smoother motion
  const springConfig = { 
    stiffness: 100, // Reduced from 300 for smoother motion
    damping: 40,    // Increased from 30 for less oscillation
    bounce: 0,      // Removed bounce for smoother movement
    mass: 1.5       // Added mass for more inertia and smoothness
  };

  // Smoother transforms with useSpring
  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]), 
    springConfig
  );
  
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]), 
    springConfig
  );
  
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]), 
    springConfig
  );
  
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), 
    springConfig
  );
  
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-20, 0]), 
    springConfig
  );
  
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 150]), 
    springConfig
  );
  
  // Mobile parallax values with smoother configuration
  const mobileTranslateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -150]), 
    springConfig
  );
  
  const mobileTranslateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 150]), 
    springConfig
  );
  
  return (
    (<div
      ref={ref}
      className="h-[130vh] lg:h-[100vh] md:h-[100vh] py-0 md:py-0 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] bg-[#e2dfce]">
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="mt-0 -mb-16 md:mb-0">
        
        {/* Mobile view - horizontal scrolling rows like desktop */}
        <div className="md:hidden mt-0 pb-[10rem]">
          {/* First row - now with motion */}
          <div className="overflow-x-auto pb-4 hide-scrollbar">
            <motion.div 
              className="flex flex-row-reverse space-x-reverse space-x-4 mb-4 min-w-max px-4"
              style={{ x: mobileTranslateXReverse }}
              transition={{ ease: "easeInOut", duration: 0.8 }} // Added smooth transition
            >
              {firstRow.map((product) => (
                <div key={product?.title || `product-${Math.random()}`} className="flex-shrink-0">
                  <ProductCard 
                    product={product} 
                    translate={mobileTranslateXReverse} 
                    enableHover={enableHover}
                    isMobile={true}
                    width="w-48" 
                    height="h-48" 
                  />
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* Second row */}
          <div className="overflow-x-auto pb-4 hide-scrollbar">
            <motion.div 
              className="flex flex-row-reverse space-x-reverse space-x-4 min-w-max px-4"
              style={{ x: mobileTranslateX }}
              transition={{ ease: "easeInOut", duration: 0.8 }} // Added smooth transition
            >
              {secondRow.map((product) => (
                <div key={product?.title || `product-${Math.random()}`} className="flex-shrink-0">
                  <ProductCard 
                    product={product} 
                    translate={mobileTranslateX} 
                    enableHover={enableHover}
                    isMobile={true}
                    width="w-48" 
                    height="h-48" 
                  />
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* Third row */}
          <div className="overflow-x-auto pb-4 hide-scrollbar">
            <motion.div 
              className="flex flex-row-reverse space-x-reverse space-x-4 min-w-max px-4"
              style={{ x: mobileTranslateXReverse }}
              transition={{ ease: "easeInOut", duration: 0.8 }} // Added smooth transition
            >
              {thirdRow.map((product) => (
                <div key={product?.title || `product-${Math.random()}`} className="flex-shrink-0">
                  <ProductCard 
                    product={product} 
                    translate={mobileTranslateXReverse} 
                    enableHover={enableHover}
                    isMobile={true}
                    width="w-48" 
                    height="h-48" 
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
        
        {/* Desktop view */}
        <div className="hidden md:block">
          <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
            {firstRow.map((product) => (
              <ProductCard 
                product={product} 
                translate={translateX} 
                key={product?.title || `product-${Math.random()}`}
                enableHover={enableHover} 
              />
            ))}
          </motion.div>
          <motion.div className="flex flex-row space-x-20 mt-20">
            {secondRow.map((product) => (
              <ProductCard 
                product={product} 
                translate={translateXReverse} 
                key={product?.title || `product-${Math.random()}`}
                enableHover={enableHover} 
              />
            ))}
          </motion.div>
          <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 pt-[5rem]">
            {thirdRow.map((product) => (
              <ProductCard 
                product={product} 
                translate={translateX} 
                key={product?.title || `product-${Math.random()}`}
                enableHover={enableHover} 
              />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>)
  );
};

export const Header = () => {
  return (
    (<div
      className="max-w-7xl relative mx-auto py-4 md:py-16 px-4 w-full right-0 top-0 text-right" 
      style={{paddingBottom: 0, paddingTop: 0}}>
      <div className="flex flex-col-reverse md:flex-row-reverse items-center md:items-start justify-between">
        <div className="relative w-full md:w-1/3 h-auto mb-2 md:mb-0">
          <Image 
            src="/images/gentlemen-club.png" 
            alt="Gentlemen Club" 
            width={400} 
            height={500}
            className="object-contain mx-auto md:mx-0 rounded-xl md:max-h-none max-h-[365px]"
            priority
          />
        </div>
        <div className="z-10 w-full md:w-2/3 md:pl-8 font-rubik">
          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-[#242422] mb-2 md:mb-6 tracking-tight leading-tight">
            ברוך הבא לג'נטלמנס טיים
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-medium text-[#343432] mb-3 md:mb-8 leading-relaxed">
            מועדון תכנים אקסלוסיבי לגברים איכותיים שמעוניינים להתקדם לשלב הבא במשחק שלהם – עם נשים בזירה החברתית ובעולם העסקים.
          </h2>
          <div className="text-base sm:text-lg md:text-lg text-[#343432] space-y-2 md:space-y-6 leading-relaxed">
            <div className="quote-container relative py-3 md:py-8 px-4 md:px-10 bg-[#d4d1c0] bg-opacity-30 backdrop-blur-sm rounded-lg shadow-lg border-r-4 border-[#242422] glassmorphism">
              <span className="absolute text-6xl md:text-8xl text-[#242422] opacity-15 font-serif top-0 right-2 md:right-4 transform rotate-12">"</span>
              <p className="italic relative z-10 text-lg md:text-lg lg:text-xl font-medium">
                גנטלמן הוא גבר בעל תואר אצולה וכינוי לגבר החי ומתנהג לפי אמות מידה הכוללות נימוסים טובים, בעיקר כלפי 
                נשים, אמינות גבוהה, קור רוח, הגינות ונכונות להודות בהפסד ומאפיינים נוספים התלויים בתקופה ובמקום.
              </p>
              <span className="absolute text-6xl md:text-8xl text-[#242422] opacity-15 font-serif bottom-0 left-2 md:left-4 transform -rotate-12">"</span>
              <p className="text-right mt-2 md:mt-4 text-sm md:text-sm font-light text-[#343432]">— ויקיפדיה</p>
            </div>
            <p className="pr-2 font-light text-lg">
              השנה 2025 ימי הביינים והאצולה מאחורינו והמילה גנטלמן היא עדיין בעלת חשיבות וערך גבוהה מאוד אבל לא מספיק מדוברת 
              או לא מפותחת מעבר לתיאור השטחי שלה של לפתוח דלת למישהי או להביא לה מעיל כשקר לה והאמת שגם די הגיע הזמן שמישהו יעשה לה עדכון גרסה כדי להתאים אותה למאפיינים של העידן החדש - שנת 2025 במדינת ישראל ובעולם באופן 
              כללי.
            </p>
          </div>
        </div>
      </div>
    </div>)
  );
};

export const ProductCard = ({
  product,
  translate,
  enableHover = true,
  isMobile = false,
  width = "w-[30rem]",
  height = "h-96"
}) => {
  return (
    (<motion.div
      style={{
        x: translate,
      }}
      whileHover={enableHover && !isMobile ? {
        y: -20,
        transition: { duration: 0.3, ease: "easeOut" } // Smoother hover animation
      } : {}}
      key={product?.title || `product-${Math.random()}`}
      className={`group/product relative flex-shrink-0 bg-[#f2f2f2] rounded-xl overflow-hidden shadow-md ${
        isMobile ? `${height} ${width}` : `${height} ${width}`
      }`}>
      <div className="block group-hover/product:shadow-2xl transition-all duration-300"> {/* Added transition */}
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-center absolute h-full w-full inset-0 rounded-xl transition-transform duration-500" // Added transition
          alt={product?.title || 'Product image'} />
      </div>
      <div
        className={`absolute inset-0 h-full w-full opacity-0 ${enableHover ? 'group-hover/product:opacity-80' : ''} bg-[#242422] pointer-events-none rounded-xl transition-opacity duration-500`}></div> {/* Smoother opacity transition */}
      {product?.title && (
        <h2
          className={`absolute bottom-4 right-4 ${isMobile ? 'opacity-100 text-xl' : `opacity-0 ${enableHover ? 'group-hover/product:opacity-100' : ''}`} text-[#ffffff] font-medium transition-all duration-500`}> {/* Smoother text transition */}
          {product.title}
        </h2>
      )}
    </motion.div>)
  );
};
