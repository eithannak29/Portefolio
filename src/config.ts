export const siteConfig = {
  name: "Eithan Nakache",
  title: "MVA Master's Student @ ENS Paris-Saclay",
  description: "MVA student (2025–2026). Applied AI & multimodal ML.",
  accentColor: "#1d4ed8",
  resumeUrl: "/resume.pdf",
  social: {
    email: "eithannakache@gmail.com",
    linkedin: "https://www.linkedin.com/in/eithannakache/",
    github: "https://github.com/eithannak29",
  },
  aboutMe: "AI enjoyer 🤠, focused on Large Language Models & Deep Learning.",
  skills: [
    "Large Language Models",
    "Deep Learning",
    "Multimodal ML",
    "RAG",
    "Computer Vision",
    "PyTorch",
    "Python",
  ],

  projects: [
    {
      name: "EchoRAG — Clinical Guidelines RAG",
      description:
        "Multimodal RAG on ASE/ACC cardiology guidelines and flowcharts; visual-document retrieval + reranking; evaluation with ViDoRe/FlowVQA-style tasks.",
      link: "https://www.eithannakache.com/",
      skills: ["Healthcare AI", "RAG", "Multimodal", "Retrieval", "Evaluation"],
    },
    {
      name: "EchoVQA — Visual QA on Echo Reports",
      description:
        "Prototype visual-QA pipeline on cardiac imaging documents; Col(Qwen)-based retrieval, structured outputs, and rubric-style scoring.",
      link: "https://www.eithannakache.com/",
      skills: ["VQA", "Vision+Text", "Retrieval", "LLMs"],
    },
    {
      name: "NanoDiffVision — Vision Transformers with Differential Attention",
      description:
        "Compact ViT with differential attention; up to 96.03 percent (MNIST) and 86.73 percent (FashionMNIST).",
      link: "https://github.com/eithannak29/NanoDiffVision",
      skills: ["Personal Project", "PyTorch", "Vision Transformers"],
    },
  ],

  hackathons: [
    {
      name: "🏅 Mistral AI Hackathon — Specialized Lightweight LLMs (Top 3)",
      description:
        "Platform for task-specific lightweight LLMs with preference optimization; ranked Top 3 among 250+ teams.",
      link: "https://github.com/chuklee/HACKATHON_MISTRAL",
      skills: ["LLMs", "Preference Optimization", "Distillation"],
    },
    {
      name: "🥇 French Army Hackathon — IADataHack (Winner)",
      description:
        "Car-model classification with ResNet18 + explainability (Grad-CAM); end-to-end data to deployment prototype.",
      link: "https://github.com/chuklee/Hackatons-IADataHack",
      skills: ["PyTorch", "Computer Vision", "Explainability"],
    },
    {
      name: "🛡️ ZAuth — HF x Zama Hackathon",
      description:
        "Privacy-preserving face recognition using FHE (Concrete-ML); encrypted embeddings and weights at inference time.",
      link: "https://github.com/chuklee/HACKATHON-ZAMA-FHE-ENCRYPTION",
      skills: ["FHE", "Privacy", "Python", "Concrete-ML"],
    },
  ],

  education: [
    {
      school: "ENS Paris-Saclay",
      degree: "Master MVA (Mathematics, Vision, Learning)",
      dateRange: "Sep 2025 – Aug 2026",
      achievements: [],
    },
    {
      school: "EPITA",
      degree: "Diplôme d'Ingénieur — Major SCIA (AI & Data Science)",
      dateRange: "Sep 2020 – Aug 2025",
      achievements: [],
    },
    {
      school: "California State University, Los Angeles (CSULA)",
      degree: "Exchange Semester — Computer Science Engineering",
      dateRange: "Jan 2022 – May 2022",
      achievements: [],
    },
  ],
};
