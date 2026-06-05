import fs from "fs";
import path from "path";

const cases = {
  CaseEmailAssistant: {
    exclude: ["01.png", "02.png", "19.png"],
    chapters: [
      {
        label: "#1. Priority detection and custom filtering",
        description:
          "This feature goes beyond traditional sorting algorithms to understand the context and content of your emails, prioritizing them by urgency and relevance. Imagine an inbox that automatically brings to the forefront critical messages requiring your immediate attention—whether it's an urgent request from a colleague or a time-sensitive project update. By leveraging AI's natural language understanding, this system not only categorizes emails more intelligently but also allows for custom filtering based on your specific needs, ensuring that important emails never get lost in the shuffle.",
        slides: [
          { type: "video", src: "media/ch1.mp4", poster: "08.png", title: "Video demo" },
          { type: "image", src: "03.png", title: "Important tab — smart sorting" },
          { type: "image", src: "05.png", title: "Inbox overview" },
          { type: "image", src: "07.png", title: "Settings — priority & filters" },
          { type: "image", src: "06.png", title: "Meetings tab & AI filter suggestions" },
          { type: "image", src: "04.png", title: "Schedule meeting from urgent thread" },
        ],
      },
      {
        label: "#2. Personalized Reply Generation & Inbox Management",
        description:
          "With this innovation, your AI assistant doesn't just help you manage your emails; it becomes an active participant in crafting and refining your communications. Whether it's summarizing lengthy threads to extract actionable items or suggesting replies that match the tone and context of the conversation, this feature streamlines the email process. It's like having a personal secretary who knows exactly what you need and when you need it, making email management a seamless and less time-consuming task.",
        slides: [
          { type: "video", src: "media/ch2-b.mp4", poster: "13.png", title: "Inbox management — video" },
          { type: "image", src: "14.png", title: "Important tab — inbox overview" },
          { type: "image", src: "16.png", title: "Inquiry thread — John Smith" },
          { type: "image", src: "18.png", title: "AI reply — tone of voice" },
          { type: "image", src: "15.png", title: "AI reply — generate pricing summary" },
          { type: "image", src: "17.png", title: "Reply draft — insert into thread" },
        ],
      },
      {
        label: "#3. AI-Powered Email Reply Automation",
        description:
          "AI-Powered Reply Automation transforms the daunting task of keeping up with your inbox into a breeze, especially when you're out of the office. Set up before you leave for a trip or when you're simply swamped, this feature ensures that every incoming email is handled efficiently. Your AI assistant drafts thoughtful, context-aware responses or smart auto-replies that inform senders of your availability, all while you focus on more pressing matters. This automation extends to organizing and prioritizing your inbox, so you return to a neatly sorted email landscape, ready for your review.",
        slides: [
          { type: "video", src: "media/ch2-a.mp4", poster: "12.png", title: "Reply automation — video" },
          { type: "image", src: "09.png", title: "AI assistant — welcome" },
          { type: "image", src: "10.png", title: "Out-of-office setup prompt" },
          { type: "image", src: "11.png", title: "Summary & auto-reply draft" },
        ],
      },
      {
        label: "#4. Built-in AI Task Management Assistant",
        description:
          "Task management gets a futuristic upgrade with AI Task Assistance. Gone are the days of manually tracking document revisions or piecing together the latest project updates. This AI feature intelligently gathers, tags, and summarizes all versions of a document, even identifying and highlighting the key changes for you. It's designed to cut through the noise and confusion of constant updates, ensuring you always have the latest information at your fingertips. Plus, with smart naming conventions, it eliminates the guesswork in identifying documents, making your workflow as smooth and efficient as possible.",
        slides: [
          { type: "video", src: "media/ch3-b.mp4", poster: "31.png", title: "Task management — video" },
          { type: "image", src: "29.png", title: "Inbox automation settings" },
          { type: "image", src: "26.png", title: "Contact hub — messages" },
          { type: "image", src: "30.png", title: "Files — Smart naming" },
          { type: "image", src: "28.png", title: "Files — AI search" },
          { type: "image", src: "25.png", title: "Partnership thread — AI summary" },
          { type: "image", src: "27.png", title: "Company overview" },
        ],
      },
      {
        label: "#5. Built-in Team & Project Management Assistant",
        description:
          "When unexpected changes occur, like a team member falling ill, this feature doesn't just notify you—it suggests and implements solutions. From finding replacements to adjusting project timelines, the AI analyses team skills and availability, making informed decisions to keep everything on track. This level of automation extends to generating emails, organizing tasks, and even strategizing for future emergencies, embodying a proactive approach to management that saves time and fosters a more adaptable work environment.",
        slides: [
          { type: "video", src: "media/ch3-a.mp4", poster: "24.png", title: "Team & project — video" },
          { type: "image", src: "21.png", title: "Important tab — Georgia sick leave" },
          { type: "image", src: "20.png", title: "Thread — Georgia replacement project" },
          { type: "image", src: "23.png", title: "AI Assistant — short & long-term actions" },
          { type: "image", src: "22.png", title: "Execute all — AI composed tasks" },
        ],
      },
    ],
  },
  CaseMeetingAssistant: {
    exclude: [],
    chapters: [
      {
        label: "#1. Speech Clarity & Disfluency Filtering",
        description:
          "This feature uses AI to detect and remove filler words from meeting transcripts, making recordings clearer and more professional for sharing and review.",
        slides: [
          {
            type: "image",
            src: "29.png",
            title: "AI Speech Enhancer — overview",
          },
          { type: "video", src: "media/ch1.mp4", poster: "04.png", title: "Video demo" },
          {
            type: "image",
            src: "04.png",
            title: "Video + transcript — filler words detected",
          },
          { type: "image", src: "03.png", title: "Remove filler words" },
          { type: "image", src: "05.png", title: "Transcript with highlights" },
        ],
      },
      {
        label: "#2. AI Background Noise Removal",
        description:
          "Multi-track waveforms and speaker visualization over video help users follow who spoke when — paired with playback controls for review.",
        slides: [
          { type: "image", src: "07.png", title: "AI for Meeting Noise Filtering" },
          { type: "video", src: "media/ch2.mp4", poster: "08.png", title: "Video demo" },
          { type: "image", src: "09.png", title: "Background voice cancellation" },
          { type: "image", src: "11.png", title: "Voice clarity — Clear noise" },
          { type: "image", src: "10.png", title: "Noise removed — success" },
        ],
      },
      {
        label: "#3. Real-time AI-Driven Explanation of Unknown Words or Jargon",
        description:
          "Explain jargon in context from the transcript — Copy, Translate, and Explain actions without leaving the meeting review flow.",
        slides: [
          { type: "image", src: "12.jpg", title: "Explain this — AI feature" },
          { type: "video", src: "media/ch3.mp4", poster: "13.png", title: "Video demo" },
          { type: "image", src: "14.png", title: "Context menu — Copy, Translate, Explain" },
          { type: "image", src: "15.png", title: "Generating explanation" },
        ],
      },
      {
        label: "#4. Automated Note-taking for Takeaways and Tasks Generation",
        description:
          "Generate meeting notes and action points with AI, then refine in a split editor built for post-meeting workflows.",
        slides: [
          { type: "image", src: "16.png", title: "AI meeting assistant — notes & tasks" },
          { type: "video", src: "media/ch4.mp4", poster: "17.png", title: "Video demo" },
          { type: "image", src: "34.png", title: "Meeting notes — Generate with AI" },
          { type: "image", src: "35.png", title: "Notes, takeaways & action items" },
          { type: "image", src: "36.png", title: "Transcript — filler words & Remove" },
        ],
      },
      {
        label: "#5. Tasks decomposition",
        description:
          "Turn meeting outcomes into structured issues and sub-tasks — labeled as generated with AI for transparency.",
        slides: [
          { type: "image", src: "30.png", title: "AI tasks decomposition" },
          { type: "video", src: "media/ch5.mp4", poster: "19.png", title: "Video demo" },
          { type: "image", src: "31.png", title: "Meeting notes — Create tasks" },
          { type: "image", src: "32.png", title: "3 issues generated with AI" },
          { type: "image", src: "33.png", title: "Task hierarchy & subtasks" },
        ],
      },
      {
        label: "#6. AI Meeting Scheduling Assistant",
        description:
          "Schedule follow-up meetings from the meeting workspace with AI-suggested times and calendar integration.",
        slides: [
          { type: "image", src: "18.jpg", title: "AI that schedules meetings for you" },
          { type: "video", src: "media/ch6.mp4", poster: "24.png", title: "Video demo" },
          { type: "image", src: "37.png", title: "Schedule new meeting — AI timeslots" },
          { type: "image", src: "22.png", title: "Notes — Schedule meeting" },
          { type: "image", src: "20.png", title: "Meeting scheduled — calendar" },
          { type: "image", src: "21.png", title: "Meetings tab — external participant" },
        ],
      },
      {
        label: "#7. Enhancing Data Interaction with AI Natural Language Processing",
        description:
          "Overview of AI in meetings: scheduling, note-taking, data interpretation, and integrations with Meet, Teams, and Slack.",
        slides: [
          { type: "image", src: "23.png", title: "Natural language queries" },
          { type: "video", src: "media/ch7.mp4", poster: "25.png", title: "Video demo" },
          { type: "image", src: "25.png", title: "Filter with AI" },
          { type: "image", src: "28.png", title: "Generated query — Done" },
          { type: "image", src: "26.png", title: "AI search — query bar" },
          { type: "image", src: "27.png", title: "AI search — results" },
        ],
      },
    ],
  },
  CaseDataManagement: {
    exclude: [],
    chapters: [
      {
        label: "#1. AI Autofill of Text and Data",
        description:
          "AI fills missing catalog metadata in product tables — categories, authors, publishers, and physical attributes — from a single assistant action.",
        slides: [
          { type: "image", src: "02.png", title: "AI Autofill of Text & Data — overview" },
          { type: "video", src: "media/ch1.mp4", poster: "03.png", title: "Video demo" },
          { type: "image", src: "07.png", title: "Enrich column data" },
          { type: "image", src: "04.png", title: "Reformat — enrich references" },
          { type: "image", src: "06.png", title: "Generating autofill" },
          { type: "image", src: "05.png", title: "Categories, author & publisher suggestions" },
        ],
      },
      {
        label: "#2. Built-in AI writer for description generation",
        description:
          "Generate product descriptions in bulk so tables move from sparse IDs to publish-ready rows.",
        slides: [
          { type: "video", src: "media/ch2.mp4", poster: "09.png", title: "Video demo" },
          { type: "image", src: "10.png", title: "Bookstore products — fill with AI" },
          { type: "image", src: "11.png", title: "AI writer — prompt & generate" },
          { type: "image", src: "23.png", title: "Generating descriptions" },
          { type: "image", src: "24.png", title: "Validation — missing book title" },
        ],
      },
      {
        label: "#3. AI-assisted formula generation & calculation",
        description:
          "Spreadsheet-style intelligence for derived fields and calculations assisted by AI.",
        slides: [
          { type: "image", src: "12.png", title: "AI Formula Assistant — overview" },
          { type: "video", src: "media/ch3.mp4", poster: "16.png", title: "Video demo" },
          { type: "image", src: "13.png", title: "Product performance report" },
          { type: "image", src: "15.png", title: "Calculate formula — performance index" },
          { type: "image", src: "14.png", title: "Calculate formula — generate" },
        ],
      },
      {
        label: "#4. AI Data Unification",
        description:
          "Unify scattered data sources into one coherent dashboard view with consistent naming.",
        slides: [
          { type: "image", src: "17.png", title: "AI-Driven Data Unification — overview" },
          { type: "video", src: "media/ch4.mp4", poster: "21.png", title: "Video demo" },
          { type: "image", src: "20.png", title: "Unify dimensions & weight — prompt" },
          { type: "image", src: "18.png", title: "Reformat — convert to metric" },
          { type: "image", src: "19.png", title: "Generating unified measurements" },
        ],
      },
      {
        label: "#5. AI Data Visualization and Explanation",
        description:
          "KPI cards, scatter plots, Reformat with AI, and chart-level Analyze — the future of data visualization in-product.",
        slides: [
          { type: "image", src: "25.png", title: "Data Explanation — overview" },
          { type: "video", src: "media/ch5.mp4", poster: "22.png", title: "Video demo" },
          { type: "image", src: "26.png", title: "Dashboard — KPIs & scatter plot" },
          { type: "image", src: "27.png", title: "Analyze chart — AI assistant" },
          { type: "image", src: "28.png", title: "Sales record — AI insights" },
        ],
      },
    ],
  },
};

for (const [dir, cfg] of Object.entries(cases)) {
  const root = path.join("public/assets", dir);
  const mediaDir = path.join(root, "media");
  fs.mkdirSync(mediaDir, { recursive: true });

  for (const f of Object.values(
    fs.existsSync(root) ? fs.readdirSync(root) : []
  )) {
    if (f.endsWith(".mp4")) {
      const dest = path.join(mediaDir, f);
      if (!fs.existsSync(dest)) fs.copyFileSync(path.join(root, f), dest);
    }
  }

  fs.writeFileSync(path.join(root, "dribbble-sections.json"), JSON.stringify(cfg.chapters, null, 2));
  console.log(dir, cfg.chapters.map((c) => `${c.slides.length} slides`).join(", "));
}
