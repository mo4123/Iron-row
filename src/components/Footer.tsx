import React, { useState } from 'react';
import { Globe, Video, Mail, ArrowRight, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  setCurrentView: (view: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentView }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-[#0e0e0e] w-full py-16 sm:py-24 border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-4 mb-6">
            <img
              alt="Iron & Row Logo"
              className="h-12 w-auto"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRXQCJeFaQfDJEyQMSdEKvcka-qbEvQRPr_XMBU2CV_WNFkTn9ULZ6LfKb2hD1Ytrzl7ckrHP7vwrXOgcjQy0XlS4yh9C18waHvp1pxLHWPTbRxH5WCMbJq9RlhltUSycwQ8LeNDOI83ept5m1FdE8iCTFp17C_RS32O1yXR55E5Srh2NwIVvAZeQQ3f6-_Vtm71MKxQ00kRv_4oN9Ydq1l3zj_eo-tQCZHpXH98cytaA2stD25puCnnzbaZZA3k3_fmr2x7ve_T7X"
            />
            <span className="text-2xl font-bold text-[#f2ca50] font-['Space_Grotesk'] tracking-tight">
              Iron &amp; Row
            </span>
          </div>
          <p className="text-[#d0c5af] max-w-sm mb-8 font-['Inter'] text-sm sm:text-base leading-relaxed">
            The pinnacle of athletic excellence. We combine elite training protocols with luxury surroundings to build the strongest versions of our members.
          </p>
          <div className="flex gap-4">
            <a
              href="#social-web"
              onClick={(e) => e.preventDefault()}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#f2ca50] hover:text-[#3c2f00] transition-all luxury-ease"
            >
              <Globe size={18} />
            </a>
            <a
              href="#social-video"
              onClick={(e) => e.preventDefault()}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#f2ca50] hover:text-[#3c2f00] transition-all luxury-ease"
            >
              <Video size={18} />
            </a>
            <a
              href="#social-mail"
              onClick={(e) => e.preventDefault()}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#f2ca50] hover:text-[#3c2f00] transition-all luxury-ease"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-[#f2ca50] font-['Space_Grotesk'] text-lg font-bold mb-6 uppercase tracking-wider">
            Navigation
          </h4>
          <ul className="space-y-4 font-['Inter'] text-sm">
            <li>
              <button
                onClick={() => { setCurrentView('programs'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="text-[#d0c5af] hover:text-[#f2ca50] transition-colors"
              >
                Signature Programs
              </button>
            </li>
            <li>
              <button
                onClick={() => { setCurrentView('trainers'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="text-[#d0c5af] hover:text-[#f2ca50] transition-colors"
              >
                Elite Coaches
              </button>
            </li>
            <li>
              <button
                onClick={() => { setCurrentView('memberships'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="text-[#d0c5af] hover:text-[#f2ca50] transition-colors"
              >
                Private Memberships
              </button>
            </li>
            <li>
              <button
                onClick={() => { setCurrentView('schedule'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="text-[#d0c5af] hover:text-[#f2ca50] transition-colors"
              >
                Class Schedule
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[#f2ca50] font-['Space_Grotesk'] text-lg font-bold mb-6 uppercase tracking-wider">
            Newsletter
          </h4>
          <p className="text-[#d0c5af] text-xs mb-4 leading-relaxed">
            Join the inner circle for exclusive training protocols, recovery insights, and early class access.
          </p>
          <form onSubmit={handleSubscribe} className="space-y-3">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-[#20201f] text-[#e5e2e1] text-sm px-4 py-2.5 rounded-lg flex-1 border border-white/10 focus:outline-none focus:border-[#f2ca50]"
              />
              <button
                type="submit"
                className="bg-[#f2ca50] text-[#3c2f00] p-2.5 rounded-lg font-bold hover:scale-105 transition-transform flex items-center justify-center cursor-pointer"
              >
                <ArrowRight size={18} />
              </button>
            </div>
            {subscribed && (
              <div className="flex items-center gap-2 text-emerald-400 text-xs mt-2 animate-fadeIn">
                <CheckCircle2 size={14} />
                <span>You are on the inner circle list!</span>
              </div>
            )}
          </form>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#d0c5af]/60">
        <p>© 2026 Iron &amp; Row Fitness. Elite Performance Redefined.</p>
        <p>Designed for the 1%.</p>
      </div>
    </footer>
  );
};
