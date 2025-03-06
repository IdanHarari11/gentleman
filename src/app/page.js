import { HeroParallax } from "@/components/ui/hero-parallax";
import { AppleCardsSection } from "@/components/ui/apple-card";
import { CompareSection } from "@/components/ui/compare-section";
import { MultiStepLoader } from "@/components/ui/multi-step-loader";
import { ClubContentTimeline } from "@/components/club-content-timeline";
import Image from "next/image";
import { ImageCarousel } from "@/components/ui/image-carousel";

export default function Home() {
  const products = [
    {
      thumbnail:
        "/images/girls/girl1.png",
    },
    {
      thumbnail:
        "/images/girls/girl2.png",
    },
    {
      thumbnail:
        "/images/girls/girl3.png",
    },
   
    {
      thumbnail:
        "/images/girls/girl4.png",
    },
    {
      thumbnail:
        "/images/girls/girl5.png",
    },
    {
      thumbnail:
        "/images/girls/girl6.png",
    },
   
    {
      thumbnail:
        "/images/girls/girl7.png",
    },
    {
      thumbnail:
        "/images/girls/girl1.png",
    },
    {
      thumbnail:
        "/images/girls/girl8.png",
    },
    {
      thumbnail:
        "/images/girls/girl9.png",
    },
    {
      thumbnail:
        "/images/girls/girl10.png",
    },
   
    {
      thumbnail:
        "/images/girls/girl11.png",
    },
    {
      thumbnail:
        "/images/girls/girl12.png",
    },
    {
      thumbnail:
        "/images/girls/girl13.png",
    },
    {
      thumbnail:
        "/images/girls/girl14.png",
    },
  ];


  const loadingStates = [
    {
      text: 'לא פועל כדי להרשים, אלא מתוך חוכמה ואסטרטגיה'
    },
    {
      text: 'לא משחק לפי החוקים של כולם – חושב מחוץ לקופסה'
    },
    {
      text: 'פועל נכון, גם אם זה לא מקובל או זוכה לתשואות'
    },
    {
      text: 'לא רודף אחרי הצלחה – ממגנט אותה אליו'
    },
    {
      text: 'מוקף בנשים, כסף ואנשים איכותיים מתוך סטנדרטים גבוהים'
    },
    {
      text: 'נאמן לעצמו, לערכים שלו ולכבוד העצמי שלו'
    },
    {
      text: 'לא מחפש לרצות נשים – גורם להן להרגיש טווח רגשות מלא'
    },
    {
      text: 'מבין שהמשיכה הנשית דורשת יותר מרק נוחות'
    },
    {
      text: 'לא מתעסק בשאלה "למה נשים מתנהגות ככה?" – הוא מתמקד בשליטה שלו'
    },
    {
      text: 'תמיד משפר את עצמו ולא מחפש תירוצים או אשמים'
    },
    {
      text: 'עושה את הכי טוב שהוא יכול מכל הזדמנות שיש לו'
    },
    {
      text: 'לא נשאר "תקוע" בפריינד זון – מתקדם בביטחון'
    },
    {
      text: 'מראה כוונה ברורה ועקביות במערכות יחסים'
    },
    {
      text: 'אם אין הדדיות – הוא ממשיך הלאה בלי היסוס'
    }
  ];
  
  const galleryImages = [
    { src: "/images/girls/girl2.png", alt: "Girl 2" },
    { src: "/images/girls/girl1.png", alt: "Girl 1" },
    { src: "/images/girls/girl3.png", alt: "Girl 3" },
  ];
  
  return (
    <div className="bg-[#e2dfce] min-h-screen">
      <HeroParallax
        products={products}
        enableHover={false}
      />
      <AppleCardsSection />
      
      {/* Three static images with horizontal scroll on mobile */}
      <div className="py-10 md:py-14 px-4 md:px-8 bg-[#e2dfce]">
        <div className="max-w-5xl mx-auto">
          <ImageCarousel images={galleryImages} />
        </div>
      </div>
      
      {/* Enhanced Compare Section with animations */}
      {/* <CompareSection 
        firstImage="/images/gentleman/oldGenGentleman.webp"
        secondImage="/images/gentleman/oldGenGentleman.webp"
      /> */}

      <div className="py-12 md:py-16 px-4 md:px-8 bg-[#e2dfce]" style={{ paddingBottom: '0px' }}>
        <div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#242422] tracking-tight">
            איך מתנהג גנטלמן במועדון
          </h2>
          <div className="w-24 h-1 bg-[#242422] opacity-30 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg md:text-xl text-[#343432] mb-8 max-w-3xl mx-auto">
            הגנטלמן המודרני מתנהל לפי קוד התנהגות ייחודי. הנה כמה מהעקרונות המנחים אותו:
          </p>
        </div>
      </div>
      
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
    </div>
  );
}
