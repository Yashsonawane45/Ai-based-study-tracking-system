export type TabType = 
  | 'dashboard' 
  | 'roadmap' 
  | 'planner' 
  | 'dsa' 
  | 'sql' 
  | 'aptitude' 
  | 'research' 
  | 'interview' 
  | 'projects' 
  | 'resume' 
  | 'jobs' 
  | 'companies' 
  | 'profiles' 
  | 'notes' 
  | 'analytics' 
  | 'settings';

export interface UserProfile {
  name: string;
  location: string;
  degree: string;
  college: string;
  targetRole: string;
  targetDays: number;
  streak: number;
  studyHoursToday: number;
  questionsSolvedToday: number;
  dailyGoalHours: number;
  dailyGoalQuestions: number;
  resumeAtsScore: number;
}

export interface DSAQuestion {
  id: string;
  title: string;
  category: string; // Arrays, Strings, Linked List, Stack, Queue, HashMap, Binary Tree, BST, Heap, Trie, Graph, Dynamic Programming, Backtracking, Greedy
  difficulty: 'Basic' | 'Easy' | 'Medium';
  solved: boolean;
  timeTakenMinutes?: number;
  revisionDate?: string;
  notes?: string;
  mistakes?: string;
  leetcodeUrl?: string;
}

export interface SQLQuestion {
  id: string;
  title: string;
  topic: 'SELECT' | 'WHERE' | 'GROUP BY' | 'HAVING' | 'JOIN' | 'UNION' | 'CTE' | 'Window Functions' | 'Views' | 'Indexes' | 'Normalization' | 'Transactions';
  difficulty: 'Easy' | 'Medium' | 'Hard';
  solved: boolean;
  solutionSnippet?: string;
  notes?: string;
}

export interface AptitudeTopic {
  id: string;
  category: 'Quantitative' | 'Logical Reasoning' | 'Data Interpretation';
  name: string;
  totalQuestions: number;
  solvedQuestions: number;
  masteryPercentage: number;
}

export interface RoadmapItem {
  id: string;
  domain: 'Machine Learning' | 'Deep Learning' | 'Generative AI';
  topic: string;
  completed: boolean;
  notes?: string;
  resources?: string[];
}

export interface ResearchItem {
  id: string;
  title: string;
  source: 'arXiv' | 'GitHub Trending' | 'HuggingFace' | 'OpenAI' | 'Google DeepMind' | 'Meta AI' | 'Mistral' | 'NVIDIA';
  summary: string;
  whyImportant: string;
  applications: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  tags: string[];
  url: string;
  dateAdded: string;
}

export interface InterviewQuestion {
  id: string;
  category: 'Python' | 'Machine Learning' | 'Deep Learning' | 'Generative AI' | 'SQL' | 'Statistics' | 'Data Science' | 'HR Questions';
  question: string;
  answerSummary: string;
  codeSnippet?: string;
  keyTakeaway: string;
  mastered: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  demoUrl?: string;
  status: 'Idea' | 'In Progress' | 'Completed';
  completionPercentage: number;
  atsReady: boolean;
  screenshots?: string[];
}

export interface JobApplication {
  id: string;
  company: string;
  role: string;
  location: string;
  package: string;
  status: 'Wishlist' | 'Applied' | 'Interviewing' | 'Offer' | 'Rejected';
  appliedDate: string;
  followUpDate?: string;
  notes?: string;
}

export interface CompanyInfo {
  id: string;
  name: string;
  category: 'Product Tech' | 'Service / GCC' | 'AI Startup';
  eligibility: string;
  process: string;
  topQuestions: string[];
  avgSalary: string;
  prepNotes: string;
}

export interface DailyTask {
  id: string;
  title: string;
  category: 'Morning' | 'Evening';
  domain: 'DSA' | 'ML' | 'SQL' | 'Projects' | 'Reading' | 'Revision' | 'Interview' | 'Journal';
  completed: boolean;
  timeEstimateMinutes: number;
}

export interface NoteItem {
  id: string;
  title: string;
  category: string;
  content: string; // Markdown supported
  tags: string[];
  updatedAt: string;
}
