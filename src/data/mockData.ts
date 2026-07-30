import type { 
  UserProfile, 
  DSAQuestion, 
  SQLQuestion, 
  AptitudeTopic, 
  RoadmapItem, 
  ResearchItem, 
  InterviewQuestion, 
  ProjectItem, 
  JobApplication, 
  CompanyInfo, 
  DailyTask, 
  NoteItem 
} from '../types';

export const initialProfile: UserProfile = {
  name: 'Yash Amol Sonawane',
  location: 'Nashik, Maharashtra',
  degree: 'B.E. in Artificial Intelligence & Data Science (AIDS)',
  college: 'KKWIEER / SPPU Affiliated Institute, Nashik',
  targetRole: 'AI / ML / Data Science Engineer',
  targetDays: 300,
  streak: 18,
  studyHoursToday: 4.5,
  questionsSolvedToday: 6,
  dailyGoalHours: 6,
  dailyGoalQuestions: 8,
  resumeAtsScore: 84,
};

export const initialDSAQuestions: DSAQuestion[] = [
  { id: 'dsa-1', title: 'Reverse a Number and Check Palindrome', category: 'Arrays', difficulty: 'Basic', solved: true, timeTakenMinutes: 12, notes: 'Use modulo % 10 and integer division // 10', mistakes: 'Forgot negative number edge case' },
  { id: 'dsa-2', title: 'Find Maximum and Minimum in Array', category: 'Arrays', difficulty: 'Basic', solved: true, timeTakenMinutes: 8, notes: 'Single pass max/min update' },
  { id: 'dsa-3', title: 'Check Prime Number & Sieve of Eratosthenes', category: 'Arrays', difficulty: 'Basic', solved: true, timeTakenMinutes: 15, notes: 'Check divisibility up to sqrt(N)' },
  { id: 'dsa-4', title: 'Fibonacci Series Iterative & Recursive', category: 'Arrays', difficulty: 'Basic', solved: true, timeTakenMinutes: 10, notes: 'Use memoization or space-optimized iteration' },
  { id: 'dsa-5', title: 'Factorial of a Large Number', category: 'Arrays', difficulty: 'Basic', solved: true, timeTakenMinutes: 15, notes: 'Iterative multiplication or python large int' },
  { id: 'dsa-6', title: 'Count Vowels and Consonants in String', category: 'Strings', difficulty: 'Basic', solved: true, timeTakenMinutes: 7, notes: 'Set lookup for O(1) vowel checks' },
  { id: 'dsa-7', title: 'Check Valid Anagram', category: 'Strings', difficulty: 'Basic', solved: true, timeTakenMinutes: 10, notes: 'Use HashMap frequency count' },
  { id: 'dsa-8', title: 'Find Missing Number in Array [1..N]', category: 'Arrays', difficulty: 'Basic', solved: true, timeTakenMinutes: 9, notes: 'Sum formula N*(N+1)/2 or XOR approach' },
  { id: 'dsa-9', title: 'Remove Duplicates from Sorted Array', category: 'Arrays', difficulty: 'Basic', solved: true, timeTakenMinutes: 14, notes: 'Two-pointer technique' },
  { id: 'dsa-10', title: 'Second Largest Element in Array', category: 'Arrays', difficulty: 'Basic', solved: true, timeTakenMinutes: 11, notes: 'Keep track of first and second max' },
  { id: 'dsa-11', title: 'Reverse a String In-Place', category: 'Strings', difficulty: 'Basic', solved: true, timeTakenMinutes: 6 },
  { id: 'dsa-12', title: 'Check if Array is Sorted', category: 'Arrays', difficulty: 'Basic', solved: true, timeTakenMinutes: 5 },
  { id: 'dsa-13', title: 'Binary Search Implementation', category: 'Arrays', difficulty: 'Basic', solved: true, timeTakenMinutes: 15, notes: 'Mid formula mid = low + (high-low)//2' },
  { id: 'dsa-14', title: 'Bubble Sort & Selection Sort Visualizer', category: 'Arrays', difficulty: 'Basic', solved: true, timeTakenMinutes: 20 },
  { id: 'dsa-15', title: 'Linear Search with Index Return', category: 'Arrays', difficulty: 'Basic', solved: true, timeTakenMinutes: 5 },
  { id: 'dsa-16', title: 'Count Frequencies of Array Elements', category: 'HashMap', difficulty: 'Basic', solved: true, timeTakenMinutes: 10 },
  { id: 'dsa-17', title: 'Sum of Digits of a Number', category: 'Arrays', difficulty: 'Basic', solved: true, timeTakenMinutes: 5 },
  { id: 'dsa-18', title: 'Armstrong Number Verification', category: 'Arrays', difficulty: 'Basic', solved: true, timeTakenMinutes: 10 },
  { id: 'dsa-19', title: 'GCD / HCF using Euclidean Algorithm', category: 'Arrays', difficulty: 'Basic', solved: true, timeTakenMinutes: 12 },
  { id: 'dsa-20', title: 'LCM of Two Numbers', category: 'Arrays', difficulty: 'Basic', solved: true, timeTakenMinutes: 8 },
  { id: 'dsa-21', title: 'Two Sum Problem', category: 'HashMap', difficulty: 'Easy', solved: true, timeTakenMinutes: 15, notes: 'Store complement in dict' },
  { id: 'dsa-22', title: 'Best Time to Buy and Sell Stock', category: 'Arrays', difficulty: 'Easy', solved: true, timeTakenMinutes: 18, notes: 'Keep track of min price seen so far' },
  { id: 'dsa-23', title: 'Valid Parentheses String Matching', category: 'Stack', difficulty: 'Easy', solved: true, timeTakenMinutes: 14, notes: 'Use Stack and bracket mapping dict' },
  { id: 'dsa-24', title: 'Merge Two Sorted Linked Lists', category: 'Linked List', difficulty: 'Easy', solved: true, timeTakenMinutes: 22, notes: 'Dummy head pointer technique' },
  { id: 'dsa-25', title: 'Reverse a Singly Linked List', category: 'Linked List', difficulty: 'Easy', solved: true, timeTakenMinutes: 16, notes: 'Iterative 3-pointer prev, curr, nxt' },
  { id: 'dsa-26', title: 'Detect Cycle in Linked List (Floyd\'s Tortoise & Hare)', category: 'Linked List', difficulty: 'Easy', solved: true, timeTakenMinutes: 20 },
  { id: 'dsa-27', title: 'Maximum Subarray Sum (Kadane\'s Algorithm)', category: 'Arrays', difficulty: 'Medium', solved: true, timeTakenMinutes: 25, notes: 'Reset current sum to 0 if negative' },
  { id: 'dsa-28', title: '3Sum Zero Triplets', category: 'Arrays', difficulty: 'Medium', solved: false, timeTakenMinutes: 0 },
  { id: 'dsa-29', title: 'Longest Substring Without Repeating Characters', category: 'Strings', difficulty: 'Medium', solved: true, timeTakenMinutes: 30, notes: 'Sliding window + Hashset' },
  { id: 'dsa-30', title: 'Binary Tree Level Order Traversal (BFS)', category: 'Binary Tree', difficulty: 'Medium', solved: true, timeTakenMinutes: 25, notes: 'Queue collections.deque()' },
  { id: 'dsa-31', title: 'Validate Binary Search Tree (BST)', category: 'BST', difficulty: 'Medium', solved: false },
  { id: 'dsa-32', title: 'Lowest Common Ancestor in Binary Tree', category: 'Binary Tree', difficulty: 'Medium', solved: false },
  { id: 'dsa-33', title: 'Kth Largest Element in Array (Min Heap)', category: 'Heap', difficulty: 'Medium', solved: true, timeTakenMinutes: 20 },
  { id: 'dsa-34', title: 'Number of Islands (Grid Graph BFS/DFS)', category: 'Graph', difficulty: 'Medium', solved: true, timeTakenMinutes: 35 },
  { id: 'dsa-35', title: 'Longest Palindromic Substring', category: 'Dynamic Programming', difficulty: 'Medium', solved: false },
  { id: 'dsa-36', title: 'Coin Change Problem (0/1 Knapsack variation)', category: 'Dynamic Programming', difficulty: 'Medium', solved: false },
  { id: 'dsa-37', title: 'Climbing Stairs Dynamic Programming', category: 'Dynamic Programming', difficulty: 'Easy', solved: true, timeTakenMinutes: 12 },
  { id: 'dsa-38', title: 'Implement Trie (Prefix Tree)', category: 'Trie', difficulty: 'Medium', solved: false },
  { id: 'dsa-39', title: 'Course Schedule (Topological Sort / Cycle Detection)', category: 'Graph', difficulty: 'Medium', solved: false },
  { id: 'dsa-40', title: 'Word Search Matrix Backtracking', category: 'Backtracking', difficulty: 'Medium', solved: false },
];

