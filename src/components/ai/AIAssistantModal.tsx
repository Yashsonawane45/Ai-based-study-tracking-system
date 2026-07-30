import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { Bot, Sparkles, X, Send } from 'lucide-react';

interface ChatMessage {
  sender: 'user' | 'ai';
  text: string;
}

export const AIAssistantModal: React.FC = () => {
  const { isAiModalOpen, setIsAiModalOpen, aiPromptContext, profile } = useApp();
  const [inputQuery, setInputQuery] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: 'ai',
      text: `Hello Yash! I am your personal AI Career Coach. You have ${profile.targetDays} days remaining to land your dream AI Engineer role. How can I help you today?`
    }
  ]);
  const [isThinking, setIsThinking] = useState(false);

  useEffect(() => {
    if (aiPromptContext) {
      handleSendQuery(aiPromptContext);
    }
  }, [aiPromptContext]);

  const generateAiResponse = (query: string): string => {
    const q = query.toLowerCase();

    if (q.includes('motivation') || q.includes('daily boost')) {
      return `🔥 Yash, remember your North Star: "Am I closer to my first job today than yesterday?"\nYou are a final-year B.E. AIDS student from Nashik with 18 consecutive days of focus! Solve 2 DSA questions in Python today and master 1 SQL Window function. Consistency compounds exponentially.`;
    }

    if (q.includes('quiz') || q.includes('interview questions')) {
      return `🧠 **Instant AI Quiz for Yash (Generative AI & RAG)**:\n\n1. **Q1**: What is the primary advantage of Multi-Head Latent Attention (MLA) in DeepSeek-V3?\n   *Ans*: It drastically reduces KV cache memory consumption while preserving contextual expressiveness.\n\n2. **Q2**: When using RAG, how does Cosine Similarity compare to Dot Product for normalized embeddings?\n   *Ans*: They produce identical rankings because for normalized vectors $||a|| = ||b|| = 1$, cosine similarity equals the dot product.`;
    }

    if (q.includes('code') || q.includes('dsa') || q.includes('python')) {
      return `🐍 **Python DSA Solution & Edge Case Analysis**:\n\`\`\`python\ndef twoSum(nums: list[int], target: int) -> list[int]:\n    seen = {}\n    for i, num in enumerate(nums):\n        comp = target - num\n        if comp in seen:\n            return [seen[comp], i]\n        seen[num] = i\n    return []\n\`\`\`\n**Time Complexity**: $O(N)$ single pass.\n**Space Complexity**: $O(N)$ for hash map storage.\n**Key Edge Case**: Duplicate numbers in list (handled automatically as index updates).`;
    }

    if (q.includes('resume') || q.includes('ats')) {
      return `📄 **Resume Feedback for Yash Sonawane**:\nYour ATS Score is currently **84/100**!\n- **Strengths**: Solid inclusion of PyTorch, Scikit-Learn, and FastAPI.\n- **Action Items**: Add "LangGraph", "ChromaDB", and "Docker" to your tech stack section. Rephrase project bullet points to use strong action verbs + metrics (e.g., "Achieved 92% mAP using YOLOv11 for real-time safety defect detection").`;
    }

    if (q.includes('paper') || q.includes('deepseek') || q.includes('yolo')) {
      return `📰 **AI Research Brief for Placement Interviews**:\n- **DeepSeek-V3**: Demonstrates Mixture-of-Experts (MoE) scaling, activating only 37B out of 671B params per token.\n- **YOLOv11**: Optimized backbone architecture yielding faster inference on edge devices, ideal for your Computer Vision portfolio project.`;
    }

    return `✨ **AI Career Guidance for Yash**:\nBased on your 10-month roadmap, your top priority for this week is completing **150 DSA Python questions** (current progress: 50 Basic, 50 Easy) and building your **RAG Knowledge Assistant project**. Let's tackle 2 problems right now!`;
  };

  const handleSendQuery = (customText?: string) => {
    const textToSend = customText || inputQuery;
    if (!textToSend.trim()) return;

    const newMessages: ChatMessage[] = [
      ...messages,
      { sender: 'user', text: textToSend }
    ];

    setMessages(newMessages);
    setInputQuery('');
    setIsThinking(true);

    setTimeout(() => {
      const response = generateAiResponse(textToSend);
      setMessages(prev => [...prev, { sender: 'ai', text: response }]);
      setIsThinking(false);
    }, 800);
  };

  if (!isAiModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="glass-panel w-full max-w-2xl h-[600px] rounded-2xl border border-slate-800 flex flex-col justify-between overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="p-4 border-b border-slate-800 bg-[#0A0D14] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
              <Bot className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-white flex items-center gap-2">
                AI Career Assistant
                <span className="text-[10px] px-2 py-0.2 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">Online</span>
              </h3>
              <p className="text-[11px] text-slate-400">Powered by Gemini & LangChain Engine</p>
            </div>
          </div>

          <button
            onClick={() => setIsAiModalOpen(false)}
            className="p-1.5 rounded-lg bg-slate-900 text-slate-400 hover:text-white border border-slate-800 transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Message Log */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-950/60">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-3 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {m.sender === 'ai' && (
                <div className="w-6 h-6 rounded-md bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0 mt-0.5">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
              )}

              <div
                className={`max-w-[80%] p-3.5 rounded-xl text-xs leading-relaxed whitespace-pre-wrap ${
                  m.sender === 'user'
                    ? 'bg-indigo-600 text-white rounded-tr-none'
                    : 'bg-slate-900 border border-slate-800 text-slate-200 rounded-tl-none font-sans'
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}

          {isThinking && (
            <div className="flex items-center gap-2 text-xs text-indigo-400 font-mono italic">
              <Sparkles className="w-3.5 h-3.5 animate-spin text-indigo-400" />
              <span>AI Assistant reasoning...</span>
            </div>
          )}
        </div>

        {/* Quick Action Presets */}
        <div className="p-2 bg-slate-900/90 border-t border-slate-800 flex items-center gap-2 overflow-x-auto">
          <button
            onClick={() => handleSendQuery("Give Yash a daily motivation boost")}
            className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-750 text-amber-300 font-medium whitespace-nowrap"
          >
            🔥 Daily Motivation
          </button>
          <button
            onClick={() => handleSendQuery("Generate interview quiz questions")}
            className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-750 text-indigo-300 font-medium whitespace-nowrap"
          >
            🧠 Generate Quiz
          </button>
          <button
            onClick={() => handleSendQuery("Review resume and ATS score")}
            className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-750 text-emerald-300 font-medium whitespace-nowrap"
          >
            📄 Resume Feedback
          </button>
        </div>

        {/* Input Bar */}
        <div className="p-3 bg-[#0A0D14] border-t border-slate-800 flex items-center gap-2">
          <input
            type="text"
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendQuery()}
            placeholder="Ask AI anything (explain Two Sum logic, SQL window function)..."
            className="flex-1 bg-slate-900 text-xs text-white p-2.5 rounded-xl border border-slate-800 focus:outline-none focus:border-indigo-500/60"
          />
          <button
            onClick={() => handleSendQuery()}
            className="p-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white transition shadow-sm"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
