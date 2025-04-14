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
  });
  
  const [status, setStatus] = useState({
    submitting: false,
    success: null,
    error: null,
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: null, error: null });
    
    try {
      const response = await fetch('/api/email/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstname: formData.firstname,
          lastname: formData.lastname,
          email: formData.email,
        }),
      });
      
      const result = await response.json();
      
      if (result.success) {
        setStatus({
          submitting: false,
          success: 'תודה! המשפטים המנצחים נשלחו לאימייל שלך.',
          error: null,
        });
        
        // איפוס הטופס
        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          password: '',
        });
      } else {
        setStatus({
          submitting: false,
          success: null,
          error: result.error || 'אירעה שגיאה בשליחת האימייל',
        });
      }
    } catch (error) {
      setStatus({
        submitting: false,
        success: null,
        error: error.message || 'אירעה שגיאה בשליחת האימייל',
      });
    }
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
    }
  ];

  return (
    <div className="max-w-md w-full mx-auto rounded-2xl p-4 md:p-8 bg-[#d6d3c2]/80 backdrop-blur-sm border border-[#c8c5b4] shadow-md" dir="rtl">
      <h2 className="font-bold text-xl text-[#2c2c2c]">
        השאר פרטים כדי לקבל את המשפטים עכשיו
      </h2>
      <p className="text-[#4a4a4a] text-sm max-w-sm mt-2">
        ✓ משפטי פתיחה משחק יום
      <br/>
        ✓ משפטי פתיחה למשחק לילה
      <br/>
        ✓ משפטים שוברי התנגדויות לבחורה "עם חבר"
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        {status.success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4 text-right">
            {status.success}
          </div>
        )}
        
        {status.error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 text-right">
            {status.error}
          </div>
        )}
        
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
          disabled={status.submitting}
        >
          {status.submitting ? 'שולח...' : 'הרשמה'} &larr;
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