export const initialSQLQuestions: SQLQuestion[] = [
  { id: 'sql-1', title: 'Second Highest Salary in Employee Table', topic: 'SELECT', difficulty: 'Easy', solved: true, solutionSnippet: 'SELECT MAX(salary) FROM Employee WHERE salary < (SELECT MAX(salary) FROM Employee);' },
  { id: 'sql-2', title: 'Department Highest Salary using Window Functions', topic: 'Window Functions', difficulty: 'Medium', solved: true, solutionSnippet: 'SELECT Dept, Name, Salary FROM (SELECT d.Name as Dept, e.Name, e.Salary, DENSE_RANK() OVER(PARTITION BY e.DeptId ORDER BY e.Salary DESC) as rnk FROM Employee e JOIN Department d ON e.DeptId = d.Id) t WHERE rnk = 1;' },
  { id: 'sql-3', title: 'Duplicate Emails Identification', topic: 'GROUP BY', difficulty: 'Easy', solved: true, solutionSnippet: 'SELECT Email FROM Person GROUP BY Email HAVING COUNT(Email) > 1;' },
  { id: 'sql-4', title: 'Customers Who Never Order', topic: 'JOIN', difficulty: 'Easy', solved: true, solutionSnippet: 'SELECT c.Name AS Customers FROM Customers c LEFT JOIN Orders o ON c.Id = o.CustomerId WHERE o.Id IS NULL;' },
  { id: 'sql-5', title: 'Recursive CTE for Employee Hierarchy Tree', topic: 'CTE', difficulty: 'Medium', solved: true, solutionSnippet: 'WITH RECURSIVE EmpTree AS (SELECT id, name, manager_id, 1 as lvl FROM Employees WHERE manager_id IS NULL UNION ALL SELECT e.id, e.name, e.manager_id, t.lvl + 1 FROM Employees e JOIN EmpTree t ON e.manager_id = t.id) SELECT * FROM EmpTree;' },
  { id: 'sql-6', title: 'Consecutive Numbers 3 Times In A Row', topic: 'Window Functions', difficulty: 'Medium', solved: true },
  { id: 'sql-7', title: 'Cumulative Monthly Revenue Calculation', topic: 'Window Functions', difficulty: 'Medium', solved: false },
  { id: 'sql-8', title: 'Nth Highest Salary Generic Function', topic: 'SELECT', difficulty: 'Medium', solved: true },
  { id: 'sql-9', title: 'Delete Duplicate Records preserving lowest ID', topic: 'WHERE', difficulty: 'Easy', solved: true },
  { id: 'sql-10', title: 'Calculate 7-Day Moving Average in SQL', topic: 'Window Functions', difficulty: 'Medium', solved: false },
];

