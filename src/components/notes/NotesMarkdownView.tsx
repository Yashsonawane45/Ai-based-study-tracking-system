import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { BookOpen, Plus } from 'lucide-react';

export const NotesMarkdownView: React.FC = () => {
  const { notes, addNote, updateNote } = useApp();
  const [selectedNoteId, setSelectedNoteId] = useState<string>(notes[0]?.id || '');
  const [activeTab, setActiveTab] = useState<'write' | 'preview'>('write');
  const [newTitle, setNewTitle] = useState('');
  const [newCategory] = useState('Machine Learning');

  const activeNote = notes.find(n => n.id === selectedNoteId) || notes[0];

  const handleCreateNote = () => {
    if (!newTitle) return;
    addNote({
      title: newTitle,
      category: newCategory,
      content: `# ${newTitle}\n\nAdd your technical notes, math equations, and code snippets here.`,
      tags: [newCategory, 'Notes']
    });
    setNewTitle('');
  };

  return (
    <div className="space-y-6 pb-12">
      <div className="glass-panel p-6 rounded-2xl border border-gray-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <BookOpen className="w-5 h-5 text-indigo-400" />
            <h2 className="text-xl font-bold text-white">Markdown Notes & Revision Vault</h2>
          </div>
          <p className="text-xs text-gray-400">Technical notes with code syntax, math formulas, & interview revision cheatsheets</p>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Note title..."
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="bg-gray-900 text-xs text-white p-2 rounded-xl border border-gray-800"
          />
          <button
            onClick={handleCreateNote}
            className="px-3 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl flex items-center gap-1"
          >
            <Plus className="w-4 h-4" />
            <span>New Note</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="glass-panel p-4 rounded-2xl border border-gray-800 space-y-2">
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider px-2 mb-2">Saved Notes</h3>
          {notes.map(note => (
            <div
              key={note.id}
              onClick={() => setSelectedNoteId(note.id)}
              className={`p-3 rounded-xl cursor-pointer border transition ${
                selectedNoteId === note.id 
                  ? 'bg-indigo-600/20 border-indigo-500/40 text-white' 
                  : 'bg-gray-900/50 border-gray-800 text-gray-300 hover:bg-gray-800/60'
              }`}
            >
              <h4 className="text-xs font-bold truncate">{note.title}</h4>
              <div className="flex items-center justify-between mt-1 text-[10px] text-gray-400">
                <span>{note.category}</span>
                <span>{note.updatedAt}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="md:col-span-3 glass-panel p-6 rounded-2xl border border-gray-800 space-y-4">
          {activeNote ? (
            <>
              <div className="flex items-center justify-between pb-3 border-b border-gray-800">
                <div>
                  <h3 className="text-lg font-bold text-white">{activeNote.title}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[10px] px-2 py-0.5 rounded bg-gray-800 text-indigo-400 font-mono">
                      {activeNote.category}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 bg-gray-900 p-1 rounded-xl border border-gray-800 text-xs">
                  <button
                    onClick={() => setActiveTab('write')}
                    className={`px-3 py-1 rounded-lg font-semibold transition ${activeTab === 'write' ? 'bg-indigo-600 text-white' : 'text-gray-400'}`}
                  >
                    Edit Markdown
                  </button>
                  <button
                    onClick={() => setActiveTab('preview')}
                    className={`px-3 py-1 rounded-lg font-semibold transition ${activeTab === 'preview' ? 'bg-indigo-600 text-white' : 'text-gray-400'}`}
                  >
                    Preview
                  </button>
                </div>
              </div>

              {activeTab === 'write' ? (
                <textarea
                  rows={16}
                  value={activeNote.content}
                  onChange={(e) => updateNote(activeNote.id, e.target.value)}
                  className="w-full bg-gray-950 text-xs text-indigo-200 p-4 rounded-xl border border-gray-800 font-mono leading-relaxed focus:outline-none focus:border-indigo-500"
                ></textarea>
              ) : (
                <div className="p-4 rounded-xl bg-gray-950 border border-gray-800 text-xs text-gray-200 font-mono whitespace-pre-wrap leading-relaxed overflow-x-auto">
                  {activeNote.content}
                </div>
              )}
            </>
          ) : (
            <p className="text-xs text-gray-400">Select or create a note to start editing.</p>
          )}
        </div>
      </div>
    </div>
  );
};
