"use client";

import { SectionHeader } from "@/components/ui/section-header";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/constants/index";
import Link from "next/link";
import Image from "next/image";
import PayPalCheckoutButton from '@/components/PayPalCheckoutButton';

export default function PricingPage() {
  // Example product/plan data - replace with your actual data source
  const monthlyPlan = {
    name: "ג'נטלמן חובבן",
    price: '185', // Price as a string
  };

  const halfYearPlan = {
    name: "ג'נטלמן פרו",
    price: '449', // Price as a string
  };

  const yearlyPlan = {
    name: "ג'נטלמן שליט המשחק",
    price: '790', // Price as a string
  };

  // You would likely have more complex logic here to display different plans
  // and potentially select one before showing the button.

  return (
    <main className="bg-[#e2dfce] min-h-screen relative" dir="rtl">
      {/* Add the FloatingNav component */}
      <FloatingNav 
        navItems={navItems} 
        className="bg-[#e2dfce]/30 border-[#a19f8c]/30 z-[9999]"
      />
      
      {/* Header Section */}
      <div className="pt-24 md:pt-32"></div>
      
      {/* Pricing Section */}
      <SectionHeader
        title="תוכניות מחיר"
        description="הצטרף למועדון הג'נטלמנס ותתחיל לחוות חוויות
משוגעות ששמורות לג'נטלמים בלבד !"
      />
      
      <section className="py-10 md:py-14 px-4 md:px-8 bg-[#e2dfce]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* ג'נטלמן חובבן */}
            <div className="bg-[#f3f1f2]/70 backdrop-blur-md rounded-xl p-6 shadow-md border border-[#242422]/20 hover:border-[#242422]/30 transition-all duration-300 backdrop-filter flex flex-col h-full">
              <div className="flex justify-center mb-4">
                <Image
                  src="/images/gentleman/monthly.png"
                  alt="ג'נטלמן חובבן"
                  width={150}
                  height={150}
                  className="rounded-md"
                />
              </div>
              <h3 className="text-xl font-bold text-[#242422] mb-4 text-center">ג'נטלמן חובבן</h3>
              <p className="text-2xl font-bold text-center mb-4">185₪<span className="text-lg font-normal"> / חודש</span></p>
              <div className="border-t border-[#242422]/20 pt-4 mb-6">
                <p className="text-[#343432] mb-2">✓ תשלום חודשי</p>
                <p className="text-[#343432] mb-2">✓ גישה לכל התכנים והצ'אט של המועדון</p>
                <p className="text-[#343432] mb-2">✗ לא כולל את הבונוסים השונים</p>
              </div>
              <div className="flex justify-center mt-auto pt-4">
                <PayPalCheckoutButton product={monthlyPlan} />
              </div>
            </div>
            
            {/* ג'נטלמן פרו */}
            <div className="bg-[#f3f1f2]/70 backdrop-blur-md rounded-xl p-6 shadow-md border border-[#242422]/10 transform md:scale-105 z-10 relative flex flex-col h-full">
              <div className="absolute top-0 right-0 left-0 -mt-4 flex justify-center">
                <span className="bg-[#242422] text-[#e2dfce] text-sm font-medium px-4 py-1 rounded-full">המומלץ ביותר</span>
              </div>
              <div className="flex justify-center mb-4 mt-2">
                <Image
                  src="/images/gentleman/halfYear.png"
                  alt="ג'נטלמן פרו"
                  width={150}
                  height={150}
                  className="rounded-md"
                />
              </div>
              <h3 className="text-xl font-bold text-[#242422] mb-4 text-center">ג'נטלמן פרו</h3>
              <p className="text-2xl font-bold text-center mb-4">449₪</p>
              <div className="border-t border-[#242422]/20 pt-4 mb-6">
                <p className="text-[#343432] mb-2">✓ תשלום חד פעמי לכל החיים</p>
                <p className="text-[#343432] mb-2">✓ גישה לכל התכנים והצ'אט של המועדון</p>
                <p className="text-[#343432] mb-2">✓ כולל את הבונוסים השונים</p>
                <p className="text-[#343432] mb-2">✓ ניתוחי ווידיאו שלי ושל שחקנים אחרים</p>
                {/* <p className="text-[#343432] text-sm text-center pt-2 font-medium line-through">במקום ב-1234₪ בתשלום חודשי</p> */}
              </div>
              <div className="flex justify-center mt-auto pt-4">
                <PayPalCheckoutButton product={halfYearPlan} />
              </div>
            </div>
            
            {/* ג'נטלמן שליט המשחק */}
            <div className="bg-[#f3f1f2]/70 backdrop-blur-md rounded-xl p-6 shadow-md border border-[#242422]/10 flex flex-col h-full">
              <div className="flex justify-center mb-4">
                <Image
                  src="/images/gentleman/year.png"
                  alt="ג'נטלמן שליט המשחק"
                  width={150}
                  height={150}
                  className="rounded-md"
                />
              </div>
              <h3 className="text-xl font-bold text-[#242422] mb-4 text-center">ג'נטלמן שליט המשחק</h3>
              <p className="text-2xl font-bold text-center mb-4">790₪</p>
              <div className="border-t border-[#242422]/20 pt-4 mb-6">
                <p className="text-[#343432] mb-2">✓ תשלום חד פעמי לכל החיים</p>
                <p className="text-[#343432] mb-2">✓ כולל את הבונוסים השונים</p>
                <p className="text-[#343432] mb-2">✓ ניתוחי ווידיאו שלי ושל שחקנים אחרים</p>
                <p className="text-[#343432] mb-2">✓ כולל 3 שיחות אימון איתי</p>
                <p className="text-[#343432] mb-2">✓ תכני מיניות שיבטיחו לך יכולות שג'נטלמן אמיתי לעולם לא יוכל לחשוף בציבור</p>
                {/* <p className="text-[#343432] text-sm text-center pt-2 font-medium line-through">במקום ב-2428₪ תשלום חודשי</p> */}
              </div>
              <div className="flex justify-center mt-auto pt-4">
                <PayPalCheckoutButton product={yearlyPlan} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 