export const initialAptitudeTopics: AptitudeTopic[] = [
  { id: 'apt-1', category: 'Quantitative', name: 'Percentages & Fractional Multipliers', totalQuestions: 35, solvedQuestions: 28, masteryPercentage: 80 },
  { id: 'apt-2', category: 'Quantitative', name: 'Profit & Loss / Discount Math', totalQuestions: 30, solvedQuestions: 22, masteryPercentage: 73 },
  { id: 'apt-3', category: 'Quantitative', name: 'Averages & Mixture Alligations', totalQuestions: 25, solvedQuestions: 20, masteryPercentage: 80 },
  { id: 'apt-4', category: 'Quantitative', name: 'Time & Work / Pipes & Cisterns', totalQuestions: 30, solvedQuestions: 25, masteryPercentage: 83 },
  { id: 'apt-5', category: 'Quantitative', name: 'Speed, Distance & Relative Motion', totalQuestions: 30, solvedQuestions: 18, masteryPercentage: 60 },
  { id: 'apt-6', category: 'Quantitative', name: 'Ratios & Proportions', totalQuestions: 25, solvedQuestions: 22, masteryPercentage: 88 },
  { id: 'apt-7', category: 'Quantitative', name: 'Permutations, Combinations & Probability', totalQuestions: 40, solvedQuestions: 25, masteryPercentage: 62 },
  { id: 'apt-8', category: 'Logical Reasoning', name: 'Seating Arrangements & Puzzles', totalQuestions: 40, solvedQuestions: 32, masteryPercentage: 80 },
  { id: 'apt-9', category: 'Logical Reasoning', name: 'Syllogisms & Venn Diagrams', totalQuestions: 30, solvedQuestions: 26, masteryPercentage: 86 },
  { id: 'apt-10', category: 'Data Interpretation', name: 'Bar Graphs, Pie Charts & Caselets', totalQuestions: 35, solvedQuestions: 29, masteryPercentage: 82 },
];

