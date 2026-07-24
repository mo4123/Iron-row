export type Category = 'All' | 'Strength' | 'Yoga & Mobility' | 'HIIT & Cardio' | 'Performance Row' | 'Calisthenics';
export type SkillLevel = 'All' | 'Foundational' | 'Advanced' | 'Elite';
export type Intensity = 'MID' | 'HIGH' | 'ELITE' | 'MAX';

export interface Coach {
  id: string;
  name: string;
  role: string;
  avatar: string;
  bio?: string;
  specialties?: string[];
}

export interface Program {
  id: string;
  title: string;
  category: Category;
  durationWeeks: number;
  skillLevel: SkillLevel;
  intensity: Intensity;
  rating: number;
  description: string;
  fullDetails?: string;
  coach: Coach;
  image: string;
  badgeTag: string;
  badgeBg: string;
  badgeTextColor: string;
}

export interface BookedClass {
  id: string;
  date: string;
  month: string;
  title: string;
  coachName: string;
  location: string;
  time: string;
  status: 'Confirmed' | 'Waitlisted' | 'Completed';
  category: string;
}

export interface UserProfile {
  name: string;
  tier: string;
  weightKg: number;
  heightCm: number;
  dailyCalorieOutput: number;
  calorieGoal: number;
  daysUsed: number;
  totalDays: number;
  renewalDate: string;
}
