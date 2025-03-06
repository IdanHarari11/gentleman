"use client";
import React, { useRef } from 'react';
import { motion } from 'framer-motion';

export const AppleCard = ({ title, content, index }) => {
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
      <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#242422]">{title}</h3>
      
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
      title: "ערכים ועקרונות – אני בן אדם איכותי וגבר איכותי",
      content: (
        <>
          <p className="mb-4">
            ערכים הם דבר אוניברסלי ועל-זמני. הם מה שמעניק לנו את הערך שלנו בחיים, ולכן ג'נטלמן אמיתי חייב להיות בעל עקרונות חזקים.
          </p>
          <p className="mb-4">
            עליו להיות חזק מנטלית, בלתי ניתן להזזה מהמטרות והאמונה שלו בעצמו.
            המטרה העליונה של ג'נטלמן היא להגיע למקום שבו הוא משרת אחרים, פותר בעיות ומספק ערך.
          </p>
          <p className="mb-4">
            כדי להגיע לכך, הוא חייב קודם כל לשרת ולהיות נאמן לעצמו – להיות הגרסה הכי טובה של עצמו, כך שיוכל לעזור לאחרים להיות כאלה גם כן.
          </p>
        </>
      )
    },
    {
      title: "הבנת המשחק – המניעים הפסיכולוגיים של בני האדם ",
      content: (
        <>
          <p className="mb-4">
            כדי להצליח, ג'נטלמן חייב להבין את המשחק – ובשביל להבין את המשחק, עליו להבין את השחקנים האחרים.
            כל מה שאנחנו רוצים בחיים – מערכות יחסים, קשרים עסקיים וכסף – נמצא אצל אנשים אחרים.
          </p>
          <p className="mb-4 font-bold">האתגר המרכזי עם נשים</p>
          <p className="mb-4">
            הבעיה העיקרית של גברים עם נשים היא לא חוסר היכולת לגשת ולתקשר, אלא חוסר ההבנה של המין הנשי.
            רוב האינטראקציות כיום מתבצעות אונליין, ולכן מבוכה ראשונית היא כבר לא מכשול משמעותי.
          </p>
          <p className="mb-4">
            אך הכניסה לעולם הנשים ללא ידע מקדים דומה להליכה לתוך גוב הלביאות.
            כאשר מבינים לעומק כיצד נשים חושבות, מבינים שהמערכת שלהן פועלת באופן דומה, ללא קשר למראה החיצוני שלהן.
          </p>
          <p className="mb-4">
            במקום להתמקד בתוכן הדברים שנאמרים, יש להבין את המבנה – איך יש לומר ולעשות את הדברים כך שהבחורה תגיב בצורה הרצויה.
            "אל תקשיב למה שהיא אומרת, תסתכל על מה שהיא עושה." – כך ניתן להבין כיצד פועלים משיכה ופיתוי, ואיך לגרום לאישה לרצות אותך ולחשוב עליך כל הזמן.
          </p>
          <p className="mb-4 font-bold">שחרור מאמונות מעכבות</p>
          <p className="mb-4">
            ברגע שאתה מבין נשים, אתה משחרר את כל האמונות המעכבות שלך על עצמך ולמה אתה "לא טוב עם נשים".
            אתה לומד להתמקד במה שקורה בראש שלה במקום במה שקורה בראש שלך.
          </p>
          <p className="mb-4">
            הכיול עם התגובות הרגשיות שלה והתקדמות איתן בהדרגה מבטיחים הצלחה.
            לאחר שנפטרת מהאמונות המעכבות ואימצת את "הוראות ההפעלה" של מוח נשי, כל שנותר לך הוא לאמץ אמונות חדשות ומעצימות שיהפכו אותך לזכר מושך, חזק מנטלית ובעל ערכים.
          </p>
        </>
      )
    },
    {
      title: "השתייכות לקהילה – הכוח שבחבורה",
      content: (
        <>
          <p className="mb-4">
            מה שווה כוחו של ג'נטלמן אחד לבדו, לעומת הכוח של קבוצה מאוחדת של ג'נטלמנים השואפים לאותה מטרה?
          </p>
          <p className="mb-4">
            להיות מוקף בג'נטלמנים אחרים זהו יתרון עצום – קהילה חזקה שדוחפת אחד את השני קדימה.
            חברי המועדון משתפים מניסיונם האישי, לומדים מהצלחות וכישלונות, ויוצרים סיעור מוחות גברי.
          </p>
          <p className="mb-4">
            מערכת קשרים חזקה התומכת אחד בשני, מספקת וינגמנים למשחק יום או לילה, ומאפשרת יצירת קשרים חזקים עם גברים איכותיים מכל הארץ.
          </p>
          <p className="mb-4">
            דמיין לעצמך חברים במועדון סודי, שבהצגת כרטיס אחד לשני – שניכם חולקים ידע ייחודי, כזה שמעניק לכם כוח ועוצמה שלאחרים אין.
            הכוח המשותף שלכם משתווה לכוחם של שני סוכני לילה שקטים וקטלניים.
          </p>
        </>
      )
    }
  ];

  return (
    <section className="py-16 md:py-0 px-4 md:px-8 bg-[#e2dfce]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-[#242422]">
          המודל החדש של הג'נטלמן המודרני לשנת 2025
        </h2>
        <p className="text-xl md:text-2xl text-center mb-12 text-[#242422]">
          המועדון מבוסס על שלושה קטגוריות עיקריות:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card, index) => (
            <AppleCard 
              key={index}
              title={card.title}
              content={card.content}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}; 