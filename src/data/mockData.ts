import { Program, Coach, BookedClass, UserProfile } from '../types';

export const COACHES: Record<string, Coach> = {
  marcus: {
    id: 'marcus',
    name: 'Marcus Vane',
    role: 'Lead Strength Coach',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBlESB3fmDQyQCoMQEOGOxhrlI6c7LwQ9dsENkNe7lN2hUH9l6xo9dmKS0wtT3TCXZaub8hrfKI28WJ6J1CRYZM3ExVUNqcbIEl-v4WE_GsG5m6V4HlCPl5EbLovshnWJXW_z5tkMbQ-noVRGJrzJWJWXlItgRqlK4ATAPEQz35G2o1f_cjag1iVyWMjPq8B4UOnDCwgoan0ABNvuflccQhCjrONteiVl3kzCbjt6qZfxX6PtZRDHYs0RxGpyZuJo6w768RlhqDB8u',
    bio: 'Former Olympic weightlifting consultant specializing in periodization, biomechanics, and raw power endurance.',
    specialties: ['Olympic Weightlifting', 'Powerlifting', 'Hypertrophy Protocols']
  },
  elena: {
    id: 'elena',
    name: 'Elena Rossi',
    role: 'Mobility Expert',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBw0y9HEEv3m_HkyAp7pQ8yn5OdJCyrrd4b6wrmFDaKWVl8rLvt5jxMF_5KYEPxJBLSbjZwjpp0YKw84w8Kll8Z-_Cyj8EDfuuRBjHBN0i5gmH2w4EqljniPdbKtefrl9tyAvJPwZXDPuWDcO_4z0eLDTs3Yjn-1tRgB7cu1swlbIu2wed066m7q9pJNmHyL-PjUJsK1ocJ6fmDnIjFsy0Qrzn4OpIp8b7tSLxpUrSqcDc6GAkAZwgPrrjd4lB2Ko_TQDwKO1WPrAhq',
    bio: 'Pioneer in functional joint restoration and dynamic flexibility for high-impact performance athletes.',
    specialties: ['Dynamic Mobility', 'Joint Longevity', 'Myofascial Release']
  },
  david: {
    id: 'david',
    name: 'David Thorne',
    role: 'Rowing Specialist',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCt9Xp9lNVKN9ng4297fu-jsZNNbGsZK-Gui3de7QD68DHGJKHP4fpKByeKg51RK-q2TcwzXn1IVwclFoFHne9hAnS-tUg6Mso-UrrXv5wKdFVeA2ib6YbEY3uN1si5cLskXx137r-G_GfMckgs3f7BuwA6UaJW8qT6wmzcRAj5OUgrqzHG6ezRKi2ErjPaNxkU7d5VC5ODgGtTU1tRLy9UhPt2d6xJTH0SBRhF-yNrsabpvc458U2Yks8xbIIru6b7nQ-R7394rfQ',
    bio: 'World championship rower crafting aerobic engine capacity through telemetry-driven rowing biomechanics.',
    specialties: ['Performance Ergometer', 'VO2 Max Conditioning', 'Anaerobic Threshold']
  },
  sasha: {
    id: 'sasha',
    name: 'Sasha Klein',
    role: 'Performance Coach',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOdkgJsllOytwJYskHSoM7WH8qC2oibPkulc3Egye3C7Ss1X5-GCFK9YvceH9avZZtdmVUPEhzrNlAX_TZ2JYtM0RUn2PFKfKDqC_ddrG1CCICCOsq1-cYJAxkfMl3AP-mlxS26JRRCINO2x_irzs_srRFk5F-dunA25UUao056PkSXmWHv5IYJ24Qt_t3RRM9CdCDXwxMd9OfUsRZbgTpcnv-bRn8MV-1tpiOPrxyPlIOM_3-et58dr8cutvEUnUx36qmSDo9MjUN',
    bio: 'High-intensity conditioning architect focused on anaerobic threshold advancement and body composition optimization.',
    specialties: ['HIIT Intervals', 'Metabolic Conditioning', 'Fat Oxidation']
  },
  jordan: {
    id: 'jordan',
    name: 'Jordan Jax',
    role: 'Movement Coach',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPCD0zOYLtqvwcTdovdZY33KfRyPf_qJLYskdKKlmkuKy7zwE2g_xPNT7sbMqf__Ajz-KYx4QXgvxUtNu966Td5q3tWxUz4YBbMizJoPQL481lelIVk11VIfLN9U-oJ7g34chl2URDVtn6rv2SzlkXokYCFee1A1AJVmXKGGf0Rlc9CtKeVMaH9Gv2XTE50Ztnlac45WNoAH4SIeve-g83tvNmUzlTTWpE5Jv5oZ5DU-DyUq22pdodYbwTfKOrmunSiEyS20hlMIh-',
    bio: 'Calisthenics master specializing in bodyweight levers, isometric strength, and gymnastic rings.',
    specialties: ['Calisthenics', 'Isometric Control', 'Gymnastic Ring Work']
  }
};

