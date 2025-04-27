"use client";

import { SectionHeader } from "@/components/ui/section-header";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/constants/index";
import Link from "next/link";

export default function PricingPage() {
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
        description="הצטרף למועדון הג'נטלמן המודרני"
      />
      
      <section className="py-10 md:py-14 px-4 md:px-8 bg-[#e2dfce]">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center mb-12">
            <p className="text-center font-bold text-xl mb-6">*דמי הצטרפות למועדון 40₪ חד פעמיים לכל החיים*</p>
            <div className="flex flex-col items-center gap-4 mb-8">
              <a 
                href="#" 
                className="inline-flex items-center justify-center bg-[#242422] text-[#e2dfce] rounded-md px-6 py-3 text-lg font-medium transition-colors hover:bg-[#343432]"
              >
                השלב הבא במשחק שלך
              </a>
              <span className="text-lg">👇🏻</span>
              <a 
                href="#" 
                className="inline-flex items-center justify-center bg-[#242422] text-[#e2dfce] rounded-md px-6 py-3 text-lg font-medium transition-colors hover:bg-[#343432]"
              >
                תהפוך אותי לגנטלמן מודרני תומר
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* תוכנית חודשית */}
            <div className="bg-[#d4d1c0] rounded-xl p-6 shadow-md border border-[#242422]/10">
              <h3 className="text-xl font-bold text-[#242422] mb-4 text-center">תשלום חודשי</h3>
              <p className="text-2xl font-bold text-center mb-4">199₪<span className="text-lg font-normal"> / חודש</span></p>
              <div className="border-t border-[#242422]/20 pt-4 mb-6">
                <p className="text-center text-[#343432]">תשלום חודשי, בכל פעם</p>
              </div>
            </div>
            
            {/* תוכנית חצי שנתית */}
            <div className="bg-[#d4d1c0] rounded-xl p-6 shadow-md border border-[#242422]/10 transform md:scale-105 z-10 relative">
              <div className="absolute top-0 right-0 left-0 -mt-4 flex justify-center">
                <span className="bg-[#242422] text-[#e2dfce] text-sm font-medium px-4 py-1 rounded-full">המומלץ ביותר</span>
              </div>
              <h3 className="text-xl font-bold text-[#242422] mb-4 text-center">חצי שנתי</h3>
              <p className="text-2xl font-bold text-center mb-4">389₪</p>
              <div className="border-t border-[#242422]/20 pt-4 mb-6">
                <p className="text-[#343432] mb-2">✓ כולל דמי הצטרפות</p>
                <p className="text-[#343432] mb-2">✓ ארבעה חודשיים ראשונים כלולים במחיר ללא עלות</p>
                <p className="text-[#343432] mb-2">✓ חודש אחרון ב-150₪</p>
                <p className="text-[#343432] text-sm text-center pt-2 font-medium line-through">במקום ב-1234₪ בתשלום חודשי</p>
              </div>
            </div>
            
            {/* תוכנית שנתית */}
            <div className="bg-[#d4d1c0] rounded-xl p-6 shadow-md border border-[#242422]/10">
              <h3 className="text-xl font-bold text-[#242422] mb-4 text-center">שנתי</h3>
              <p className="text-2xl font-bold text-center mb-4">787₪</p>
              <div className="border-t border-[#242422]/20 pt-4 mb-6">
                <p className="text-[#343432] mb-2">✓ כולל דמי הצטרפות</p>
                <p className="text-[#343432] mb-2">✓ שמונה חודשיים ראשונים ללא עלות כלולים במחיר</p>
                <p className="text-[#343432] mb-2">✓ חודש אחרון ב-150₪</p>
                <p className="text-[#343432] mb-2">✓ כולל 2 שיחות אימון איתי</p>
                <p className="text-[#343432] text-sm text-center pt-2 font-medium line-through">במקום ב-2428₪ תשלום חודשי</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 flex justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center bg-[#d4d1c0] text-[#242422] rounded-md px-6 py-3 text-lg font-medium transition-colors hover:bg-[#c4c1b0] border border-[#242422]/20"
            >
              חזרה לדף הבית
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 