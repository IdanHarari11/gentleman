"use client";

import { HeroParallax } from "@/components/ui/hero-parallax";
import { AppleCardsSection } from "@/components/ui/apple-card";
import { MultiStepLoader } from "@/components/ui/multi-step-loader";
import { ClubContentTimeline } from "@/components/club-content-timeline";
import Image from "next/image";
import { ImageCarousel } from "@/components/ui/image-carousel";
import { FaqSection } from "@/components/ui/faq-section";
import { SectionHeader } from "@/components/ui/section-header";
import { SignupForm } from "@/components/ui/signup-form";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { products, loadingStates, galleryImages1, galleryImages2, galleryImages3, faqItems, navItems } from "@/constants/index";
import AboutMe from "@/components/about-me.jsx";
import Slogan from "@/components/ui/slogan";
import ContactForm from "@/components/contact-form";

export default function Home() {
  return (
    <main className="bg-[#e2dfce] min-h-screen relative" dir="rtl">
      {/* Add the FloatingNav component */}
      <FloatingNav 
        navItems={navItems} 
        className="bg-[#e2dfce]/30 border-[#a19f8c]/30 z-[9999]"
      />
      
      {/* Hero Section */}
      <section id="hero">
        <HeroParallax
          products={products}
          enableHover={false}
        />
      </section>

      {/* Model Section */}
      <SectionHeader
        id="model"
        title="המודל החדש של הג'נטלמן המודרני לשנת 2025"
        description="המועדון מבוסס על שלושה קטגוריות עיקריות:"
      />
      <AppleCardsSection />
      
      {/* Gallery Images 1 - Three static images with horizontal scroll on mobile */}
      <section className="py-10 md:py-14 px-4 md:px-8 bg-[#e2dfce]">
        <div className="max-w-5xl mx-auto">
          <ImageCarousel images={galleryImages1} />
        </div>
      </section>
      
      {/* Enhanced Compare Section with animations */}
      {/* <CompareSection 
        firstImage="/images/gentleman/oldGenGentleman.webp"
        secondImage="/images/gentleman/oldGenGentleman.webp"
      /> */}

      {/* Behavior Section */}
      <SectionHeader
        id="behavior"
        title="איך מתנהג גנטלמן במועדון"
        description="הגנטלמן המודרני מתנהל לפי קוד התנהגות ייחודי. הנה כמה מהעקרונות המנחים אותו:"
      />
      
      {/* MultiStepLoader with Image - Desktop: Side by Side, Mobile: Stacked */}
      <section className="bg-[#e2dfce] px-4 md:px-8 pb-16">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row-reverse items-center sx:gap-[23rem]">
        {/* Image - Left side on desktop, bottom on mobile */}
          <div className="w-full md:w-1/2 md:mt-0 flex justify-center md:justify-start mt-[20rem] xl:mt-[0rem] lg:mt-[0rem] md:mt-[0rem]">
            <div className="relative w-full max-w-md h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.1)] border border-[#a19f8c]/30">
              <Image 
                src="/images/Tomer/tomer.jpg" 
                alt="Tomer" 
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          {/* MultiStepLoader - Right side on desktop, top on mobile */}
          <div className="w-full md:w-1/2 md:pl-8">
            <MultiStepLoader loadingStates={loadingStates} loading={true} duration={2000} />
          </div>
        </div>
      </section>
      
      {/* Club Content Timeline */}
      <section id="content">
        <ClubContentTimeline />
      </section>

      {/* Signup Form Section */}
      <SectionHeader
        id="signup"
        title="טעימה ממועדון הג׳נטלמן"
        description="אני רוצה לתת לך במתנה את 15 המשפטים המנצחים שלי בכל סיטואציה עם נשים!"
      />
      <div className="px-4 md:px-8 pb-10 bg-[#e2dfce]">
        <div className="max-w-5xl mx-auto">
          <SignupForm />
        </div>
      </div>

      {/* About Me Section */}
      <SectionHeader
        id="about-me"
        title="קצת עליי"
      />
      <AboutMe />

      {/* Gallery Images 2 - Three static images with horizontal scroll on mobile */}
      <section className="py-10 md:py-14 px-4 md:px-8 bg-[#e2dfce]">
        <div className="max-w-5xl mx-auto">
          <ImageCarousel images={galleryImages2} />
        </div>
      </section>

      {/* pricing section */}
      
      {/* FAQ Section */}
      <FaqSection
        id="faq"
        title="שאלות נפוצות"
        description="תשובות לשאלות הנפוצות ביותר על המועדון"
        items={faqItems}
        // contactInfo={{
        //   title: "יש לך שאלות נוספות?",
        //   buttonText: "צור קשר",
        //   // onContact: () => console.log("Contact clicked"),
        // }}
      />

      {/* Slogan */}
      <Slogan />

      {/* Gallery Images 3 */}
      <section className="py-10 md:py-14 px-4 md:px-8 bg-[#e2dfce]">
        <div className="max-w-5xl mx-auto">
          <ImageCarousel images={galleryImages3} />
        </div>
      </section>
      <ContactForm />
    </main>
  );
}