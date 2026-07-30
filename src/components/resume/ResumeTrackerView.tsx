import React from 'react';
import { useApp } from '../../context/AppContext';
import { FileText, Award, CheckCircle2, AlertCircle, Sparkles, TrendingUp, Upload } from 'lucide-react';

export const ResumeTrackerView: React.FC = () => {
  const { profile, openAiAssistant } = useApp();

  const missingKeywords = ['LangGraph', 'Docker Containerization', 'ChromaDB Vector Store', 'YOLOv11 Object Detection', 'MLOps FastAPI'];
  const suggestedImprovements = [
    'Add quantitative metrics to projects (e.g., "Reduced retrieval latency by 45% using ChromaDB vector index").',
    'Include direct links to deployed live demos and GitHub repositories in the top header.',
    'Highlight PyTorch, Scikit-Learn, and SQL CTE window function proficiencies.'
  ];

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="glass-panel p-6 rounded-2xl border border-gray-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <FileText className="w-5 h-5 text-indigo-400" />
            <h2 className="text-xl font-bold text-white">Resume & ATS Score Optimizer</h2>
          </div>
          <p className="text-xs text-gray-400">Ensure 85%+ ATS score match for AI Engineer & Data Science roles</p>
        </div>

        <button
          onClick={() => openAiAssistant("Analyze Yash Sonawane's profile and recommend top ATS resume modifications for Persistent & KPIT recruitment.")}
          className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs font-semibold px-4 py-2 rounded-xl shadow-md transition"
        >
          <Sparkles className="w-4 h-4" />
          <span>AI Resume Audit</span>
        </button>
      </div>

      {/* Score Overview & Upload Box */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Gauge Score */}
        <div className="glass-panel p-6 rounded-2xl border border-gray-800 text-center flex flex-col items-center justify-center space-y-3">
          <div className="relative w-32 h-32 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90">
              <circle cx="64" cy="64" r="56" stroke="currentColor" strokeWidth="12" className="text-gray-800" fill="transparent" />
              <circle 
                cx="64" 
                cy="64" 
                r="56" 
                stroke="currentColor" 
                strokeWidth="12" 
                className="text-emerald-400 transition-all duration-1000" 
                fill="transparent"
                strokeDasharray={351}
                strokeDashoffset={351 - (351 * profile.resumeAtsScore) / 100}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-black text-white font-mono">{profile.resumeAtsScore}</span>
              <span className="text-[10px] text-gray-400 font-semibold uppercase">ATS Score</span>
            </div>
          </div>
          <p className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
            <TrendingUp className="w-4 h-4" />
            Top 10% ATS Resume Match
          </p>
        </div>

        {/* Missing Keywords Box */}
        <div className="glass-panel p-6 rounded-2xl border border-gray-800 space-y-3">
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-amber-400" />
            <span>Missing AI Domain Keywords</span>
          </h3>
          <p className="text-xs text-gray-400">Add these keywords to your resume to pass automated ATS screeners:</p>
          <div className="flex flex-wrap gap-2 pt-1">
            {missingKeywords.map(kw => (
              <span key={kw} className="text-xs px-2.5 py-1 rounded-lg bg-amber-500/10 text-amber-300 border border-amber-500/20 font-mono">
                + {kw}
              </span>
            ))}
          </div>
        </div>

        {/* Upload Box */}
        <div className="glass-panel p-6 rounded-2xl border border-gray-800 flex flex-col items-center justify-center text-center space-y-3 border-dashed hover:border-indigo-500/50 transition cursor-pointer">
          <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center">
            <Upload className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white">Upload Resume (PDF)</h4>
            <p className="text-[11px] text-gray-400 mt-0.5">Drag & drop or click to test new version</p>
          </div>
          <button className="px-3 py-1.5 rounded-lg bg-gray-800 text-xs font-semibold text-gray-200">
            Select PDF File
          </button>
        </div>
      </div>

      {/* Suggested Improvements */}
      <div className="glass-panel p-6 rounded-2xl border border-gray-800 space-y-4">
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          <Award className="w-5 h-5 text-indigo-400" />
          <span>AI Resume Optimization Checklist</span>
        </h3>

        <div className="space-y-3">
          {suggestedImprovements.map((imp, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-gray-900/60 border border-gray-800 flex items-start gap-3 text-xs text-gray-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{imp}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
