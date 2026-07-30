import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Newspaper, ExternalLink, Sparkles } from 'lucide-react';

export const ResearchCenterView: React.FC = () => {
  const { researchItems, openAiAssistant } = useApp();
  const [selectedSource, setSelectedSource] = useState<string>('All');

  const sources = ['All', 'arXiv', 'GitHub Trending', 'HuggingFace', 'OpenAI', 'Google DeepMind', 'Meta AI', 'Mistral'];

  const filteredItems = selectedSource === 'All' 
    ? researchItems 
    : researchItems.filter(r => r.source === selectedSource);

  return (
    <div className="space-y-6 pb-12">
      <div className="glass-panel p-6 rounded-2xl border border-gray-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Newspaper className="w-5 h-5 text-purple-400" />
            <h2 className="text-xl font-bold text-white">AI Research Center & News Feed</h2>
          </div>
          <p className="text-xs text-gray-400">Daily curated research papers, GitHub trending repositories, & foundation model updates</p>
        </div>

        <button
          onClick={() => openAiAssistant("Generate a 3-bullet breakdown of why DeepSeek-V3 and YOLOv11 are important for Yash's resume projects.")}
          className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-semibold px-4 py-2 rounded-xl shadow-md transition"
        >
          <Sparkles className="w-4 h-4" />
          <span>AI Paper Analyzer</span>
        </button>
      </div>

      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 border-b border-gray-800">
        {sources.map(src => (
          <button
            key={src}
            onClick={() => setSelectedSource(src)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition ${
              selectedSource === src 
                ? 'bg-purple-600 text-white' 
                : 'bg-gray-900 text-gray-400 hover:text-white border border-gray-800'
            }`}
          >
            {src}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredItems.map(item => (
          <div key={item.id} className="glass-panel p-6 rounded-2xl border border-gray-800 space-y-4 flex flex-col justify-between hover:border-gray-700 transition">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 font-semibold">
                  {item.source}
                </span>
                <span className="text-[10px] text-gray-400 font-mono">{item.dateAdded}</span>
              </div>

              <h3 className="text-base font-bold text-white tracking-tight">{item.title}</h3>

              <p className="text-xs text-gray-300 leading-relaxed bg-gray-950/60 p-3 rounded-xl border border-gray-800">
                {item.summary}
              </p>

              <div className="space-y-1.5 text-xs">
                <p className="text-gray-300">
                  <strong className="text-indigo-400">Why Important:</strong> {item.whyImportant}
                </p>
                <p className="text-gray-300">
                  <strong className="text-emerald-400">Applications:</strong> {item.applications}
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-gray-800 flex items-center justify-between">
              <div className="flex items-center gap-1.5 flex-wrap">
                {item.tags.map(tag => (
                  <span key={tag} className="text-[10px] px-2 py-0.5 rounded bg-gray-800 text-gray-400 font-mono">
                    #{tag}
                  </span>
                ))}
              </div>

              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-indigo-400 hover:underline flex items-center gap-1 font-semibold"
              >
                <span>Read Full</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
