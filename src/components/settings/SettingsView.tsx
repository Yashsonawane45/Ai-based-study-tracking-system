import React from 'react';
import { useApp } from '../../context/AppContext';
import { Settings, Save, RotateCcw } from 'lucide-react';

export const SettingsView: React.FC = () => {
  const { profile, setProfile } = useApp();

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Settings saved successfully!');
  };

  const handleResetData = () => {
    if (confirm('Are you sure you want to reset your local data back to initial defaults?')) {
      localStorage.clear();
      window.location.reload();
    }
  };

  return (
    <div className="space-y-6 pb-12 max-w-2xl">
      <div className="glass-panel p-6 rounded-2xl border border-gray-800">
        <div className="flex items-center gap-2 mb-1">
          <Settings className="w-5 h-5 text-indigo-400" />
          <h2 className="text-xl font-bold text-white">System Settings & Profile Configuration</h2>
        </div>
        <p className="text-xs text-gray-400">Personalize your student details, daily study goals, & target countdown</p>
      </div>

      <form onSubmit={handleSave} className="glass-panel p-6 rounded-2xl border border-gray-800 space-y-4">
        <div>
          <label className="text-xs font-semibold text-gray-300 block mb-1">Full Name</label>
          <input
            type="text"
            value={profile.name}
            onChange={(e) => setProfile(p => ({ ...p, name: e.target.value }))}
            className="w-full bg-gray-900 text-xs text-white p-2.5 rounded-xl border border-gray-800"
          />
        </div>

        <div>
          <label className="text-xs font-semibold text-gray-300 block mb-1">Degree & Branch</label>
          <input
            type="text"
            value={profile.degree}
            onChange={(e) => setProfile(p => ({ ...p, degree: e.target.value }))}
            className="w-full bg-gray-900 text-xs text-white p-2.5 rounded-xl border border-gray-800"
          />
        </div>

        <div>
          <label className="text-xs font-semibold text-gray-300 block mb-1">Location</label>
          <input
            type="text"
            value={profile.location}
            onChange={(e) => setProfile(p => ({ ...p, location: e.target.value }))}
            className="w-full bg-gray-900 text-xs text-white p-2.5 rounded-xl border border-gray-800"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-semibold text-gray-300 block mb-1">Daily Study Target (Hours)</label>
            <input
              type="number"
              value={profile.dailyGoalHours}
              onChange={(e) => setProfile(p => ({ ...p, dailyGoalHours: Number(e.target.value) }))}
              className="w-full bg-gray-900 text-xs text-white p-2.5 rounded-xl border border-gray-800 font-mono"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-gray-300 block mb-1">Days Countdown Target</label>
            <input
              type="number"
              value={profile.targetDays}
              onChange={(e) => setProfile(p => ({ ...p, targetDays: Number(e.target.value) }))}
              className="w-full bg-gray-900 text-xs text-white p-2.5 rounded-xl border border-gray-800 font-mono"
            />
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-800">
          <button
            type="button"
            onClick={handleResetData}
            className="px-4 py-2 bg-rose-950/40 hover:bg-rose-900/50 text-rose-300 border border-rose-900/30 text-xs font-semibold rounded-xl flex items-center gap-1.5 transition"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Reset Demo Data</span>
          </button>

          <button
            type="submit"
            className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl flex items-center gap-1.5 transition shadow-md shadow-indigo-600/20"
          >
            <Save className="w-4 h-4" />
            <span>Save Profile Changes</span>
          </button>
        </div>
      </form>
    </div>
  );
};
