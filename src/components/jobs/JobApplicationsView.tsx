import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import type { JobApplication } from '../../types';
import { Briefcase, Plus, MapPin } from 'lucide-react';

export const JobApplicationsView: React.FC = () => {
  const { jobApplications, addJobApplication, updateJobStatus } = useApp();
  const [showAddModal, setShowAddModal] = useState(false);
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [location, setLocation] = useState('');
  const [pkg, setPkg] = useState('');

  const stages: JobApplication['status'][] = ['Wishlist', 'Applied', 'Interviewing', 'Offer', 'Rejected'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!company || !role) return;
    addJobApplication({
      company,
      role,
      location: location || 'Pune / Remote',
      package: pkg || '8 LPA',
      status: 'Applied',
      appliedDate: new Date().toISOString().split('T')[0]
    });
    setCompany('');
    setRole('');
    setLocation('');
    setPkg('');
    setShowAddModal(false);
  };

  return (
    <div className="space-y-6 pb-12">
      <div className="glass-panel p-6 rounded-2xl border border-gray-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Briefcase className="w-5 h-5 text-indigo-400" />
            <h2 className="text-xl font-bold text-white">Job Application & Interview Tracker</h2>
          </div>
          <p className="text-xs text-gray-400">Kanban Board tracking applications, interviews, follow-ups, and salary offers</p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold px-4 py-2 rounded-xl shadow-md transition"
        >
          <Plus className="w-4 h-4" />
          <span>Add Application</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 overflow-x-auto pb-4">
        {stages.map(stage => {
          const appsInStage = jobApplications.filter(j => j.status === stage);
          return (
            <div key={stage} className="glass-panel p-4 rounded-2xl border border-gray-800 space-y-3 min-w-[240px]">
              <div className="flex items-center justify-between pb-2 border-b border-gray-800">
                <span className="text-xs font-bold text-gray-200">{stage}</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-gray-800 text-indigo-400 font-mono font-bold">
                  {appsInStage.length}
                </span>
              </div>

              <div className="space-y-3">
                {appsInStage.map(app => (
                  <div key={app.id} className="p-4 rounded-xl bg-gray-900/90 border border-gray-800 space-y-2 hover:border-indigo-500/40 transition shadow-sm">
                    <div className="flex items-start justify-between">
                      <h4 className="text-sm font-bold text-white">{app.company}</h4>
                      <span className="text-[10px] font-mono text-emerald-400 font-semibold">{app.package}</span>
                    </div>

                    <p className="text-xs text-indigo-300 font-medium">{app.role}</p>

                    <div className="flex items-center gap-2 text-[11px] text-gray-400">
                      <MapPin className="w-3 h-3 text-gray-500" />
                      <span>{app.location}</span>
                    </div>

                    {app.followUpDate && (
                      <div className="text-[10px] px-2 py-1 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20 font-mono">
                        ⏰ Follow-up: {app.followUpDate}
                      </div>
                    )}

                    <div className="pt-2 border-t border-gray-800 flex items-center justify-between">
                      <span className="text-[10px] text-gray-500">{app.appliedDate}</span>
                      <select
                        value={app.status}
                        onChange={(e) => updateJobStatus(app.id, e.target.value as JobApplication['status'])}
                        className="bg-gray-950 text-[10px] text-gray-300 rounded border border-gray-800 px-1.5 py-0.5 focus:outline-none"
                      >
                        {stages.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="glass-panel p-6 rounded-2xl border border-gray-800 w-full max-w-md space-y-4">
            <h3 className="text-base font-bold text-white">Add Job Application</h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="text-xs text-gray-400 block mb-1">Company Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Persistent Systems"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full bg-gray-900 text-xs text-white p-2.5 rounded-xl border border-gray-800"
                />
              </div>
              <div>
                <label className="text-xs text-gray-400 block mb-1">Role</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. AI / ML Engineer"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full bg-gray-900 text-xs text-white p-2.5 rounded-xl border border-gray-800"
                />
              </div>
              <div>
                <label className="text-xs text-gray-400 block mb-1">Location</label>
                <input
                  type="text"
                  placeholder="e.g. Pune / Hybrid"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-gray-900 text-xs text-white p-2.5 rounded-xl border border-gray-800"
                />
              </div>
              <div>
                <label className="text-xs text-gray-400 block mb-1">Package (LPA)</label>
                <input
                  type="text"
                  placeholder="e.g. 8.5 LPA"
                  value={pkg}
                  onChange={(e) => setPkg(e.target.value)}
                  className="w-full bg-gray-900 text-xs text-white p-2.5 rounded-xl border border-gray-800"
                />
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 rounded-xl text-xs text-gray-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl text-xs bg-indigo-600 hover:bg-indigo-500 text-white font-semibold"
                >
                  Save Application
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
