import React, { useState } from 'react';
import { X, Check, ShieldCheck, Sparkles } from 'lucide-react';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
  onJoinSuccess: (memberName: string, tier: string) => void;
}

export const JoinModal: React.FC<JoinModalProps> = ({ isOpen, onClose, onJoinSuccess }) => {
  const [selectedTier, setSelectedTier] = useState<'Foundational' | 'Elite Row+' | 'All-Access VIP'>('Elite Row+');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [goal, setGoal] = useState('Power & Hypertrophy');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    setSubmitted(true);
    setTimeout(() => {
      onJoinSuccess(name, selectedTier);
      setSubmitted(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#1b1b1b] border border-white/10 rounded-2xl p-6 sm:p-8 text-[#e5e2e1] shadow-2xl max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-white p-2 rounded-full hover:bg-white/5 transition-colors"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div className="py-12 flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#f2ca50]/20 border border-[#f2ca50] flex items-center justify-center text-[#f2ca50]">
              <Sparkles size={32} />
            </div>
            <h3 className="text-2xl font-bold font-['Space_Grotesk'] text-[#f2ca50]">Welcome to Iron &amp; Row</h3>
            <p className="text-sm text-[#d0c5af] max-w-md">
              Congratulations, <span className="text-white font-semibold">{name}</span>. Your <span className="text-[#f2ca50] font-semibold">{selectedTier}</span> membership is now active.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 text-emerald-400 rounded-full text-xs font-bold uppercase tracking-widest mt-2">
              <ShieldCheck size={16} /> Private Access Granted
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <span className="text-xs font-bold text-[#f2ca50] uppercase tracking-[0.2em]">Private Membership</span>
              <h2 className="text-2xl sm:text-3xl font-bold font-['Space_Grotesk'] text-white mt-1">
                Elevate Your Performance
              </h2>
              <p className="text-xs sm:text-sm text-[#d0c5af] mt-1">
                Select your preferred athletic membership tier to initiate onboarding.
              </p>
            </div>

            {/* Tier Select */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { name: 'Foundational', price: '$250', desc: 'Full Gym Access & Locker' },
                { name: 'Elite Row+', price: '$450', desc: 'All Classes + Personal Telemetry' },
                { name: 'All-Access VIP', price: '$750', desc: '24/7 VIP, Cold Plunge & Coach' },
              ].map((tier) => {
                const isSelected = selectedTier === tier.name;
                return (
                  <div
                    key={tier.name}
                    onClick={() => setSelectedTier(tier.name as any)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all ${
                      isSelected
                        ? 'border-[#f2ca50] bg-[#f2ca50]/10 shadow-[0_0_20px_rgba(242,202,80,0.2)]'
                        : 'border-white/10 bg-[#20201f] hover:border-white/20'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-bold text-[#f2ca50] uppercase tracking-wider">{tier.name}</span>
                      {isSelected && <Check size={16} className="text-[#f2ca50]" />}
                    </div>
                    <div className="text-lg font-bold text-white font-['Space_Grotesk']">{tier.price} <span className="text-[10px] font-normal text-gray-400">/mo</span></div>
                    <div className="text-[11px] text-[#d0c5af] mt-1">{tier.desc}</div>
                  </div>
                );
              })}
            </div>

            <div className="space-y-4 pt-2">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#d0c5af] mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Mercer"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#20201f] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#f2ca50]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#d0c5af] mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="alex.mercer@vip.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#20201f] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#f2ca50]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#d0c5af] mb-1">Primary Performance Focus</label>
                <select
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  className="w-full bg-[#20201f] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#f2ca50]"
                >
                  <option value="Power & Hypertrophy">Power &amp; Hypertrophy</option>
                  <option value="Cardiovascular Engine & Rowing">Cardiovascular Engine &amp; Rowing</option>
                  <option value="Mobility & Joint Decompression">Mobility &amp; Joint Decompression</option>
                  <option value="Body Weight Calisthenics">Body Weight Calisthenics</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#d4af37] text-[#3c2f00] py-3.5 rounded-full font-['Poppins'] font-bold text-sm uppercase tracking-wider hover:scale-[1.02] transition-transform glow-gold cursor-pointer"
            >
              Confirm Membership &amp; Join
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
