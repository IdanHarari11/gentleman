"use client";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function ClubContentTimeline() {
  const data = [
    {
      title: "המין הנשי",
      content: (
        <div className="text-right">
          <p className="text-[#343432] text-sm md:text-base font-normal mb-4 leading-relaxed">
            יצירת תקשורת בעלת כוונה ואופי מיני שמטרתה לקדם את השיח שלך עם נשים ולהביא אותך ליותר אינטרקציות מיניות.
          </p>
          <p className="text-[#343432] text-sm md:text-base font-normal mb-8 leading-relaxed">
            מציאת השותפה הנכונה לך, ותחזוק מערכות יחסים עמוקות ואיכותיות יותר.
          </p>
          <div className="bg-[#d4d1c0] bg-opacity-30 p-4 rounded-lg border-r-2 border-[#242422] mb-6">
            <h4 className="font-bold text-[#242422] mb-2">תכנים מרכזיים:</h4>
            <ul className="list-disc list-inside space-y-2 text-[#343432] text-sm md:text-base">
              <li>התפתחות אישית – שינוי מיינדסט , הגברת טוסטרון ואנרגיה גברית, בניית ערך גבוהה</li>
              <li>גיימינג / יכולת משחק - עקרונות משיכה ופיתוי, פיק אפ תכלס ופרקטיקה</li>
              <li>טבע נשי - פסיכולגיה והיפוגרמיה נשית, זכר אלפא ובטא, סוגי בחינות</li>
              <li> הבדלים עיקריים בין זוגיות לרווקות – איך להתנהל נכון כדי שהיא תרצה אותך תמיד בקרבתה.</li>
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
            הבנה טובה יותר של פסיכולגיה אנושית והמניעים שמאחורי הפעולות שלנו
          </p>
          <p className="text-[#343432] text-sm md:text-base font-normal mb-4 leading-relaxed">
            שיפור יחסים בינאשיים ובניית אמון במערכות יחסים לטווח ארוך
          </p>
          <p className="text-[#343432] text-sm md:text-base font-normal mb-8 leading-relaxed">
          הרחבת סט הכלים שלך לתקשורת טובה יותר
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
      title: "בונוסים מיוחדים",
      content: (
        <div className="text-right">
          {/* <p className="text-[#343432] text-sm md:text-base font-normal mb-4 leading-relaxed">
          </p> */}
          <div className="bg-[#d4d1c0] bg-opacity-30 p-4 rounded-lg border-r-2 border-[#242422] mb-6">
            <h4 className="font-bold text-[#242422] mb-2">תכנים נוספים:</h4>
            <ul className="list-disc list-inside space-y-2 text-[#343432] text-sm md:text-base">
              <li>המילון השלם של כל מונחי הפיק אפ מ-א׳ ועד ת׳</li>
              <li>סודות מעולם הפסיכולגיה האפלה</li>
              <li>המדע שמאחורי כריזמה והומור</li>
              <li>מאסטר טקסטינג משיכה דרך רשתות חברתיות ואפליקציות היכרויות</li>
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