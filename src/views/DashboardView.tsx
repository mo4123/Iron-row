import React, { useState } from 'react';
import {
  User,
  Award,
  Dumbbell,
  Calendar,
  Activity,
  TrendingDown,
  Zap,
  Scale,
  MoreVertical,
  ArrowRight,
  Lightbulb,
  X,
  LogOut,
  Clock,
  PlusCircle,
} from 'lucide-react';
import { BookedClass, UserProfile } from '../types';

interface DashboardViewProps {
  userProfile: UserProfile;
  bookedClasses: BookedClass[];
  onStartWorkout: () => void;
  onCancelClass: (id: string) => void;
  onAddClass: () => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  userProfile,
  bookedClasses,
  onStartWorkout,
  onCancelClass,
  onAddClass,
}) => {
  const [activeTab, setActiveTab] = useState<'attendance' | 'profile' | 'membership' | 'plan' | 'progress'>('attendance');
  const [heightCm, setHeightCm] = useState<number>(userProfile.heightCm);
  const [weightKg, setWeightKg] = useState<number>(userProfile.weightKg);
  const [toastVisible, setToastVisible] = useState<boolean>(true);

  // Calculate live BMI
  const bmiHeightM = heightCm / 100;
  const bmi = (weightKg / (bmiHeightM * bmiHeightM)).toFixed(1);

  const getBmiCategory = (val: number) => {
    if (val < 18.5) return { label: 'Underweight', color: 'text-amber-400 bg-amber-500/10' };
    if (val < 25) return { label: 'Healthy Range', color: 'text-emerald-400 bg-emerald-500/10' };
    if (val < 30) return { label: 'Overweight', color: 'text-amber-400 bg-amber-500/10' };
    return { label: 'High BMI', color: 'text-red-400 bg-red-500/10' };
  };

  const bmiCat = getBmiCategory(Number(bmi));

  return (
    <div className="min-h-screen bg-[#131313] text-[#e5e2e1] pt-20 flex flex-col md:flex-row">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 lg:w-72 bg-[#0e0e0e] border-r border-white/5 p-6 flex flex-col shrink-0">
        <div className="mb-8 hidden md:block">
          <h1 className="font-['Space_Grotesk'] text-2xl font-bold text-[#f2ca50] tracking-tighter">
            Iron &amp; Row
          </h1>
          <p className="text-[10px] text-[#d0c5af] uppercase tracking-widest mt-0.5">
            Member Command
          </p>
        </div>

        <nav className="space-y-2 flex-1">
          <button
            onClick={() => setActiveTab('profile')}
            className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all cursor-pointer ${
              activeTab === 'profile'
                ? 'text-[#f2ca50] bg-[#f2ca50]/10 border-r-4 border-[#f2ca50] font-bold'
                : 'text-[#d0c5af] hover:text-[#f2ca50] hover:bg-white/5'
            }`}
          >
            <User size={18} />
            <span className="font-['Poppins'] text-sm font-semibold">Profile</span>
          </button>

          <button
            onClick={() => setActiveTab('membership')}
            className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all cursor-pointer ${
              activeTab === 'membership'
                ? 'text-[#f2ca50] bg-[#f2ca50]/10 border-r-4 border-[#f2ca50] font-bold'
                : 'text-[#d0c5af] hover:text-[#f2ca50] hover:bg-white/5'
            }`}
          >
            <Award size={18} />
            <span className="font-['Poppins'] text-sm font-semibold">Membership</span>
          </button>

          <button
            onClick={() => setActiveTab('plan')}
            className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all cursor-pointer ${
              activeTab === 'plan'
                ? 'text-[#f2ca50] bg-[#f2ca50]/10 border-r-4 border-[#f2ca50] font-bold'
                : 'text-[#d0c5af] hover:text-[#f2ca50] hover:bg-white/5'
            }`}
          >
            <Dumbbell size={18} />
            <span className="font-['Poppins'] text-sm font-semibold">Workout Plan</span>
          </button>

          <button
            onClick={() => setActiveTab('attendance')}
            className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all cursor-pointer ${
              activeTab === 'attendance'
                ? 'text-[#f2ca50] bg-[#f2ca50]/10 border-r-4 border-[#f2ca50] font-bold'
                : 'text-[#d0c5af] hover:text-[#f2ca50] hover:bg-white/5'
            }`}
          >
            <Calendar size={18} />
            <span className="font-['Poppins'] text-sm font-semibold">Attendance</span>
          </button>

          <button
            onClick={() => setActiveTab('progress')}
            className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all cursor-pointer ${
              activeTab === 'progress'
                ? 'text-[#f2ca50] bg-[#f2ca50]/10 border-r-4 border-[#f2ca50] font-bold'
                : 'text-[#d0c5af] hover:text-[#f2ca50] hover:bg-white/5'
            }`}
          >
            <Activity size={18} />
            <span className="font-['Poppins'] text-sm font-semibold">Progress</span>
          </button>
        </nav>

        {/* User Card */}
        <div className="pt-6 border-t border-white/5 mt-6">
          <div className="glass-panel p-4 rounded-xl flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#f2ca50] flex items-center justify-center text-[#3c2f00] font-bold font-['Space_Grotesk'] text-base">
              {userProfile.name.charAt(0)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-['Poppins'] text-xs font-bold text-white truncate">{userProfile.name}</p>
              <p className="text-[10px] text-[#d0c5af] uppercase tracking-wider">{userProfile.tier}</p>
            </div>
            <button className="text-[#d0c5af] hover:text-red-400 transition-colors p-1" title="Sign Out">
              <LogOut size={16} />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Canvas */}
      <main className="flex-1 p-6 sm:p-10 md:p-12 overflow-y-auto max-w-[1280px] mx-auto space-y-10">
        {/* Welcome Banner */}
        <section className="glass-panel overflow-hidden p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-[#2a2a2a]/60 to-transparent border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 space-y-4">
            <span className="font-['Poppins'] text-xs font-semibold text-[#f2ca50] uppercase tracking-[0.2em] block">
              DASHBOARD COMMAND
            </span>
            <h2 className="font-['Space_Grotesk'] text-3xl sm:text-5xl font-bold leading-tight text-white">
              Hello, {userProfile.name.split(' ')[0]}. <br />
              <span className="text-[#d0c5af] font-light">Ready for your chest day?</span>
            </h2>
            <div className="flex flex-wrap items-center gap-6 pt-2">
              <button
                onClick={onStartWorkout}
                className="bg-[#f2ca50] text-[#3c2f00] font-['Poppins'] font-bold px-8 py-3.5 rounded-full hover:scale-105 transition-all glow-gold luxury-ease cursor-pointer"
              >
                Start Workout
              </button>
              <div className="flex items-center gap-2 text-[#d0c5af] text-sm">
                <Clock size={16} className="text-[#f2ca50]" />
                <span>45 min session estimated</span>
              </div>
            </div>
          </div>

          <div className="w-full md:w-80 aspect-[4/3] rounded-2xl overflow-hidden relative border border-white/10 shrink-0">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuByaVG1tzRkAGcOKrjtf6qZJXdX4ighExWoxG0pfnMVUKeQWYIgVi-LZ1zlTgdlZOrIdIDxRdJQmNsqcKFRwCRmmBQmJbT13dGbqtWYxXO5ISu6Jx6z07ZYUu1Ztz5GOg7LzYLhSHEzM6MeofTv8Q5BK0b26Q_x6VD2jEDRxGtIaQplt-SLXNENU9_ZEAHQJqWJrhmWp3DFeFqIANglVbyCT9iWsvvW-iOs-fodOPs3EXQNgcHZIiHbqvcujzASHzmXhcXcjrz4j9Ig"
              alt="Gym Sanctuary"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        </section>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Stats & Schedule */}
          <div className="lg:col-span-8 space-y-8">
            {/* Progress Bento */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Weight Trend */}
              <div className="glass-panel p-6 rounded-2xl space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-[#d0c5af] text-xs font-medium">Weight Trend</p>
                    <h4 className="text-3xl font-bold font-['Space_Grotesk'] text-white mt-1">
                      {weightKg} <span className="text-sm font-normal text-[#d0c5af]">kg</span>
                    </h4>
                  </div>
                  <div className="bg-[#f2ca50]/10 text-[#f2ca50] p-2.5 rounded-xl border border-[#f2ca50]/20">
                    <TrendingDown size={20} />
                  </div>
                </div>

                {/* Minimalist Bar Chart */}
                <div className="h-32 flex items-end gap-2.5 px-1 pt-4">
                  <div className="w-full bg-[#353535] rounded-t-lg h-[40%] hover:bg-[#f2ca50] transition-colors cursor-pointer" title="Day 1" />
                  <div className="w-full bg-[#353535] rounded-t-lg h-[55%] hover:bg-[#f2ca50] transition-colors cursor-pointer" title="Day 2" />
                  <div className="w-full bg-[#353535] rounded-t-lg h-[45%] hover:bg-[#f2ca50] transition-colors cursor-pointer" title="Day 3" />
                  <div className="w-full bg-[#353535] rounded-t-lg h-[70%] hover:bg-[#f2ca50] transition-colors cursor-pointer" title="Day 4" />
                  <div className="w-full bg-[#353535] rounded-t-lg h-[65%] hover:bg-[#f2ca50] transition-colors cursor-pointer" title="Day 5" />
                  <div className="w-full bg-[#f2ca50] rounded-t-lg h-[85%] shadow-[0_0_15px_rgba(242,202,80,0.4)]" title="Today" />
                </div>
              </div>

              {/* Calorie Output */}
              <div className="glass-panel p-6 rounded-2xl space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-[#d0c5af] text-xs font-medium">Calorie Output</p>
                    <h4 className="text-3xl font-bold font-['Space_Grotesk'] text-white mt-1">
                      {userProfile.dailyCalorieOutput.toLocaleString()} <span className="text-sm font-normal text-[#d0c5af]">kcal</span>
                    </h4>
                  </div>
                  <div className="bg-blue-500/10 text-blue-400 p-2.5 rounded-xl border border-blue-500/20">
                    <Zap size={20} />
                  </div>
                </div>

                <div className="h-32 flex items-center justify-center pt-2">
                  <div className="relative w-28 h-28">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="rgba(255,255,255,0.08)"
                        strokeWidth="3"
                      />
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#f2ca50"
                        strokeDasharray="75, 100"
                        strokeLinecap="round"
                        strokeWidth="3"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-xl font-bold font-['Space_Grotesk'] text-white">75%</span>
                      <span className="text-[8px] uppercase tracking-wider text-[#d0c5af]">Daily Goal</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Booked Classes */}
            <div className="glass-panel p-6 sm:p-8 rounded-2xl space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-white">Booked Classes</h3>
                  <p className="text-xs text-[#d0c5af] mt-0.5">Your confirmed private reservations</p>
                </div>
                <button
                  onClick={onAddClass}
                  className="text-[#f2ca50] font-['Poppins'] text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 hover:underline cursor-pointer"
                >
                  <PlusCircle size={16} /> Book New Class
                </button>
              </div>

              <div className="space-y-3">
                {bookedClasses.map((item) => (
                  <div
                    key={item.id}
                    className="group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-xl bg-[#20201f] hover:bg-white/5 transition-all border border-white/5"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-[#353535] flex flex-col items-center justify-center border border-white/10 shrink-0">
                        <span className="text-[#f2ca50] font-bold text-lg font-['Space_Grotesk'] leading-none">
                          {item.date}
                        </span>
                        <span className="text-[10px] text-[#d0c5af] font-bold uppercase tracking-wider mt-0.5">
                          {item.month}
                        </span>
                      </div>
                      <div>
                        <h5 className="font-bold text-base text-white">{item.title}</h5>
                        <p className="text-xs text-[#d0c5af]">{item.coachName}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 self-end sm:self-center">
                      <div className="text-right">
                        <p className="font-bold text-sm text-white">{item.time}</p>
                        <span
                          className={`text-[10px] px-2.5 py-0.5 rounded-full uppercase tracking-wider font-bold ${
                            item.status === 'Confirmed'
                              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                              : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>
                      <button
                        onClick={() => onCancelClass(item.id)}
                        className="p-1.5 text-gray-400 hover:text-red-400 transition-colors"
                        title="Cancel Class"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Widgets */}
          <div className="lg:col-span-4 space-y-8">
            {/* BMI Calculator Widget */}
            <div className="glass-panel p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#2a2a2a]/60 to-transparent space-y-6">
              <div className="flex items-center gap-3">
                <Scale className="text-[#f2ca50]" size={22} />
                <h3 className="font-bold text-lg text-white font-['Space_Grotesk']">BMI Calculator</h3>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-[#d0c5af] font-semibold">
                    <span>Height</span>
                    <span className="text-white">{heightCm} cm</span>
                  </div>
                  <input
                    type="range"
                    min="140"
                    max="220"
                    value={heightCm}
                    onChange={(e) => setHeightCm(Number(e.target.value))}
                    className="w-full h-1.5 bg-[#353535] rounded-lg appearance-none cursor-pointer accent-[#f2ca50]"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-[#d0c5af] font-semibold">
                    <span>Weight</span>
                    <span className="text-white">{weightKg} kg</span>
                  </div>
                  <input
                    type="range"
                    min="40"
                    max="150"
                    step="0.5"
                    value={weightKg}
                    onChange={(e) => setWeightKg(Number(e.target.value))}
                    className="w-full h-1.5 bg-[#353535] rounded-lg appearance-none cursor-pointer accent-[#f2ca50]"
                  />
                </div>

                <div className="mt-6 p-6 bg-[#131313] rounded-2xl border border-white/5 text-center space-y-2">
                  <p className="text-xs text-[#d0c5af]">Your current BMI is</p>
                  <h2 className="text-4xl font-bold text-[#f2ca50] font-['Space_Grotesk']">{bmi}</h2>
                  <div className={`inline-block px-3 py-1 text-[10px] rounded-full uppercase tracking-widest font-bold ${bmiCat.color}`}>
                    {bmiCat.label}
                  </div>
                </div>
              </div>
            </div>

            {/* Plan Status */}
            <div className="glass-panel p-6 sm:p-8 rounded-2xl relative overflow-hidden group space-y-4">
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Award size={64} className="text-[#f2ca50]" />
              </div>
              <h4 className="font-bold text-xs uppercase tracking-widest text-[#d0c5af]">Plan Status</h4>
              <p className="font-['Space_Grotesk'] text-2xl font-bold text-white">{userProfile.tier}</p>
              <p className="text-xs text-[#d0c5af]">Next renewal: {userProfile.renewalDate}</p>
              <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                <div className="bg-[#f2ca50] h-full w-[80%] rounded-full shadow-[0_0_10px_rgba(242,202,80,0.5)]" />
              </div>
              <p className="text-[10px] text-[#d0c5af] text-right font-medium">
                {userProfile.daysUsed} of {userProfile.totalDays} days used
              </p>
            </div>

            {/* Quick Training Tip */}
            <div className="p-6 rounded-2xl bg-[#d4af37] text-[#3c2f00] space-y-3">
              <Lightbulb size={24} className="text-[#3c2f00]" />
              <h4 className="font-bold text-base font-['Space_Grotesk']">Elite Insight</h4>
              <p className="text-xs leading-relaxed opacity-90">
                Focus on your eccentric movement today. Control the weight for 3 seconds on the way down to maximize muscle hypertrophy.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Contextual Toast Notification (Bottom Right) */}
      {toastVisible && (
        <div className="fixed bottom-6 right-6 z-[100] animate-fadeIn">
          <div className="glass-panel p-4 pr-6 flex items-center gap-4 bg-[#2a2a2a] border-[#f2ca50]/30 glow-gold rounded-xl shadow-2xl">
            <div className="w-2.5 h-2.5 rounded-full bg-[#f2ca50] animate-pulse" />
            <p className="text-xs sm:text-sm font-medium text-white">
              Class starting in 15 minutes: <span className="text-[#f2ca50] font-bold">HIIT Circuit</span>
            </p>
            <button
              onClick={() => setToastVisible(false)}
              className="ml-2 text-gray-400 hover:text-white p-1"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
