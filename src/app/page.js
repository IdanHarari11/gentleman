import { HeroParallax } from "@/components/ui/hero-parallax";
import { AppleCardsSection } from "@/components/ui/apple-card";
import { CompareSection } from "@/components/ui/compare-section";
import { MultiStepLoader } from "@/components/ui/multi-step-loader";
import { ClubContentTimeline } from "@/components/club-content-timeline";
import Image from "next/image";
import { ImageCarousel } from "@/components/ui/image-carousel";
import { FaqSection } from "@/components/ui/faq-section";
import { SectionHeader } from "@/components/ui/section-header";

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
  
  const faqItems = [
    {
      question: "למה שאני אשלם כסף על תכנים שיש לי כל כך הרבה מקורות בחינם באינטרנט שאני יכול לצפות בהם?",
      answer: "התשובה בגוף השאלה \"כל כך הרבה מקורות\" .. אתה חי בעידן שבו כולם מתחרים על תשומת הלב שלך יש מבחר כל כך גדול שם בחוץ, אתה מוצף... האנרגיות והמשאבים שלך מוגבלים לכל יום שעובר והזמן שלך יקר, יקר מאוד. כאשר אתה מתפזר בין כל כך הרבה אנשים, בין כל כך הרבה מקורות מידע שונים אתה מאבד מיקוד אתה לא באמת יודע מה עובד ולא עובד עד שאתה לא מנסה בעצמך, ושכזה קורה זה גוזל ממך זמן רב אנרגיות ומוטיבציה להמשך פעולה.\n\nבגנטלמנס טיים כל סרטון, כל פוסט שעולה נבדק מספר פעמיים אתה יכול לראות מכל התכנים החינמיים שאני מעלה שאני מביא את התוכן הכי איכותי שקיים ובסטנדרטים הכי גבוהים שיש. כל זה לאחר שאני מבצע מחקר מעמיק בנושא קורא עליו בכמה מקורות שונים באינטרנט כדי לאמת את אמיתו ולאחרמכן הולך ובוחן אותו במציאות - במשחק. פליי טיים במהותה היא המסננת של האינטרנט של החומר התיאורטי הכי רלוונטי ושימושי שם בחוץ וגנטלמנס טיים הוא קצה חוד החנית, כלומר העילית של התוכן הפרקטי.",
      category: "תמחור",
    },
    {
      question: "למה שאני אקשיב לך ולא לאחרים?",
      answer: "ניסיון פרקטי פיזי מעשי בשטח נקודה. העניין באינטרנט של היום הוא שיש שני סוגים של תכנים שאתה צורך אחד הוא של האמת המקובלת והשני הוא של האמת הפרקטית. הראשון שייך לאנשים שמחקים את כל מהשהם שומעים באינטנרט שמדברים על מה שמקובל שיט ממוחזר ומאוס שחוזר על עצמו בלי שום אותנטיות או נשמה כי נוח לדבר על זה נוח, נוח לא לבצע את עבודת המחקר, נוח שלא שופטים אותך יותר מידי, או שכן שופטים אותך ואתה מתעלם ומשחק אותה פייק.\n\nהתוכן השני, הוא של האמת הפרקטית אנשים שבאמת הלכו את הדרך שהם walk the walk ו talk talk שהם מדברים אלייך מניסיון אמיתי של מה שעובד ולא עובד מדברים שהם באמת בחנו במציאות בשטח עם אנשים אמיתיים.",
      category: "אמינות",
    },
    {
      question: "תוך כמה זמן אני אראה תוצאות עם נשים?",
      answer: "תוצאות והצלחה עם נשים מושפעות מכמה גורמים: האמונות שלך - שלך בעצמך, על נשים, ועל הזהות שלך. כל אלה תהליכים שקורים בתת המודע שלך גם אם תרצה להאמין בזה מאוד במודע לא תצליח להתמיד עם זה באופן עקבי ואמיתי כי אתה חייב לשכנע את בעל הבית את תת המודע זה נובע מהוכחות פיזיות או ראיתיות שחוזרות על עצמן שמובילות לשינויי אמונה תת מודעים.\n\nאתה חייב להיחשף לכמה שיותר חומר עיוני וכמה שיותר נשים בו זמנית, רבע התמדה לא תיתן לך כלום וגם לא חצי תוצאות פרקטיות עם נשים קורות... תתפלא לשמוע... עם נשים אמיתיות! רק שילוב של שתיהם ידע עיוני עם ידע מעשי הידע שאתה לומד על בשרך יבטיח לך תוצאות.",
      category: "תוצאות",
    },
    {
      question: "האם העובדה שאני משלם כסף כדי להצליח עם נשים ולשפר כישורים חברתיים אומרת עליי משהו?",
      answer: "זה אומר שאתה עושה צעד משמעותי להיות הבן אדם / שחקן שאתה רוצה להיות בחיים / במשחק ואתה דואג לעתיד שלך. שבו אתה שם את עצמך במקום הראשון. מפסיק להקשיב לאמונות שליליות ומורידות של חברים שלך, שלא עושים כלום עם עצמם. ומוציא מהכסף שלך (שבא והולך כל כמה שבועות מחדש) על משהו שבאמת נותן לך ערך אמיתי לחיים, יותר מכל דבר אחר.\n\nתזכור את הדבר הבא אנחנו גברים התפיסה שלנו על המציאות שונה לגמרי משל נשים אנחנו יצורים לוגיים ונשים הן יצורים רגשיים אנחנו לא אמורים ולא מסוגלים להבין נשים לגמרי לבד בכוחות עצמנו ולכן אין שום בושה או הורדת ערך בהיפתחות לחוויה של למידה והשתפרות.",
      category: "ערך",
    },
  ];

  return (
    <div className="bg-[#e2dfce] min-h-screen">
      <HeroParallax
        products={products}
        enableHover={false}
      />

      <SectionHeader
        title="המודל החדש של הג'נטלמן המודרני לשנת 2025"
        description="המועדון מבוסס על שלושה קטגוריות עיקריות:"
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