export const initialRoadmap: RoadmapItem[] = [
  { id: 'rm-1', domain: 'Machine Learning', topic: 'Python Mastery & Virtual Environments (uv, conda)', completed: true },
  { id: 'rm-2', domain: 'Machine Learning', topic: 'NumPy Vectorized Operations & Broadcasting', completed: true },
  { id: 'rm-3', domain: 'Machine Learning', topic: 'Pandas DataFrames, GroupBy, Merging & Wrangling', completed: true },
  { id: 'rm-4', domain: 'Machine Learning', topic: 'Matplotlib & Seaborn Data Visualization', completed: true },
  { id: 'rm-5', domain: 'Machine Learning', topic: 'Data Cleaning (Imputation, Outliers, One-Hot Encoding)', completed: true },
  { id: 'rm-6', domain: 'Machine Learning', topic: 'Feature Engineering & Scaling (StandardScaler, MinMax)', completed: true },
  { id: 'rm-7', domain: 'Machine Learning', topic: 'Exploratory Data Analysis (EDA) Best Practices', completed: true },
  { id: 'rm-8', domain: 'Machine Learning', topic: 'Linear & Logistic Regression with Cost Functions', completed: true },
  { id: 'rm-9', domain: 'Machine Learning', topic: 'Decision Trees, Random Forests & XGBoost / LightGBM', completed: true },
  { id: 'rm-10', domain: 'Machine Learning', topic: 'Clustering Algorithms (K-Means, Hierarchical, DBSCAN)', completed: false },
  { id: 'rm-11', domain: 'Machine Learning', topic: 'Dimensionality Reduction (PCA, t-SNE, UMAP)', completed: false },
  { id: 'rm-12', domain: 'Machine Learning', topic: 'Recommendation Systems (Collaborative & Content Filtering)', completed: false },
  { id: 'rm-13', domain: 'Machine Learning', topic: 'Time Series Forecasting (ARIMA, Prophet, LSTM)', completed: false },
  { id: 'rm-14', domain: 'Machine Learning', topic: 'Model Deployment via FastAPI & Docker', completed: false },
  { id: 'rm-15', domain: 'Deep Learning', topic: 'Artificial Neural Networks (ANN) & Backpropagation', completed: true },
  { id: 'rm-16', domain: 'Deep Learning', topic: 'PyTorch Fundamentals, Tensors & Autograd', completed: true },
  { id: 'rm-17', domain: 'Deep Learning', topic: 'Convolutional Neural Networks (CNN) & Pooling', completed: true },
  { id: 'rm-18', domain: 'Deep Learning', topic: 'Transfer Learning (ResNet, EfficientNet, MobileNet)', completed: true },
  { id: 'rm-19', domain: 'Deep Learning', topic: 'Recurrent Neural Networks (RNN), LSTM & GRU', completed: false },
  { id: 'rm-20', domain: 'Deep Learning', topic: 'Object Detection (YOLOv8/v11, Faster R-CNN)', completed: true },
  { id: 'rm-21', domain: 'Deep Learning', topic: 'Semantic Segmentation (U-Net, Mask R-CNN)', completed: false },
  { id: 'rm-22', domain: 'Deep Learning', topic: 'Self-Attention Mechanism & Transformer Architecture', completed: true },
  { id: 'rm-23', domain: 'Deep Learning', topic: 'Vision Transformers (ViT) & Multimodal Models', completed: false },
  { id: 'rm-24', domain: 'Generative AI', topic: 'LLM Architectures (Decoder-only vs Encoder-Decoder)', completed: true },
  { id: 'rm-25', domain: 'Generative AI', topic: 'Prompt Engineering Techniques (Few-shot, CoT, ReAct)', completed: true },
  { id: 'rm-26', domain: 'Generative AI', topic: 'Text Embeddings & Similarity (Cosine, Dot Product)', completed: true },
  { id: 'rm-27', domain: 'Generative AI', topic: 'Vector Databases (ChromaDB, Pinecone, FAISS, Qdrant)', completed: true },
  { id: 'rm-28', domain: 'Generative AI', topic: 'Retrieval Augmented Generation (RAG) End-to-End', completed: true },
  { id: 'rm-29', domain: 'Generative AI', topic: 'Autonomous AI Agents & Multi-Agent Workflows', completed: true },
  { id: 'rm-30', domain: 'Generative AI', topic: 'LangChain & LangGraph Frameworks', completed: true },
  { id: 'rm-31', domain: 'Generative AI', topic: 'CrewAI & Model Context Protocol (MCP)', completed: false },
  { id: 'rm-32', domain: 'Generative AI', topic: 'LoRA & QLoRA Fine-Tuning with Unsloth / PEFT', completed: false },
  { id: 'rm-33', domain: 'Generative AI', topic: 'LLM Evaluation (Ragas, TruLens, G-Eval)', completed: false },
  { id: 'rm-34', domain: 'Generative AI', topic: 'AI Guardrails & Safety (NeMo Guardrails, Llama Guard)', completed: false },
];

