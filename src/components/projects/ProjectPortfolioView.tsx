import React from 'react';
import { useApp } from '../../context/AppContext';
import { FolderGit2, ExternalLink, Award, Sparkles } from 'lucide-react';

export const ProjectPortfolioView: React.FC = () => {
  const { projects, openAiAssistant } = useApp();

  return (
    <div className="space-y-6 pb-12">
      <div className="glass-panel p-6 rounded-2xl border border-gray-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <FolderGit2 className="w-5 h-5 text-indigo-400" />
            <h2 className="text-xl font-bold text-white">AI & Data Science Project Portfolio</h2>
          </div>
          <p className="text-xs text-gray-400">Production-grade AI applications built with GitHub Repositories & ATS Resume Ready bullet points</p>
        </div>

        <button
          onClick={() => openAiAssistant("Generate 3 high-impact ATS bullet points for Yash's Enterprise RAG Knowledge Assistant project.")}
          className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs font-semibold px-4 py-2 rounded-xl shadow-md transition"
        >
          <Sparkles className="w-4 h-4" />
          <span>Generate Project ATS Bullets</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map(proj => (
          <div key={proj.id} className="glass-panel p-6 rounded-2xl border border-gray-800 space-y-4 flex flex-col justify-between hover:border-gray-700 transition">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className={`text-[10px] px-2.5 py-0.5 rounded-full font-semibold ${
                  proj.status === 'Completed' 
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
                    : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                }`}>
                  {proj.status} ({proj.completionPercentage}%)
                </span>
                
                {proj.atsReady && (
                  <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 flex items-center gap-1 font-semibold">
                    <Award className="w-3 h-3 text-indigo-400" />
                    ATS Ready
                  </span>
                )}
              </div>

              <h3 className="text-lg font-bold text-white tracking-tight">{proj.title}</h3>
              <p className="text-xs text-gray-300 leading-relaxed">{proj.description}</p>

              <div className="w-full bg-gray-900 h-2 rounded-full overflow-hidden border border-gray-800">
                <div 
                  className="bg-indigo-500 h-full rounded-full transition-all duration-500" 
                  style={{ width: `${proj.completionPercentage}%` }}
                ></div>
              </div>

              <div className="flex items-center gap-1.5 flex-wrap pt-2">
                {proj.techStack.map(tech => (
                  <span key={tech} className="text-[10px] px-2 py-0.5 rounded bg-gray-900 text-indigo-300 border border-gray-800 font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-gray-800 flex items-center justify-between">
              <a
                href={proj.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-gray-300 hover:text-white flex items-center gap-1.5 font-semibold"
              >
                <FolderGit2 className="w-4 h-4 text-gray-400" />
                <span>GitHub Repository</span>
              </a>

              {proj.demoUrl && (
                <a
                  href={proj.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-emerald-400 hover:underline flex items-center gap-1.5 font-semibold"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Live Demo Deployment</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
