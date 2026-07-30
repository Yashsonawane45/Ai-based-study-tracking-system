import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { HelpCircle, CheckCircle2, Circle, Sparkles, Code, ChevronDown, ChevronUp } from 'lucide-react';

export const InterviewPrepView: React.FC = () => {
  const { interviewQuestions, toggleInterviewMastered, openAiAssistant } = useApp();
  const [activeCategory, setActiveCategory] = useState<string>('Python');
  const [expandedId, setExpandedId] = useState<string | null>('iq-1');

  const categories = ['Python', 'Machine Learning', 'Deep Learning', 'Generative AI', 'SQL', 'Statistics', 'Data Science', 'HR Questions'];

  const filteredQuestions = interviewQuestions.filter(q => q.category === activeCategory);

  return (
    <div className="space-y-6 pb-12">
      <div className="glass-panel p-6 rounded-2xl border border-gray-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <HelpCircle className="w-5 h-5 text-indigo-400" />
            <h2 className="text-xl font-bold text-white">AI / Data Science Interview Preparation Bank</h2>
          </div>
          <p className="text-xs text-gray-400">Target: 100 Questions per domain + HR Behavioral Pitch Scenarios</p>
        </div>

        <button
          onClick={() => openAiAssistant(`Conduct a 3-question mock interview with Yash Sonawane on domain: ${activeCategory}`)}
          className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs font-semibold px-4 py-2 rounded-xl shadow-md transition"
        >
          <Sparkles className="w-4 h-4" />
          <span>Mock Interview Generator</span>
        </button>
      </div>

      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-gray-800">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition ${
              activeCategory === cat 
                ? 'bg-indigo-600 text-white' 
                : 'bg-gray-900 text-gray-400 hover:text-white border border-gray-800'
            }`}
          >
            {cat} (100 Qs Target)
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {filteredQuestions.length === 0 ? (
          <div className="text-center py-12 glass-panel rounded-2xl border border-gray-800">
            <p className="text-sm text-gray-400">Questions loading for {activeCategory}. Click AI Assistant to generate instant custom questions!</p>
            <button
              onClick={() => openAiAssistant(`Generate 5 high-frequency technical interview questions with answers for domain: ${activeCategory}`)}
              className="mt-3 px-4 py-2 bg-indigo-600 text-white text-xs font-bold rounded-xl"
            >
              Generate Questions via AI
            </button>
          </div>
        ) : (
          filteredQuestions.map(q => {
            const isExpanded = expandedId === q.id;
            return (
              <div 
                key={q.id}
                className={`rounded-2xl border transition overflow-hidden ${
                  q.mastered ? 'bg-gray-900/30 border-emerald-500/20' : 'glass-panel border-gray-800'
                }`}
              >
                <div 
                  onClick={() => setExpandedId(isExpanded ? null : q.id)}
                  className="p-4 flex items-center justify-between cursor-pointer hover:bg-gray-900/50 transition"
                >
                  <div className="flex items-center gap-3">
                    <button
                      onClick={(e) => { e.stopPropagation(); toggleInterviewMastered(q.id); }}
                      className={`transition ${q.mastered ? 'text-emerald-400' : 'text-gray-600'}`}
                    >
                      {q.mastered ? <CheckCircle2 className="w-5 h-5" /> : <Circle className="w-5 h-5" />}
                    </button>
                    <h4 className="text-sm font-bold text-white">{q.question}</h4>
                  </div>

                  <div className="flex items-center gap-3 text-gray-400">
                    <span className="text-[10px] px-2 py-0.5 rounded bg-gray-800 text-indigo-400 font-mono">
                      {q.category}
                    </span>
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </div>

                {isExpanded && (
                  <div className="p-4 pt-0 border-t border-gray-800/60 bg-gray-950/40 space-y-3">
                    <div className="mt-3">
                      <h5 className="text-xs font-semibold text-gray-400 mb-1">Model Answer & Explanation:</h5>
                      <p className="text-xs text-gray-200 leading-relaxed bg-gray-900/80 p-3 rounded-xl border border-gray-800">
                        {q.answerSummary}
                      </p>
                    </div>

                    {q.codeSnippet && (
                      <div>
                        <h5 className="text-xs font-semibold text-gray-400 mb-1 flex items-center gap-1">
                          <Code className="w-3.5 h-3.5 text-indigo-400" />
                          <span>Code Example:</span>
                        </h5>
                        <pre className="text-xs font-mono bg-gray-950 p-3 rounded-xl border border-gray-800 text-indigo-300 overflow-x-auto">
                          {q.codeSnippet}
                        </pre>
                      </div>
                    )}

                    <div className="p-2.5 rounded-lg bg-indigo-950/30 border border-indigo-500/20 text-xs text-indigo-300">
                      💡 <strong>Interview Key Takeaway:</strong> {q.keyTakeaway}
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
