"use client";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function ClubContentTimeline() {
  const data = [
    {
      title: "דינמיקה נשית",
      content: (
        <div className="text-right">
          <p className="text-[#343432] text-sm md:text-base font-normal mb-4 leading-relaxed">
            יצירת תקשורת בעלת כוונה ואופי מיני שמטרתה לקדם את השיח לאינטרקציות מיניות.
          </p>
          <p className="text-[#343432] text-sm md:text-base font-normal mb-8 leading-relaxed">
            יצירת מערכות יחסים עמוקות ואיכותיות יותר ומציאת השותפה הנכונה והמתאימה למסע ולמשחק שלך.
          </p>
          <div className="bg-[#d4d1c0] bg-opacity-30 p-4 rounded-lg border-r-2 border-[#242422] mb-6">
            <h4 className="font-bold text-[#242422] mb-2">תכנים מרכזיים:</h4>
            <ul className="list-disc list-inside space-y-2 text-[#343432] text-sm md:text-base">
              <li>התפתחות אישית – שינוי מיינדסט, העצמה גברית, שחרור אנרגיה גברית (טוסטרון)</li>
              <li>גיימינג / יכולת משחק - עקרונות משיכה ופיתוי</li>
              <li>דינמיקה ופסיכולגיה נשית</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "כישורים חברתיים",
      content: (
        <div className="text-right">
          <p className="text-[#343432] text-sm md:text-base font-normal mb-4 leading-relaxed">
            פסיכולגיה אנושית על קצה המזלג, יחסים בינאישיים ובניית אמון, כלי פרקטיים לתקשורת טובה יותר.
          </p>
          <p className="text-[#343432] text-sm md:text-base font-normal mb-8 leading-relaxed">
            כלי השפעה ושכנוע, עבודה עם התנגדויות ואמונות מגבילות.
          </p>
          <div className="bg-[#d4d1c0] bg-opacity-30 p-4 rounded-lg border-r-2 border-[#242422] mb-6">
            <h4 className="font-bold text-[#242422] mb-2">תכנים מרכזיים:</h4>
            <ul className="list-disc list-inside space-y-2 text-[#343432] text-sm md:text-base">
              <li>כלי השפעה ושכנוע (טכניקות NLP מתקדמות לשינוי אמונות)</li>
              <li>זריזות לשון והחזקת היד העליונה במצבים חברתיים</li>
              <li>מסגור מחדש של סיטואציות לטובתך</li>
              <li>כלים לתקשורת טובה יותר, יצירת קשרים חדשים ובניית אמון</li>
              <li>כישורים חברתיים, דינמיקה חברתית ועקרונות עמדת הכוח</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "תכנים נוספים",
      content: (
        <div className="text-right">
          <p className="text-[#343432] text-sm md:text-base font-normal mb-4 leading-relaxed">
            תכנים מוספים של ערכים ועקרונות שיעזרו לך להפוך לגנטלמן מודרני אמיתי.
          </p>
          <div className="bg-[#d4d1c0] bg-opacity-30 p-4 rounded-lg border-r-2 border-[#242422] mb-6">
            <h4 className="font-bold text-[#242422] mb-2">בונוסים מיוחדים:</h4>
            <ul className="list-disc list-inside space-y-2 text-[#343432] text-sm md:text-base">
              <li>המילון השלם של כל מונחי הפיק אפ מ-א׳ ועד ת׳</li>
              <li>סודות מעולם הפסיכולגיה האפלה</li>
              <li>המדע שמאחורי כריזמה והומור</li>
            </ul>
          </div>
        </div>
      ),
    },
  ];
  
  return (
    <div className="min-h-screen w-full">
      <Timeline data={data} />
    </div>
  );
} 