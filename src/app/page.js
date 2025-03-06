import { HeroParallax } from "@/components/ui/hero-parallax";
import { AppleCardsSection } from "@/components/ui/apple-card";
import { CompareSection } from "@/components/ui/compare-section";
import { MultiStepLoader } from "@/components/ui/multi-step-loader";
import { ClubContentTimeline } from "@/components/club-content-timeline";
import Image from "next/image";
import { ImageCarousel } from "@/components/ui/image-carousel";
import { FaqSection } from "@/components/ui/faq-section";
import { SectionHeader } from "@/components/ui/section-header";
import { SignupForm } from "@/components/ui/signup-form";
import { products, loadingStates, galleryImages1, galleryImages2, faqItems } from "@/constants/index";

export default function Home() {
  
  return (
    <div className="bg-[#e2dfce] min-h-screen" dir="rtl">
      <HeroParallax
        products={products}
        enableHover={false}
      />

      <SectionHeader
        title="המודל החדש של הג'נטלמן המודרני לשנת 2025"
        description="המועדון מבוסס על שלושה קטגוריות עיקריות:"
      />
      <AppleCardsSection />
      
      {/* Gallery Images 1 - Three static images with horizontal scroll on mobile */}
      <div className="py-10 md:py-14 px-4 md:px-8 bg-[#e2dfce]">
        <div className="max-w-5xl mx-auto">
          <ImageCarousel images={galleryImages1} />
        </div>
      </div>
      
      {/* Enhanced Compare Section with animations */}
      {/* <CompareSection 
        firstImage="/images/gentleman/oldGenGentleman.webp"
        secondImage="/images/gentleman/oldGenGentleman.webp"
      /> */}

      
      <SectionHeader
        title="איך מתנהג גנטלמן במועדון"
        description="הגנטלמן המודרני מתנהל לפי קוד התנהגות ייחודי. הנה כמה מהעקרונות המנחים אותו:"
      />
      {/* MultiStepLoader with Image - Desktop: Side by Side, Mobile: Stacked */}
      <div className="bg-[#e2dfce] px-4 md:px-8 pb-16">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row-reverse items-center sx:gap-[23rem]">
        {/* Image - Left side on desktop, bottom on mobile */}
          <div className="w-full md:w-1/2 md:mt-0 flex justify-center md:justify-start mt-[20rem] xl:mt-[0rem] lg:mt-[0rem] md:mt-[0rem]">
            <div className="relative w-full max-w-md h-[400px] md:h-[500px]">
              <Image 
                src="/images/Tomer/tomer.png" 
                alt="Tomer" 
                fill
                className="object-contain rounded-xl"
                priority
              />
            </div>
          </div>
          {/* MultiStepLoader - Right side on desktop, top on mobile */}
          <div className="w-full md:w-1/2 md:pl-8">
            <MultiStepLoader loadingStates={loadingStates} loading={true} duration={2000} />
          </div>
        </div>
      </div>
      
      {/* Club Content Timeline */}
      <ClubContentTimeline />

      {/* Gallery Images 2 - Three static images with horizontal scroll on mobile */}
      <div className="py-10 md:py-14 px-4 md:px-8 bg-[#e2dfce]">
        <div className="max-w-5xl mx-auto">
          <ImageCarousel images={galleryImages2} />
        </div>
      </div>
      
      {/* Signup Form Section */}
      <div id='signup' className="py-10 md:py-14 px-4 md:px-8 bg-[#e2dfce]">
        <SectionHeader
          title="הצטרף למועדון הג'נטלמן"
          description="מלא את הפרטים שלך כדי להצטרף למועדון ולקבל גישה לתוכן בלעדי"
        />
        <div className="max-w-5xl mx-auto mt-8">
          <SignupForm />
        </div>
      </div>
      
      {/* FAQ Section */}
      <FaqSection
        title="שאלות נפוצות"
        description="תשובות לשאלות הנפוצות ביותר על המועדון"
        items={faqItems}
        contactInfo={{
          title: "יש לך שאלות נוספות?",
          buttonText: "צור קשר",
          // onContact: () => console.log("Contact clicked"),
        }}
      />
    </div>
  );
}