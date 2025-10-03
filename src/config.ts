export const siteConfig = {
  name: "Eithan Nakache",
  title: "MVA Master's Student @ ENS Paris-Saclay & IP Paris • Ex-Siemens Healthineers",
  description:
    "MVA student (2025–2026). Ex-Siemens Healthineers (Cardiovascular AI). Applied AI & multimodal ML.",
  accentColor: "#1d4ed8",
  social: {
    email: "eithannakache@gmail.com",
    linkedin: "https://www.linkedin.com/in/eithannakache/",
    github: "https://github.com/eithannak29",
    // twitter: "",
  },
  aboutMe:
    "MVA (ENS Paris-Saclay & IP Paris, 2025–2026). Former AI Research Intern at Siemens Healthineers (Cardiovascular AI). I build practical, reliable ML systems — with a focus on multimodal models, LLMs, and retrieval.",
  skills: [
    "Python", "PyTorch", "TensorFlow", "Scikit-Learn",
    "Hugging Face", "Lightning",
    "Vision", "NLP", "Multimodal AI",
    "RAG", "Evaluation", "MLOps (basics)"
  ],

  projects: [
    {
      name: "EchoRAG (Siemens Healthineers) — Clinical Guidelines RAG",
      description:
        "Multimodal RAG on ASE/ACC cardiology guidelines and flowcharts; visual-document retrieval + reranking; evaluation with ViDoRe/FlowVQA-style tasks.",
      link: "https://www.eithannakache.com/", // public write-up or portfolio section
      skills: ["Healthcare AI", "RAG", "Multimodal", "Retrieval", "Evaluation"]
    },
    {
      name: "EchoVQA — Visual QA on Echo Reports",
      description:
        "Prototype visual-QA pipeline on cardiac imaging documents; Col(Qwen)-based retrieval, structured outputs, and rubric-style scoring.",
      link: "https://www.eithannakache.com/", // public write-up (si dispo)
      skills: ["VQA", "Vision+Text", "Retrieval", "LLMs"]
    },
    {
      name: "🏅 Mistral AI Hackathon — Specialized Lightweight LLMs (Top 3)",
      description:
        "Platform for task-specific lightweight LLMs with preference optimization; ranked Top 3 among 250+ teams.",
      link: "https://devpost.com/...", // TODO: remplacer par le lien Devpost
      skills: ["LLMs", "Preference Optimization", "Distillation"]
    },
    {
      name: "🥇 French Army Hackathon — IADataHack (Winner)",
      description:
        "Car-model classification with ResNet18 + explainability (Grad-CAM); end-to-end data to deployment prototype.",
      link: "https://www.eithannakache.com/", // ou article de blog si dispo
      skills: ["PyTorch", "Computer Vision", "Explainability"]
    },
    {
      name: "🛡️ ZAuth — HF x Zama Hackathon",
      description:
        "Privacy-preserving face recognition using FHE (Concrete-ML); embeddings et poids chiffrés pendant l’inférence.",
      link: "https://github.com/eithannak29", // TODO: remplacer par le repo si public
      skills: ["FHE", "Privacy", "Python", "Concrete-ML"]
    },
    {
      name: "🫧 Echo — Mistral AI x Alan",
      description:
        "Memory support app for Alzheimer’s: shared album, RAG chatbot, adaptive memory quizzes.",
      link: "https://www.eithannakache.com/", // TODO: remplacer par le projet dédié
      skills: ["RAG", "LLMs", "Healthcare"]
    },
    {
      name: "NanoDiffVision — Vision Transformers with Differential Attention",
      description:
        "Compact ViT with differential attention; up to 96.03% (MNIST) and 86.73% (FashionMNIST).",
      link: "https://www.eithannakache.com/",
      skills: ["Personal Project", "PyTorch", "Vision Transformers"]
    }
  ],

  education: [
    {
      school: "ENS Paris-Saclay & Institut Polytechnique de Paris",
      degree: "Master MVA (Mathematics, Vision, Learning)",
      dateRange: "Sep 2025 – Aug 2026",
      achievements: [
        // ex: "Courses: Deep Learning, Optimal Transport, ALTEGRAD, PGMs, ..."
      ]
    },
    {
      school: "EPITA",
      degree: "Diplôme d'Ingénieur — Major SCIA (AI & Data Science)",
      dateRange: "Sep 2020 – Aug 2025",
      achievements: [
        // ex: "GPA 4.0/4.0", "Hackathon winner", ...
      ]
    },
    {
      school: "California State University, Los Angeles (CSULA)",
      degree: "Exchange Semester — Computer Science Engineering",
      dateRange: "Jan 2022 – May 2022",
      achievements: []
    }
  ]
};
