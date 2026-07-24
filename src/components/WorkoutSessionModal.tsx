import React, { useState, useEffect } from 'react';
import { X, Play, Pause, CheckCircle2, Flame, Heart, Trophy } from 'lucide-react';

interface WorkoutSessionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCompleteWorkout: (caloriesBurned: number) => void;
}

export const WorkoutSessionModal: React.FC<WorkoutSessionModalProps> = ({
  isOpen,
  onClose,
  onCompleteWorkout,
}) => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const [bpm, setBpm] = useState(138);
  const [completedExercises, setCompletedExercises] = useState<number[]>([]);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setSeconds(0);
      setIsActive(true);
      setCompletedExercises([]);
      setFinished(false);
      return;
    }

    let interval: any = null;
    if (isActive && !finished) {
      interval = setInterval(() => {
        setSeconds((s) => s + 1);
        setBpm(130 + Math.floor(Math.sin(Date.now() * 0.003) * 18));
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isOpen, isActive, finished]);

  if (!isOpen) return null;

  const exercises = [
    { name: 'Barbell Flat Bench Press', sets: '4 Sets × 8 Reps', target: 'Chest / Triceps' },
    { name: 'Incline Dumbbell Press', sets: '3 Sets × 10 Reps', target: 'Upper Chest' },
    { name: 'Cable Chest Flys', sets: '3 Sets × 12 Reps', target: 'Sternal Head' },
    { name: 'Weighted Tricep Dips', sets: '4 Sets × 10 Reps', target: 'Triceps Brachii' },
  ];

  const formatTime = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const toggleExercise = (index: number) => {
    setCompletedExercises((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const estimatedCalories = Math.floor(seconds * 0.18 + completedExercises.length * 45);

  const handleFinish = () => {
    setFinished(true);
    onCompleteWorkout(estimatedCalories);
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-xl bg-[#1b1b1b] border border-[#f2ca50]/30 rounded-2xl overflow-hidden text-[#e5e2e1] shadow-2xl p-6 sm:p-8">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-white p-2 rounded-full hover:bg-white/5 transition-colors"
        >
          <X size={20} />
        </button>

        {finished ? (
          <div className="py-10 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#f2ca50]/20 border border-[#f2ca50] flex items-center justify-center text-[#f2ca50] mx-auto glow-gold">
              <Trophy size={32} />
            </div>
            <h3 className="text-2xl font-bold font-['Space_Grotesk'] text-[#f2ca50]">
              Workout Complete!
            </h3>
            <p className="text-sm text-[#d0c5af]">
              Great work! You burned <span className="text-white font-bold">{estimatedCalories} kcal</span> in{' '}
              <span className="text-white font-bold">{formatTime(seconds)}</span>.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs font-bold text-[#f2ca50] uppercase tracking-[0.2em]">
                  Active Session
                </span>
                <h2 className="text-2xl font-bold font-['Space_Grotesk'] text-white">
                  Chest &amp; Triceps Hypertrophy
                </h2>
              </div>
              <div className="flex items-center gap-2 bg-[#20201f] px-3 py-1.5 rounded-full border border-white/10">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
                <span className="text-xs font-bold text-white font-mono">{formatTime(seconds)}</span>
              </div>
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-3 gap-3 p-4 bg-[#20201f] rounded-xl border border-white/5">
              <div className="text-center border-r border-white/5">
                <p className="text-[10px] font-bold uppercase text-gray-400">Duration</p>
                <p className="text-lg font-bold text-white mt-0.5">{formatTime(seconds)}</p>
              </div>
              <div className="text-center border-r border-white/5">
                <div className="flex items-center justify-center gap-1 text-red-400">
                  <Heart size={12} className="animate-pulse" />
                  <p className="text-[10px] font-bold uppercase text-gray-400">Heart Rate</p>
                </div>
                <p className="text-lg font-bold text-red-400 mt-0.5">{bpm} <span className="text-[10px] font-normal text-gray-400">BPM</span></p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 text-[#f2ca50]">
                  <Flame size={12} />
                  <p className="text-[10px] font-bold uppercase text-gray-400">Burned</p>
                </div>
                <p className="text-lg font-bold text-[#f2ca50] mt-0.5">{estimatedCalories} <span className="text-[10px] font-normal text-gray-400">kcal</span></p>
              </div>
            </div>

            {/* Exercises List */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#d0c5af] mb-3">
                Routine Breakdown ({completedExercises.length}/{exercises.length} Done)
              </h3>
              <div className="space-y-2">
                {exercises.map((ex, idx) => {
                  const isDone = completedExercises.includes(idx);
                  return (
                    <div
                      key={idx}
                      onClick={() => toggleExercise(idx)}
                      className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                        isDone
                          ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-300'
                          : 'bg-[#20201f] border-white/5 hover:border-white/20 text-white'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <CheckCircle2
                          size={20}
                          className={isDone ? 'text-emerald-400' : 'text-gray-500'}
                        />
                        <div>
                          <p className={`text-xs font-bold ${isDone ? 'line-through text-emerald-300' : 'text-white'}`}>
                            {ex.name}
                          </p>
                          <p className="text-[10px] text-gray-400">{ex.sets} • {ex.target}</p>
                        </div>
                      </div>
                      <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-white/5 text-gray-300">
                        {isDone ? 'Done' : 'Tap to Complete'}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-3 pt-2">
              <button
                onClick={() => setIsActive(!isActive)}
                className="flex-1 bg-[#20201f] text-white py-3 rounded-full font-bold text-xs uppercase tracking-wider border border-white/10 hover:bg-white/10 flex items-center justify-center gap-2"
              >
                {isActive ? <Pause size={16} /> : <Play size={16} />}
                {isActive ? 'Pause' : 'Resume'}
              </button>
              <button
                onClick={handleFinish}
                className="flex-1 bg-[#d4af37] text-[#3c2f00] py-3 rounded-full font-['Poppins'] font-bold text-xs uppercase tracking-wider hover:scale-[1.02] transition-transform glow-gold"
              >
                Finish Workout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
