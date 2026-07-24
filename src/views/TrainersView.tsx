import React from 'react';
import { COACHES } from '../data/mockData';
import { Award, Star, Calendar } from 'lucide-react';

interface TrainersViewProps {
  onOpenJoinModal: () => void;
}

export const TrainersView: React.FC<TrainersViewProps> = ({ onOpenJoinModal }) => {
  const coachList = Object.values(COACHES);

  return (
    <div className="min-h-screen bg-[#131313] text-[#e5e2e1] pt-28 pb-24 px-6 sm:px-12 md:px-16 max-w-[1440px] mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-bold text-[#f2ca50] uppercase tracking-[0.25em] block mb-2">
          MASTER COACHES
        </span>
        <h1 className="font-['Space_Grotesk'] text-4xl sm:text-6xl font-bold uppercase text-white mb-4">
          World-Class <span className="text-[#f2ca50]">Faculty</span>
        </h1>
        <p className="font-['Inter'] text-base sm:text-lg text-[#d0c5af] leading-relaxed">
          Our coaches are former Olympians, exercise physiologists, and world-record holders dedicated to perfecting your performance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {coachList.map((coach) => (
          <div
            key={coach.id}
            className="glass-panel rounded-2xl overflow-hidden p-6 space-y-6 hover:-translate-y-2 transition-all duration-300 border border-white/10"
          >
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src={coach.avatar}
                alt={coach.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1b1b1b] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                <div>
                  <h3 className="text-2xl font-bold font-['Space_Grotesk'] text-white">{coach.name}</h3>
                  <p className="text-xs text-[#f2ca50] font-bold uppercase tracking-wider">{coach.role}</p>
                </div>
              </div>
            </div>

            <p className="text-xs text-[#d0c5af] leading-relaxed">
              {coach.bio}
            </p>

            {coach.specialties && (
              <div className="space-y-2 border-t border-white/5 pt-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Specialties</span>
                <div className="flex flex-wrap gap-1.5">
                  {coach.specialties.map((spec, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-[#20201f] text-[#f2ca50] border border-[#f2ca50]/20 rounded-md text-[10px] font-semibold"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <button
              onClick={onOpenJoinModal}
              className="w-full py-3 bg-[#20201f] hover:bg-[#f2ca50] hover:text-[#3c2f00] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all border border-white/10 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar size={14} /> Book Private Session
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
