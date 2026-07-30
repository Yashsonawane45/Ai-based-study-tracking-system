import React from 'react';
import { useApp } from '../../context/AppContext';
import { BarChart3, TrendingUp, Clock } from 'lucide-react';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip, 
  BarChart, 
  Bar 
} from 'recharts';

export const AnalyticsView: React.FC = () => {
  const { dsaQuestions, sqlQuestions } = useApp();

  const studyHoursData = [
    { day: 'Mon', hours: 4.5 },
    { day: 'Tue', hours: 5.0 },
    { day: 'Wed', hours: 6.2 },
    { day: 'Thu', hours: 4.0 },
    { day: 'Fri', hours: 5.8 },
    { day: 'Sat', hours: 7.5 },
    { day: 'Sun', hours: 6.0 },
  ];

  const readinessTrend = [
    { month: 'Month 1', readiness: 20 },
    { month: 'Month 2', readiness: 35 },
    { month: 'Month 3', readiness: 52 },
    { month: 'Month 4', readiness: 68 },
    { month: 'Month 5 (Now)', readiness: 78 },
    { month: 'Target (Month 10)', readiness: 100 },
  ];

  return (
    <div className="space-y-6 pb-12">
      <div className="glass-panel p-6 rounded-2xl border border-gray-800 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <BarChart3 className="w-5 h-5 text-indigo-400" />
            <h2 className="text-xl font-bold text-white">Monthly Analytics & Velocity Insights</h2>
          </div>
          <p className="text-xs text-gray-400">Data-driven performance charts tracking study hours, problem velocity ({dsaQuestions.filter(q=>q.solved).length} DSA / {sqlQuestions.filter(q=>q.solved).length} SQL), and placement readiness</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-panel p-6 rounded-2xl border border-gray-800 space-y-4">
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <Clock className="w-4 h-4 text-indigo-400" />
            <span>Weekly Study Hours Trend</span>
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={studyHoursData}>
                <defs>
                  <linearGradient id="colorHours" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366F1" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#6366F1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="day" stroke="#6B7280" fontSize={12} />
                <YAxis stroke="#6B7280" fontSize={12} />
                <Tooltip contentStyle={{ backgroundColor: '#111827', borderColor: '#374151', borderRadius: '8px', fontSize: '12px' }} />
                <Area type="monotone" dataKey="hours" stroke="#6366F1" strokeWidth={3} fillOpacity={1} fill="url(#colorHours)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-panel p-6 rounded-2xl border border-gray-800 space-y-4">
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-emerald-400" />
            <span>10-Month Placement Readiness Trajectory (%)</span>
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={readinessTrend}>
                <XAxis dataKey="month" stroke="#6B7280" fontSize={11} />
                <YAxis stroke="#6B7280" fontSize={12} />
                <Tooltip contentStyle={{ backgroundColor: '#111827', borderColor: '#374151', borderRadius: '8px', fontSize: '12px' }} />
                <Bar dataKey="readiness" fill="#10B981" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};
