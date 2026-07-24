import React, { useState } from 'react';
import { X, Check, Clock, Award, Star, Flame, Calendar } from 'lucide-react';
import { Program } from '../types';

interface ProgramDetailModalProps {
  program: Program | null;
  onClose: () => void;
  onBookProgram: (programTitle: string) => void;
}

export const ProgramDetailModal: React.FC<ProgramDetailModalProps> = ({
  program,
  onClose,
  onBookProgram,
}) => {
  const [booked, setBooked] = useState(false);

  if (!program) return null;

  const handleBook = () => {
    setBooked(true);
    onBookProgram(program.title);
    setTimeout(() => {
      setBooked(false);
      onClose();
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-[#1b1b1b] border border-white/10 rounded-2xl overflow-hidden text-[#e5e2e1] shadow-2xl max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-black/60 text-white hover:text-[#f2ca50] p-2 rounded-full border border-white/10 backdrop-blur-md transition-colors"
        >
          <X size={20} />
        </button>

        {/* Hero Header */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden">
          <img
            src={program.image}
            alt={program.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1b1b1b] via-[#1b1b1b]/50 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${program.badgeBg} ${program.badgeTextColor}`}>
                  {program.badgeTag}
                </span>
                <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase bg-black/50 text-white border border-white/10">
                  {program.durationWeeks} Weeks Protocol
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold font-['Space_Grotesk'] text-white">
                {program.title}
              </h2>
            </div>
            <div className="flex items-center gap-1 text-[#f2ca50]">
              {[...Array(program.rating)].map((_, i) => (
                <Star key={i} size={16} fill="#f2ca50" />
              ))}
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-[#20201f] rounded-xl border border-white/5">
            <div>
              <p className="text-[10px] font-bold uppercase text-gray-400">Skill Level</p>
              <p className="text-sm font-semibold text-[#f2ca50] mt-0.5">{program.skillLevel}</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase text-gray-400">Intensity</p>
              <p className="text-sm font-semibold text-amber-400 mt-0.5">{program.intensity}</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase text-gray-400">Duration</p>
              <p className="text-sm font-semibold text-white mt-0.5">{program.durationWeeks} Weeks</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase text-gray-400">Access</p>
              <p className="text-sm font-semibold text-emerald-400 mt-0.5">Private Gym</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold font-['Space_Grotesk'] text-white mb-2">
              Program Overview
            </h3>
            <p className="text-sm text-[#d0c5af] leading-relaxed">
              {program.fullDetails || program.description}
            </p>
          </div>

          {/* Coach Bio */}
          <div className="p-4 bg-[#20201f] rounded-xl border border-white/5 flex items-center gap-4">
            <img
              src={program.coach.avatar}
              alt={program.coach.name}
              className="w-14 h-14 rounded-full object-cover border border-[#f2ca50]/40 shrink-0"
            />
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h4 className="text-sm font-bold text-white uppercase">{program.coach.name}</h4>
                <span className="text-[10px] text-[#f2ca50] uppercase tracking-wider font-bold">
                  {program.coach.role}
                </span>
              </div>
              <p className="text-xs text-[#d0c5af] mt-1 leading-snug">
                {program.coach.bio}
              </p>
            </div>
          </div>

          {/* Syllabus highlights */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-3">
              Key Focus Modules
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#e5e2e1]">
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#20201f]">
                <Clock size={14} className="text-[#f2ca50]" />
                <span>Biometric Telemetry &amp; Velocity Tracking</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#20201f]">
                <Award size={14} className="text-[#f2ca50]" />
                <span>Periodized Loading &amp; CNS Decompression</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#20201f]">
                <Flame size={14} className="text-[#f2ca50]" />
                <span>High-Threshold Metabolic Conditioning</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#20201f]">
                <Calendar size={14} className="text-[#f2ca50]" />
                <span>1-on-1 Bi-weekly Coach Check-In</span>
              </div>
            </div>
          </div>

          {/* Action CTA */}
          <div className="pt-2">
            {booked ? (
              <div className="w-full bg-emerald-500/20 border border-emerald-500 text-emerald-300 py-3.5 rounded-full font-['Poppins'] font-bold text-center flex items-center justify-center gap-2 text-sm">
                <Check size={18} /> Reserved &amp; Added to Dashboard Schedule
              </div>
            ) : (
              <button
                onClick={handleBook}
                className="w-full bg-[#d4af37] text-[#3c2f00] py-3.5 rounded-full font-['Poppins'] font-bold text-sm uppercase tracking-wider hover:scale-[1.01] transition-transform glow-gold cursor-pointer"
              >
                Enroll in {program.title}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