export const PROGRAMS: Program[] = [
  {
    id: 'iron-performance',
    title: 'Iron Performance',
    category: 'Strength',
    durationWeeks: 8,
    skillLevel: 'Advanced',
    intensity: 'ELITE',
    rating: 5,
    description: 'Master the foundational lifts with scientific periodization and personalized coaching.',
    fullDetails: 'The definitive blueprint for raw power. Focuses on squat, bench press, deadlift, and barbell accessory work. Features progressive overload cycles, velocity-based training metrics, and elite CNS recovery protocols.',
    coach: COACHES.marcus,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBe-j6NuSxN0fFSTZ1GpybdH-CTVeKVTK6v-d5qkfpdMvH2wk-0CN8WRYt5QCQpxMgVIqgdiVD5s8zgTqIB4goe_Yy7yqVw5NB70x_GMrx00DbvmbYjRaFrGPRAJtZXw6lK6cateewevszugbDIsSMeeqr0pkDF4AlC2H4LIoORXroSdn4ku7RnoZ7CPkHKFPdPY1fOdOuzrIoi1w1LxTQBfniRMbkOXnhON3TqOY-35k6XFsfXxulO9EOIVBrUmi5Gxw0KGlBxW5w5',
    badgeTag: 'STRENGTH',
    badgeBg: 'bg-primary/20',
    badgeTextColor: 'text-primary'
  },
  {
    id: 'velocity-row',
    title: 'Velocity Row',
    category: 'Performance Row',
    durationWeeks: 6,
    skillLevel: 'Advanced',
    intensity: 'HIGH',
    rating: 5,
    description: 'Explosive cardiovascular conditioning using our signature performance rowing systems.',
    fullDetails: 'Maximum cardiovascular efficiency through professional-grade rowing metrics. Build an engine that never quits with stroke-rate synchronization, interval sprints, and telemetry-guided power pacing.',
    coach: COACHES.david,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVYdoS9TDPUnI0TxynjvRpP-7Xw8A6ndxL3Q86uFjZQpsTu3CrsNI8HILOw-oEfpIyDH95T-_PVh_9s8Ekd5-62v5ko26pYGQe05ztFsjvIjA5IxjBz7SDPmkcS0IffCyBg4TYqomYKMawSwUFnEkANKxi344LKtecyZPD-vWuTK50-ZVE0WFJLmXr6BWW1C75_cLqx1x2QLsF8YcLrJFrLL5YKE4HuBd_309g2cEncCBREIQPvbgUzetlF1ld4bOaY2MuV3T5lErq',
    badgeTag: 'ROWING',
    badgeBg: 'bg-blue-500/20',
    badgeTextColor: 'text-blue-300'
  },
  {
    id: 'elite-restorative',
    title: 'Elite Restorative',
    category: 'Yoga & Mobility',
    durationWeeks: 4,
    skillLevel: 'Foundational',
    intensity: 'MID',
    rating: 5,
    description: 'Advanced mobility work and recovery protocols to ensure peak performance day after day.',
    fullDetails: 'Advanced mobility designed to unlock explosive movement. Bridge the gap between static strength and dynamic flexibility with infrared thermal sessions, breathwork control, and myofascial decompression.',
    coach: COACHES.elena,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhGWweBjLKcwEyltywoIT9AFm7d8eRwELdHb4dwV-J8O7JrSWOZWHSgb_-ophgzFur2F7ULstddHRk4LAW1QWkQderQPs_AQwCpJLQGCCsUDS7nGZ7lUXo2a1X2_4lMGWRuXYmZlN_-F18wmg8W1Ez9_y4UszMWQB57HombLUw1Vl2HtbIOBf2l5A5C90WliyWK0FS7_vubcCB9ZlqvWHiK53dRXfWRzEzKeugwY5-CJ5i3MjkMN9ykCuhNXE3CVwj8nWb7MIh6nyH',
    badgeTag: 'RECOVERY',
    badgeBg: 'bg-emerald-500/20',
    badgeTextColor: 'text-emerald-300'
  },
  {
    id: 'metabolic-ignite',
    title: 'Metabolic Ignite',
    category: 'HIIT & Cardio',
    durationWeeks: 10,
    skillLevel: 'Elite',
    intensity: 'MAX',
    rating: 5,
    description: 'A scientific approach to fat loss and muscle retention. High-threshold intervals meet athletic movement.',
    fullDetails: 'High-octane interval conditioning utilizing kettlebells, ski-ergs, and sprint rowing. Formulated to maximize post-exercise oxygen consumption (EPOC) while preserving lean tissue.',
    coach: COACHES.sasha,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB72ZxPL8xXF_IJXc_JL0Nhbpt0u216yCFNCKvimYYbi_Oxni1iU7HXaM7fyD6tCTHbPK8brPHNBtVQfdVhYBXMzTZ675ae5C3xcfMmIgLOJJo8YFl99ioa_hvYNHFM9F3pl2BJSDyVbMO6e8ohJHptZFBnu75jTv2ZMIG3ySUY2Za4RtUr6L0wvyx8M9UPQcc-R_IqgZriejeZ-kuS7SIbS9psfzAT8QbLi4YsC6eq1bdEIyCfPCAgdj3-dwe3nDrC7_MWym1FOu4k',
    badgeTag: 'HIIT',
    badgeBg: 'bg-amber-500/20',
    badgeTextColor: 'text-amber-300'
  },
  {
    id: 'hypertrophy-lab',
    title: 'Hypertrophy Lab',
    category: 'Strength',
    durationWeeks: 12,
    skillLevel: 'Advanced',
    intensity: 'HIGH',
    rating: 5,
    description: 'Scientific muscle building for the aesthetic athlete. Focus on time-under-tension protocols.',
    fullDetails: 'Targeted muscle hypertrophy through controlled mechanical tension, metabolic stress, and muscle damage optimization. Engineered for aesthetic symmetry and joint integrity.',
    coach: COACHES.marcus,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1EpDHTlzmCi8U2VR_f415puBpKupfe8EOSBt2pyf_ghIpBXELRu1V73rnXPvjjeUBqTK8qiNeVSWUWYk99kJQH_BwUJaD6IjwSOLM3-WmAMBG0Xn-jlUCHVbBT4N4BXcwauHCKAzpeEa8kDmopqAN2ajVkxHxSBVVtvJ9o6vbVn3wR_SKoHiyItPwPo7HSB7g40Sz5NHPEkXC7ziaAqKg7_7fMjc6X4_e85rCYEysaOVapFigwWRjPzITpwzXmUm7Uo1rSiaUwT2Q',
    badgeTag: 'STRENGTH',
    badgeBg: 'bg-primary/20',
    badgeTextColor: 'text-primary'
  },
  {
    id: 'gravity-defied',
    title: 'Gravity Defied',
    category: 'Calisthenics',
    durationWeeks: 8,
    skillLevel: 'Elite',
    intensity: 'ELITE',
    rating: 5,
    description: 'Master your own body weight. From foundational holds to advanced gymnastic transitions.',
    fullDetails: 'Calisthenics mastery combining front lever, planche, muscle-up, and handstand push-up progressions with isometric tendon strengthening.',
    coach: COACHES.jordan,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMCddaHqHV54i3r6ZwV5mQhidHKersTKjRTt3vtHd3Ie3W_Zovlec2Hp3l71R3iHNjVJwiAj_6FCmTn7KpuI5ZgjzVPrISVDgWmMdrdh17UnZGiQQc_xpFrd5ne21UT4UosGAfDZtdfbF0meErG6O4umDjueaDyu94-Ehwe7BAGCJJkN5o0thkVA5OBQgYXRlPT1w3-9pLvj95yuJsMiJVcWqf0h8CtigQWw5ZwwS0GP_UxoDTl_4D9AK1yjoyKbhdCE_Lhm8S2FDO',
    badgeTag: 'CALISTHENICS',
    badgeBg: 'bg-purple-500/20',
    badgeTextColor: 'text-purple-300'
  }
];

