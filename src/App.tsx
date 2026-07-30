import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Sidebar } from './components/layout/Sidebar';
import { Header } from './components/layout/Header';
import { DashboardView } from './components/dashboard/DashboardView';
import { RoadmapView } from './components/roadmap/RoadmapView';
import { DailyPlannerView } from './components/planner/DailyPlannerView';
import { DSATrackerView } from './components/trackers/DSATrackerView';
import { SQLTrackerView } from './components/trackers/SQLTrackerView';
import { AptitudeTrackerView } from './components/trackers/AptitudeTrackerView';
import { ResearchCenterView } from './components/research/ResearchCenterView';
import { InterviewPrepView } from './components/interview/InterviewPrepView';
import { ProjectPortfolioView } from './components/projects/ProjectPortfolioView';
import { ResumeTrackerView } from './components/resume/ResumeTrackerView';
import { JobApplicationsView } from './components/jobs/JobApplicationsView';
import { CompanyTrackerView } from './components/companies/CompanyTrackerView';
import { CodingProfilesView } from './components/profiles/CodingProfilesView';
import { NotesMarkdownView } from './components/notes/NotesMarkdownView';
import { AnalyticsView } from './components/analytics/AnalyticsView';
import { SettingsView } from './components/settings/SettingsView';
import { AIAssistantModal } from './components/ai/AIAssistantModal';

const MainContent: React.FC = () => {
  const { activeTab } = useApp();

  const renderTabContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardView />;
      case 'planner':
        return <DailyPlannerView />;
      case 'roadmap':
        return <RoadmapView />;
      case 'dsa':
        return <DSATrackerView />;
      case 'sql':
        return <SQLTrackerView />;
      case 'aptitude':
        return <AptitudeTrackerView />;
      case 'research':
        return <ResearchCenterView />;
      case 'interview':
        return <InterviewPrepView />;
      case 'projects':
        return <ProjectPortfolioView />;
      case 'resume':
        return <ResumeTrackerView />;
      case 'jobs':
        return <JobApplicationsView />;
      case 'companies':
        return <CompanyTrackerView />;
      case 'profiles':
        return <CodingProfilesView />;
      case 'notes':
        return <NotesMarkdownView />;
      case 'analytics':
        return <AnalyticsView />;
      case 'settings':
        return <SettingsView />;
      default:
        return <DashboardView />;
    }
  };

  return (
    <div className="flex-1 flex flex-col min-w-0 bg-[#090D16] min-h-screen">
      <Header />
      <main className="flex-1 p-6 overflow-y-auto max-w-7xl w-full mx-auto">
        {renderTabContent()}
      </main>
      <AIAssistantModal />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <div className="flex min-h-screen bg-[#090D16]">
        <Sidebar />
        <MainContent />
      </div>
    </AppProvider>
  );
}
