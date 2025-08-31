export const siteConfig = {
  name: "Eithan Nakache",
  title: "AI Research Intern - Siemens Healthineers",
  description:
    "Passionate about deep learning and always excited to learn, build and explore new ideas in AI.",
  accentColor: "#1d4ed8",
  social: {
    email: "eithannakache@gmail.com",
    linkedin: "https://www.linkedin.com/in/eithannakache/",
    github: "https://github.com/eithannak29",
    // twitter: "",
  },
  aboutMe:
    "AI enthusiast and research intern passionate about building smarter and more reliable AI systems. I enjoy working with language models, turning complex ideas into real-world solutions. Curious, hands-on and always learning.",
  skills: [],
  projects: [
    {
      name: "NanoDiffVision - Vision Transformers with Differential Attention",
      description:
        "Compact ViT with differential attention; up to 96.03% on MNIST and 86.73% on FashionMNIST.",
      link: "https://www.eithannakache.com/",
      skills: ["Personal Project", "PyTorch", "Vision Transformers"]
    },
    {
      name: "ZAuth - Privacy-Preserving Authentication (PPAI Hackathon 2024)",
      description:
        "PPAI Hackathon by Hugging Face, Zama & EF. Participated in the Privacy-Preserving AI Hackathon with the same successful team from the Mistral AI competition. We developed ZAuth, an innovative authentication system leveraging Fully Homomorphic Encryption and face recognition. Our solution ensures complete privacy protection by keeping sensitive data (model weights and user embeddings) encrypted throughout the entire computation process, while implementing on-device image encoding and safeguards against reverse engineering attacks.",
      link: "https://github.com/eithannak29", // remplace par le bon repo
      skills: ["Hackathon", "FHE", "Concrete ML", "FaceNet", "Privacy-Preserving AI"]
    },
    {
      name: "Specialized Lightweight LLMs (Mistral AI Hackathon - 3rd Prize)",
      description:
        "Third Prize at Mistral AI Hackathon. Pre-selected to participate in France's largest hackathon organized by Mistral AI and Cerebral Valley, following our victory at IADataHack. Competed alongside participants from top-tier companies like Hugging Face and NVIDIA. Working with a team of talented individuals, we developed a platform for creating specialized lightweight language models using RL post-training (Direct Preference Optimization). The project earned us 3rd place among 250 pre-selected participants.",
      link: "https://devpost.com/...", // remplace par le bon Devpost
      skills: ["Hackathon", "RLHF", "Direct Preference Optimization", "LLM Distillation"]
    },
    {
      name: "Echo - Memory Platform for Alzheimer’s Support (Mistral AI Hackathon x Alan)",
      description:
        "Echo is a memory support platform designed for Alzheimer’s patients and their families. It combines a shared digital album, a RAG-powered chatbot for reminiscence, and adaptive memory quizzes to strengthen recall and foster meaningful connections.",
      link: "https://www.eithannakache.com/", // remplace par le bon lien
      skills: ["Hackathon", "RAG", "LLMs", "Healthcare AI"]
    },
    {
      name: "IADataHack - 1st Prize (French Ministry of Armed Forces)",
      description:
        "First Prize at IADataHack. After 3 months of AI/NLP courses, I participated with 5 classmates in the hackathon organized by the Ministry of the French Armed Forces. We won the 1st prize and it marked the beginning of my passion for hackathons.",
      link: "https://www.eithannakache.com/",
      skills: ["Hackathon", "NLP"]
    }
  ],
  experience: [
    {
      company: "Siemens Healthineers",
      title: "AI Research Intern",
      dateRange: "Mar 2025 – Present",
      bullets: [
        "Designed an end-to-end VLM pipeline for clinical PDF ingestion; 15x faster (0.39s vs 7.22s/page).",
        "Improved retrieval quality to 0.81 NDCG@5 (+23% vs baseline).",
        "Built tool-using LLM agents for multi-step medical reasoning.",
        "Led prompt engineering and evaluation for reliability and robustness."
      ]
    }
  ],
  education: [
    {
      school: "ENS Paris-Saclay",
      degree: "Master MVA (Mathematics, Vision, Learning)",
      dateRange: "Sep 2025 – Aug 2026",
      achievements: []
    },
    {
      school: "EPITA (École pour l’informatique et les techniques avancées)",
      degree: "Master of Engineering - Artificial Intelligence & Big Data (GPA 4.0/4.0)",
      dateRange: "Sep 2020 – Aug 2025",
      achievements: []
    },
    {
      school: "California State University, Los Angeles (CSULA)",
      degree: "Exchange Semester - Computer Science Engineering",
      dateRange: "Jan 2022 – May 2022",
      achievements: []
    }
  ],
};
