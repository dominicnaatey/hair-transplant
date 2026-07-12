"use server";

export async function submitBooking(data: any) {
  // Simulate network delay and processing
  await new Promise((resolve) => setTimeout(resolve, 1500));

  console.log("=== New Booking Received ===");
  console.log("Service:", data.service);
  console.log("Date:", data.date);
  console.log("Time:", data.time);
  console.log("Patient Info:", data.patient);

  // In a real application, you would save this to a database and send an email
  return { success: true };
}
