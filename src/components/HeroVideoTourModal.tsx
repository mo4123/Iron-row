import React from 'react';
import { X, Play, Volume2, Shield, Dumbbell, Sparkles } from 'lucide-react';

interface HeroVideoTourModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HeroVideoTourModal: React.FC<HeroVideoTourModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-[#1b1b1b] border border-white/10 rounded-2xl overflow-hidden text-[#e5e2e1] shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-black/60 text-white hover:text-[#f2ca50] p-2 rounded-full border border-white/10 backdrop-blur-md transition-colors"
        >
          <X size={20} />
        </button>

        {/* Video Canvas Simulation */}
        <div className="relative aspect-video w-full bg-black overflow-hidden group">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsUFNf2sv80gshtAKxp8Qsp747qRrLDO2WE0PWr58vHpcF_NGqD9jGdpzyC2dMz5vJl4P6HduqAM0UChxe_UiA_qQ3d1ifRhm3_evNE0zf9O_6wmWU4F7GbuUJHOe-vkYM1Cg3X-2Ir_Qp0kpnPVBb5l6jvQ5WguOWtDOhw7EQr8Pco-yXCVu0nk6BBFkmEtKVPyPiFwsQAoKbG_g5Cfs2GwSfnksiVjxnFN46-e2klE8b6X0uSAo7_f8gowA5kyBtpvSazrKnOytb"
            alt="Virtual Tour Preview"
            className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />

          {/* Center Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-[#f2ca50]/90 text-[#3c2f00] flex items-center justify-center glow-gold animate-pulse cursor-pointer shadow-2xl">
              <Play size={36} className="ml-1" fill="#3c2f00" />
            </div>
          </div>

          <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end text-xs text-white">
            <div>
              <span className="px-3 py-1 bg-[#f2ca50] text-[#3c2f00] font-bold rounded-full text-[10px] uppercase tracking-wider mb-2 inline-block">
                HD 4K Facility Tour
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-['Space_Grotesk'] text-white">
                Iron &amp; Row Sanctuary Tour
              </h3>
            </div>
            <div className="flex items-center gap-2 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
              <Volume2 size={16} className="text-[#f2ca50]" />
              <span>Spatial Audio</span>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="p-6 sm:p-8 bg-[#131313] grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="flex items-start gap-3 p-3 rounded-xl bg-[#20201f] border border-white/5">
            <Shield className="text-[#f2ca50] shrink-0 mt-0.5" size={20} />
            <div>
              <h4 className="text-xs font-bold uppercase text-white">24/7 Biometric Entry</h4>
              <p className="text-[11px] text-[#d0c5af] mt-0.5">Private facial recognition &amp; keycard access.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 rounded-xl bg-[#20201f] border border-white/5">
            <Dumbbell className="text-[#f2ca50] shrink-0 mt-0.5" size={20} />
            <div>
              <h4 className="text-xs font-bold uppercase text-white">Custom Matte Equipment</h4>
              <p className="text-[11px] text-[#d0c5af] mt-0.5">Carbon-fiber rowers &amp; gold barbell plates.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 rounded-xl bg-[#20201f] border border-white/5">
            <Sparkles className="text-[#f2ca50] shrink-0 mt-0.5" size={20} />
            <div>
              <h4 className="text-xs font-bold uppercase text-white">Recovery Spa &amp; Plunge</h4>
              <p className="text-[11px] text-[#d0c5af] mt-0.5">Sub-zero cold plunge tubs &amp; infrared sauna.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