export const INITIAL_BOOKED_CLASSES: BookedClass[] = [
  {
    id: 'class-1',
    date: '14',
    month: 'OCT',
    title: 'Advanced Row & HIIT',
    coachName: 'Coach Marcus • Studio A',
    location: 'Studio A',
    time: '08:30 AM',
    status: 'Confirmed',
    category: 'Performance Row'
  },
  {
    id: 'class-2',
    date: '15',
    month: 'OCT',
    title: 'Elite Power Lifting',
    coachName: 'Coach Sarah • Main Floor',
    location: 'Main Floor',
    time: '06:00 PM',
    status: 'Waitlisted',
    category: 'Strength'
  },
  {
    id: 'class-3',
    date: '17',
    month: 'OCT',
    title: 'Kinetic Mobility & Recovery',
    coachName: 'Coach Elena • Sanctuary Studio',
    location: 'Sanctuary Studio',
    time: '07:15 AM',
    status: 'Confirmed',
    category: 'Yoga & Mobility'
  }
];

export const INITIAL_USER_PROFILE: UserProfile = {
  name: 'Alex Mercer',
  tier: 'Elite Tier',
  weightKg: 82.4,
  heightCm: 182,
  dailyCalorieOutput: 2450,
  calorieGoal: 3200,
  daysUsed: 24,
  totalDays: 30,
  renewalDate: 'Nov 12, 2024'
};
