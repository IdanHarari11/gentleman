"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function AboutMe({ className }) {
  // Sample images - replace with actual images from your project
  const [images, setImages] = useState([
    "/images/Tomer/tomer2.jpg",
    "/images/Tomer/planning.jpg",
    "/images/Tomer/friends.jpg",
    "/images/Tomer/moreFriends.jpg",
    "/images/Tomer/tomer3.jpg",
  ]);

  const [mainImageIndex, setMainImageIndex] = useState(0);

  // Function to set the main image without swapping positions
  const setMainImage = (index) => {
    if (index === mainImageIndex) return;
    setMainImageIndex(index);
  };

  // Condensed and improved text content
  const aboutText = `
    אהלן, תומר עמיאל, בן 25, יזם, חובב ספורט ואתגרים, נווד דיגיטלי המטייל בעולם. דובר 5 שפות: עברית, אנגלית, ספרדית, פורטוגזית וצרפתית.
   
    מאסטר NLP, בוגר קורס קופיירטינג של האוניברסיטה הפתוחה, וקורס שיווק דיגיטלי של מכללת איקום. מוסמך קורס ברמנים של איגוד הברמנים הבינלאומי מבית הספר EBS בלונדון.
    
    בחמש השנים האחרונות חייתי בכל יבשת בעולם (מלבד אפריקה), למדתי על תרבויות שונות ואיך "המשחק" עובד בכל מקום.
    
    בשנה שעברה עברתי לגור בבודפשט למשך תקופה, שם שיניתי את אורח חיי, האמונות והערכים שלי מקצה לקצה. האתגר הגדול ביותר שלקחתי על עצמי היה לשפר את יכולות התקשורת שלי, במיוחד עם נשים, ולשחרר את העצמי האותנטי שלי לעולם.
    
    עברתי תהליך של התפתחות אישית ומסע פנימי דרך פעילויות שונות שכללו: ריצות, אימוני כושר, שיעורי סלסה, איגרוף תאילנדי, לימודי NLP וקריאת עשרות ספרים ופודקאסטים בתחום היחסים הבינאישיים.
    
    הניסיון שצברתי במפגשים עם בחורות ואנשים מכל העולם הוביל להקמת "ג'נטלמנס טיים" - פלטפורמה שמעניקה לגברים את הידע הדרוש להבנת המין הנשי ולשיפור יכולות התקשורת האינטימיות.
  `;

  return (
    <section className={cn("py-16 px-4 md:px-8 bg-[#e2dfce]", className)}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          {/* Left side - Main image and thumbnails */}
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            {/* Main image */}
            <div className="relative w-full aspect-[4/5] overflow-hidden  rounded-lg shadow-lg border-2 border-amber-700/20">
              <Image 
                src={images[mainImageIndex]} 
                alt="תומר עמיאל" 
                fill 
                className="object-cover transition-all duration-500"
                priority
              />
            </div>
            
            {/* Thumbnail images */}
            <div className="flex gap-4 justify-center">
              {images.map((img, idx) => {
                // Skip the current main image in the thumbnails
                if (idx === mainImageIndex) return null;
                
                return (
                  <button
                    key={idx}
                    onClick={() => setMainImage(idx)}
                    className={`relative w-24 h-24 overflow-hidden rounded-md shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border border-amber-700/20 ${
                      idx === mainImageIndex ? 'ring-2 ring-amber-500' : ''
                    }`}
                  >
                    <Image 
                      src={img} 
                      alt={`תמונה ${idx + 1}`} 
                      fill 
                      className="object-cover"
                    />
                  </button>
                );
              })}
            </div>
          </div>
          
          {/* Right side - Text content */}
          <div className="w-full md:w-1/2 text-right flex flex-col gap-2">
            <div className="prose prose-lg max-w-none whitespace-pre-line leading-relaxed text-amber-900 bg-amber-50/40 p-6 rounded-lg shadow-sm border border-amber-700/10">
              <p className="pr-2 font-medium text-lg">
                2025 כאן והיום זה  מובן לי יותר מתמיד זה לא על מי שאתה, זה על כמה אתה מבין את המשחק.
                כמו שאתה רואה אני לא מה- 20 אחוז שנולדו עם זה אבל ברגע שלמדתי את הכללים התוצאות לא איחרו לבוא.
                לאחר שזה עבד לי החלטתי שאני חייב להעביר את זה הלאה אז אם אתה מוכן להפסיק לנחש ולהתחיל לשחק חכם - זאת ההזדמנות שלך.
              </p>
            </div>
            <div className="prose prose-lg max-w-none whitespace-pre-line leading-relaxed text-amber-900 bg-amber-50/40 p-6 rounded-lg shadow-sm border border-amber-700/10">
              {aboutText}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 