"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function SignupForm() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phone: "",
    notes: ""
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  const inputFields = [
    {
      id: "firstname",
      label: "שם פרטי",
      type: "text",
      placeholder: "ג'נטלמן",
      required: true,
      containerClassName: "w-full",
      halfWidth: true
    },
    {
      id: "lastname",
      label: "שם משפחה",
      type: "text",
      placeholder: "ישראלי",
      required: true,
      containerClassName: "w-full",
      halfWidth: true
    },
    {
      id: "email",
      label: "כתובת אימייל",
      type: "email",
      name: "email",
      placeholder: "your@email.com",
      required: true,
      containerClassName: "mb-4"
    },
    {
      id: "phone",
      label: "מספר טלפון",
      type: "tel",
      placeholder: "050-0000000",
      required: true,
      containerClassName: "mb-4"
    },
    {
      id: "notes",
      label: "הערות",
      type: "textarea",
      placeholder: "דבר אליי ג'נטלמן",
      required: false,
      containerClassName: "mb-8"
    }
  ];

  return (
    <div className="max-w-md w-full mx-auto rounded-2xl p-4 md:p-8 bg-[#d6d3c2]/80 backdrop-blur-sm border border-[#c8c5b4] shadow-md" dir="rtl">
      <h2 className="font-bold text-xl text-[#2c2c2c]">
        ברוכים הבאים למועדון הג'נטלמן
      </h2>
      <p className="text-[#4a4a4a] text-sm max-w-sm mt-2">
        הירשמו למועדון כדי לקבל גישה לתוכן בלעדי ועדכונים
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 md:space-x-reverse mb-4">
          {inputFields.filter(field => field.halfWidth).map((field) => (
            <LabelInputContainer key={field.id} className={field.containerClassName}>
              <Label htmlFor={field.id} className="text-[#2c2c2c]">{field.label}</Label>
              <Input 
                id={field.id}
                placeholder={field.placeholder}
                type={field.type}
                required={field.required}
                className="bg-[#f0ede0] border-[#c8c5b4] focus-visible:ring-[#a19f92] text-[#2c2c2c]"
                value={formData[field.id]}
                onChange={handleChange}
              />
            </LabelInputContainer>
          ))}
        </div>
        
        {inputFields.filter(field => !field.halfWidth).map((field) => (
          <LabelInputContainer key={field.id} className={field.containerClassName}>
            <Label htmlFor={field.id} className="text-[#2c2c2c]">{field.label}</Label>
            {field.type === "textarea" ? (
              <div className="relative">
                <textarea
                  id={field.id}
                  placeholder={field.placeholder}
                  required={field.required}
                  className="bg-[#f0ede0] border border-[#c8c5b4] hover:border-[#a19f92]/70 focus:border-[#a19f92] focus:ring-2 focus:ring-[#a19f92]/20 focus:outline-none text-[#2c2c2c] rounded-md p-4 min-h-[150px] w-full resize-y shadow-inner transition-all duration-200 font-light"
                  value={formData[field.id]}
                  onChange={handleChange}
                />
                <div className="absolute bottom-2 right-2 text-[#a19f92]/50 text-xs">
                  {formData[field.id].length > 0 ? `${formData[field.id].length} תווים` : ''}
                </div>
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#a19f92]/30 rounded-tl-sm"></div>
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#a19f92]/30 rounded-tr-sm"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#a19f92]/30 rounded-bl-sm"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#a19f92]/30 rounded-br-sm"></div>
              </div>
            ) : (
              <Input 
                id={field.id}
                placeholder={field.placeholder}
                type={field.type}
                name={field?.name}
                required={field.required}
                className="bg-[#f0ede0] border-[#c8c5b4] focus-visible:ring-[#a19f92] text-[#2c2c2c]"
                value={formData[field.id]}
                onChange={handleChange}
              />
            )}
          </LabelInputContainer>
        ))}

        <button
          className="bg-gradient-to-br relative group/btn from-[#3c3c3c] to-[#1a1a1a] block w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] cursor-pointer"
          type="submit"
        >
          הרשמה &larr;
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-[#a19f92] to-transparent my-8 h-[1px] w-full" />
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-[#a19f92] to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-[#a19f92] to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
}; 