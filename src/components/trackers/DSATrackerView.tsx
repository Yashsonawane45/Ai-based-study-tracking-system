import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Code2, CheckCircle2, Circle, Search, Sparkles, Edit3, Save, Clock, AlertTriangle } from 'lucide-react';

export const DSATrackerView: React.FC = () => {
  const { dsaQuestions, toggleDSAQuestion, updateDSANotes, openAiAssistant } = useApp();
  
  const [selectedDifficulty, setSelectedDifficulty] = useState<'All' | 'Basic' | 'Easy' | 'Medium'>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [tempNotes, setTempNotes] = useState('');
  const [tempMistakes, setTempMistakes] = useState('');

  const basicSolved = dsaQuestions.filter(q => q.difficulty === 'Basic' && q.solved).length;
  const easySolved = dsaQuestions.filter(q => q.difficulty === 'Easy' && q.solved).length;
  const mediumSolved = dsaQuestions.filter(q => q.difficulty === 'Medium' && q.solved).length;
  const totalSolved = dsaQuestions.filter(q => q.solved).length;

  const categories = ['All', 'Arrays', 'Strings', 'Linked List', 'Stack', 'Queue', 'HashMap', 'Binary Tree', 'BST', 'Heap', 'Trie', 'Graph', 'Dynamic Programming', 'Backtracking', 'Greedy'];

  const filteredQuestions = dsaQuestions.filter(q => {
    const matchesDifficulty = selectedDifficulty === 'All' || q.difficulty === selectedDifficulty;
    const matchesCategory = selectedCategory === 'All' || q.category === selectedCategory;
    const matchesSearch = q.title.toLowerCase().includes(searchQuery.toLowerCase()) || q.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDifficulty && matchesCategory && matchesSearch;
  });

  const handleStartEdit = (q: typeof dsaQuestions[0]) => {
    setEditingId(q.id);
    setTempNotes(q.notes || '');
    setTempMistakes(q.mistakes || '');
  };

  const handleSaveNotes = (id: string) => {
    updateDSANotes(id, tempNotes, tempMistakes);
    setEditingId(null);
  };

  return (
    <div className="space-y-6 pb-12">
      <div className="glass-panel p-6 rounded-2xl border border-gray-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Code2 className="w-5 h-5 text-blue-400" />
            <h2 className="text-xl font-bold text-white">DSA Python Question Tracker</h2>
          </div>
          <p className="text-xs text-gray-400">Target: 150 Core Problems for AI/ML Technical Coding Interviews</p>
        </div>

        <div className="flex items-center gap-4 bg-gray-900/80 p-3 rounded-xl border border-gray-800">
          <div className="text-center px-2">
            <div className="text-xs text-gray-400">Basic Logic</div>
            <div className="text-lg font-bold text-amber-400 font-mono">{basicSolved} / 50</div>
          </div>
          <div className="h-6 w-px bg-gray-800"></div>
          <div className="text-center px-2">
            <div className="text-xs text-gray-400">Easy</div>
            <div className="text-lg font-bold text-emerald-400 font-mono">{easySolved} / 50</div>
          </div>
          <div className="h-6 w-px bg-gray-800"></div>
          <div className="text-center px-2">
            <div className="text-xs text-gray-400">Medium</div>
            <div className="text-lg font-bold text-indigo-400 font-mono">{mediumSolved} / 50</div>
          </div>
        </div>
      </div>

      <div className="glass-card p-4 rounded-xl border border-gray-800">
        <div className="flex items-center justify-between text-xs mb-2">
          <span className="font-semibold text-gray-300">Total DSA Progress ({totalSolved} / 150 Solved)</span>
          <span className="font-mono text-indigo-400 font-bold">{Math.round((totalSolved / 150) * 100)}%</span>
        </div>
        <div className="w-full bg-gray-900 h-3 rounded-full overflow-hidden border border-gray-800 flex">
          <div className="bg-amber-400 h-full" style={{ width: `${(basicSolved / 150) * 100}%` }} title="Basic"></div>
          <div className="bg-emerald-400 h-full" style={{ width: `${(easySolved / 150) * 100}%` }} title="Easy"></div>
          <div className="bg-indigo-500 h-full" style={{ width: `${(mediumSolved / 150) * 100}%` }} title="Medium"></div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search problem title or topic..."
            className="w-full bg-gray-900 text-xs text-gray-200 pl-9 pr-4 py-2 rounded-xl border border-gray-800 focus:outline-none focus:border-indigo-500"
          />
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto">
          {(['All', 'Basic', 'Easy', 'Medium'] as const).map(diff => (
            <button
              key={diff}
              onClick={() => setSelectedDifficulty(diff)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                selectedDifficulty === diff 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-gray-900 text-gray-400 hover:text-white border border-gray-800'
              }`}
            >
              {diff}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 border-b border-gray-800">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition ${
              selectedCategory === cat 
                ? 'bg-gray-800 text-indigo-400 border border-gray-700' 
                : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {filteredQuestions.map((q) => (
          <div 
            key={q.id}
            className={`p-4 rounded-xl border transition ${
              q.solved 
                ? 'bg-gray-900/40 border-emerald-500/20' 
                : 'glass-panel border-gray-800 hover:border-gray-700'
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <button
                  onClick={() => toggleDSAQuestion(q.id)}
                  className={`mt-1 transition ${q.solved ? 'text-emerald-400' : 'text-gray-600 hover:text-gray-400'}`}
                >
                  {q.solved ? <CheckCircle2 className="w-5 h-5" /> : <Circle className="w-5 h-5" />}
                </button>

                <div>
                  <div className="flex items-center gap-2">
                    <h4 className={`text-sm font-bold ${q.solved ? 'text-gray-300 line-through' : 'text-white'}`}>
                      {q.title}
                    </h4>
                    <span className={`text-[10px] px-2 py-0.5 rounded font-mono font-bold ${
                      q.difficulty === 'Basic' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
                      q.difficulty === 'Easy' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                      'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'
                    }`}>
                      {q.difficulty}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-gray-800 text-gray-400">
                      {q.category}
                    </span>
                  </div>

                  {q.notes && (
                    <p className="text-xs text-gray-400 mt-2 bg-gray-950/60 p-2 rounded-lg border border-gray-800 font-mono">
                      💡 <strong className="text-indigo-300">Key Insight:</strong> {q.notes}
                    </p>
                  )}

                  {q.mistakes && (
                    <p className="text-xs text-rose-300 mt-1 bg-rose-950/20 p-2 rounded-lg border border-rose-900/30 flex items-center gap-1.5 font-mono">
                      <AlertTriangle className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                      <span><strong>Mistake / Edge Case:</strong> {q.mistakes}</span>
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-3">
                {q.timeTakenMinutes && (
                  <span className="text-xs text-gray-400 flex items-center gap-1 font-mono">
                    <Clock className="w-3.5 h-3.5 text-gray-500" />
                    {q.timeTakenMinutes}m
                  </span>
                )}

                <button
                  onClick={() => handleStartEdit(q)}
                  className="p-1.5 rounded bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white transition text-xs flex items-center gap-1"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Notes</span>
                </button>

                <button
                  onClick={() => openAiAssistant(`Explain the optimal Python solution & edge cases for the DSA problem: "${q.title}"`)}
                  className="p-1.5 rounded bg-indigo-950/50 hover:bg-indigo-900/60 text-indigo-300 border border-indigo-500/30 transition text-xs flex items-center gap-1"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">AI Help</span>
                </button>
              </div>
            </div>

            {editingId === q.id && (
              <div className="mt-4 p-4 rounded-xl bg-gray-950 border border-indigo-500/30 space-y-3">
                <h5 className="text-xs font-bold text-indigo-400">Edit Insights & Mistakes for "{q.title}"</h5>
                <div>
                  <label className="text-[11px] text-gray-400 block mb-1">Key Logic / Pattern Insight:</label>
                  <input
                    type="text"
                    value={tempNotes}
                    onChange={(e) => setTempNotes(e.target.value)}
                    placeholder="e.g. Use 2 pointers, store complement in hash map..."
                    className="w-full bg-gray-900 text-xs text-white p-2 rounded-lg border border-gray-800"
                  />
                </div>
                <div>
                  <label className="text-[11px] text-rose-400 block mb-1">Mistakes / Edge Cases to Remember:</label>
                  <input
                    type="text"
                    value={tempMistakes}
                    onChange={(e) => setTempMistakes(e.target.value)}
                    placeholder="e.g. Forgot negative number handling, zero division check..."
                    className="w-full bg-gray-900 text-xs text-white p-2 rounded-lg border border-gray-800"
                  />
                </div>
                <div className="flex justify-end gap-2">
                  <button
                    onClick={() => setEditingId(null)}
                    className="px-3 py-1 rounded text-xs text-gray-400 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => handleSaveNotes(q.id)}
                    className="px-3 py-1 rounded text-xs bg-indigo-600 hover:bg-indigo-500 text-white font-semibold flex items-center gap-1"
                  >
                    <Save className="w-3.5 h-3.5" />
                    Save Notes
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
