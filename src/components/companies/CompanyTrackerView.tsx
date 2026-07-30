import React from 'react';
import { useApp } from '../../context/AppContext';
import { Building2, Sparkles, HelpCircle } from 'lucide-react';

export const CompanyTrackerView: React.FC = () => {
  const { companies, openAiAssistant } = useApp();

  return (
    <div className="space-y-6 pb-12">
      <div className="glass-panel p-6 rounded-2xl border border-gray-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Building2 className="w-5 h-5 text-indigo-400" />
            <h2 className="text-xl font-bold text-white">Target Company Directory & Prep Sheets</h2>
          </div>
          <p className="text-xs text-gray-400">Eligibility, selection processes, salary brackets & high-frequency interview questions</p>
        </div>

        <button
          onClick={() => openAiAssistant("Generate a 5-step preparation roadmap for Yash Sonawane specifically for Persistent Systems AI Engineer recruitment.")}
          className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs font-semibold px-4 py-2 rounded-xl shadow-md transition"
        >
          <Sparkles className="w-4 h-4" />
          <span>AI Company Intel</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {companies.map(comp => (
          <div key={comp.id} className="glass-panel p-6 rounded-2xl border border-gray-800 space-y-4 flex flex-col justify-between hover:border-gray-700 transition">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-semibold">
                  {comp.category}
                </span>
                <span className="text-xs font-mono font-bold text-emerald-400">{comp.avgSalary}</span>
              </div>

              <h3 className="text-lg font-bold text-white">{comp.name}</h3>

              <div className="space-y-2 text-xs">
                <div>
                  <span className="font-semibold text-gray-400">Eligibility:</span>
                  <p className="text-gray-300 mt-0.5">{comp.eligibility}</p>
                </div>

                <div>
                  <span className="font-semibold text-gray-400">Selection Process:</span>
                  <p className="text-gray-300 mt-0.5">{comp.process}</p>
                </div>
              </div>

              <div className="bg-gray-950 p-3 rounded-xl border border-gray-800 space-y-1.5">
                <span className="text-[11px] font-bold text-indigo-300 flex items-center gap-1">
                  <HelpCircle className="w-3.5 h-3.5 text-indigo-400" />
                  Top Asked Questions:
                </span>
                <ul className="list-disc list-inside text-xs text-gray-400 space-y-0.5 font-mono">
                  {comp.topQuestions.map((q, idx) => (
                    <li key={idx} className="truncate">{q}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-3 border-t border-gray-800 text-xs text-indigo-300 italic">
              📌 {comp.prepNotes}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