export const initialResearchItems: ResearchItem[] = [
  {
    id: 'res-1',
    title: 'DeepSeek-V3 Technical Report: Architecture & Multi-Head Latent Attention',
    source: 'GitHub Trending',
    summary: 'DeepSeek-V3 presents an open 671B parameter Mixture-of-Experts (MoE) model trained on 14.8T tokens with unprecedented compute efficiency.',
    whyImportant: 'Demonstrates how custom MoE and Latent Attention can outperform proprietary models at a fraction of training cost.',
    applications: 'Enterprise LLM deployments, code synthesis, agentic reasoning.',
    difficulty: 'Advanced',
    tags: ['LLM', 'MoE', 'DeepSeek', 'Open-Source'],
    url: 'https://github.com/deepseek-ai/DeepSeek-V3',
    dateAdded: '2026-07-28'
  },
  {
    id: 'res-2',
    title: 'LangGraph v0.2: Building State-Machine Based Multi-Agent Systems',
    source: 'OpenAI',
    summary: 'LangGraph introduces persistent state graphs, cyclical human-in-the-loop flows, and multi-agent coordination for complex software workflows.',
    whyImportant: 'Replaces rigid chains with flexible graphs needed for production autonomous agents.',
    applications: 'Codebase agents, customer service orchestration, automated data pipelines.',
    difficulty: 'Intermediate',
    tags: ['Agents', 'LangGraph', 'Architecture'],
    url: 'https://langchain-ai.github.io/langgraph/',
    dateAdded: '2026-07-29'
  },
  {
    id: 'res-3',
    title: 'YOLOv11: Real-time Object Detection and Instance Segmentation Benchmark',
    source: 'HuggingFace',
    summary: 'Ultralytics releases YOLOv11 with enhanced feature extraction backbone, reducing parameter count while improving mAP@50-95.',
    whyImportant: 'Crucial for real-time edge AI deployment on embedded hardware and robotics.',
    applications: 'Surveillance, defect detection in manufacturing, autonomous vehicles.',
    difficulty: 'Intermediate',
    tags: ['Computer Vision', 'YOLO', 'PyTorch'],
    url: 'https://huggingface.co/models?search=yolov11',
    dateAdded: '2026-07-30'
  }
];

