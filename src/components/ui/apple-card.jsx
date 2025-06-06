"use client";
import React, { useRef } from 'react';
import { motion } from 'framer-motion';

export const AppleCard = ({ title, subtitle, content, index }) => {
  const contentRef = useRef(null);
  
  // Soft gradient colors based on the site's color scheme
  const colors = [
    { 
      gradient: 'bg-gradient-to-br from-[#d4d1c080] to-[#e2dfce80]',
      border: 'border-[#e2dfce60]',
      hover: 'hover:from-[#d4d1c090] hover:to-[#e2dfce90]'
    },
    { 
      gradient: 'bg-gradient-to-br from-[#d4d1c080] to-[#e2dfce80]',
      border: 'border-[#e2dfce60]',
      hover: 'hover:from-[#d4d1c090] hover:to-[#e2dfce90]'
    },
    { 
      gradient: 'bg-gradient-to-br from-[#d4d1c080] to-[#e2dfce80]',
      border: 'border-[#e2dfce60]',
      hover: 'hover:from-[#d4d1c090] hover:to-[#e2dfce90]'
    },
  ];
  
  const cardColor = colors[index % colors.length];
  
  return (
    <motion.div 
      className={`${cardColor.gradient} ${cardColor.border} border rounded-3xl p-6 md:p-8 shadow-glass transition-all duration-300 h-full flex flex-col backdrop-blur-md glassmorphism-card relative overflow-hidden bg-opacity-40 group`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <h3 className="text-xl md:text-2xl font-bold mb-1 text-[#242422] text-center">{title}</h3>
      {subtitle && (
        <h4 className="text-md md:text-lg font-medium mb-4 text-[#242422] text-center opacity-80">{subtitle}</h4>
      )}
      {!subtitle && <div className="mb-3"></div>}
      
      <div 
        className="relative overflow-y-auto flex-grow custom-scrollbar pr-3"
        style={{ maxHeight: '300px' }}
        ref={contentRef}
      >
        <div className="text-[#242422] text-base md:text-lg leading-relaxed">
          {content}
        </div>
      </div>
      
      <div className="scroll-indicator absolute bottom-3 right-0 left-0 flex justify-center pointer-events-none">
        <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-bounce">
          <path d="M12 14L0 2L2.82 0L12 9.18L21.18 0L24 2L12 14Z" fill="#242422" fillOpacity="0.25"/>
        </svg>
      </div>
    </motion.div>
  );
};

export const AppleCardsSection = () => {
  const cards = [
    {
      title: "ערכים ועקרונות – אני בן אדם איכותי וגבר ערכי",
      content: (
        <>
          <p className="mb-4">
            ערכים הם דבר אוניברסלי ועל-זמני. הם מה שמעניק לנו את הערך שלנו בחיים בכל זמן ובכל מקום, ולכן ג'נטלמן אמיתי חייב להיות בעל עקרונות חזקים.
          </p>
          <p className="mb-4">
            עליו להיות חזק מנטלית, בלתי ניתן להזזה מהמטרות והאמונה שלו בעצמו.
            מטרתו העליונה של גנטלמן היא לפעול מתוך שליחות שבה הוא משרת אחרים פותר בעיות ומספק ערך.
          </p>
          <p className="mb-4">
          כדי להגיע לכך הוא חייב קודם כל לשרת את עצמו , להישאר בנאמנות עצמית ומיקוד פנים כדי שהוא יכול להיות הגרסה הכי טובה של עצמו כך שיוכל לעזור לאחרים גם להיות כאלה.
          </p>
        </>
      )
    },
    {
      title: "הבנת המשחק – המניעים הפסיכולוגיים של המין הנשי",
      content: (
        <>
          <p className="mb-4">
            המכשול העיקרי שהיה ותמיד יהיה עם נשים הוא חוסר ההבנה הכללית של הפסיכולגיה הנשית. איך הן פועלות, ומה המניעים הרגשיים שמפעילים אותן. כל אותם המקרים שחוזרים על עצמם ומשאירים אותך מתוכסל:
          </p>
          <ul className="list-disc list-inside mb-4 ml-4">
            <li>דחיות חוזרות במעודנים ובברים</li>
            <li>גברים "חלאות" שממשיכים להחליף בחורות כאילו כלום</li>
            <li>דייט שהלך טוב אבל קיבל תפנית שהבחורה לא חזרה אלייך</li>
            <li>הבחורה מהעבודה/לימודים שמשחקת איתך חם קר וזה לא מתקדם...</li>
          </ul>
          <p className="mb-4">
            במקום להתמקד בתוכן הדברים שהיא אומרת צריך להבין את המבנה "אל תקשיב למה שהיא אומרת, תסתכל על מה שהיא עושה." – כך ניתן להבין כיצד פועלים עקרונות המשיכה והפיתוי, איך לגרום לאישה לרצות אותך , ואיך לגרום לה לחשוב עליך בעדיפות על פני שאר הגברים...
          </p>
          <p className="mb-4">
            העובדה הפשוטה היא שנשים תמיד יבחנו אותך כגבר - אין בזה שום דבר אישי... וזאת הסיבה שאתה חייב להיות מודע לזה ולהבין איך לצלוח את המבחנים האלה כי כשאתה לא מבין אותם אתה נופל בהם שוב ושוב והבחורה מאבדת בך אמון בהדרגה.
          </p>
          <p className="mb-4">
            ברגע שאתה מבין נשים, אתה משחרר את כל האמונות המעכבות שלך על עצמך ולמה אתה "לא טוב עם נשים". אתה לומד להתמקד במה שקורה בראש שלה במקום במה שקורה בראש שלך ובדיאולג הפנימי האינסופי שלך..
          </p>
        </>
      )
    },
    {
      title: "השתייכות לקהילה – הכוח שבחבורה",
      content: (
        <>
          <p className="mb-4">
            מה שווה כוחו של ג'נטלמן אחד לבדו, לעומת הכוח של חבורת ג'נטלמנים, המאוחדים יחד ושואפים לאותה מטרה?
          </p>
          <p className="mb-4">
           להיות מוקף בג'נטלמנים אחרים זהו יתרון עצום – קהילה חזקה שדוחפת אחד את השני קדימה בפן המנטלי וההתפתחותי. חברי מועדון שמשתפים מניסיונם האישי, לומדים מהצלחות וכישלונות, ויוצרים סיעור מוחות גברי.
          </p>
          <p className="mb-4">
            מערכת קשרים חזקה התומכת אחד בשני, מספקת וינגמנים למשחק יום או לילה, ומאפשרת יצירת קשרים חדשים עם גברים איכותיים מכל הארץ.
          </p>
        </>
      )
    }
  ];

  return (
    <section className="py-16 md:py-0 px-4 md:px-8 bg-[#e2dfce]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card, index) => (
            <AppleCard 
              key={index}
              title={card.title}
              subtitle={card.subtitle}
              content={card.content}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}; 