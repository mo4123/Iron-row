import React, { useState, useMemo } from 'react';
import { Filter, Check, Star, Dumbbell, Zap, Layers, RotateCcw } from 'lucide-react';
import { Program, Category, SkillLevel } from '../types';

interface ProgramsCatalogViewProps {
  programs: Program[];
  onSelectProgram: (program: Program) => void;
}

export const ProgramsCatalogView: React.FC<ProgramsCatalogViewProps> = ({
  programs,
  onSelectProgram,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [selectedLevel, setSelectedLevel] = useState<SkillLevel>('All');
  const [maxWeeks, setMaxWeeks] = useState<number>(12);

  const categories: Category[] = [
    'All',
    'Strength',
    'Yoga & Mobility',
    'HIIT & Cardio',
    'Performance Row',
  ];

  const levels: SkillLevel[] = ['All', 'Foundational', 'Advanced', 'Elite'];

  const filteredPrograms = useMemo(() => {
    return programs.filter((p) => {
      const matchCategory =
        selectedCategory === 'All' || p.category === selectedCategory;
      const matchLevel =
        selectedLevel === 'All' || p.skillLevel === selectedLevel;
      const matchWeeks = p.durationWeeks <= maxWeeks;
      return matchCategory && matchLevel && matchWeeks;
    });
  }, [programs, selectedCategory, selectedLevel, maxWeeks]);

  const handleResetFilters = () => {
    setSelectedCategory('All');
    setSelectedLevel('All');
    setMaxWeeks(12);
  };

  return (
    <div className="min-h-screen bg-[#131313] text-[#e5e2e1] pt-28 pb-24 px-6 sm:px-12 md:px-16 max-w-[1440px] mx-auto">
      {/* Header Section */}
      <header className="mb-12 sm:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5 pb-8">
        <div className="max-w-2xl">
          <h1 className="font-['Space_Grotesk'] text-4xl sm:text-6xl font-bold uppercase tracking-tight text-white mb-4">
            Our Signature <span className="text-[#f2ca50]">Programs</span>
          </h1>
          <p className="font-['Inter'] text-base sm:text-lg text-[#d0c5af] leading-relaxed">
            Elevate your performance with our curated elite training protocols. Designed for those who demand more from their bodies.
          </p>
        </div>
        <div className="flex gap-4 text-[#f2ca50]">
          <Dumbbell size={28} />
          <Zap size={28} className="text-[#99907c]" />
          <Layers size={28} className="text-[#99907c]" />
        </div>
      </header>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-72 shrink-0">
          <div className="glass-panel p-6 sm:p-8 rounded-xl sticky top-28 space-y-8">
            <div className="flex items-center gap-2 pb-2 border-b border-white/10">
              <Filter size={18} className="text-[#f2ca50]" />
              <span className="font-['Space_Grotesk'] text-lg font-bold uppercase tracking-tight text-white">
                Refine Selection
              </span>
            </div>

            {/* Category Checkboxes */}
            <div>
              <h4 className="font-['Poppins'] text-xs font-bold text-[#99907c] uppercase tracking-widest mb-4">
                Category
              </h4>
              <div className="space-y-3">
                {categories.map((cat) => {
                  const isChecked = selectedCategory === cat;
                  return (
                    <label
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <div
                        className={`w-5 h-5 border-2 rounded-sm flex items-center justify-center transition-all ${
                          isChecked
                            ? 'border-[#f2ca50] bg-[#f2ca50]/20 text-[#f2ca50]'
                            : 'border-[#4d4635] group-hover:border-[#f2ca50]'
                        }`}
                      >
                        {isChecked && <Check size={14} className="stroke-[3]" />}
                      </div>
                      <span
                        className={`text-sm font-medium transition-colors ${
                          isChecked ? 'text-[#f2ca50] font-bold' : 'text-[#d0c5af] group-hover:text-white'
                        }`}
                      >
                        {cat === 'All' ? 'All Programs' : cat}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Skill Level Pills */}
            <div>
              <h4 className="font-['Poppins'] text-xs font-bold text-[#99907c] uppercase tracking-widest mb-4">
                Skill Level
              </h4>
              <div className="flex flex-wrap gap-2">
                {levels.map((lvl) => {
                  const isSelected = selectedLevel === lvl;
                  return (
                    <button
                      key={lvl}
                      onClick={() => setSelectedLevel(lvl)}
                      className={`px-3.5 py-1.5 text-xs font-bold rounded-full transition-all cursor-pointer ${
                        isSelected
                          ? 'border border-[#f2ca50] text-[#f2ca50] bg-[#f2ca50]/10'
                          : 'bg-[#353535] text-[#d0c5af] hover:bg-[#d4af37] hover:text-[#3c2f00]'
                      }`}
                    >
                      {lvl}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Duration Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-['Poppins'] text-xs font-bold text-[#99907c] uppercase tracking-widest">
                  Max Duration
                </h4>
                <span className="text-xs font-bold text-[#f2ca50]">{maxWeeks} Weeks</span>
              </div>
              <input
                type="range"
                min="2"
                max="12"
                step="2"
                value={maxWeeks}
                onChange={(e) => setMaxWeeks(Number(e.target.value))}
                className="w-full accent-[#f2ca50] h-1.5 bg-[#353535] rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-bold text-[#99907c] uppercase mt-2">
                <span>2 Weeks</span>
                <span>12 Weeks</span>
              </div>
            </div>

            <button
              onClick={handleResetFilters}
              className="w-full py-3.5 bg-[#f2ca50] text-[#3c2f00] font-['Poppins'] text-xs font-bold uppercase tracking-widest rounded-lg hover:scale-105 transition-all flex items-center justify-center gap-2 cursor-pointer glow-gold"
            >
              <RotateCcw size={14} /> Reset Filters
            </button>
          </div>
        </aside>

        {/* Main Grid */}
        <div className="flex-1">
          {filteredPrograms.length === 0 ? (
            <div className="glass-panel p-12 text-center rounded-xl">
              <p className="text-lg text-[#d0c5af] font-medium">No programs match your active filters.</p>
              <button
                onClick={handleResetFilters}
                className="mt-4 px-6 py-2 bg-[#f2ca50] text-[#3c2f00] font-bold rounded-full text-xs uppercase"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPrograms.map((prog, index) => {
                return (
                  <div
                    key={prog.id}
                    onClick={() => onSelectProgram(prog)}
                    className={`glass-panel rounded-xl overflow-hidden flex flex-col group cursor-pointer hover:-translate-y-2 transition-all duration-300 ${
                      index % 2 === 1 ? 'mt-0 md:mt-8' : ''
                    }`}
                  >
                    <div className="relative h-64 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-transparent to-transparent z-10" />
                      <img
                        src={prog.image}
                        alt={prog.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4 z-20 flex gap-2">
                        <span className={`px-3 py-1 text-[10px] font-bold uppercase rounded-full backdrop-blur-md border border-white/10 ${prog.badgeBg} ${prog.badgeTextColor}`}>
                          {prog.badgeTag}
                        </span>
                        <span className="bg-black/50 backdrop-blur-md text-white px-3 py-1 text-[10px] font-bold uppercase rounded-full border border-white/10">
                          {prog.durationWeeks} Weeks
                        </span>
                      </div>
                    </div>

                    <div className="p-6 sm:p-8 flex flex-col flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-white group-hover:text-[#f2ca50] transition-colors">
                          {prog.title}
                        </h3>
                        <div className="flex gap-1 text-[#f2ca50]">
                          {[...Array(prog.rating)].map((_, i) => (
                            <Star key={i} size={14} fill="#f2ca50" />
                          ))}
                        </div>
                      </div>

                      <p className="text-[#d0c5af] text-sm mb-6 flex-1 leading-relaxed">
                        {prog.description}
                      </p>

                      <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                        <div className="flex items-center gap-3">
                          <img
                            src={prog.coach.avatar}
                            alt={prog.coach.name}
                            className="w-10 h-10 rounded-full object-cover border border-[#f2ca50]/30"
                          />
                          <div>
                            <p className="text-xs font-bold text-white uppercase tracking-tight">
                              {prog.coach.name}
                            </p>
                            <p className="text-[10px] text-[#99907c] uppercase tracking-wider">
                              {prog.coach.role}
                            </p>
                          </div>
                        </div>

                        <span className="font-['Poppins'] text-[10px] font-bold text-[#f2ca50] border border-[#f2ca50]/30 bg-[#f2ca50]/10 px-3 py-1 rounded-full uppercase">
                          INTENSITY: {prog.intensity}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
