import { NextResponse } from 'next/server';
import client from '@/utils/paypal/index'; // Assuming @ alias points to src
import paypal from '@paypal/checkout-server-sdk';

export async function POST(request) {
  // קבלת הנתונים מגוף הבקשה ב-App Router
  let reqBody;
  try {
    reqBody = await request.json();
  } catch (error) {
    console.error("Error parsing request body:", error);
    return NextResponse.json({ success: false, message: 'Invalid request body' }, { status: 400 });
  }

  const orderPrice = reqBody.order_price;
  // const userId = reqBody.user_id; // אם נדרש

  if (!orderPrice || orderPrice <= 0) { // Added check for positive price
    return NextResponse.json(
      { success: false, message: 'Please provide a valid order_price' },
      { status: 400 }
    );
  }

  try {
    const PaypalClient = client();
    const paypalRequest = new paypal.orders.OrdersCreateRequest();
    paypalRequest.headers['prefer'] = 'return=representation';
    paypalRequest.requestBody({
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: 'ILS', // שנה למטבע הרצוי, למשל 'ILS'
            value: String(orderPrice), // ודא שזה מחרוזת
          },
          // description: 'Your product description',
          // custom_id: 'Your custom internal ID',
        },
      ],
      // Optional: Add application context like return URLs
      // application_context: {
      //   return_url: 'YOUR_RETURN_URL',
      //   cancel_url: 'YOUR_CANCEL_URL',
      //   brand_name: 'YOUR_BRAND_NAME',
      //   user_action: 'PAY_NOW',
      // }
    });

    const response = await PaypalClient.execute(paypalRequest);

    if (response.statusCode !== 201) {
      console.error('PayPal Create Order Error:', { statusCode: response.statusCode, details: response.result });
      // Return more specific error if possible from response.result.details
      const errorMessage = response.result?.details?.[0]?.description || 'Error creating PayPal order';
      const errorStatus = response.statusCode || 500;
      return NextResponse.json({ success: false, message: errorMessage }, { status: errorStatus });
    }

    // כאן תוכל להוסיף קוד מותאם אישית
    // למשל: שמירת פרטי ההזמנה (כולל response.result.id) במסד הנתונים שלך עם סטטוס 'pending'
    console.log(`Created PayPal order with ID: ${response.result.id}`);
    // await saveOrderToDatabase({ order_id: response.result.id, status: 'PENDING', ... });

    // החזרת ה-order ID לצד הלקוח בפורמט של App Router
    return NextResponse.json({ success: true, orderID: response.result.id });

  } catch (err) {
    console.error('Error in /api/paypal/createorder:', err);
    // Handle SDK errors or other unexpected errors
    const message = err.message || 'Could not create order';
    const status = err.statusCode || 500; // Use PayPal's status code if available
    return NextResponse.json({ success: false, message: message, error: err.message }, { status: status });
  }
}

// Optional: Add handler for other methods if needed, e.g., GET
// export async function GET(request) {
//   return NextResponse.json({ message: 'Method Not Allowed' }, { status: 405 });
// } 