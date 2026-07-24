import React from 'react';
import { Shield, Sparkles, Trophy, Dumbbell, Flame } from 'lucide-react';

export const AboutView: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#131313] text-[#e5e2e1] pt-28 pb-24 px-6 sm:px-12 md:px-16 max-w-[1440px] mx-auto space-y-20">
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-xs font-bold text-[#f2ca50] uppercase tracking-[0.25em] block mb-2">
          THE IRON &amp; ROW STORY
        </span>
        <h1 className="font-['Space_Grotesk'] text-4xl sm:text-6xl font-bold uppercase text-white mb-6">
          Architects of <span className="text-[#f2ca50]">Human Potential</span>
        </h1>
        <p className="font-['Inter'] text-base sm:text-lg text-[#d0c5af] leading-relaxed">
          Founded in 2024, Iron &amp; Row was built to challenge the diluted standards of commercial fitness. We created an uncompromising athletic sanctuary for those who view physical performance as an art form.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold font-['Space_Grotesk'] text-white">
            Pristine Equipment. <br /> Zero Compromise.
          </h2>
          <p className="text-sm text-[#d0c5af] leading-relaxed">
            Every piece of hardware at Iron &amp; Row has been custom engineered or imported from world-class strength manufacturing hubs. From custom-milled gold Olympic barbell plates to carbon-fiber ergometer rowers, our floor is built for precision telemetry.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="p-4 bg-[#20201f] rounded-xl border border-white/5">
              <h4 className="text-2xl font-bold text-[#f2ca50] font-['Space_Grotesk']">12,000 sq ft</h4>
              <p className="text-xs text-gray-400 mt-1">Private Athletic Floor</p>
            </div>
            <div className="p-4 bg-[#20201f] rounded-xl border border-white/5">
              <h4 className="text-2xl font-bold text-[#f2ca50] font-['Space_Grotesk']">Sub-Zero</h4>
              <p className="text-xs text-gray-400 mt-1">Therapeutic Cold Plunges</p>
            </div>
          </div>
        </div>

        <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 glass-panel">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsUFNf2sv80gshtAKxp8Qsp747qRrLDO2WE0PWr58vHpcF_NGqD9jGdpzyC2dMz5vJl4P6HduqAM0UChxe_UiA_qQ3d1ifRhm3_evNE0zf9O_6wmWU4F7GbuUJHOe-vkYM1Cg3X-2Ir_Qp0kpnPVBb5l6jvQ5WguOWtDOhw7EQr8Pco-yXCVu0nk6BBFkmEtKVPyPiFwsQAoKbG_g5Cfs2GwSfnksiVjxnFN46-e2klE8b6X0uSAo7_f8gowA5kyBtpvSazrKnOytb"
            alt="Iron and Row Interior"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