export const initialInterviewQuestions: InterviewQuestion[] = [
  {
    id: 'iq-1',
    category: 'Python',
    question: 'What is the difference between shallow copy and deep copy in Python?',
    answerSummary: 'Shallow copy constructs a new compound object and inserts references to objects found in the original. Deep copy constructs a new object and recursively inserts copies of objects found in the original.',
    codeSnippet: `import copy\na = [[1, 2], [3, 4]]\nshallow = copy.copy(a)\ndeep = copy.deepcopy(a)`,
    keyTakeaway: 'Use copy.deepcopy when working with nested mutable structures like lists of lists or dicts.',
    mastered: true
  },
  {
    id: 'iq-2',
    category: 'Machine Learning',
    question: 'How do you handle severe class imbalance in classification problems?',
    answerSummary: '1. Resampling (SMOTE, ADASYN, random undersampling). 2. Algorithmic adjustments (class_weight="balanced" in Scikit-Learn/XGBoost). 3. Evaluation metrics (F1-score, PR-AUC instead of Accuracy). 4. Focal Loss for deep learning.',
    keyTakeaway: 'Never use raw Accuracy on imbalanced datasets!',
    mastered: true
  },
  {
    id: 'iq-3',
    category: 'Deep Learning',
    question: 'Explain the Vanishing and Exploding Gradient Problem and how to resolve it.',
    answerSummary: 'Occurs in deep networks when gradients get exponentially small or large during backpropagation. Solution: Residual connections (ResNet), Batch Normalization, ReLU activation, Gradient Clipping, and Xavier/He Weight Initialization.',
    keyTakeaway: 'ResNet skip connections allow gradients to flow directly back without vanishing.',
    mastered: true
  },
  {
    id: 'iq-4',
    category: 'Generative AI',
    question: 'What is RAG (Retrieval-Augmented Generation) and how does it prevent LLM Hallucinations?',
    answerSummary: 'RAG retrieves relevant external facts from a vector database based on context similarity and injects them into the prompt before generation, grounding the model output in real data.',
    keyTakeaway: 'RAG avoids expensive model fine-tuning while giving access to private enterprise documents.',
    mastered: true
  },
  {
    id: 'iq-5',
    category: 'HR Questions',
    question: 'Tell me about yourself (Yash Sonawane pitch).',
    answerSummary: 'I am a final-year AIDS student from Nashik passionate about building production AI applications. I specialize in Python, PyTorch, RAG architectures, and computer vision. Over the past year, I built an end-to-end RAG AI assistant and real-time defect detector while solving 150+ DSA problems.',
    keyTakeaway: 'Structure: Present background -> Core technical skills -> Key projects -> Passion for the role.',
    mastered: true
  }
];

export const initialProjects: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Enterprise RAG Document Knowledge Assistant',
    description: 'Full-stack AI assistant that ingests company PDFs, generates embeddings with ChromaDB, and performs hybrid retrieval with LangChain & FastApi.',
    techStack: ['Python', 'FastAPI', 'LangChain', 'ChromaDB', 'React', 'OpenAI'],
    githubUrl: 'https://github.com/yashsonawane/rag-document-assistant',
    demoUrl: 'https://rag-demo.vercel.app',
    status: 'Completed',
    completionPercentage: 100,
    atsReady: true
  },
  {
    id: 'proj-2',
    title: 'Real-Time Edge Safety Inspector (YOLOv11)',
    description: 'Computer vision pipeline detecting helmet and safety vest compliance on factory floors with live video stream alerting.',
    techStack: ['Python', 'PyTorch', 'YOLOv11', 'OpenCV', 'Streamlit'],
    githubUrl: 'https://github.com/yashsonawane/edge-safety-yolo',
    status: 'In Progress',
    completionPercentage: 85,
    atsReady: true
  },
  {
    id: 'proj-3',
    title: 'Sales & Inventory Demand Forecasting Dashboard',
    description: 'Time series forecasting engine using Prophet and XGBoost to predict store SKU sales with interactive Recharts analytics.',
    techStack: ['Python', 'Pandas', 'XGBoost', 'Prophet', 'React', 'Recharts'],
    githubUrl: 'https://github.com/yashsonawane/sales-demand-forecaster',
    status: 'Completed',
    completionPercentage: 100,
    atsReady: true
  }
];

export const initialJobApplications: JobApplication[] = [
  { id: 'job-1', company: 'Persistent Systems', role: 'Graduate AI/ML Engineer', location: 'Pune / Remote', package: '8 - 10 LPA', status: 'Applied', appliedDate: '2026-07-25', followUpDate: '2026-08-05' },
  { id: 'job-2', company: 'KPIT Technologies', role: 'Software Engineer - Autonomous Driving AI', location: 'Pune', package: '7.5 - 9 LPA', status: 'Interviewing', appliedDate: '2026-07-15', followUpDate: '2026-08-01', notes: 'Technical Round 1 scheduled for Aug 2' },
  { id: 'job-3', company: 'NVIDIA India', role: 'Deep Learning Intern / Associate', location: 'Bengaluru / Hybrid', package: '14 - 18 LPA', status: 'Wishlist', appliedDate: '2026-07-30' },
  { id: 'job-4', company: 'TCS Digital', role: 'Systems Engineer - Data Science', location: 'Mumbai / Pune', package: '7 - 9 LPA', status: 'Applied', appliedDate: '2026-07-20' },
];

