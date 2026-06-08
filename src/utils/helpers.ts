// Currency formatting
export const formatCurrency = (amount: number, currency = 'NGN'): string => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
};

// Phone number formatting for WhatsApp
export const formatPhoneForWhatsApp = (phone: string): string => {
  // Remove all non-numeric characters
  const cleaned = phone.replace(/\D/g, '');
  // Add country code if not present
  if (cleaned.startsWith('234')) {
    return cleaned;
  }
  if (cleaned.startsWith('0')) {
    return '234' + cleaned.substring(1);
  }
  return '234' + cleaned;
};

// Generate WhatsApp message
export const generateWhatsAppMessage = (
  customerName: string,
  companyName: string,
  products: Array<{ name: string; quantity: number }>,
  location: string,
  notes?: string
): string => {
  const timestamp = new Date().toLocaleString();
  const productList = products
    .map(p => `• ${p.name} (Qty: ${p.quantity})`)
    .join('\n');

  const message = `
Hello,

I am interested in getting a quote for the following products:

${productList}

Customer Details:
Name: ${customerName}
Company: ${companyName}
Project Location: ${location}

${notes ? `Additional Notes:\n${notes}\n` : ''}

Please provide pricing and availability information.

Submitted: ${timestamp}
  `.trim();

  return message;
};

// Generate email message
export const generateEmailMessage = (
  customerName: string,
  companyName: string,
  email: string,
  phone: string,
  products: Array<{ name: string; quantity: number }>,
  location: string,
  notes?: string
): string => {
  const productList = products
    .map(p => `• ${p.name} (Qty: ${p.quantity})`)
    .join('\n');

  const message = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .header { background: #0057D9; color: white; padding: 20px; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .section { margin: 20px 0; }
    .product-list { background: #f5f5f5; padding: 15px; border-radius: 5px; }
    .footer { color: #666; font-size: 12px; border-top: 1px solid #ddd; padding-top: 10px; }
  </style>
</head>
<body>
  <div class="header">
    <h1>Quote Request from Wan Afrika Traders</h1>
  </div>
  <div class="container">
    <div class="section">
      <h2>Customer Information</h2>
      <p><strong>Name:</strong> ${customerName}</p>
      <p><strong>Company:</strong> ${companyName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Location:</strong> ${location}</p>
    </div>
    
    <div class="section product-list">
      <h3>Requested Products</h3>
      <pre>${productList}</pre>
    </div>
    
    ${notes ? `
    <div class="section">
      <h3>Additional Notes</h3>
      <p>${notes}</p>
    </div>
    ` : ''}
    
    <div class="footer">
      <p>This quote request was submitted through the Wan Afrika Traders website.</p>
    </div>
  </div>
</body>
</html>
  `.trim();

  return message;
};

// Scroll to top utility
export const scrollToTop = (smooth = true) => {
  window.scrollTo({
    top: 0,
    behavior: smooth ? 'smooth' : 'auto',
  });
};

// Format date
export const formatDate = (date: string | Date): string => {
  return new Intl.DateTimeFormat('en-NG', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date));
};

// Truncate text
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

