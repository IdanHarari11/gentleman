"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/ui/section-header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = React.forwardRef(
  ({ title, description, items, contactInfo, id, className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        id={id}
        className={cn("py-10 md:py-14 px-4 md:px-8 bg-[#e2dfce]", className)}
        {...props}
      >
        <SectionHeader 
          title={title}
          description={description}
          paddingBottom="16px"
        />
        
        <div className="container mx-auto px-4 pb-16">
          <div className="max-w-3xl mx-auto">
            {/* FAQ Items */}
            <Accordion type="single" collapsible className="space-y-4">
              {items.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className={cn(
                    "mb-4 rounded-xl",
                    "bg-[#d4d1c0] text-[#242422]",
                    "border border-[#242422]/10",
                    "shadow-sm"
                  )}
                >
                  <AccordionTrigger 
                    className={cn(
                      "px-6 py-4 text-right hover:no-underline",
                      "data-[state=open]:border-b data-[state=open]:border-[#242422]/10"
                    )}
                  >
                    <div className="flex flex-col w-full items-start">
                      {item.category && (
                        <Badge
                          variant="primary"
                          className="text-xs font-normal px-3 py-1 bg-[#c4c1b0] border border-[#242422]/20 mb-1"
                        >
                          {item.category}
                        </Badge>
                      )}
                      <h3 className="text-lg font-medium text-[#242422] group-hover:text-[#242422] text-right w-full">
                        {item.question}
                      </h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pt-4 pb-6">
                    <p className="text-[#343432] leading-relaxed whitespace-pre-line">
                      {item.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* Contact Section */}
            {contactInfo && (
              <div className="mt-12 text-center">
                <p className="text-[#343432] mb-4">
                  {contactInfo.title}
                </p>
                {contactInfo.description && (
                  <p className="text-sm text-[#343432] mb-4">
                    {contactInfo.description}
                  </p>
                )}
                <Button 
                  size="sm" 
                  className="bg-[#242422] hover:bg-[#343432] text-[#e2dfce] cursor-pointer"
                  onClick={() => {
                    document.getElementById('signup').scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {contactInfo.buttonText}
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }
);

FaqSection.displayName = "FaqSection";

export { FaqSection }; 