export const skills = [
  { icon: "Lightbulb", name: "Product thinking", desc: "Focus on value for business and users." },
  { icon: "TestTube", name: "Usability testing", desc: "Hypothesis validation with real users." },
  { icon: "ChartBar", name: "Competitive analysis", desc: "Market and competitor analysis." },
  { icon: "Network", name: "Information architecture", desc: "Content and navigation structure." },
  { icon: "GitBranch", name: "User flows", desc: "User scenarios and flows." },
  { icon: "LayoutTemplate", name: "Wireframing", desc: "Fast prototypes to align ideas." },
  { icon: "Hand", name: "Interaction design", desc: "Micro-interactions and interface states." },
  { icon: "Palette", name: "Visual design", desc: "Visual language, typography, details." },
  { icon: "Monitor", name: "Responsive design", desc: "Responsive behavior across screens." },
  { icon: "Smartphone", name: "Mobile design", desc: "UI/UX for mobile apps." },
  { icon: "PenTool", name: "Illustrations", desc: "Illustrations and iconography." },
  { icon: "Package", name: "Design systems", desc: "Components, tokens, consistency." },
  { icon: "CircleCheck", name: "QA review", desc: "Quality checks and design fidelity." },
  { icon: "Presentation", name: "Presentations", desc: "Presentations and public speaking." },
  { icon: "Sparkles", name: "AI prototyping", desc: "Prototypes using AI tools." },
  { icon: "Code", name: "Design-to-code", desc: "Design handoff to code and front-end implementation." },
];

export const industries = [
  { icon: "Dumbbell", name: "Lifestyle & Sport", desc: "Health, fitness, and active lifestyle." },
  { icon: "HeartPulse", name: "Digital Health", desc: "Medical apps, telemedicine, wellness." },
  { icon: "Truck", name: "Logistics", desc: "Tracking, routes, delivery dashboards." },
  { icon: "Building2", name: "Real Estate", desc: "Search, listing cards, booking." },
  { icon: "Car", name: "Automotive", desc: "Automotive apps." },
  { icon: "Leaf", name: "Environment", desc: "Eco projects and sustainability." },
  { icon: "Brain", name: "AI", desc: "AI-powered products." },
  { icon: "Radio", name: "Media", desc: "Content, social media, and media platforms." },
];

export const tools = [
  { icon: "Palette", name: "Figma", desc: "Design, prototypes, auto-layout." },
  { icon: "LayoutGrid", name: "FigJam", desc: "Workshops, maps, brainstorming." },
  { icon: "Sparkles", name: "Figma Make", desc: "AI tools in Figma." },
  { icon: "Bot", name: "Claude AI", desc: "Assistant for design and code." },
  { icon: "MousePointer", name: "Cursor", desc: "AI code editor." },
  { icon: "Image", name: "Photoshop", desc: "Graphics, image editing." },
  { icon: "Heart", name: "Lovable", desc: "AI for UI creation." },
  { icon: "Box", name: "v0 (Vercel)", desc: "UI generation from prompts." },
  { icon: "MessageSquare", name: "ChatGPT", desc: "Copywriting, ideas, prototypes." },
  { icon: "Code", name: "HTML/CSS", desc: "Layout, styling, responsiveness." },
];

export interface EducationItem {
  type: string;
  title: string;
  description: string;
  date: string;
  status: string;
  certificateImage?: string;
}

export const education: EducationItem[] = [
  {
    type: "Education",
    title: "Lviv National Agrarian University",
    description: "Agroengineer. Base education; design through courses and self-learning.",
    date: "01.08.2017 – 28.02.2019",
    status: "Bachelor",
  },
  {
    type: "Certification",
    title: "Mobile Apps Design (course)",
    description: "CREATIVE & TECH PRJCTR Online Institute",
    date: "25.11.2024 – 04.02.2025",
    status: "Certified",
    certificateImage: "/assets/certificates/mobile-apps-design.png",
  },
  {
    type: "Course",
    title: "growth.design",
    description: "Product, UX, growth - completed course.",
    date: "Course",
    status: "Completed",
  },
];

