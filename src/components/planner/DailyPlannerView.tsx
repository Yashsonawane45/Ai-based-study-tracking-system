import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Calendar, Sun, Moon, Plus, CheckCircle2, Sparkles, BookOpen } from 'lucide-react';

export const DailyPlannerView: React.FC = () => {
  const { dailyTasks, toggleTask, addTask, openAiAssistant } = useApp();
  const [taskTitle, setTaskTitle] = useState('');
  const [taskCategory, setTaskCategory] = useState<'Morning' | 'Evening'>('Morning');
  const [taskDomain, setTaskDomain] = useState<any>('DSA');
  const [journalText, setJournalText] = useState(() => localStorage.getItem('ai_career_journal') || '');

  const morningTasks = dailyTasks.filter(t => t.category === 'Morning');
  const eveningTasks = dailyTasks.filter(t => t.category === 'Evening');

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!taskTitle) return;
    addTask(taskTitle, taskCategory, taskDomain);
    setTaskTitle('');
  };

  const handleSaveJournal = (val: string) => {
    setJournalText(val);
    localStorage.setItem('ai_career_journal', val);
  };

  return (
    <div className="space-y-6 pb-12">
      <div className="glass-panel p-6 rounded-2xl border border-gray-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Calendar className="w-5 h-5 text-indigo-400" />
            <h2 className="text-xl font-bold text-white">Daily Execution & Time-Block Planner</h2>
          </div>
          <p className="text-xs text-gray-400">Structured Morning & Evening focus routines designed for 100% daily placement consistency</p>
        </div>

        <button
          onClick={() => openAiAssistant("Analyze Yash's daily journal and suggest 2 habits to increase study efficiency.")}
          className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs font-semibold px-4 py-2 rounded-xl shadow-md transition"
        >
          <Sparkles className="w-4 h-4" />
          <span>AI Routine Review</span>
        </button>
      </div>

      <div className="glass-panel p-4 rounded-2xl border border-gray-800">
        <form onSubmit={handleAddTask} className="flex flex-col md:flex-row items-center gap-3">
          <input
            type="text"
            placeholder="Add new task e.g. Solve 2 Medium Trees problems..."
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            className="flex-1 bg-gray-900 text-xs text-white p-2.5 rounded-xl border border-gray-800 focus:outline-none focus:border-indigo-500"
          />

          <select
            value={taskCategory}
            onChange={(e) => setTaskCategory(e.target.value as any)}
            className="bg-gray-900 text-xs text-gray-300 p-2.5 rounded-xl border border-gray-800"
          >
            <option value="Morning">Morning Routine</option>
            <option value="Evening">Evening Routine</option>
          </select>

          <select
            value={taskDomain}
            onChange={(e) => setTaskDomain(e.target.value as any)}
            className="bg-gray-900 text-xs text-gray-300 p-2.5 rounded-xl border border-gray-800"
          >
            <option value="DSA">DSA</option>
            <option value="ML">ML / DL / GenAI</option>
            <option value="SQL">SQL</option>
            <option value="Projects">Projects</option>
            <option value="Interview">Interview Prep</option>
            <option value="Reading">Reading</option>
            <option value="Journal">Journal</option>
          </select>

          <button
            type="submit"
            className="w-full md:w-auto px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 transition"
          >
            <Plus className="w-4 h-4" />
            <span>Add Task</span>
          </button>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-panel p-6 rounded-2xl border border-gray-800 space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-gray-800">
            <Sun className="w-5 h-5 text-amber-400" />
            <h3 className="font-bold text-base text-white">Morning Routine (DSA, ML & Deep Work)</h3>
          </div>

          <div className="space-y-3">
            {morningTasks.map(t => (
              <div 
                key={t.id}
                onClick={() => toggleTask(t.id)}
                className={`p-3.5 rounded-xl border cursor-pointer transition flex items-center justify-between ${
                  t.completed ? 'bg-gray-900/40 border-emerald-500/20 text-gray-400 line-through' : 'bg-gray-900/90 border-gray-800 text-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-4 h-4 rounded border flex items-center justify-center ${
                    t.completed ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-gray-600'
                  }`}>
                    {t.completed && <CheckCircle2 className="w-3 h-3" />}
                  </div>
                  <span className="text-xs font-semibold">{t.title}</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-gray-800 text-indigo-400 font-mono">
                  {t.domain}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-panel p-6 rounded-2xl border border-gray-800 space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-gray-800">
            <Moon className="w-5 h-5 text-indigo-400" />
            <h3 className="font-bold text-base text-white">Evening Routine (Revision, Interview & Journal)</h3>
          </div>

          <div className="space-y-3">
            {eveningTasks.map(t => (
              <div 
                key={t.id}
                onClick={() => toggleTask(t.id)}
                className={`p-3.5 rounded-xl border cursor-pointer transition flex items-center justify-between ${
                  t.completed ? 'bg-gray-900/40 border-emerald-500/20 text-gray-400 line-through' : 'bg-gray-900/90 border-gray-800 text-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-4 h-4 rounded border flex items-center justify-center ${
                    t.completed ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-gray-600'
                  }`}>
                    {t.completed && <CheckCircle2 className="w-3 h-3" />}
                  </div>
                  <span className="text-xs font-semibold">{t.title}</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-gray-800 text-indigo-400 font-mono">
                  {t.domain}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="glass-panel p-6 rounded-2xl border border-gray-800 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-base text-white flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-400" />
            <span>End-of-Day Journal & Reflection</span>
          </h3>
          <span className="text-xs text-gray-400">Auto-saved to LocalStorage</span>
        </div>

        <textarea
          rows={4}
          value={journalText}
          onChange={(e) => handleSaveJournal(e.target.value)}
          placeholder="Log today's key wins, mistakes made in DSA/SQL, and main focus for tomorrow..."
          className="w-full bg-gray-950 text-xs text-gray-200 p-4 rounded-xl border border-gray-800 focus:outline-none focus:border-indigo-500 leading-relaxed font-mono"
        ></textarea>
      </div>
    </div>
  );
};
