import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Map, CheckCircle2, Circle, Sparkles, BookOpen, Cpu, Brain } from 'lucide-react';

export const RoadmapView: React.FC = () => {
  const { roadmapItems, toggleRoadmapItem, openAiAssistant } = useApp();
  const [selectedDomain, setSelectedDomain] = useState<'All' | 'Machine Learning' | 'Deep Learning' | 'Generative AI'>('All');

  const filteredItems = selectedDomain === 'All' 
    ? roadmapItems 
    : roadmapItems.filter(r => r.domain === selectedDomain);

  const getDomainProgress = (domain: 'Machine Learning' | 'Deep Learning' | 'Generative AI') => {
    const items = roadmapItems.filter(r => r.domain === domain);
    const completed = items.filter(r => r.completed).length;
    return Math.round((completed / items.length) * 100);
  };

  const mlProgress = getDomainProgress('Machine Learning');
  const dlProgress = getDomainProgress('Deep Learning');
  const genAiProgress = getDomainProgress('Generative AI');

  return (
    <div className="space-y-6 pb-12">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 glass-panel p-6 rounded-2xl border border-gray-800">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Map className="w-5 h-5 text-indigo-400" />
            <h2 className="text-xl font-bold text-white">AI / ML / Data Science Learning Roadmap</h2>
          </div>
          <p className="text-xs text-gray-400">Track your step-by-step mastery across Machine Learning, Deep Learning, & Generative AI</p>
        </div>

        <button
          onClick={() => openAiAssistant("Generate a custom study schedule for Yash for the remaining incomplete Generative AI roadmap topics.")}
          className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs font-semibold px-4 py-2 rounded-xl shadow-md transition"
        >
          <Sparkles className="w-4 h-4" />
          <span>AI Roadmap Advisor</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div 
          onClick={() => setSelectedDomain('Machine Learning')}
          className={`p-5 rounded-2xl border cursor-pointer transition ${
            selectedDomain === 'Machine Learning' 
              ? 'bg-blue-950/40 border-blue-500 shadow-lg shadow-blue-950/50' 
              : 'glass-panel border-gray-800 hover:border-gray-700'
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2 text-blue-400 font-bold text-sm">
              <BookOpen className="w-4 h-4" />
              <span>Machine Learning</span>
            </div>
            <span className="text-xs font-mono font-bold text-blue-400">{mlProgress}%</span>
          </div>
          <div className="w-full bg-gray-900 h-2 rounded-full overflow-hidden border border-gray-800">
            <div className="bg-blue-500 h-full rounded-full transition-all duration-500" style={{ width: `${mlProgress}%` }}></div>
          </div>
          <p className="text-[11px] text-gray-400 mt-2">Core Algorithms, Regression, XGBoost, EDA, Deployment</p>
        </div>

        <div 
          onClick={() => setSelectedDomain('Deep Learning')}
          className={`p-5 rounded-2xl border cursor-pointer transition ${
            selectedDomain === 'Deep Learning' 
              ? 'bg-purple-950/40 border-purple-500 shadow-lg shadow-purple-950/50' 
              : 'glass-panel border-gray-800 hover:border-gray-700'
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2 text-purple-400 font-bold text-sm">
              <Cpu className="w-4 h-4" />
              <span>Deep Learning</span>
            </div>
            <span className="text-xs font-mono font-bold text-purple-400">{dlProgress}%</span>
          </div>
          <div className="w-full bg-gray-900 h-2 rounded-full overflow-hidden border border-gray-800">
            <div className="bg-purple-500 h-full rounded-full transition-all duration-500" style={{ width: `${dlProgress}%` }}></div>
          </div>
          <p className="text-[11px] text-gray-400 mt-2">PyTorch, CNNs, YOLO, Transformers, Transfer Learning</p>
        </div>

        <div 
          onClick={() => setSelectedDomain('Generative AI')}
          className={`p-5 rounded-2xl border cursor-pointer transition ${
            selectedDomain === 'Generative AI' 
              ? 'bg-emerald-950/40 border-emerald-500 shadow-lg shadow-emerald-950/50' 
              : 'glass-panel border-gray-800 hover:border-gray-700'
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
              <Brain className="w-4 h-4" />
              <span>Generative AI & Agents</span>
            </div>
            <span className="text-xs font-mono font-bold text-emerald-400">{genAiProgress}%</span>
          </div>
          <div className="w-full bg-gray-900 h-2 rounded-full overflow-hidden border border-gray-800">
            <div className="bg-emerald-500 h-full rounded-full transition-all duration-500" style={{ width: `${genAiProgress}%` }}></div>
          </div>
          <p className="text-[11px] text-gray-400 mt-2">LLMs, RAG, LangChain, LangGraph, VectorDBs, Fine-Tuning</p>
        </div>
      </div>

      <div className="flex items-center gap-2 border-b border-gray-800 pb-2">
        {(['All', 'Machine Learning', 'Deep Learning', 'Generative AI'] as const).map(domain => (
          <button
            key={domain}
            onClick={() => setSelectedDomain(domain)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
              selectedDomain === domain 
                ? 'bg-indigo-600 text-white' 
                : 'text-gray-400 hover:text-white bg-gray-900'
            }`}
          >
            {domain}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredItems.map(item => (
          <div
            key={item.id}
            onClick={() => toggleRoadmapItem(item.id)}
            className={`p-4 rounded-xl border cursor-pointer transition flex items-start gap-3 ${
              item.completed 
                ? 'bg-gray-900/40 border-emerald-500/30 opacity-75' 
                : 'glass-card border-gray-800 hover:border-gray-700'
            }`}
          >
            <div className={`mt-0.5 ${item.completed ? 'text-emerald-400' : 'text-gray-600'}`}>
              {item.completed ? <CheckCircle2 className="w-5 h-5" /> : <Circle className="w-5 h-5" />}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className={`text-xs font-bold ${item.completed ? 'line-through text-gray-400' : 'text-white'}`}>
                  {item.topic}
                </span>
                <span className={`text-[10px] px-2 py-0.5 rounded font-mono font-medium ${
                  item.domain === 'Machine Learning' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' :
                  item.domain === 'Deep Learning' ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20' :
                  'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                }`}>
                  {item.domain}
                </span>
              </div>
              <p className="text-[11px] text-gray-500 mt-1">Click to toggle mastery status</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