export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  badge: string;
  badgeIcon: string;
  description: string;
  tags: { icon: string; label: string }[];
  coverImage?: string;
  coverImageWidth?: number;
  coverImageHeight?: number;
  heroImage?: string;
  heroImageWidth?: number;
  heroImageHeight?: number;
  coverIcon?: string;
  role?: string;
  product?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "ai-chatbot-dashboard",
    title: "Cieden AI Assistant",
    subtitle: "website chatbot for sales & briefing",
    badge: "Internal product · Live on site",
    badgeIcon: "MessageSquare",
    description:
      "A live AI assistant on the company website that qualifies leads, answers about services, shows portfolio & process, runs preliminary estimates, and books calls — 24/7, without a cold contact form.",
    tags: [
      { icon: "MessageSquare", label: "UI/UX · UX Logic" },
      { icon: "Sparkles", label: "AI sales assistant" },
      { icon: "Calculator", label: "Preliminary estimate" },
    ],
    coverImage: "/assets/CaseChatbot/cover-main.png",
    coverImageWidth: 1440,
    coverImageHeight: 900,
    heroImage: "/assets/CaseChatbot/01-welcome-voice.png",
    heroImageWidth: 1440,
    heroImageHeight: 900,
    coverIcon: "MessageSquare",
    role: "UI/UX Designer · UX Logic · Animation · Vibe Coding",
    product: "Cieden AI Assistant",
  },
  {
    slug: "realtor-in-pocket",
    title: "HouseHub",
    subtitle: "Realtor in Pocket",
    badge: "Mobile product case study",
    badgeIcon: "Building2",
    description:
      "A unified mobile app for residents, landlords, tenants, and building management — already live in residential complexes. Combines utility readings, online payments, house communication, service requests, and local real estate, with steady growth in everyday use.",
    tags: [
      { icon: "Gauge", label: "Transfer of indicators" },
      { icon: "CreditCard", label: "Utility payments" },
      { icon: "MessagesSquare", label: "House chats and notices" },
      { icon: "House", label: "Real estate module" },
    ],
    coverImage: "/assets/HouseHub/main.png",
    coverImageWidth: 2854,
    coverImageHeight: 1527,
    heroImage: "/assets/HouseHub/main.png",
    heroImageWidth: 2854,
    heroImageHeight: 1527,
    role: "Product Designer",
    product: "HouseHub App",
  },
  {
    slug: "ai-data-management",
    title: "Data Management",
    subtitle: "AI visualization UX",
    badge: "Dribbble · AI UX",
    badgeIcon: "ChartBar",
    description:
      "AI-powered dashboards: KPI cards, trend indicators, scatter plots, and in-context Analyze actions for complex datasets.",
    tags: [
      { icon: "ChartBar", label: "KPIs & analytics" },
      { icon: "Sparkles", label: "AI assistant" },
      { icon: "Download", label: "Reports & export" },
    ],
    coverImage: "/assets/CaseDataManagement/cover-main.png",
    coverImageWidth: 1600,
    coverImageHeight: 1200,
    heroImage: "/assets/CaseDataManagement/cover-main.png",
    heroImageWidth: 1600,
    heroImageHeight: 1200,
    role: "UX · Data visualization",
    product: "AI Data & Analytics",
  },
  {
    slug: "ai-email-assistant",
    title: "AI Email Assistant",
    subtitle: "Inbox & automation UX",
    badge: "Dribbble · AI UX",
    badgeIcon: "Mail",
    description:
      "Inbox management with AI summaries, project sidebar, urgency tabs, and task tags — one interface for reply, tasks, and automation.",
    tags: [
      { icon: "Mail", label: "Inbox & compose" },
      { icon: "Sparkles", label: "AI briefs" },
      { icon: "ListTodo", label: "Tasks & tags" },
    ],
    coverImage: "/assets/CaseEmailAssistant/cover-main.png",
    coverImageWidth: 1600,
    coverImageHeight: 1200,
    heroImage: "/assets/CaseEmailAssistant/cover-main.png",
    heroImageWidth: 1600,
    heroImageHeight: 1200,
    role: "UX · Product patterns",
    product: "AI Email Assistant",
  },
  {
    slug: "ai-meeting-assistant",
    title: "Meeting Assistant",
    subtitle: "AI UX patterns",
    badge: "Dribbble · AI UX",
    badgeIcon: "Video",
    description:
      "UX patterns for meeting tools: live video, waveform scrubbing, smart transcripts, and AI notes — published as a Dribbble case study.",
    tags: [
      { icon: "Video", label: "Meetings & playback" },
      { icon: "FileText", label: "Smart transcript" },
      { icon: "Sparkles", label: "AI prompts & actions" },
    ],
    coverImage: "/assets/CaseMeetingAssistant/cover-main.png",
    coverImageWidth: 1600,
    coverImageHeight: 1200,
    heroImage: "/assets/CaseMeetingAssistant/cover-main.png",
    heroImageWidth: 1600,
    heroImageHeight: 1200,
    role: "UX · Motion / UI patterns",
    product: "AI Meeting Assistant",
  },
  {
    slug: "osbb-app",
    title: "Books Shelf",
    subtitle: "AI-powered bookstore",
    badge: "Learning project",
    badgeIcon: "GraduationCap",
    description:
      "Learning project: Books Shelf — a bookstore app with an AI assistant that helps users and admins discover titles, manage the catalog, and work together smoothly.",
    tags: [
      { icon: "BookOpen", label: "Library & discovery" },
      { icon: "Headphones", label: "Audiobooks" },
      { icon: "Sparkles", label: "AI assistant" },
      { icon: "Users", label: "Social reading" },
    ],
    coverImage: "/assets/CaseOsbb/cover-main.png",
    coverImageWidth: 1024,
    coverImageHeight: 568,
    heroImage: "/assets/CaseOsbb/main.png",
    heroImageWidth: 1024,
    heroImageHeight: 568,
    role: "Product Designer",
    product: "Books Shelf · Learning project",
  },
  {
    slug: "company-case-study",
    title: "Visual case studies",
    subtitle: "for company products",
    badge: "Case study · Company projects",
    badgeIcon: "Box",
    description: "The goal is to turn finished products into clear and compelling portfolio stories: select the strongest screens, add animations, and assemble a cohesive case study.",
    tags: [
      { icon: "Sparkles", label: "Case studies & presentations" },
      { icon: "Film", label: "Animations and prototypes in Figma" },
    ],
    coverImage: "/assets/company-case-cover.svg",
    role: "Case Study Designer",
    product: "Company Portfolio Cases",
  },
];

export const featuredCaseSlugs = [
  "ai-chatbot-dashboard",
  "realtor-in-pocket",
] as const;

export const getFeaturedCaseStudies = () =>
  featuredCaseSlugs
    .map((slug) => caseStudies.find((c) => c.slug === slug))
    .filter((c): c is CaseStudy => c !== undefined);
