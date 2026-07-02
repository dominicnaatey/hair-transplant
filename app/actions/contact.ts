"use server";

export async function submitContactForm(data: {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}) {
  // Simulate network delay to mimic an email API call
  await new Promise((resolve) => setTimeout(resolve, 1500));
  
  // TODO: Integrate with a real email provider (e.g., Resend, SendGrid, or Nodemailer)
  // Example: 
  // await resend.emails.send({ ... })

  console.log("Contact form submission received on server:", data);

  // Return success response to the client
  return { 
    success: true, 
    message: "Thank you for your message. We will get back to you shortly." 
  };
}
