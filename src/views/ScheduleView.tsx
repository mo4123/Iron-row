import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, MapPin, Check, Plus } from 'lucide-react';

interface ScheduleViewProps {
  onBookClass: (title: string, coach: string, location: string, time: string) => void;
}

export const ScheduleView: React.FC<ScheduleViewProps> = ({ onBookClass }) => {
  const [selectedDay, setSelectedDay] = useState('Monday');
  const [bookedIds, setBookedIds] = useState<string[]>([]);

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const timetable: Record<string, Array<{ id: string; time: string; title: string; coach: string; location: string; category: string; intensity: string }>> = {
    Monday: [
      { id: 'm1', time: '06:00 AM', title: 'Velocity Ergometer Sprints', coach: 'David Thorne', location: 'Studio A (Rowing Bay)', category: 'Performance Row', intensity: 'HIGH' },
      { id: 'm2', time: '08:30 AM', title: 'Iron Power Lifting', coach: 'Marcus Vane', location: 'Main Lifting Platform', category: 'Strength', intensity: 'ELITE' },
      { id: 'm3', time: '05:30 PM', title: 'Metabolic Conditioning', coach: 'Sasha Klein', location: 'Turf Area', category: 'HIIT & Cardio', intensity: 'MAX' },
    ],
    Tuesday: [
      { id: 't1', time: '07:00 AM', title: 'Restorative Kinetic Mobility', coach: 'Elena Rossi', location: 'Sanctuary Studio', category: 'Yoga & Mobility', intensity: 'MID' },
      { id: 't2', time: '12:00 PM', title: 'Bodyweight Calisthenics Mastery', coach: 'Jordan Jax', location: 'Ring Zone', category: 'Calisthenics', intensity: 'ELITE' },
      { id: 't3', time: '06:30 PM', title: 'Hypertrophy Bench & Upper Body', coach: 'Marcus Vane', location: 'Main Lifting Platform', category: 'Strength', intensity: 'HIGH' },
    ],
    Wednesday: [
      { id: 'w1', time: '06:00 AM', title: 'Endurance Erg & Anaerobic Threshold', coach: 'David Thorne', location: 'Studio A (Rowing Bay)', category: 'Performance Row', intensity: 'ELITE' },
      { id: 'w2', time: '09:00 AM', title: 'HIIT Kettlebell Shred', coach: 'Sasha Klein', location: 'Turf Area', category: 'HIIT & Cardio', intensity: 'HIGH' },
      { id: 'w3', time: '05:00 PM', title: 'Deep Spine & Joint Mobility', coach: 'Elena Rossi', location: 'Sanctuary Studio', category: 'Yoga & Mobility', intensity: 'MID' },
    ],
    Thursday: [
      { id: 'th1', time: '07:30 AM', title: 'Olympic Clean & Jerk Tech', coach: 'Marcus Vane', location: 'Main Lifting Platform', category: 'Strength', intensity: 'ELITE' },
      { id: 'th2', time: '05:30 PM', title: 'Aerobic Row & Core Telemetry', coach: 'David Thorne', location: 'Studio A (Rowing Bay)', category: 'Performance Row', intensity: 'HIGH' },
    ],
    Friday: [
      { id: 'f1', time: '06:30 AM', title: 'Friday Night Lights Sprints', coach: 'Sasha Klein', location: 'Turf Area', category: 'HIIT & Cardio', intensity: 'MAX' },
      { id: 'f2', time: '08:30 AM', title: 'Isometric Muscle Holding', coach: 'Jordan Jax', location: 'Ring Zone', category: 'Calisthenics', intensity: 'HIGH' },
    ],
    Saturday: [
      { id: 'sa1', time: '08:00 AM', title: 'Weekend Heavy Squat & Deadlift', coach: 'Marcus Vane', location: 'Main Lifting Platform', category: 'Strength', intensity: 'ELITE' },
      { id: 'sa2', time: '10:00 AM', title: 'Row & Chill Infrared Recovery', coach: 'Elena Rossi', location: 'Sanctuary Studio', category: 'Yoga & Mobility', intensity: 'MID' },
    ],
    Sunday: [
      { id: 'su1', time: '09:00 AM', title: 'Sunday Engine VO2 Max Test', coach: 'David Thorne', location: 'Studio A (Rowing Bay)', category: 'Performance Row', intensity: 'MAX' },
    ],
  };

  const currentClasses = timetable[selectedDay] || [];

  const handleBook = (item: typeof currentClasses[0]) => {
    if (bookedIds.includes(item.id)) return;
    setBookedIds([...bookedIds, item.id]);
    onBookClass(item.title, item.coach, item.location, item.time);
  };

  return (
    <div className="min-h-screen bg-[#131313] text-[#e5e2e1] pt-28 pb-24 px-6 sm:px-12 md:px-16 max-w-[1440px] mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-xs font-bold text-[#f2ca50] uppercase tracking-[0.25em] block mb-2">
          WEEKLY TIMETABLE
        </span>
        <h1 className="font-['Space_Grotesk'] text-4xl sm:text-6xl font-bold uppercase text-white mb-4">
          Class <span className="text-[#f2ca50]">Schedule</span>
        </h1>
        <p className="font-['Inter'] text-base text-[#d0c5af] leading-relaxed">
          Reserve your spot in our small-group elite training sessions. Maximum 8 athletes per class.
        </p>
      </div>

      {/* Day Selector Tabs */}
      <div className="flex overflow-x-auto gap-2 pb-4 mb-10 border-b border-white/10 no-scrollbar">
        {days.map((day) => {
          const isSelected = selectedDay === day;
          return (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`px-6 py-3 rounded-xl font-['Poppins'] text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                isSelected
                  ? 'bg-[#f2ca50] text-[#3c2f00] glow-gold shadow-lg'
                  : 'bg-[#20201f] text-[#d0c5af] hover:text-white hover:bg-white/5'
              }`}
            >
              {day}
            </button>
          );
        })}
      </div>

      {/* Classes List */}
      <div className="space-y-4">
        {currentClasses.map((item) => {
          const isBooked = bookedIds.includes(item.id);
          return (
            <div
              key={item.id}
              className="glass-panel p-6 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border border-white/10 hover:border-[#f2ca50]/40 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                <div className="flex items-center gap-2 text-[#f2ca50] font-mono font-bold text-lg bg-[#20201f] px-4 py-2 rounded-xl border border-white/5">
                  <Clock size={18} />
                  <span>{item.time}</span>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full bg-[#f2ca50]/10 text-[#f2ca50] border border-[#f2ca50]/20">
                      {item.category}
                    </span>
                    <span className="text-[10px] font-bold uppercase text-amber-400">
                      INTENSITY: {item.intensity}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold font-['Space_Grotesk'] text-white">{item.title}</h3>
                  <div className="flex items-center gap-4 text-xs text-[#d0c5af] mt-1">
                    <span>Coach: <strong className="text-white">{item.coach}</strong></span>
                    <span className="flex items-center gap-1"><MapPin size={12} className="text-[#f2ca50]" /> {item.location}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleBook(item)}
                disabled={isBooked}
                className={`px-8 py-3 rounded-full font-['Poppins'] text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
                  isBooked
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500'
                    : 'bg-[#d4af37] text-[#3c2f00] glow-gold hover:scale-105'
                }`}
              >
                {isBooked ? (
                  <>
                    <Check size={16} /> Reserved
                  </>
                ) : (
                  <>
                    <Plus size={16} /> Reserve Spot
                  </>
                )}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
