import React from 'react';
import { useApp } from '../../context/AppContext';
import { Flame, Clock, Sparkles, Search, MapPin, GraduationCap } from 'lucide-react';

export const Header: React.FC = () => {
  const { profile, openAiAssistant } = useApp();

  return (
    <header className="h-14 bg-[#0A0D14]/90 backdrop-blur-md border-b border-slate-800/80 px-6 flex items-center justify-between sticky top-0 z-20">
      {/* North Star Focus Question */}
      <div className="flex items-center gap-6">
        <div className="hidden lg:flex flex-col">
          <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">Daily Focus Metric</span>
          <p className="text-xs font-semibold text-slate-200 italic">
            "Am I closer to my first job today than yesterday?"
          </p>
        </div>

        {/* Profile badge */}
        <div className="flex items-center gap-2.5 bg-slate-900/80 px-3 py-1 rounded-lg border border-slate-800 text-xs">
          <div className="flex items-center gap-1.5 text-slate-300 font-medium">
            <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
            <span>B.E. AIDS (Final Year)</span>
          </div>
          <span className="text-slate-700">•</span>
          <div className="flex items-center gap-1 text-slate-400">
            <MapPin className="w-3.5 h-3.5 text-slate-500" />
            <span>Nashik, MH</span>
          </div>
        </div>
      </div>

      {/* Action Indicators */}
      <div className="flex items-center gap-3">
        {/* Search */}
        <div className="relative hidden md:block w-56">
          <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search questions, topics..."
            className="w-full bg-slate-900/90 text-xs text-slate-200 pl-8 pr-3 py-1.5 rounded-lg border border-slate-800 focus:outline-none focus:border-indigo-500/60 transition"
          />
        </div>

        {/* Streak */}
        <div className="flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/20 text-amber-300 px-2.5 py-1 rounded-lg text-xs font-semibold">
          <Flame className="w-3.5 h-3.5 text-amber-400" />
          <span>{profile.streak} Days Streak</span>
        </div>

        {/* Countdown */}
        <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 text-slate-300 px-2.5 py-1 rounded-lg text-xs font-semibold">
          <Clock className="w-3.5 h-3.5 text-indigo-400" />
          <span><strong className="text-white font-mono">{profile.targetDays} Days</strong> Left</span>
        </div>

        {/* AI Trigger */}
        <button
          onClick={() => openAiAssistant("Give Yash Sonawane a 1-minute daily motivation boost & key focus area for today!")}
          className="flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-sm transition active:scale-95"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>AI Coach</span>
        </button>
      </div>
    </header>
  );
};
