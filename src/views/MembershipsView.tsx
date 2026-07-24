import React from 'react';
import { Check, ShieldCheck, Sparkles, Award } from 'lucide-react';

interface MembershipsViewProps {
  onOpenJoinModal: () => void;
}

export const MembershipsView: React.FC<MembershipsViewProps> = ({ onOpenJoinModal }) => {
  return (
    <div className="min-h-screen bg-[#131313] text-[#e5e2e1] pt-28 pb-24 px-6 sm:px-12 md:px-16 max-w-[1440px] mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-bold text-[#f2ca50] uppercase tracking-[0.25em] block mb-2">
          SELECT YOUR TIER
        </span>
        <h1 className="font-['Space_Grotesk'] text-4xl sm:text-6xl font-bold uppercase text-white mb-4">
          Private <span className="text-[#f2ca50]">Memberships</span>
        </h1>
        <p className="font-['Inter'] text-base sm:text-lg text-[#d0c5af] leading-relaxed">
          Iron &amp; Row limits total membership capacity to ensure zero wait times, absolute privacy, and pristine equipment availability.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Tier 1 */}
        <div className="glass-panel p-8 rounded-2xl border border-white/10 flex flex-col justify-between hover:border-[#f2ca50]/50 transition-all">
          <div>
            <span className="text-xs font-bold text-[#f2ca50] uppercase tracking-widest">FOUNDATIONAL</span>
            <h3 className="text-3xl font-bold font-['Space_Grotesk'] text-white mt-2">$250 <span className="text-xs font-normal text-gray-400">/ month</span></h3>
            <p className="text-xs text-[#d0c5af] mt-2 mb-6">Essential access to gym floor and recovery zones.</p>
            <ul className="space-y-3 text-xs text-[#e5e2e1] border-t border-white/5 pt-6">
              <li className="flex items-center gap-3"><Check size={16} className="text-[#f2ca50]" /> Full Gym Floor Access</li>
              <li className="flex items-center gap-3"><Check size={16} className="text-[#f2ca50]" /> Private Locker &amp; Towel Service</li>
              <li className="flex items-center gap-3"><Check size={16} className="text-[#f2ca50]" /> Cold Plunge &amp; Infrared Sauna</li>
              <li className="flex items-center gap-3"><Check size={16} className="text-[#f2ca50]" /> Mobile Companion App Access</li>
            </ul>
          </div>
          <button
            onClick={onOpenJoinModal}
            className="w-full mt-8 py-3 rounded-full border border-white/20 text-white font-bold text-xs uppercase tracking-wider hover:bg-white/10 transition-colors"
          >
            Select Foundational
          </button>
        </div>

        {/* Tier 2 (Highlighted) */}
        <div className="glass-panel p-8 rounded-2xl border-2 border-[#f2ca50] bg-[#f2ca50]/5 flex flex-col justify-between relative shadow-[0_0_30px_rgba(242,202,80,0.15)]">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#f2ca50] text-[#3c2f00] px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
            MOST POPULAR
          </div>
          <div>
            <span className="text-xs font-bold text-[#f2ca50] uppercase tracking-widest">ELITE ROW+</span>
            <h3 className="text-3xl font-bold font-['Space_Grotesk'] text-white mt-2">$450 <span className="text-xs font-normal text-gray-400">/ month</span></h3>
            <p className="text-xs text-[#d0c5af] mt-2 mb-6">Unlimited signature classes &amp; telemetry diagnostics.</p>
            <ul className="space-y-3 text-xs text-[#e5e2e1] border-t border-white/5 pt-6">
              <li className="flex items-center gap-3"><Check size={16} className="text-[#f2ca50]" /> Everything in Foundational</li>
              <li className="flex items-center gap-3"><Check size={16} className="text-[#f2ca50]" /> Unlimited Signature Classes</li>
              <li className="flex items-center gap-3"><Check size={16} className="text-[#f2ca50]" /> Bi-weekly Biometric Diagnostic</li>
              <li className="flex items-center gap-3"><Check size={16} className="text-[#f2ca50]" /> Priority Class Booking Window</li>
              <li className="flex items-center gap-3"><Check size={16} className="text-[#f2ca50]" /> 2 Guest Passes per Month</li>
            </ul>
          </div>
          <button
            onClick={onOpenJoinModal}
            className="w-full mt-8 py-3 rounded-full bg-[#d4af37] text-[#3c2f00] font-bold text-xs uppercase tracking-wider glow-gold hover:scale-[1.02] transition-transform"
          >
            Apply for Elite Row+
          </button>
        </div>

        {/* Tier 3 */}
        <div className="glass-panel p-8 rounded-2xl border border-white/10 flex flex-col justify-between hover:border-[#f2ca50]/50 transition-all">
          <div>
            <span className="text-xs font-bold text-[#f2ca50] uppercase tracking-widest">ALL-ACCESS VIP</span>
            <h3 className="text-3xl font-bold font-['Space_Grotesk'] text-white mt-2">$750 <span className="text-xs font-normal text-gray-400">/ month</span></h3>
            <p className="text-xs text-[#d0c5af] mt-2 mb-6">Dedicated 1-on-1 coach, 24/7 keycard, private suite.</p>
            <ul className="space-y-3 text-xs text-[#e5e2e1] border-t border-white/5 pt-6">
              <li className="flex items-center gap-3"><Check size={16} className="text-[#f2ca50]" /> Everything in Elite Row+</li>
              <li className="flex items-center gap-3"><Check size={16} className="text-[#f2ca50]" /> Dedicated 1-on-1 Personal Coach</li>
              <li className="flex items-center gap-3"><Check size={16} className="text-[#f2ca50]" /> 24/7 VIP Keycard Keyless Entry</li>
              <li className="flex items-center gap-3"><Check size={16} className="text-[#f2ca50]" /> Private Dressing Suite &amp; Laundry</li>
              <li className="flex items-center gap-3"><Check size={16} className="text-[#f2ca50]" /> Custom Nutritional Meal Prep</li>
            </ul>
          </div>
          <button
            onClick={onOpenJoinModal}
            className="w-full mt-8 py-3 rounded-full border border-white/20 text-white font-bold text-xs uppercase tracking-wider hover:bg-white/10 transition-colors"
          >
            Select VIP Access
          </button>
        </div>
      </div>
    </div>
  );
};
