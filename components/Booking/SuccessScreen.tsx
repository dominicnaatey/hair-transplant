import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface SuccessScreenProps {
  bookingDetails: {
    service: any;
    date: Date | null;
    time: string | null;
    patient: any;
  };
}

export default function SuccessScreen({ bookingDetails }: SuccessScreenProps) {
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="text-center bg-white border border-gray-200 rounded-[32px] p-10 lg:p-16 shadow-xl max-w-2xl mx-auto"
    >
      <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
        >
          <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="#16a34a" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </motion.div>
      </div>

      <h2 className="text-3xl lg:text-4xl font-heading font-medium text-[#222] mb-4">Booking Confirmed!</h2>
      <p className="text-[#666] text-lg mb-10 max-w-md mx-auto">
        Thank you, {bookingDetails.patient?.name.split(' ')[0]}. We've sent a confirmation email with your appointment details.
      </p>

      <div className="bg-[#f9f8f6] rounded-[24px] p-6 lg:p-8 text-left mb-10">
        <h3 className="font-bold text-sm text-[#888] uppercase tracking-[0.15em] mb-6 border-b border-gray-200 pb-3">Appointment Summary</h3>
        
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
            <span className="text-[#666]">Service</span>
            <span className="font-semibold text-[#222] text-right">{bookingDetails.service?.title}</span>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
            <span className="text-[#666]">Date</span>
            <span className="font-semibold text-[#222] text-right">
              {bookingDetails.date && `${monthNames[bookingDetails.date.getMonth()]} ${bookingDetails.date.getDate()}, ${bookingDetails.date.getFullYear()}`}
            </span>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
            <span className="text-[#666]">Time</span>
            <span className="font-semibold text-[#222] text-right">{bookingDetails.time}</span>
          </div>
        </div>
      </div>

      <Link
        href="/"
        className="inline-block bg-[#2458B3] text-white px-8 py-4 rounded-full font-bold text-sm tracking-[0.05em] uppercase hover:bg-[#1a4490] transition-colors"
      >
        Return to Home
      </Link>
    </motion.div>
  );
}
