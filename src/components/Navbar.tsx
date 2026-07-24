import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  currentView: string;
  setCurrentView: (view: string) => void;
  onOpenJoinModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, setCurrentView, onOpenJoinModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'programs', label: 'Programs' },
    { id: 'memberships', label: 'Memberships' },
    { id: 'trainers', label: 'Trainers' },
    { id: 'schedule', label: 'Schedule' },
    { id: 'about', label: 'About' },
    { id: 'dashboard', label: 'Member Dashboard' },
  ];

  const handleNavClick = (id: string) => {
    setCurrentView(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full bg-[#131313]/80 backdrop-blur-xl z-50 flex justify-between items-center px-4 sm:px-8 md:px-16 py-4 border-b border-white/10 shadow-2xl">
      <div 
        onClick={() => handleNavClick('home')} 
        className="flex items-center gap-3 cursor-pointer group"
      >
        <img
          alt="Iron & Row Logo"
          className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRXQCJeFaQfDJEyQMSdEKvcka-qbEvQRPr_XMBU2CV_WNFkTn9ULZ6LfKb2hD1Ytrzl7ckrHP7vwrXOgcjQy0XlS4yh9C18waHvp1pxLHWPTbRxH5WCMbJq9RlhltUSycwQ8LeNDOI83ept5m1FdE8iCTFp17C_RS32O1yXR55E5Srh2NwIVvAZeQQ3f6-_Vtm71MKxQ00kRv_4oN9Ydq1l3zj_eo-tQCZHpXH98cytaA2stD25puCnnzbaZZA3k3_fmr2x7ve_T7X"
        />
        <span className="text-xl sm:text-2xl font-bold text-[#f2ca50] tracking-tighter uppercase font-['Space_Grotesk']">
          Iron &amp; Row
        </span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex gap-6 xl:gap-8 items-center">
        {navItems.map((item) => {
          const isActive = currentView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`font-['Poppins'] text-sm uppercase tracking-wider font-semibold transition-all duration-300 py-1 ${
                isActive
                  ? 'text-[#f2ca50] border-b-2 border-[#f2ca50]'
                  : 'text-[#e5e2e1]/80 hover:text-[#f2ca50]'
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <div className="hidden lg:flex items-center gap-4">
        <button
          onClick={onOpenJoinModal}
          className="bg-[#d4af37] text-[#3c2f00] px-6 py-2.5 rounded-full font-['Poppins'] font-bold text-sm hover:scale-105 transition-transform duration-300 glow-gold luxury-ease cursor-pointer"
        >
          Join Now
        </button>
      </div>

      {/* Mobile Menu Toggle Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden text-[#e5e2e1] hover:text-[#f2ca50] p-2"
        aria-label="Toggle Navigation Menu"
      >
        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed top-[73px] left-0 w-full bg-[#131313] border-b border-white/10 p-6 flex flex-col gap-4 z-50 shadow-2xl animate-fadeIn">
          {navItems.map((item) => {
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left font-['Poppins'] text-base uppercase font-semibold py-2 transition-colors ${
                  isActive ? 'text-[#f2ca50] font-bold' : 'text-[#e5e2e1]/80 hover:text-[#f2ca50]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenJoinModal();
              }}
              className="w-full bg-[#d4af37] text-[#3c2f00] py-3 rounded-full font-['Poppins'] font-bold text-center glow-gold"
            >
              Join Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
