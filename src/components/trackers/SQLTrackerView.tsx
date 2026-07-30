import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Database, CheckCircle2, Circle, Sparkles, Code, Terminal } from 'lucide-react';

export const SQLTrackerView: React.FC = () => {
  const { sqlQuestions, toggleSQLQuestion, openAiAssistant } = useApp();
  const [selectedTopic, setSelectedTopic] = useState<string>('All');
  const [activeSnippetId, setActiveSnippetId] = useState<string | null>(null);

  const solvedCount = sqlQuestions.filter(q => q.solved).length;
  const topics = ['All', 'SELECT', 'WHERE', 'GROUP BY', 'HAVING', 'JOIN', 'UNION', 'CTE', 'Window Functions', 'Views', 'Indexes', 'Normalization', 'Transactions'];

  const filteredQuestions = selectedTopic === 'All' 
    ? sqlQuestions 
    : sqlQuestions.filter(q => q.topic === selectedTopic);

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="glass-panel p-6 rounded-2xl border border-gray-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Database className="w-5 h-5 text-emerald-400" />
            <h2 className="text-xl font-bold text-white">SQL Mastery Tracker (100 Questions)</h2>
          </div>
          <p className="text-xs text-gray-400">Master CTEs, Window Functions, Complex JOINs & Query Optimization for Data Science interviews</p>
        </div>

        <div className="flex items-center gap-4 bg-gray-900/80 p-4 rounded-xl border border-gray-800">
          <div className="text-center">
            <div className="text-2xl font-bold text-emerald-400 font-mono">{solvedCount} / 100</div>
            <div className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Solved Questions</div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="glass-card p-4 rounded-xl border border-gray-800">
        <div className="flex items-center justify-between text-xs mb-2">
          <span className="font-semibold text-gray-300">SQL Completion Target</span>
          <span className="font-mono text-emerald-400 font-bold">{Math.round((solvedCount / 100) * 100)}%</span>
        </div>
        <div className="w-full bg-gray-900 h-3 rounded-full overflow-hidden border border-gray-800">
          <div className="bg-emerald-400 h-full transition-all duration-500" style={{ width: `${(solvedCount / 100) * 100}%` }}></div>
        </div>
      </div>

      {/* Topic Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 border-b border-gray-800">
        {topics.map(topic => (
          <button
            key={topic}
            onClick={() => setSelectedTopic(topic)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition ${
              selectedTopic === topic 
                ? 'bg-emerald-600 text-white' 
                : 'bg-gray-900 text-gray-400 hover:text-white border border-gray-800'
            }`}
          >
            {topic}
          </button>
        ))}
      </div>

      {/* Questions List */}
      <div className="space-y-3">
        {filteredQuestions.map(q => (
          <div 
            key={q.id}
            className={`p-4 rounded-xl border transition ${
              q.solved 
                ? 'bg-gray-900/40 border-emerald-500/20' 
                : 'glass-panel border-gray-800 hover:border-gray-700'
            }`}
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => toggleSQLQuestion(q.id)}
                  className={`transition ${q.solved ? 'text-emerald-400' : 'text-gray-600 hover:text-gray-400'}`}
                >
                  {q.solved ? <CheckCircle2 className="w-5 h-5" /> : <Circle className="w-5 h-5" />}
                </button>

                <div>
                  <h4 className={`text-sm font-bold ${q.solved ? 'text-gray-300 line-through' : 'text-white'}`}>
                    {q.title}
                  </h4>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
                    {q.topic}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {q.solutionSnippet && (
                  <button
                    onClick={() => setActiveSnippetId(activeSnippetId === q.id ? null : q.id)}
                    className="p-1.5 rounded bg-gray-800 hover:bg-gray-700 text-gray-300 text-xs flex items-center gap-1 font-mono"
                  >
                    <Code className="w-3.5 h-3.5 text-emerald-400" />
                    <span>SQL Snippet</span>
                  </button>
                )}

                <button
                  onClick={() => openAiAssistant(`Write & explain the PostgreSQL query for: "${q.title}"`)}
                  className="p-1.5 rounded bg-indigo-950/50 hover:bg-indigo-900/60 text-indigo-300 border border-indigo-500/30 text-xs flex items-center gap-1"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>AI Solution</span>
                </button>
              </div>
            </div>

            {/* SQL Snippet Drawer */}
            {activeSnippetId === q.id && q.solutionSnippet && (
              <div className="mt-3 p-3 rounded-lg bg-gray-950 border border-gray-800 text-xs font-mono text-emerald-300 overflow-x-auto flex items-start gap-2">
                <Terminal className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <code>{q.solutionSnippet}</code>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