export const initialCompanies: CompanyInfo[] = [
  {
    id: 'comp-1',
    name: 'Persistent Systems',
    category: 'Service / GCC',
    eligibility: 'B.E. AIDS / CS with 60%+ aggregate',
    process: 'Online Test (Aptitude + Coding) -> Technical Interview 1 (Python, SQL, ML) -> HR Round',
    topQuestions: ['Explain Random Forest vs XGBoost', 'Write a SQL query for 2nd highest salary', 'Reverse a Linked List'],
    avgSalary: '8.5 LPA',
    prepNotes: 'Focus on clean Python OOPs, Scikit-Learn project walkthrough, and SQL CTEs.'
  },
  {
    id: 'comp-2',
    name: 'KPIT Technologies',
    category: 'Product Tech',
    eligibility: 'B.E. AIDS / E&TC with strong C++/Python & Vision skills',
    process: 'Aptitude & C++/Python Coding -> Domain Technical Interview -> Managerial Round',
    topQuestions: ['YOLO architecture', 'PyTorch Tensor manipulation', 'Object tracking algorithms'],
    avgSalary: '8.0 LPA',
    prepNotes: 'Highlight YOLOv11 edge safety inspector project.'
  },
  {
    id: 'comp-3',
    name: 'NVIDIA',
    category: 'Product Tech',
    eligibility: 'Strong PyTorch, CUDA basics, Deep Learning & DSA mastery',
    process: 'Resume Screening -> Technical Screen -> 4 Rounds of Deep Technical Coding & Math',
    topQuestions: ['Attention mechanism derivation', 'Matrix multiplication CUDA kernel', 'System design for ML inference'],
    avgSalary: '16.0 LPA',
    prepNotes: 'Master Transformers, PyTorch internals, and Medium level Graph/DP problems.'
  }
];

export const initialDailyTasks: DailyTask[] = [
  { id: 'task-1', title: 'Solve 2 Medium DSA Questions in Python (Arrays / Hashmap)', category: 'Morning', domain: 'DSA', completed: true, timeEstimateMinutes: 60 },
  { id: 'task-2', title: 'Study Generative AI: LangGraph Multi-Agent Architecture', category: 'Morning', domain: 'ML', completed: true, timeEstimateMinutes: 90 },
  { id: 'task-3', title: 'Solve 3 Window Function & CTE SQL Queries', category: 'Morning', domain: 'SQL', completed: true, timeEstimateMinutes: 45 },
  { id: 'task-4', title: 'Revise Machine Learning Interview Q&A (Bias-Variance, Overfitting)', category: 'Evening', domain: 'Interview', completed: false, timeEstimateMinutes: 45 },
  { id: 'task-5', title: 'Read 1 Latest arXiv AI Paper or DeepSeek V3 Summary', category: 'Evening', domain: 'Reading', completed: false, timeEstimateMinutes: 30 },
  { id: 'task-6', title: 'Update AI Career OS Daily Journal & Log Streak', category: 'Evening', domain: 'Journal', completed: false, timeEstimateMinutes: 15 },
];

export const initialNotes: NoteItem[] = [
  {
    id: 'note-1',
    title: 'Machine Learning Algorithms Summary Cheat Sheet',
    category: 'Machine Learning',
    content: `# ML Cheat Sheet for Interviews\n\n## 1. Linear Regression\n- **Formula**: $Y = \\beta_0 + \\beta_1 X + \\epsilon$\n- **Loss Function**: Mean Squared Error (MSE)\n- **Assumptions**: Linearity, Independence, Homoscedasticity, Normality of residuals.\n\n## 2. XGBoost\n- Gradient Boosting tree implementation with L1/L2 regularization.\n- Handles missing values automatically.\n- Uses column subsampling and tree pruning.`,
    tags: ['ML', 'Interviews', 'CheatSheet'],
    updatedAt: '2026-07-29'
  },
  {
    id: 'note-2',
    title: 'RAG Architecture & VectorDB Benchmarks',
    category: 'Generative AI',
    content: `# RAG Architecture Notes\n\n1. **Chunking Strategies**: RecursiveCharacterTextSplitter (chunk_size=500, overlap=50).\n2. **Embeddings**: BGE-large-en, OpenAI text-embedding-3-small.\n3. **Vector DB**: ChromaDB for local prototyping, Qdrant for production API search.`,
    tags: ['GenAI', 'RAG', 'VectorDB'],
    updatedAt: '2026-07-30'
  }
];
