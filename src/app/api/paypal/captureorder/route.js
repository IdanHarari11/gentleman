import { NextResponse } from 'next/server';
import client from '@/utils/paypal/index'; // Assuming @ alias points to src
import paypal from '@paypal/checkout-server-sdk';

export async function POST(request) {
  let reqBody;
  try {
    reqBody = await request.json();
  } catch (error) {
    console.error("Error parsing request body:", error);
    return NextResponse.json({ success: false, message: 'Invalid request body' }, { status: 400 });
  }

  const { orderID } = reqBody;

  if (!orderID) {
    return NextResponse.json(
      { success: false, message: 'Please provide Order ID' },
      { status: 400 }
    );
  }

  try {
    const PaypalClient = client();
    const paypalRequest = new paypal.orders.OrdersCaptureRequest(orderID);
    paypalRequest.requestBody({}); // Required even if empty

    const response = await PaypalClient.execute(paypalRequest);

    // A successful capture returns 201 Created status code.
    if (!response || response.statusCode !== 201) {
      console.error('PayPal Capture Order Error:', { statusCode: response?.statusCode, details: response?.result });
      const errorMessage = response?.result?.details?.[0]?.description || 'Error capturing PayPal order';
       // Handle specific cases if possible from response.result.details[0].issue
      const errorStatus = response?.statusCode || 500;
      return NextResponse.json({ success: false, message: errorMessage }, { status: errorStatus });
    }

    // כאן תוכל להוסיף קוד מותאם אישית לאחר אישור התשלום
    // למשל: עדכון סטטוס ההזמנה במסד הנתונים ל-'COMPLETED' או 'PAID'
    console.log(`Captured PayPal order with ID: ${response.result.id}`);
    console.log('Capture Result:', response.result);
    // const captureDetails = response.result;
    // const paymentStatus = captureDetails.status; // Should be 'COMPLETED'
    // await updateOrderStatusInDatabase(orderID, 'COMPLETED', captureDetails);

    // החזרת נתונים רלוונטיים לצד הלקוח
    return NextResponse.json({ success: true, data: response.result });

  } catch (err) {
    console.error('Error in /api/paypal/captureorder:', err);
    // Check for specific PayPal SDK errors using err.statusCode and err.message
    const message = err.message || 'Could not capture order';
    const status = err.statusCode || 500;

    // Handle specific known error cases returned by PayPal SDK
    if (status === 422 && message?.includes('ORDER_ALREADY_CAPTURED')) {
      return NextResponse.json({ success: false, message: 'Order already captured' }, { status: 422 });
    }
    if (status === 404) {
      return NextResponse.json({ success: false, message: 'Order not found' }, { status: 404 });
    }
     if (status === 400) {
       return NextResponse.json({ success: false, message: `Bad Request: ${message}` }, { status: 400 });
     }

    // Generic error response
    return NextResponse.json({ success: false, message: message, error: err.message }, { status: status });
  }
}

// Optional: Add handler for other methods if needed
// export async function GET(request) {
//   return NextResponse.json({ message: 'Method Not Allowed' }, { status: 405 });
// } 