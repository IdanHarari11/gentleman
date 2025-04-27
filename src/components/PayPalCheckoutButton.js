'use client'; // Required because we use client-side hooks (useState)
import { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import axios from 'axios'; // Make sure axios is installed

const CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;

function PayPalCheckoutButton({ product }) {
  const [error, setError] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState(null);

  // Basic validation on component mount/render
  if (!CLIENT_ID) {
    console.error('שגיאה: חסר NEXT_PUBLIC_PAYPAL_CLIENT_ID בקובץ .env.local');
    // You might want to render a user-friendly error message instead of null
    return <div style={{ color: 'red' }}>שגיאה בהגדרות התשלום. אנא צור קשר עם התמיכה.</div>;
  }

  if (!product || typeof product.price !== 'string' || parseFloat(product.price) <= 0) {
    console.error('שגיאה: נתוני מוצר לא תקינים עבור כפתור PayPal:', product);
    return <div style={{ color: 'red' }}>שגיאה בפרטי המוצר לתשלום.</div>;
  }

  const initialOptions = {
    'client-id': CLIENT_ID,
    currency: 'ILS', // שנה למטבע הרצוי (למשל 'ILS')
    intent: 'capture',
  };

  // Function to create the order via your backend API
  const handleCreateOrder = async (data, actions) => {
    setError(null);
    setPaymentStatus('creating');
    console.log('יוצר הזמנה עבור מחיר:', product.price);
    try {
      const response = await axios.post('/api/paypal/createorder', {
        order_price: product.price,
        // You could add product details here if needed by the backend
      });

      if (response.data.success && response.data.orderID) {
        console.log('הזמנה נוצרה בהצלחה:', response.data.orderID);
        setPaymentStatus('created');
        return response.data.orderID; // Return the orderID to PayPal
      } else {
        throw new Error(response.data.message || 'קריאה ל-API ליצירת הזמנה נכשלה');
      }
    } catch (err) {
      console.error('שגיאה ביצירת הזמנת PayPal:', err);
      const errMsg = err.response?.data?.message || err.message || 'שגיאה לא ידועה';
      setError(`שגיאה ביצירת ההזמנה: ${errMsg}`);
      setPaymentStatus('error');
      alert(`שגיאה ביצירת ההזמנה: ${errMsg}`); // Consider using a toast notification
      return null;
    }
  };

  // Function to capture the payment after user approval
  const handleApprove = async (data, actions) => {
    setError(null);
    setPaymentStatus('approving');
    console.log('ההזמנה אושרה על ידי המשתמש. Order ID:', data.orderID);
    try {
      const response = await axios.post('/api/paypal/captureorder', {
        orderID: data.orderID,
      });

      if (response.data.success) {
        console.log('התשלום אושר ונקלט בהצלחה:', response.data);
        setPaymentStatus('captured');
        alert('התשלום בוצע בהצלחה!');
        // Add post-payment logic here (e.g., redirect, show success message)
        // window.location.href = '/thank-you';
        return true; // Indicate successful capture
      } else {
        throw new Error(response.data.message || 'קריאה ל-API לאישור תשלום נכשלה');
      }
    } catch (err) {
      console.error('שגיאה באישור תשלום PayPal:', err);
      const errMsg = err.response?.data?.message || err.message || 'שגיאה לא ידועה';
      setError(`שגיאה באישור התשלום: ${errMsg}`);
      setPaymentStatus('error');
      alert(`שגיאה באישור התשלום: ${errMsg}`); // Consider using a toast notification
      return false; // Indicate failed capture
    }
  };

  // Function called if the user cancels the payment
  const handleCancel = (data) => {
    console.log('התשלום בוטל על ידי המשתמש.', data);
    setError('התשלום בוטל.');
    setPaymentStatus('cancelled');
  };

  // Function called if there's an error with the PayPal script/buttons
  const handleError = (err) => {
    console.error('שגיאה בכפתור PayPal:', err);
    setError(`אירעה שגיאה בתהליך התשלום.`);
    setPaymentStatus('error');
  };

  return (
    // The PayPalScriptProvider should ideally wrap a higher-level component
    // or your entire app if used in multiple places, to avoid reloading the script.
    // Placing it here is simpler for a single-use case.
    <PayPalScriptProvider options={initialOptions}>
      <div>
        {/* Optional: Display product info again if needed */}
        {/* <h3>{product.name}</h3> */} 
        {/* <p>מחיר: ${product.price} {initialOptions.currency}</p> */}

        {/* Show status messages to the user */} 
        {paymentStatus === 'creating' && <p>יוצר הזמנה...</p>}
        {paymentStatus === 'approving' && <p>מאשר תשלום...</p>}

        <PayPalButtons
          style={{ layout: 'vertical', color: 'gold', shape: 'rect', label: 'pay' }}
          createOrder={handleCreateOrder}
          onApprove={handleApprove}
          onError={handleError}
          onCancel={handleCancel}
          disabled={paymentStatus === 'creating' || paymentStatus === 'approving'} // Disable buttons during API calls
        />

        {/* Display errors or success/cancel messages */} 
        {error && <p style={{ color: 'red', marginTop: '10px' }}>שגיאה: {error}</p>}
        {paymentStatus === 'captured' && <p style={{ color: 'green', marginTop: '10px' }}>התשלום בוצע בהצלחה!</p>}
        {paymentStatus === 'cancelled' && <p style={{ color: 'orange', marginTop: '10px' }}>התשלום בוטל.</p>}
      </div>
    </PayPalScriptProvider>
  );
}

export default PayPalCheckoutButton; 