import React from 'react';
import { useApp } from '../../context/AppContext';
import type { TabType } from '../../types';
import { 
  LayoutDashboard, 
  Map, 
  Calendar, 
  Code2, 
  Database, 
  Calculator, 
  Newspaper, 
  HelpCircle, 
  FolderGit2, 
  FileText, 
  Briefcase, 
  Building2, 
  UserCheck, 
  BookOpen, 
  BarChart3, 
  Settings,
  Sparkles,
  Bot
} from 'lucide-react';

interface NavItem {
  id: TabType;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
}

export const Sidebar: React.FC = () => {
  const { activeTab, setActiveTab, openAiAssistant } = useApp();

  const mainNav: NavItem[] = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'planner', label: 'Daily Planner', icon: Calendar, badge: 'Tasks' },
    { id: 'roadmap', label: 'Learning Roadmap', icon: Map },
    { id: 'dsa', label: 'DSA Tracker (150)', icon: Code2, badge: 'Python' },
    { id: 'sql', label: 'SQL Tracker (100)', icon: Database },
    { id: 'aptitude', label: 'Aptitude Tracker', icon: Calculator },
  ];

  const domainNav: NavItem[] = [
    { id: 'research', label: 'AI Research Center', icon: Newspaper, badge: 'Live' },
    { id: 'interview', label: 'Interview Prep', icon: HelpCircle },
    { id: 'projects', label: 'Project Portfolio', icon: FolderGit2 },
    { id: 'resume', label: 'Resume & ATS', icon: FileText },
    { id: 'jobs', label: 'Job Applications', icon: Briefcase },
    { id: 'companies', label: 'Target Companies', icon: Building2 },
    { id: 'profiles', label: 'Coding Profiles', icon: UserCheck },
  ];

  const secondaryNav: NavItem[] = [
    { id: 'notes', label: 'Markdown Notes', icon: BookOpen },
    { id: 'analytics', label: 'Monthly Analytics', icon: BarChart3 },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <aside className="w-64 bg-[#0A0D14] border-r border-slate-800/80 flex flex-col h-screen sticky top-0 z-30 select-none">
      {/* Brand Header */}
      <div className="p-4 border-b border-slate-800/80 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h1 className="font-bold text-sm tracking-tight text-white flex items-center gap-1.5">
              AI Career OS
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-800 text-slate-400 font-mono font-medium">v2.5</span>
            </h1>
            <p className="text-[11px] text-slate-400">Executive Job Platform</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto p-3 space-y-6">
        {/* Quick AI Trigger */}
        <button
          onClick={() => openAiAssistant("What should Yash focus on today to stay on track for his AI Engineer goal?")}
          className="w-full py-2 px-3 bg-slate-900/90 hover:bg-slate-850 border border-slate-800 rounded-xl flex items-center gap-2.5 text-slate-300 hover:text-white transition group"
        >
          <Bot className="w-4 h-4 text-indigo-400 group-hover:scale-110 transition-transform" />
          <span className="text-xs font-semibold">AI Assistant</span>
          <span className="ml-auto text-[10px] bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 px-1.5 py-0.2 rounded font-mono">Ask</span>
        </button>

        {/* Core Hub */}
        <div>
          <div className="px-3 mb-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Core Hub</div>
          <div className="space-y-0.5">
            {mainNav.map(item => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium transition ${
                  activeTab === item.id 
                    ? 'bg-indigo-600/15 text-indigo-300 font-semibold border border-indigo-500/30' 
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/50'
                }`}
              >
                <item.icon className={`w-4 h-4 ${activeTab === item.id ? 'text-indigo-400' : 'text-slate-400'}`} />
                <span>{item.label}</span>
                {item.badge && (
                  <span className="ml-auto text-[10px] px-1.5 py-0.2 rounded bg-slate-900 text-slate-400 border border-slate-800 font-mono">
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* AI & Placements */}
        <div>
          <div className="px-3 mb-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Placement & AI Domain</div>
          <div className="space-y-0.5">
            {domainNav.map(item => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium transition ${
                  activeTab === item.id 
                    ? 'bg-indigo-600/15 text-indigo-300 font-semibold border border-indigo-500/30' 
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/50'
                }`}
              >
                <item.icon className={`w-4 h-4 ${activeTab === item.id ? 'text-indigo-400' : 'text-slate-400'}`} />
                <span>{item.label}</span>
                {item.badge && (
                  <span className="ml-auto text-[10px] px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Tools & Insights */}
        <div>
          <div className="px-3 mb-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Tools & Insights</div>
          <div className="space-y-0.5">
            {secondaryNav.map(item => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium transition ${
                  activeTab === item.id 
                    ? 'bg-indigo-600/15 text-indigo-300 font-semibold border border-indigo-500/30' 
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/50'
                }`}
              >
                <item.icon className={`w-4 h-4 ${activeTab === item.id ? 'text-indigo-400' : 'text-slate-400'}`} />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* User Footer Profile */}
      <div className="p-3 border-t border-slate-800/80 bg-[#07090F]">
        <div className="flex items-center gap-3 p-2 rounded-lg bg-slate-900/60 border border-slate-800">
          <div className="w-7 h-7 rounded-md bg-indigo-600/30 border border-indigo-500/40 flex items-center justify-center font-bold text-indigo-200 text-xs">
            YS
          </div>
          <div className="truncate">
            <p className="text-xs font-semibold text-white truncate">Yash Sonawane</p>
            <p className="text-[10px] text-slate-400 truncate">B.E. AIDS • Nashik</p>
          </div>
        </div>
      </div>
    </aside>
  );
};
