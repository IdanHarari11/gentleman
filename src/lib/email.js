import nodemailer from 'nodemailer';

/**
 * יצירת טרנספורטר עבור Nodemailer עם הגדרות Gmail SMTP
 */
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});

/**
 * פונקציה לשליחת אימייל
 * @param {string} to - כתובת המייל של הנמען
 * @param {string} subject - נושא האימייל
 * @param {string} html - תוכן האימייל ב-HTML
 * @returns {Promise} - הבטחה שמתקיימת כאשר האימייל נשלח
 */
export async function sendEmail({ to, subject, html }) {
  try {
    const result = await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to,
      subject,
      html,
    });
    
    console.log(`אימייל נשלח ל-${to}: ${result.messageId}`);
    return { success: true, messageId: result.messageId };
  } catch (error) {
    console.error('שגיאה בשליחת אימייל:', error);
    return { success: false, error: error.message };
  }
}

/**
 * פונקציה לשליחת אימייל אישור הזמנה
 * @param {string} to - כתובת המייל של הלקוח
 * @param {Object} orderDetails - פרטי ההזמנה
 * @returns {Promise} - הבטחה שמתקיימת כאשר האימייל נשלח
 */
export async function sendOrderConfirmation(to, orderDetails) {
  const subject = `אישור הזמנה #${orderDetails.orderId}`;
  
  // יצירת תבנית HTML לאימייל אישור הזמנה
  const html = `
    <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h1 style="color: #333;">תודה על הזמנתך!</h1>
      <p>מספר הזמנה: <strong>${orderDetails.orderId}</strong></p>
      <p>שם: ${orderDetails.name}</p>
      <p>תאריך: ${new Date().toLocaleDateString('he-IL')}</p>
      
      <h2>פרטי הזמנה:</h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr style="background-color: #f8f8f8;">
          <th style="padding: 8px; text-align: right; border: 1px solid #ddd;">מוצר</th>
          <th style="padding: 8px; text-align: right; border: 1px solid #ddd;">כמות</th>
          <th style="padding: 8px; text-align: right; border: 1px solid #ddd;">מחיר</th>
        </tr>
        ${orderDetails.items.map(item => `
          <tr>
            <td style="padding: 8px; text-align: right; border: 1px solid #ddd;">${item.name}</td>
            <td style="padding: 8px; text-align: right; border: 1px solid #ddd;">${item.quantity}</td>
            <td style="padding: 8px; text-align: right; border: 1px solid #ddd;">₪${item.price.toFixed(2)}</td>
          </tr>
        `).join('')}
      </table>
      
      <div style="margin-top: 20px; text-align: left;">
        <p><strong>סה"כ: ₪${orderDetails.totalAmount.toFixed(2)}</strong></p>
      </div>
      
      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
        <p>לכל שאלה או בקשה, אנא צור קשר בכתובת ${process.env.EMAIL_FROM}</p>
      </div>
    </div>
  `;
  
  return sendEmail({ to, subject, html });
}

/**
 * פונקציה לשליחת אימייל יצירת קשר
 * @param {string} name - שם השולח
 * @param {string} email - אימייל השולח
 * @param {string} message - הודעת השולח
 * @returns {Promise} - הבטחה שמתקיימת כאשר האימייל נשלח
 */
export async function sendContactFormEmail(name, email, message) {
  const subject = `הודעה חדשה מטופס יצירת קשר - ${name}`;
  
  const html = `
    <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
      <div style="background-color: #f8f8f8; padding: 20px; border-radius: 8px; border-top: 4px solid #3182ce;">
        <h2 style="color: #1a365d; margin-top: 0; border-bottom: 1px solid #e2e8f0; padding-bottom: 10px;">הודעה חדשה מטופס יצירת קשר</h2>
        
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; width: 80px;">שם:</td>
            <td style="padding: 8px 0;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">אימייל:</td>
            <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #3182ce; text-decoration: none;">${email}</a></td>
          </tr>
        </table>
        
        <div style="background-color: white; padding: 16px; border-radius: 4px; border-right: 3px solid #3182ce; margin-bottom: 20px;">
          <h3 style="margin-top: 0; color: #1a365d;">תוכן ההודעה:</h3>
          <div style="white-space: pre-line;">${message.replace(/\n/g, '<br>')}</div>
        </div>
        
        <div style="font-size: 12px; color: #718096; border-top: 1px solid #e2e8f0; padding-top: 12px; margin-top: 20px;">
          <p>הודעה זו נשלחה מטופס יצירת הקשר באתר מועדון הג'נטלמן המודרני.</p>
          <p>תאריך: ${new Date().toLocaleDateString('he-IL', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</p>
        </div>
      </div>
    </div>
  `;
  
  return sendEmail({
    to: email,
    subject,
    html
  });
} 