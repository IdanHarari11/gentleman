import { sendContactFormEmail } from '@/lib/email';

/**
 * טיפול בבקשת POST לשליחת אימייל מטופס יצירת קשר
 */
export async function POST(request) {
  try {
    const body = await request.json();
    const { type, name, email, message } = body;
    
    if (type !== 'contact') {
      return Response.json({ success: false, error: 'סוג אימייל לא חוקי' }, { status: 400 });
    }
    
    const result = await sendContactFormEmail(name, email, message);
    
    if (result.success) {
      return Response.json({ success: true, messageId: result.messageId });
    } else {
      return Response.json({ success: false, error: result.error }, { status: 500 });
    }
    
  } catch (error) {
    console.error('שגיאה בטיפול בבקשת שליחת אימייל:', error);
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
} 