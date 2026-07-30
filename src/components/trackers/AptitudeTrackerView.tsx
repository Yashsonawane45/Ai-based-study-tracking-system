import React from 'react';
import { useApp } from '../../context/AppContext';
import { Calculator, Plus, Minus } from 'lucide-react';

export const AptitudeTrackerView: React.FC = () => {
  const { aptitudeTopics, updateAptitudeProgress } = useApp();

  const totalQuestions = aptitudeTopics.reduce((acc, t) => acc + t.totalQuestions, 0);
  const totalSolved = aptitudeTopics.reduce((acc, t) => acc + t.solvedQuestions, 0);
  const overallMastery = Math.round((totalSolved / totalQuestions) * 100);

  return (
    <div className="space-y-6 pb-12">
      <div className="glass-panel p-6 rounded-2xl border border-gray-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Calculator className="w-5 h-5 text-amber-400" />
            <h2 className="text-xl font-bold text-white">Aptitude & Logical Reasoning Tracker</h2>
          </div>
          <p className="text-xs text-gray-400">Quantitative Aptitude, Logical Reasoning & Data Interpretation for Campus Placements</p>
        </div>

        <div className="flex items-center gap-4 bg-gray-900/80 p-4 rounded-xl border border-gray-800">
          <div className="text-center">
            <div className="text-2xl font-bold text-amber-400 font-mono">{overallMastery}%</div>
            <div className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Overall Mastery</div>
          </div>
          <div className="h-8 w-px bg-gray-800"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white font-mono">{totalSolved} / {totalQuestions}</div>
            <div className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Solved Questions</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {aptitudeTopics.map(topic => (
          <div key={topic.id} className="glass-panel p-5 rounded-2xl border border-gray-800 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-gray-800 text-amber-400 font-mono">
                  {topic.category}
                </span>
                <h4 className="text-sm font-bold text-white mt-1">{topic.name}</h4>
              </div>
              <span className="text-xs font-mono font-bold text-amber-400">{topic.masteryPercentage}%</span>
            </div>

            <div className="w-full bg-gray-900 h-2.5 rounded-full overflow-hidden border border-gray-800">
              <div 
                className="bg-amber-400 h-full transition-all duration-500" 
                style={{ width: `${topic.masteryPercentage}%` }}
              ></div>
            </div>

            <div className="flex items-center justify-between text-xs text-gray-400 pt-2 border-t border-gray-800">
              <span>{topic.solvedQuestions} / {topic.totalQuestions} Questions Solved</span>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateAptitudeProgress(topic.id, -1)}
                  className="w-7 h-7 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 flex items-center justify-center transition"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => updateAptitudeProgress(topic.id, 1)}
                  className="w-7 h-7 rounded-lg bg-amber-500 hover:bg-amber-400 text-black font-bold flex items-center justify-center transition shadow-md shadow-amber-500/20"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
