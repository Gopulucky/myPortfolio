export const profile = {
  name: "Gopu Hardik",
  initials: "GH.",
  role: "Software Engineer & AI Specialist",
  tagline:
    "B.Tech Computer Science & Engineering student (2024–2028), specializing in Data Science, AI, and Full Stack Development.",
  heroDescription:
    "I build scalable, user-centric web applications and intelligent systems — turning complex problems into elegant, efficient code.",
  bio: [
    "I'm a Software Engineer who builds full-stack platforms end-to-end — from a Stripe-integrated 3D commerce marketplace to a real-time skill-trading app to an AI-driven geospatial pipeline. Every project below is live, internship-shipped, or backed by a working pipeline I can walk you through line by line.",
    "Recent work spans a marketplace with an AI recommendation layer (Next.js, FastAPI, pgvector), a time-banking platform built during the RTRP internship program (React, Node/Express, MySQL), a Random-Forest geospatial pipeline built for a national hackathon (scikit-learn, WhiteboxTools), and a from-scratch photogrammetry + physics engine for a real-estate prototype (Three.js, COLMAP, OpenMVS). I move comfortably across React/Next.js, Node/FastAPI backends, and SQL/NoSQL databases.",
  ],
  email: "gopuhardik@gmail.com",
  github: "https://github.com/Gopulucky",
  githubHandle: "github.com/Gopulucky",
  linkedin: "https://www.linkedin.com/in/gopu-hardik-842aa530b/",
  linkedinHandle: "linkedin.com/in/gopu-hardik",
  resumeUrl: "/resume.html",
};

export const skills = [
  "Python",
  "TypeScript",
  "JavaScript (ES6+)",
  "React",
  "Next.js",
  "Three.js / R3F",
  "Node.js",
  "Express",
  "FastAPI",
  "TailwindCSS",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Redis",
  "Firebase",
  "scikit-learn",
  "Docker",
  "Git",
  "Vercel",
];

export const timeline = [
  {
    id: "edu",
    date: "2024 — 2028",
    title: "B.Tech Computer Science & Engineering",
    org: "Computer Science & Engineering",
    description:
      "Specializing in Data Science, Artificial Intelligence, and Full Stack Development. Actively building real-world projects including desktop applications, web platforms, and data analytics dashboards.",
  },
  {
    id: "exp",
    date: "2024 — Present",
    title: "Software Developer",
    org: "Freelance, Internship & Personal Projects",
    description:
      "Shipped a 3D commerce marketplace with Stripe payments and AI-powered search, a time-banking platform during the RTRP internship program, and a geospatial ML pipeline for a national hackathon — across React/Next.js and Node/FastAPI backends, on Postgres, MySQL, and MongoDB.",
  },
];

export const certifications = [
  {
    id: 1,
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle University",
    image: "/images/cert_1.png",
    pdf: "/certificates/eCertificate.pdf",
  },
  {
    id: 2,
    title: "Java Full Stack",
    issuer: "EduSkills Academy",
    image: "/images/cert_2.png",
    pdf: "/certificates/certificate.pdf",
  },
  {
    id: 3,
    title: "Must-have GenAI skills for Developers",
    issuer: "Coding Ninjas",
    image: "/images/cert_3.png",
    pdf: "/certificates/certificate%202.pdf",
  },
  {
    id: 4,
    title: "AI Fluency for Students",
    issuer: "Anthropic",
    image: "/images/cert_4.png",
    pdf: "/certificates/certificate%203.pdf",
  },
  {
    id: 5,
    title: "Model Context Protocol: Advanced Topics",
    issuer: "Anthropic",
    image: "/images/cert_5.png",
    pdf: "/certificates/certificate%204.pdf",
  },
];

export const projects = [
  {
    id: "3dverse",
    title: "3DVerse",
    subtitle: "The Operating System for 3D Commerce",
    description:
      "A full-stack marketplace connecting 3D creators, customers, and print partners. In-browser 3D model preview (Three.js/R3F), automated printability analysis, Stripe checkout, and an AI layer with pgvector semantic search and \"similar product\" recommendations.",
    highlight: "9 completed phases — auth → uploads → printability → payments → AI search",
    tech: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL"],
    github: "https://github.com/Gopulucky/3Dverse",
    live: "https://3dverse-tan.vercel.app",
  },
  {
    id: "skillswap",
    title: "SkillSwap",
    subtitle: "Trade Skills, Not Money",
    description:
      "Full-stack time-banking platform built during the RTRP Internship Program: students trade hours of teaching for hours of learning instead of money. JWT + bcrypt auth, a searchable skill marketplace, and real-time chat with optimistic UI.",
    highlight: "10-connection pooled MySQL backend, JWT sessions, bcrypt-hashed auth",
    tech: ["React", "Node.js", "Express", "MySQL"],
    github: "https://github.com/Gopulucky/RTRP",
  },
  {
    id: "geo-intel",
    title: "Geo-Intel AI Pipeline",
    subtitle: "LULC & Hydrology Engine",
    description:
      "Built for the MoPR × IIT Tirupati NiF National Geospatial Intelligence Hackathon. Converts raw drone LiDAR point clouds into Digital Terrain Models, classifies land use with a Random Forest model, simulates rainwater flow, predicts waterlogging hotspots, and auto-designs drainage networks.",
    highlight: "100-tree Random Forest classifying 4 land-use types, chunk-processed 1M points at a time",
    tech: ["Python", "scikit-learn", "WhiteboxTools", "GeoPandas"],
    github: "https://github.com/Gopulucky/Geo-Intel_DTM_pipeline",
  },
  {
    id: "walkthru",
    title: "WalkThru",
    subtitle: "Playable 3D Property Tours",
    description:
      "A real-estate startup prototype: instead of scrolling photos, buyers walk a character through a real 3D-scanned property in the browser. Built an in-house photos-to-3D reconstruction pipeline (COLMAP + OpenMVS) and a Three.js viewer with capsule-vs-BVH physics.",
    highlight: "140/140 photos registered at 0.331px error → 4.18M-point mesh, compressed 477MB → 385KB",
    tech: ["Three.js", "COLMAP", "OpenMVS", "Node.js"],
    github: "https://github.com/Gopulucky/startupidea",
  },
  {
    id: "createnotes",
    title: "CS Notes",
    subtitle: "Interactive Learning Platform",
    description:
      "A computer science notes app with structured learning modules and progress tracking. Monaco-powered code editor with syntax highlighting and live markdown rendering on the frontend; Express + MongoDB API with Firebase auth and file uploads on the backend.",
    tech: ["React", "Monaco Editor", "Express", "MongoDB"],
    github: "https://github.com/Gopulucky/createnotes-app",
    live: "https://createnotes-app.vercel.app",
  },
  {
    id: "senalabs",
    title: "SenA Labs",
    subtitle: "Build. Innovate. Use.",
    description:
      "Live marketing site for SenA Labs, empowering students through robotics, hackathons, and AI workshops. Built with React 19, Vite, and Tailwind CSS 4, deployed and serving real traffic at senalabs.in.",
    tech: ["React", "Vite", "TailwindCSS", "React Router"],
    github: "https://github.com/Gopulucky/senalabs",
    live: "https://senalabs.in",
  },
];

export const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#certifications", label: "Certifications" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];
