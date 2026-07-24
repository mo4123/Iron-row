import React from 'react';
import { PlayCircle, ArrowRight, Award, FlaskConical, Sparkles } from 'lucide-react';
import { ThreeDScene } from '../components/ThreeDScene';
import { Program } from '../types';

interface HomeViewProps {
  programs: Program[];
  onOpenTourModal: () => void;
  onOpenJoinModal: () => void;
  onSelectProgram: (program: Program) => void;
  setCurrentView: (view: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  programs,
  onOpenTourModal,
  onOpenJoinModal,
  onSelectProgram,
  setCurrentView,
}) => {
  const featuredPrograms = programs.slice(0, 3);

  return (
    <div className="min-h-screen bg-[#131313] text-[#e5e2e1] pt-20">
      {/* Hero Section */}
      <header className="relative min-h-[90vh] sm:min-h-screen w-full flex items-center px-6 sm:px-12 md:px-16 overflow-hidden">
        {/* Background Video Simulation */}
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center transition-opacity duration-1000"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDsUFNf2sv80gshtAKxp8Qsp747qRrLDO2WE0PWr58vHpcF_NGqD9jGdpzyC2dMz5vJl4P6HduqAM0UChxe_UiA_qQ3d1ifRhm3_evNE0zf9O_6wmWU4F7GbuUJHOe-vkYM1Cg3X-2Ir_Qp0kpnPVBb5l6jvQ5WguOWtDOhw7EQr8Pco-yXCVu0nk6BBFkmEtKVPyPiFwsQAoKbG_g5Cfs2GwSfnksiVjxnFN46-e2klE8b6X0uSAo7_f8gowA5kyBtpvSazrKnOytb')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#131313] via-[#131313]/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-transparent to-transparent opacity-80" />
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center w-full max-w-[1440px] mx-auto py-12">
          <div className="md:col-span-7 space-y-6">
            <span className="inline-block px-4 py-1.5 rounded-full border border-[#d4af37]/40 text-[#f2ca50] font-['Poppins'] text-xs uppercase tracking-widest font-semibold luxury-ease bg-[#d4af37]/10">
              ESTABLISHED 2024
            </span>
            <h1 className="font-['Space_Grotesk'] text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
              Build Your <span className="text-gradient-gold">Strongest</span> <br /> Version
            </h1>
            <p className="font-['Inter'] text-base sm:text-lg text-[#d0c5af] max-w-lg leading-relaxed">
              Train with elite coaches and premium equipment in a space designed for high-performance living. Your journey to peak excellence starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4">
              <button
                onClick={onOpenJoinModal}
                className="bg-[#d4af37] text-[#3c2f00] px-10 py-4 rounded-full font-['Poppins'] font-bold text-sm uppercase tracking-wider glow-gold hover:scale-105 transition-all luxury-ease cursor-pointer text-center"
              >
                Start Today
              </button>
              <button
                onClick={onOpenTourModal}
                className="glass-card px-10 py-4 rounded-full font-['Poppins'] font-bold text-sm text-white flex items-center justify-center gap-3 hover:bg-white/10 transition-all luxury-ease cursor-pointer"
              >
                <PlayCircle size={20} className="text-[#f2ca50]" />
                Watch Tour
              </button>
            </div>
          </div>

          {/* Hero Feature: Interactive 3D ThreeJS Dumbbell Scene */}
          <div className="md:col-span-5 h-[380px] sm:h-[480px] relative hidden md:block">
            <ThreeDScene className="w-full h-full" />
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center -z-10">
              <div className="w-72 h-72 bg-[#f2ca50]/15 blur-[120px] rounded-full" />
            </div>
          </div>
        </div>
      </header>

      {/* Stats Bar */}
      <section className="relative z-20 py-12 sm:py-16 bg-[#0e0e0e] border-y border-white/5">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-4xl sm:text-5xl font-bold font-['Space_Grotesk'] text-[#f2ca50]">1500+</div>
            <div className="font-['Poppins'] text-xs font-semibold text-[#d0c5af] tracking-[0.2em] uppercase">ELITE MEMBERS</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl sm:text-5xl font-bold font-['Space_Grotesk'] text-[#f2ca50]">35</div>
            <div className="font-['Poppins'] text-xs font-semibold text-[#d0c5af] tracking-[0.2em] uppercase">ELITE TRAINERS</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl sm:text-5xl font-bold font-['Space_Grotesk'] text-[#f2ca50]">24/7</div>
            <div className="font-['Poppins'] text-xs font-semibold text-[#d0c5af] tracking-[0.2em] uppercase">PRIVATE ACCESS</div>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 md:px-16 max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-16 gap-6">
          <div>
            <h2 className="font-['Space_Grotesk'] text-3xl sm:text-5xl font-bold text-white mb-4">Elite Programs</h2>
            <p className="font-['Inter'] text-base sm:text-lg text-[#d0c5af] max-w-xl leading-relaxed">
              Tailored athletic experiences designed to push the boundaries of human potential.
            </p>
          </div>
          <button
            onClick={() => {
              setCurrentView('programs');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-[#f2ca50] font-['Poppins'] font-bold text-sm uppercase tracking-wider flex items-center gap-2 hover:translate-x-2 transition-transform luxury-ease cursor-pointer"
          >
            View All Programs <ArrowRight size={18} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPrograms.map((prog) => (
            <div
              key={prog.id}
              onClick={() => onSelectProgram(prog)}
              className="glass-card p-4 group cursor-pointer overflow-hidden flex flex-col hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative h-64 mb-6 rounded-xl overflow-hidden">
                <img
                  src={prog.image}
                  alt={prog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-4 py-1.5 rounded-full ${prog.badgeBg} ${prog.badgeTextColor} font-['Poppins'] text-xs font-bold uppercase tracking-wider backdrop-blur-md`}>
                    {prog.badgeTag}
                  </span>
                </div>
              </div>
              <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-white mb-3 px-2 group-hover:text-[#f2ca50] transition-colors">
                {prog.title}
              </h3>
              <p className="font-['Inter'] text-sm text-[#d0c5af] mb-6 px-2 flex-1 leading-relaxed">
                {prog.description}
              </p>
              <div className="flex items-center justify-between px-2 pb-2 border-t border-white/5 pt-4">
                <span className="text-[#d0c5af] font-['Poppins'] text-xs font-bold tracking-wider uppercase">
                  LEVEL: {prog.skillLevel}
                </span>
                <span className="text-[#f2ca50] font-bold text-xs uppercase flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  EXPLORE <ArrowRight size={16} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Asymmetric Content Section */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 md:px-16 bg-[#20201f] overflow-hidden border-t border-white/5">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <div className="relative aspect-square glass-card overflow-hidden rounded-2xl">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3NJGBbmxGYFSsn20w4Rm5xw1NuYd1exmG2hvLCRU7GUCqeS2S_Xza6uqyDFiswpmZ08K2QAZuBBC4EWD4PQlSZEA2zB10CAqbiq86xhRDOPJJ2AyeHOYtVVeJod36oEIqhUhmBExJrP2oqeeETUkkcvsPAOr_VeIv8k_pjRwdewKizS4w1Ji8ZiJhB6tsp128rPswgT1Y4ZSlR8g1-aAsgZkJ-YDNG4PFCQWE4HOsc6DDKWuwyGLE5iH6VU-eGby3NuzZNmj3WJgv"
                alt="Carbon Fiber Rowing Machine detail"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#f2ca50]/10 mix-blend-overlay" />
            </div>
          </div>

          <div className="md:col-start-7 md:col-span-6 space-y-8">
            <h2 className="font-['Space_Grotesk'] text-3xl sm:text-5xl font-bold leading-tight">
              Redefining the <br />
              <span className="text-gradient-gold">Athletic Standard</span>
            </h2>

            <div className="space-y-6">
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-full border border-[#f2ca50]/30 flex items-center justify-center shrink-0 bg-[#f2ca50]/10 text-[#f2ca50]">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="font-['Space_Grotesk'] text-lg font-bold text-white mb-1">Exclusive Community</h4>
                  <p className="text-[#d0c5af] text-sm leading-relaxed">
                    Join a network of driven individuals who value performance and privacy equally.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-full border border-[#f2ca50]/30 flex items-center justify-center shrink-0 bg-[#f2ca50]/10 text-[#f2ca50]">
                  <FlaskConical size={24} />
                </div>
                <div>
                  <h4 className="font-['Space_Grotesk'] text-lg font-bold text-white mb-1">Data-Driven Coaching</h4>
                  <p className="text-[#d0c5af] text-sm leading-relaxed">
                    Our trainers utilize biometric tracking to optimize your nutrition and training cycles.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-full border border-[#f2ca50]/30 flex items-center justify-center shrink-0 bg-[#f2ca50]/10 text-[#f2ca50]">
                  <Sparkles size={24} />
                </div>
                <div>
                  <h4 className="font-['Space_Grotesk'] text-lg font-bold text-white mb-1">Luxury Amenities</h4>
                  <p className="text-[#d0c5af] text-sm leading-relaxed">
                    Experience spa-grade locker rooms, cold plunges, and nutritional lounge access.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
