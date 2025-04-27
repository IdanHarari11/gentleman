import checkoutNodeJssdk from '@paypal/checkout-server-sdk';

function configureEnvironment() {
  // Reading from process.env which should be populated by Next.js from .env or next.config.js
  // --- Using NEXT_PUBLIC_PAYPAL_CLIENT_ID for Client ID ---
  const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID; 
  const clientSecret = process.env.PAYPAL_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    // Log the error server-side for easier debugging
    console.error('CRITICAL ERROR: Missing PayPal Client ID or Secret. Check .env and next.config.js. Ensure server was restarted after changes.');
    // --- Updated log to reflect the variable name being checked ---
    console.error(`NEXT_PUBLIC_PAYPAL_CLIENT_ID loaded: ${!!clientId}, PAYPAL_CLIENT_SECRET loaded: ${!!clientSecret}`)
    // Throwing an error here will prevent the server from starting/responding correctly,
    // which might be desired to enforce correct configuration.
    throw new Error('Missing PayPal Client ID or Secret configuration.');
  }

  // --- Switching to Live Environment --- 
  console.log('*** CONFIGURING PAYPAL CLIENT FOR LIVE ENVIRONMENT ***');
  return new checkoutNodeJssdk.core.LiveEnvironment(clientId, clientSecret);
  // --- End of Live Environment --- 

  /* --- Previous Sandbox Configuration (commented out) ---
  console.log('Configuring PayPal client for Sandbox environment.');
  return new checkoutNodeJssdk.core.SandboxEnvironment(clientId, clientSecret);
  */
}

function client() {
  // Create a new client instance for each request potentially?
  // Or cache the client? For stateless serverless functions, creating per request might be safer.
  return new checkoutNodeJssdk.core.PayPalHttpClient(configureEnvironment());
}

export default client; 