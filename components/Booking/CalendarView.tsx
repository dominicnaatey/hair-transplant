import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface CalendarViewProps {
  onSelectDateAndTime: (date: Date, time: string) => void;
  onBack: () => void;
}

const timeSlots = [
  '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', 
  '11:00 AM', '11:30 AM', '01:00 PM', '01:30 PM',
  '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM'
];

const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

export default function CalendarView({ onSelectDateAndTime, onBack }: CalendarViewProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  const handleDateClick = (day: number) => {
    const date = new Date(year, month, day);
    // Don't allow weekends or past dates
    if (date < today || date.getDay() === 0 || date.getDay() === 6) return;
    setSelectedDate(date);
  };

  const isSelected = (day: number) => {
    if (!selectedDate) return false;
    return selectedDate.getDate() === day && selectedDate.getMonth() === month && selectedDate.getFullYear() === year;
  };

  const isPast = (day: number) => {
    const date = new Date(year, month, day);
    return date < today;
  };

  const isWeekend = (day: number) => {
    const date = new Date(year, month, day);
    return date.getDay() === 0 || date.getDay() === 6;
  };

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4 }}
    >
      <button onClick={onBack} className="text-[#888] hover:text-[#222] font-semibold text-sm flex items-center gap-2 mb-6 transition-colors">
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
        Back to Services
      </button>

      <h2 className="text-3xl font-heading font-medium text-[#222] mb-3">Select a Date & Time</h2>
      <p className="text-[#666] mb-8">Choose an available slot for your consultation.</p>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10">
        {/* Calendar */}
        <div className="bg-white border border-gray-200 rounded-[32px] p-8 shadow-sm h-fit">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold font-heading text-[#222]">{monthNames[month]} {year}</h3>
            <div className="flex gap-2">
              <button onClick={prevMonth} className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-50 hover:bg-gray-100 transition-colors">
                 <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#222" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button onClick={nextMonth} className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-50 hover:bg-gray-100 transition-colors">
                 <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#222" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-2 mb-4">
            {daysOfWeek.map(d => (
              <div key={d} className="text-center text-[11px] font-bold text-[#888] uppercase tracking-wider">{d}</div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-y-3 gap-x-2">
            {Array.from({ length: firstDayOfMonth }).map((_, i) => (
              <div key={`empty-${i}`} />
            ))}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1;
              const disabled = isPast(day) || isWeekend(day);
              const selected = isSelected(day);

              return (
                <button
                  key={day}
                  onClick={() => handleDateClick(day)}
                  disabled={disabled}
                  className={`
                    w-full aspect-square rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-200
                    ${disabled ? 'text-gray-300 cursor-not-allowed' : 'text-[#222] hover:bg-[#EEF1F5]'}
                    ${selected ? '!bg-[#2458B3] !text-white shadow-md' : ''}
                  `}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>

        {/* Time Slots */}
        <div>
          {selectedDate ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h3 className="text-lg font-bold font-heading text-[#222] mb-4">
                {monthNames[selectedDate.getMonth()]} {selectedDate.getDate()}, {selectedDate.getFullYear()}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {timeSlots.map(time => (
                  <button
                    key={time}
                    onClick={() => onSelectDateAndTime(selectedDate, time)}
                    className="py-3 px-4 rounded-xl border border-[#2458B3] text-[#2458B3] font-semibold text-sm hover:bg-[#2458B3] hover:text-white transition-colors duration-200"
                  >
                    {time}
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <div className="h-full min-h-[300px] flex flex-col items-center justify-center text-center p-8 bg-[#F9F8F6] rounded-[32px] border border-dashed border-[#D8DEE8]">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm mb-4">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#ccc" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-[#888] text-sm">Please select a date on the calendar to view available times.</p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
