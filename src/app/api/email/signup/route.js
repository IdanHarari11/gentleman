import nodemailer from 'nodemailer';
import path from 'path';
import fs from 'fs';

/**
 * טיפול בבקשת POST לשליחת אימייל עם קובץ מצורף לאחר הרשמה לטופס
 */
export async function POST(request) {
  try {
    const body = await request.json();
    const { firstname, lastname, email } = body;
    
    if (!email) {
      return Response.json({ success: false, error: 'נדרשת כתובת אימייל' }, { status: 400 });
    }
    
    // יצירת טרנספורטר עבור Nodemailer עם הגדרות Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });
    
    // נתיב לקובץ המצורף
    const attachmentPath = path.join(process.cwd(), 'public/files/15 המשפטים המנצחים.docx');
    
    // שליחת האימייל עם הקובץ המצורף
    const result = await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: email,
      subject: `קיבלת את 15 המשפטים המנצחים! תודה ${firstname} על ההרשמה`,
      html: `
        <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <div style="background-color: #f8f8f8; padding: 20px; border-radius: 8px; border-top: 4px solid #3c3c3c;">
            <h2 style="color: #2c2c2c; margin-top: 0; border-bottom: 1px solid #e2e8f0; padding-bottom: 10px;">תודה על ההרשמה!</h2>
            
            <p>שלום ${firstname} ${lastname},</p>
            <p>תודה על הרשמתך למועדון הג'נטלמן המודרני.</p>
            <p>מצורף קובץ עם 15 המשפטים המנצחים שיעזרו לך בכל סיטואציה עם נשים.</p>
            
            <div style="background-color: #d6d3c2; padding: 16px; border-radius: 4px; border-right: 3px solid #2c2c2c; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #2c2c2c;">תוכן הקובץ כולל:</h3>
              <ul style="padding-right: 20px;">
                <li>משפטי פתיחה למשחק יום</li>
                <li>משפטי פתיחה למשחק לילה</li>
                <li>משפטים שוברי התנגדויות לבחורה "עם חבר"</li>
              </ul>
            </div>
            
            <p>אנחנו מקווים שתפיק תועלת רבה מהתוכן המצורף!</p>
            <p>אם יש לך שאלות נוספות, אל תהסס ליצור קשר.</p>
            
            <div style="font-size: 12px; color: #718096; border-top: 1px solid #e2e8f0; padding-top: 12px; margin-top: 20px;">
              <p>אימייל זה נשלח בעקבות הרשמתך באתר מועדון הג'נטלמן המודרני.</p>
              <p>תאריך: ${new Date().toLocaleDateString('he-IL')}</p>
            </div>
          </div>
        </div>
      `,
      attachments: [
        {
          filename: '15 המשפטים המנצחים.docx',
          path: attachmentPath,
        },
      ],
    });
    
    console.log(`אימייל נשלח ל-${email}: ${result.messageId}`);
    return Response.json({ success: true, messageId: result.messageId });
    
  } catch (error) {
    console.error('שגיאה בטיפול בבקשת שליחת אימייל:', error);
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
} 