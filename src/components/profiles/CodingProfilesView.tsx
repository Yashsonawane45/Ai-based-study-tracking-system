import React from 'react';
import { UserCheck, ExternalLink, Code2, FolderGit2, Award, Trophy } from 'lucide-react';

export const CodingProfilesView: React.FC = () => {
  const profiles = [
    { name: 'LeetCode', icon: Code2, handle: 'yash_sonawane', badge: 'Knight (1780 Rating)', solved: '124 Solved', color: 'border-amber-500/30 text-amber-400 bg-amber-500/10', link: 'https://leetcode.com' },
    { name: 'GitHub', icon: FolderGit2, handle: 'yashsonawane', badge: '500+ Commits', solved: '14 Repositories', color: 'border-purple-500/30 text-purple-400 bg-purple-500/10', link: 'https://github.com' },
    { name: 'HackerRank', icon: Trophy, handle: 'yash_sonawane_aids', badge: '5 Stars Python & SQL', solved: '75 Badges', color: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10', link: 'https://hackerrank.com' },
    { name: 'Kaggle', icon: Award, handle: 'yashsonawane_ds', badge: 'Notebooks Contributor', solved: '3 ML Competitions', color: 'border-cyan-500/30 text-cyan-400 bg-cyan-500/10', link: 'https://kaggle.com' },
  ];

  return (
    <div className="space-y-6 pb-12">
      <div className="glass-panel p-6 rounded-2xl border border-gray-800">
        <div className="flex items-center gap-2 mb-1">
          <UserCheck className="w-5 h-5 text-indigo-400" />
          <h2 className="text-xl font-bold text-white">Coding & Developer Profile Hub</h2>
        </div>
        <p className="text-xs text-gray-400">Consolidated stats across LeetCode, GitHub, HackerRank, Kaggle, and GeeksForGeeks</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {profiles.map(p => (
          <div key={p.name} className="glass-panel p-6 rounded-2xl border border-gray-800 flex items-center justify-between hover:border-gray-700 transition">
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center ${p.color}`}>
                <p.icon className="w-6 h-6" />
              </div>

              <div>
                <h3 className="text-base font-bold text-white">{p.name}</h3>
                <p className="text-xs text-gray-400 font-mono">@{p.handle}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[10px] px-2 py-0.5 rounded bg-gray-800 text-gray-300 font-semibold">{p.badge}</span>
                  <span className="text-[10px] text-gray-400">{p.solved}</span>
                </div>
              </div>
            </div>

            <a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl bg-gray-900 text-gray-400 hover:text-white border border-gray-800 transition"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
