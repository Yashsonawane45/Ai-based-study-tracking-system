import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Flame, 
  Clock, 
  Target, 
  CheckCircle2, 
  Code2, 
  Award, 
  Play, 
  Pause, 
  RotateCcw, 
  Sparkles, 
  TrendingUp, 
  Newspaper, 
  Calendar as CalendarIcon, 
  ArrowRight,
  Layers
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const DashboardView: React.FC = () => {
  const { 
    profile, 
    setProfile, 
    dsaQuestions, 
    sqlQuestions, 
    roadmapItems, 
    projects, 
    dailyTasks, 
    toggleTask, 
    researchItems,
    setActiveTab,
    openAiAssistant
  } = useApp();

  const solvedDsa = dsaQuestions.filter(q => q.solved).length;
  const solvedSql = sqlQuestions.filter(q => q.solved).length;
  const totalSolved = solvedDsa + solvedSql;
  const completedRoadmap = roadmapItems.filter(r => r.completed).length;
  const roadmapPct = Math.round((completedRoadmap / roadmapItems.length) * 100);
  const completedProjects = projects.filter(p => p.status === 'Completed').length;
  const completedTasksCount = dailyTasks.filter(t => t.completed).length;
  const interviewReadinessPct = Math.min(100, Math.round((solvedDsa / 150 * 40) + (solvedSql / 100 * 30) + (roadmapPct * 0.3)));

  const [pomodoroMode, setPomodoroMode] = useState<'work' | 'break'>('work');
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer: any = null;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isRunning) {
      setIsRunning(false);
      confetti({ particleCount: 80, spread: 60 });
      if (pomodoroMode === 'work') {
        setProfile(p => ({ ...p, studyHoursToday: Number((p.studyHoursToday + 0.42).toFixed(1)) }));
        alert('🎉 Great 25-minute Pomodoro session completed! Take a 5-minute break.');
        setPomodoroMode('break');
        setTimeLeft(5 * 60);
      } else {
        alert('☕ Break is over! Ready for the next focus session?');
        setPomodoroMode('work');
        setTimeLeft(25 * 60);
      }
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isRunning, timeLeft, pomodoroMode, setProfile]);

  const togglePomodoro = () => setIsRunning(!isRunning);
  const resetPomodoro = () => {
    setIsRunning(false);
    setTimeLeft(pomodoroMode === 'work' ? 25 * 60 : 5 * 60);
  };

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const generateHeatmapDays = () => {
    const days = [];
    const today = new Date();
    for (let i = 119; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const count = Math.floor(Math.sin(i * 0.3) * 3) + 2;
      days.push({
        date: date.toISOString().split('T')[0],
        level: i === 0 ? 4 : count > 0 ? Math.min(4, Math.max(1, count)) : 0
      });
    }
    return days;
  };

  const heatmapDays = generateHeatmapDays();

  return (
    <div className="space-y-6 pb-12">
      {/* Executive Hero Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-slate-850 to-indigo-950/80 border border-slate-800 p-6 shadow-xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5 text-indigo-400" />
                Target: AI / ML Engineer in 10 Months
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/20 flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 text-amber-400" />
                Streak: {profile.streak} Days
              </span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              Welcome Back, Yash Sonawane 👋
            </h2>
            <p className="text-xs text-slate-300 mt-1 max-w-2xl">
              Daily Star: <span className="text-slate-200 italic font-medium">"Am I closer to my first job today than yesterday?"</span>
            </p>
          </div>

          <div className="flex items-center gap-4 bg-slate-900/90 p-4 rounded-xl border border-slate-800">
            <div className="text-center">
              <div className="text-2xl font-bold text-white font-mono">{profile.targetDays}</div>
              <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Days Left</div>
            </div>
            <div className="h-8 w-px bg-slate-800"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-400 font-mono">{interviewReadinessPct}%</div>
              <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Job Readiness</div>
            </div>
          </div>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
        <div className="glass-card p-4 rounded-xl border border-slate-800/80 hover:border-slate-700 transition">
          <div className="flex items-center justify-between text-slate-400 mb-1.5">
            <span className="text-xs font-medium">Study Hours</span>
            <Clock className="w-4 h-4 text-indigo-400" />
          </div>
          <div className="text-2xl font-bold text-white font-mono">{profile.studyHoursToday}h</div>
          <div className="text-[11px] text-slate-400 mt-1 flex items-center justify-between">
            <span>Goal: {profile.dailyGoalHours}h</span>
            <button 
              onClick={() => setProfile(p => ({ ...p, studyHoursToday: Number((p.studyHoursToday + 0.5).toFixed(1)) }))}
              className="text-[10px] text-indigo-400 hover:underline font-semibold"
            >
              +0.5h
            </button>
          </div>
        </div>

        <div className="glass-card p-4 rounded-xl border border-slate-800/80 hover:border-slate-700 transition">
          <div className="flex items-center justify-between text-slate-400 mb-1.5">
            <span className="text-xs font-medium">Daily Tasks</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-2xl font-bold text-white font-mono">{completedTasksCount} / {dailyTasks.length}</div>
          <div className="text-[11px] text-slate-400 mt-1">Today's Execution</div>
        </div>

        <div className="glass-card p-4 rounded-xl border border-slate-800/80 hover:border-slate-700 transition">
          <div className="flex items-center justify-between text-slate-400 mb-1.5">
            <span className="text-xs font-medium">Qs Solved</span>
            <Code2 className="w-4 h-4 text-blue-400" />
          </div>
          <div className="text-2xl font-bold text-white font-mono">{totalSolved}</div>
          <div className="text-[11px] text-slate-400 mt-1">DSA: {solvedDsa} | SQL: {solvedSql}</div>
        </div>

        <div className="glass-card p-4 rounded-xl border border-slate-800/80 hover:border-slate-700 transition">
          <div className="flex items-center justify-between text-slate-400 mb-1.5">
            <span className="text-xs font-medium">Roadmap</span>
            <Layers className="w-4 h-4 text-purple-400" />
          </div>
          <div className="text-2xl font-bold text-white font-mono">{roadmapPct}%</div>
          <div className="text-[11px] text-slate-400 mt-1">{completedRoadmap}/{roadmapItems.length} Topics</div>
        </div>

        <div className="glass-card p-4 rounded-xl border border-slate-800/80 hover:border-slate-700 transition">
          <div className="flex items-center justify-between text-slate-400 mb-1.5">
            <span className="text-xs font-medium">Projects</span>
            <Award className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-2xl font-bold text-white font-mono">{completedProjects}</div>
          <div className="text-[11px] text-slate-400 mt-1">Resume Ready</div>
        </div>

        <div className="glass-card p-4 rounded-xl border border-slate-800/80 hover:border-slate-700 transition">
          <div className="flex items-center justify-between text-slate-400 mb-1.5">
            <span className="text-xs font-medium">ATS Score</span>
            <TrendingUp className="w-4 h-4 text-rose-400" />
          </div>
          <div className="text-2xl font-bold text-emerald-400 font-mono">{profile.resumeAtsScore}/100</div>
          <div className="text-[11px] text-slate-400 mt-1">High Match</div>
        </div>
      </div>

      {/* Main Focus Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Pomodoro Timer */}
        <div className="glass-panel p-6 rounded-2xl border border-slate-800 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-indigo-400" />
              <h3 className="font-bold text-sm text-white">Pomodoro Focus Timer</h3>
            </div>
            <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800 text-xs">
              <button 
                onClick={() => { setPomodoroMode('work'); setTimeLeft(25*60); setIsRunning(false); }}
                className={`px-2.5 py-1 rounded-md transition ${pomodoroMode === 'work' ? 'bg-indigo-600 text-white font-semibold' : 'text-slate-400'}`}
              >
                Focus (25m)
              </button>
              <button 
                onClick={() => { setPomodoroMode('break'); setTimeLeft(5*60); setIsRunning(false); }}
                className={`px-2.5 py-1 rounded-md transition ${pomodoroMode === 'break' ? 'bg-emerald-600 text-white font-semibold' : 'text-slate-400'}`}
              >
                Break (5m)
              </button>
            </div>
          </div>

          <div className="my-6 text-center">
            <div className="text-6xl font-black font-mono tracking-tight text-white">
              {formatTimer(timeLeft)}
            </div>
            <p className="text-xs text-slate-400 mt-2 font-medium">
              {pomodoroMode === 'work' ? '🧠 Deep Work: DSA / ML Logic' : '☕ Rest & Hydrate'}
            </p>
          </div>

          <div className="flex items-center justify-center gap-3">
            <button
              onClick={togglePomodoro}
              className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition ${
                isRunning 
                  ? 'bg-amber-600 hover:bg-amber-500 text-white' 
                  : 'bg-indigo-600 hover:bg-indigo-500 text-white'
              }`}
            >
              {isRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              <span>{isRunning ? 'Pause Session' : 'Start Focus Session'}</span>
            </button>

            <button
              onClick={resetPomodoro}
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition"
              title="Reset Timer"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Execution Checklist */}
        <div className="glass-panel p-6 rounded-2xl border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-sm text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Today's Execution Checklist</span>
              </h3>
              <button 
                onClick={() => setActiveTab('planner')} 
                className="text-xs text-indigo-400 hover:underline flex items-center gap-1"
              >
                <span>Planner</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
              {dailyTasks.map(task => (
                <div 
                  key={task.id}
                  onClick={() => toggleTask(task.id)}
                  className={`p-3 rounded-xl border transition cursor-pointer flex items-center justify-between ${
                    task.completed 
                      ? 'bg-slate-900/40 border-emerald-500/20 text-slate-500 line-through' 
                      : 'bg-slate-900/80 border-slate-800/80 hover:border-slate-700 text-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded border flex items-center justify-center ${
                      task.completed ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-slate-600'
                    }`}>
                      {task.completed && <CheckCircle2 className="w-3 h-3" />}
                    </div>
                    <span className="text-xs font-medium">{task.title}</span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-950 text-indigo-300 font-mono">
                    {task.domain}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <span>Streak status</span>
            <span className="font-bold text-emerald-400">{completedTasksCount}/{dailyTasks.length} Completed</span>
          </div>
        </div>

        {/* AI Intelligence */}
        <div className="glass-panel p-6 rounded-2xl border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-sm text-white flex items-center gap-2">
                <Newspaper className="w-4 h-4 text-purple-400" />
                <span>AI Intelligence Feed</span>
              </h3>
              <button onClick={() => setActiveTab('research')} className="text-xs text-indigo-400 hover:underline">
                View All
              </button>
            </div>

            <div className="space-y-2.5">
              {researchItems.slice(0, 2).map(item => (
                <div key={item.id} className="p-3 rounded-xl bg-slate-900/70 border border-slate-800/80 hover:border-slate-700 transition">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20 font-medium">
                      {item.source}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">{item.dateAdded}</span>
                  </div>
                  <h4 className="text-xs font-semibold text-white line-clamp-1">{item.title}</h4>
                  <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">{item.summary}</p>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => openAiAssistant("Summarize the top 3 AI model updates from DeepSeek, OpenAI, and Meta for Yash's interview prep.")}
            className="w-full mt-4 py-2 px-3 bg-slate-900 hover:bg-slate-850 border border-slate-800 rounded-xl text-xs font-semibold text-slate-200 flex items-center justify-center gap-2 transition"
          >
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span>Generate AI Brief</span>
          </button>
        </div>
      </div>

      {/* 365-Day Activity Heatmap */}
      <div className="glass-panel p-6 rounded-2xl border border-slate-800">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-bold text-sm text-white flex items-center gap-2">
              <CalendarIcon className="w-4 h-4 text-indigo-400" />
              <span>365-Day Consistency Heatmap</span>
            </h3>
            <p className="text-xs text-slate-400">Daily learning & problem solving intensity</p>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span>Less</span>
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-sm bg-slate-900 border border-slate-800"></div>
              <div className="w-3 h-3 rounded-sm bg-indigo-950 border border-indigo-900/40"></div>
              <div className="w-3 h-3 rounded-sm bg-indigo-800 border border-indigo-700"></div>
              <div className="w-3 h-3 rounded-sm bg-indigo-600 border border-indigo-500"></div>
              <div className="w-3 h-3 rounded-sm bg-emerald-500 border border-emerald-400"></div>
            </div>
            <span>More</span>
          </div>
        </div>

        <div className="grid grid-flow-col grid-rows-7 gap-1.5 overflow-x-auto py-2">
          {heatmapDays.map((day, idx) => {
            const colors = [
              'bg-slate-900/80 border-slate-800',
              'bg-indigo-950 border-indigo-900/40',
              'bg-indigo-800 border-indigo-700',
              'bg-indigo-600 border-indigo-500',
              'bg-emerald-500 border-emerald-400'
            ];
            return (
              <div
                key={idx}
                title={`${day.date}: Level ${day.level} activity`}
                className={`w-3.5 h-3.5 rounded-sm border transition hover:scale-125 ${colors[day.level]}`}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
