import React, { createContext, useContext, useState, useEffect } from 'react';
import type { 
  TabType, 
  UserProfile, 
  DSAQuestion, 
  SQLQuestion, 
  AptitudeTopic, 
  RoadmapItem, 
  ResearchItem, 
  InterviewQuestion, 
  ProjectItem, 
  JobApplication, 
  CompanyInfo, 
  DailyTask, 
  NoteItem 
} from '../types';
import { 
  initialProfile, 
  initialDSAQuestions, 
  initialSQLQuestions, 
  initialAptitudeTopics, 
  initialRoadmap, 
  initialResearchItems, 
  initialInterviewQuestions, 
  initialProjects, 
  initialJobApplications, 
  initialCompanies, 
  initialDailyTasks, 
  initialNotes 
} from '../data/mockData';

interface AppContextType {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  profile: UserProfile;
  setProfile: React.Dispatch<React.SetStateAction<UserProfile>>;
  dsaQuestions: DSAQuestion[];
  toggleDSAQuestion: (id: string) => void;
  updateDSANotes: (id: string, notes: string, mistakes: string) => void;
  sqlQuestions: SQLQuestion[];
  toggleSQLQuestion: (id: string) => void;
  aptitudeTopics: AptitudeTopic[];
  updateAptitudeProgress: (id: string, solvedDelta: number) => void;
  roadmapItems: RoadmapItem[];
  toggleRoadmapItem: (id: string) => void;
  researchItems: ResearchItem[];
  interviewQuestions: InterviewQuestion[];
  toggleInterviewMastered: (id: string) => void;
  projects: ProjectItem[];
  jobApplications: JobApplication[];
  addJobApplication: (app: Omit<JobApplication, 'id'>) => void;
  updateJobStatus: (id: string, status: JobApplication['status']) => void;
  companies: CompanyInfo[];
  dailyTasks: DailyTask[];
  toggleTask: (id: string) => void;
  addTask: (title: string, category: 'Morning' | 'Evening', domain: DailyTask['domain']) => void;
  notes: NoteItem[];
  addNote: (note: Omit<NoteItem, 'id' | 'updatedAt'>) => void;
  updateNote: (id: string, content: string) => void;
  isAiModalOpen: boolean;
  setIsAiModalOpen: (open: boolean) => void;
  aiPromptContext: string;
  openAiAssistant: (context?: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<TabType>('dashboard');
  
  const [profile, setProfile] = useState<UserProfile>(() => {
    const saved = localStorage.getItem('ai_career_profile');
    return saved ? JSON.parse(saved) : initialProfile;
  });

  const [dsaQuestions, setDsaQuestions] = useState<DSAQuestion[]>(() => {
    const saved = localStorage.getItem('ai_career_dsa');
    return saved ? JSON.parse(saved) : initialDSAQuestions;
  });

  const [sqlQuestions, setSqlQuestions] = useState<SQLQuestion[]>(() => {
    const saved = localStorage.getItem('ai_career_sql');
    return saved ? JSON.parse(saved) : initialSQLQuestions;
  });

  const [aptitudeTopics, setAptitudeTopics] = useState<AptitudeTopic[]>(() => {
    const saved = localStorage.getItem('ai_career_aptitude');
    return saved ? JSON.parse(saved) : initialAptitudeTopics;
  });

  const [roadmapItems, setRoadmapItems] = useState<RoadmapItem[]>(() => {
    const saved = localStorage.getItem('ai_career_roadmap');
    return saved ? JSON.parse(saved) : initialRoadmap;
  });

  const [researchItems] = useState<ResearchItem[]>(initialResearchItems);
  
  const [interviewQuestions] = useState<InterviewQuestion[]>(() => {
    const saved = localStorage.getItem('ai_career_interview');
    return saved ? JSON.parse(saved) : initialInterviewQuestions;
  });

  const [projects] = useState<ProjectItem[]>(initialProjects);

  const [jobApplications, setJobApplications] = useState<JobApplication[]>(() => {
    const saved = localStorage.getItem('ai_career_jobs');
    return saved ? JSON.parse(saved) : initialJobApplications;
  });

  const [companies] = useState<CompanyInfo[]>(initialCompanies);

  const [dailyTasks, setDailyTasks] = useState<DailyTask[]>(() => {
    const saved = localStorage.getItem('ai_career_tasks');
    return saved ? JSON.parse(saved) : initialDailyTasks;
  });

  const [notes, setNotes] = useState<NoteItem[]>(() => {
    const saved = localStorage.getItem('ai_career_notes');
    return saved ? JSON.parse(saved) : initialNotes;
  });

  const [isAiModalOpen, setIsAiModalOpen] = useState(false);
  const [aiPromptContext, setAiPromptContext] = useState('');

  useEffect(() => {
    localStorage.setItem('ai_career_profile', JSON.stringify(profile));
  }, [profile]);

  useEffect(() => {
    localStorage.setItem('ai_career_dsa', JSON.stringify(dsaQuestions));
  }, [dsaQuestions]);

  useEffect(() => {
    localStorage.setItem('ai_career_sql', JSON.stringify(sqlQuestions));
  }, [sqlQuestions]);

  useEffect(() => {
    localStorage.setItem('ai_career_roadmap', JSON.stringify(roadmapItems));
  }, [roadmapItems]);

  useEffect(() => {
    localStorage.setItem('ai_career_jobs', JSON.stringify(jobApplications));
  }, [jobApplications]);

  useEffect(() => {
    localStorage.setItem('ai_career_tasks', JSON.stringify(dailyTasks));
  }, [dailyTasks]);

  useEffect(() => {
    localStorage.setItem('ai_career_notes', JSON.stringify(notes));
  }, [notes]);

  const toggleDSAQuestion = (id: string) => {
    setDsaQuestions(prev => prev.map(q => {
      if (q.id === id) {
        const solved = !q.solved;
        if (solved) {
          setProfile(p => ({ ...p, questionsSolvedToday: p.questionsSolvedToday + 1 }));
        }
        return { ...q, solved };
      }
      return q;
    }));
  };

  const updateDSANotes = (id: string, notes: string, mistakes: string) => {
    setDsaQuestions(prev => prev.map(q => q.id === id ? { ...q, notes, mistakes } : q));
  };

  const toggleSQLQuestion = (id: string) => {
    setSqlQuestions(prev => prev.map(q => {
      if (q.id === id) {
        const solved = !q.solved;
        if (solved) {
          setProfile(p => ({ ...p, questionsSolvedToday: p.questionsSolvedToday + 1 }));
        }
        return { ...q, solved };
      }
      return q;
    }));
  };

  const updateAptitudeProgress = (id: string, solvedDelta: number) => {
    setAptitudeTopics(prev => prev.map(item => {
      if (item.id === id) {
        const newSolved = Math.min(item.totalQuestions, Math.max(0, item.solvedQuestions + solvedDelta));
        const masteryPercentage = Math.round((newSolved / item.totalQuestions) * 100);
        return { ...item, solvedQuestions: newSolved, masteryPercentage };
      }
      return item;
    }));
  };

  const toggleRoadmapItem = (id: string) => {
    setRoadmapItems(prev => prev.map(r => r.id === id ? { ...r, completed: !r.completed } : r));
  };

  const toggleInterviewMastered = () => {};

  const addJobApplication = (app: Omit<JobApplication, 'id'>) => {
    const newApp: JobApplication = { ...app, id: 'job-' + Date.now() };
    setJobApplications(prev => [newApp, ...prev]);
  };

  const updateJobStatus = (id: string, status: JobApplication['status']) => {
    setJobApplications(prev => prev.map(j => j.id === id ? { ...j, status } : j));
  };

  const toggleTask = (id: string) => {
    setDailyTasks(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const addTask = (title: string, category: 'Morning' | 'Evening', domain: DailyTask['domain']) => {
    const newTask: DailyTask = {
      id: 'task-' + Date.now(),
      title,
      category,
      domain,
      completed: false,
      timeEstimateMinutes: 30
    };
    setDailyTasks(prev => [...prev, newTask]);
  };

  const addNote = (note: Omit<NoteItem, 'id' | 'updatedAt'>) => {
    const newNote: NoteItem = {
      ...note,
      id: 'note-' + Date.now(),
      updatedAt: new Date().toISOString().split('T')[0]
    };
    setNotes(prev => [newNote, ...prev]);
  };

  const updateNote = (id: string, content: string) => {
    setNotes(prev => prev.map(n => n.id === id ? { ...n, content, updatedAt: new Date().toISOString().split('T')[0] } : n));
  };

  const openAiAssistant = (context?: string) => {
    if (context) setAiPromptContext(context);
    setIsAiModalOpen(true);
  };

  return (
    <AppContext.Provider value={{
      activeTab,
      setActiveTab,
      profile,
      setProfile,
      dsaQuestions,
      toggleDSAQuestion,
      updateDSANotes,
      sqlQuestions,
      toggleSQLQuestion,
      aptitudeTopics,
      updateAptitudeProgress,
      roadmapItems,
      toggleRoadmapItem,
      researchItems,
      interviewQuestions,
      toggleInterviewMastered,
      projects,
      jobApplications,
      addJobApplication,
      updateJobStatus,
      companies,
      dailyTasks,
      toggleTask,
      addTask,
      notes,
      addNote,
      updateNote,
      isAiModalOpen,
      setIsAiModalOpen,
      aiPromptContext,
      openAiAssistant
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
};
