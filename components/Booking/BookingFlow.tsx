"use client";

import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import ServiceSelection from './ServiceSelection';
import CalendarView from './CalendarView';
import PatientDetails from './PatientDetails';
import SuccessScreen from './SuccessScreen';
import { submitBooking } from '@/app/actions/booking';

type Step = 'service' | 'calendar' | 'details' | 'success';

export default function BookingFlow() {
  const [currentStep, setCurrentStep] = useState<Step>('service');
  
  const [selectedService, setSelectedService] = useState<any>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [patientDetails, setPatientDetails] = useState<any>(null);
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleServiceSelect = (service: any) => {
    setSelectedService(service);
    setCurrentStep('calendar');
  };

  const handleDateAndTimeSelect = (date: Date, time: string) => {
    setSelectedDate(date);
    setSelectedTime(time);
    setCurrentStep('details');
  };

  const handlePatientDetailsSubmit = async (details: any) => {
    setPatientDetails(details);
    setIsSubmitting(true);
    
    // Call server action
    const result = await submitBooking({
      service: selectedService,
      date: selectedDate,
      time: selectedTime,
      patient: details,
    });
    
    setIsSubmitting(false);
    
    if (result.success) {
      setCurrentStep('success');
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 'service':
        return <ServiceSelection onSelect={handleServiceSelect} />;
      case 'calendar':
        return (
          <CalendarView 
            onSelectDateAndTime={handleDateAndTimeSelect} 
            onBack={() => setCurrentStep('service')}
          />
        );
      case 'details':
        return (
          <PatientDetails 
            onSubmit={handlePatientDetailsSubmit}
            onBack={() => setCurrentStep('calendar')}
            isSubmitting={isSubmitting}
          />
        );
      case 'success':
        return (
          <SuccessScreen 
            bookingDetails={{
              service: selectedService,
              date: selectedDate,
              time: selectedTime,
              patient: patientDetails
            }} 
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto px-6 lg:px-12 w-full">
      {currentStep !== 'success' && (
        <div className="mb-12 flex items-center justify-between max-w-2xl mx-auto">
          {['service', 'calendar', 'details'].map((step, index) => {
            const isActive = currentStep === step;
            const isPast = 
              (currentStep === 'calendar' && step === 'service') ||
              (currentStep === 'details' && (step === 'service' || step === 'calendar'));
              
            return (
              <div key={step} className="flex flex-col items-center relative w-full">
                <div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm z-10 transition-colors duration-300
                    ${isActive ? 'bg-[#2458B3] text-white ring-4 ring-[#2458B3]/20' : ''}
                    ${isPast ? 'bg-[#2458B3] text-white' : ''}
                    ${!isActive && !isPast ? 'bg-gray-200 text-gray-400' : ''}
                  `}
                >
                  {isPast ? (
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    index + 1
                  )}
                </div>
                <span className={`mt-3 text-xs font-bold uppercase tracking-wider ${isActive || isPast ? 'text-[#222]' : 'text-gray-400'}`}>
                  {step}
                </span>
                {index < 2 && (
                  <div className={`absolute top-5 left-1/2 w-full h-[2px] -z-0 transition-colors duration-300
                    ${isPast ? 'bg-[#2458B3]' : 'bg-gray-200'}
                  `} />
                )}
              </div>
            );
          })}
        </div>
      )}

      <div className="bg-[#F9F8F6] p-4 lg:p-10 rounded-[40px]">
        <AnimatePresence mode="wait">
          {renderStep()}
        </AnimatePresence>
      </div>
    </div>
  );
}
