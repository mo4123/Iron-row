import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { JoinModal } from './components/JoinModal';
import { HeroVideoTourModal } from './components/HeroVideoTourModal';
import { ProgramDetailModal } from './components/ProgramDetailModal';
import { WorkoutSessionModal } from './components/WorkoutSessionModal';

import { HomeView } from './views/HomeView';
import { ProgramsCatalogView } from './views/ProgramsCatalogView';
import { DashboardView } from './views/DashboardView';
import { MembershipsView } from './views/MembershipsView';
import { TrainersView } from './views/TrainersView';
import { ScheduleView } from './views/ScheduleView';
import { AboutView } from './views/AboutView';

import { PROGRAMS, INITIAL_BOOKED_CLASSES, INITIAL_USER_PROFILE } from './data/mockData';
import { Program, BookedClass, UserProfile } from './types';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [isVideoTourModalOpen, setIsVideoTourModalOpen] = useState(false);
  const [isWorkoutModalOpen, setIsWorkoutModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  const [bookedClasses, setBookedClasses] = useState<BookedClass[]>(INITIAL_BOOKED_CLASSES);
  const [userProfile, setUserProfile] = useState<UserProfile>(INITIAL_USER_PROFILE);

  // Handlers
  const handleJoinSuccess = (memberName: string, tier: string) => {
    setUserProfile((prev) => ({
      ...prev,
      name: memberName || prev.name,
      tier: `${tier} Member`,
    }));
    setCurrentView('dashboard');
  };

  const handleBookProgram = (programTitle: string) => {
    const newBooking: BookedClass = {
      id: `booking-${Date.now()}`,
      date: '20',
      month: 'OCT',
      title: programTitle,
      coachName: 'Lead Coach • Studio A',
      location: 'Studio A',
      time: '10:00 AM',
      status: 'Confirmed',
      category: 'Signature Program',
    };
    setBookedClasses((prev) => [newBooking, ...prev]);
  };

  const handleBookScheduleClass = (title: string, coach: string, location: string, time: string) => {
    const newBooking: BookedClass = {
      id: `booking-${Date.now()}`,
      date: '18',
      month: 'OCT',
      title,
      coachName: `${coach} • ${location}`,
      location,
      time,
      status: 'Confirmed',
      category: 'Schedule Class',
    };
    setBookedClasses((prev) => [newBooking, ...prev]);
  };

  const handleCancelClass = (id: string) => {
    setBookedClasses((prev) => prev.filter((item) => item.id !== id));
  };

  const handleCompleteWorkout = (caloriesBurned: number) => {
    setUserProfile((prev) => ({
      ...prev,
      dailyCalorieOutput: prev.dailyCalorieOutput + caloriesBurned,
    }));
  };

  return (
    <div className="min-h-screen bg-[#131313] text-[#e5e2e1] font-['Inter'] selection:bg-[#f2ca50]/30 selection:text-[#f2ca50] flex flex-col">
      {/* Top Navbar */}
      <Navbar
        currentView={currentView}
        setCurrentView={setCurrentView}
        onOpenJoinModal={() => setIsJoinModalOpen(true)}
      />

      {/* Main View Router */}
      <div className="flex-1">
        {currentView === 'home' && (
          <HomeView
            programs={PROGRAMS}
            onOpenTourModal={() => setIsVideoTourModalOpen(true)}
            onOpenJoinModal={() => setIsJoinModalOpen(true)}
            onSelectProgram={(p) => setSelectedProgram(p)}
            setCurrentView={setCurrentView}
          />
        )}

        {currentView === 'programs' && (
          <ProgramsCatalogView
            programs={PROGRAMS}
            onSelectProgram={(p) => setSelectedProgram(p)}
          />
        )}

        {currentView === 'dashboard' && (
          <DashboardView
            userProfile={userProfile}
            bookedClasses={bookedClasses}
            onStartWorkout={() => setIsWorkoutModalOpen(true)}
            onCancelClass={handleCancelClass}
            onAddClass={() => setCurrentView('schedule')}
          />
        )}

        {currentView === 'memberships' && (
          <MembershipsView onOpenJoinModal={() => setIsJoinModalOpen(true)} />
        )}

        {currentView === 'trainers' && (
          <TrainersView onOpenJoinModal={() => setIsJoinModalOpen(true)} />
        )}

        {currentView === 'schedule' && (
          <ScheduleView onBookClass={handleBookScheduleClass} />
        )}

        {currentView === 'about' && <AboutView />}
      </div>

      {/* Footer */}
      <Footer setCurrentView={setCurrentView} />

      {/* Global Modals */}
      <JoinModal
        isOpen={isJoinModalOpen}
        onClose={() => setIsJoinModalOpen(false)}
        onJoinSuccess={handleJoinSuccess}
      />

      <HeroVideoTourModal
        isOpen={isVideoTourModalOpen}
        onClose={() => setIsVideoTourModalOpen(false)}
      />

      <ProgramDetailModal
        program={selectedProgram}
        onClose={() => setSelectedProgram(null)}
        onBookProgram={handleBookProgram}
      />

      <WorkoutSessionModal
        isOpen={isWorkoutModalOpen}
        onClose={() => setIsWorkoutModalOpen(false)}
        onCompleteWorkout={handleCompleteWorkout}
      />
    </div>
  );
}
