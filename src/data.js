export const profile = {
  name: 'Anay Goyal',
  initials: 'AG',
  role: 'CS Undergrad & Full-Stack Developer',
  tagline: 'Building full-stack apps and picking apart algorithms, in that order.',
  email: 'anaygoyal9@gmail.com',
  location: 'IIIT Pune',
  resumeFile: '/Anay_Goyal_Resume.pdf',
  github: 'https://github.com/anaygoyal9',
  linkedin: 'https://linkedin.com/in/anay-goyal-b30977324',
};

export const about = {
  paragraphs: [
    "I'm a Computer Science undergraduate at IIIT Pune, passionate about turning ideas into useful, working software. I enjoy building across the stack with React, Node.js, and JavaScript, while exploring machine learning and new technologies.",
    "For me, programming isn't just about writing code. It's about understanding a problem, breaking it down, getting stuck, learning why, and trying again. Every project gives me something new to learn, and every bug is another opportunity to understand my craft a little better.",
    "When I'm away from the keyboard, you'll probably find me on a badminton court or somewhere lost in music. Both have taught me something I carry into coding:",
    "Slow down. Find the rhythm.. Understand the problem... Then try again.",
    "I'm still learning, still building, and still figuring things out — and honestly, that's the part I enjoy most."
  ],
  facts: [
    { label: 'Leetcode', value: '1450+ rating, 150+ solved' },
    { label: 'Codechef', value: '1432 rating (2★)' },
    { label: 'Based in', value: 'Pune, India' },
    { label: 'Off-screen', value: 'Badminton 🏸 & music 🎷' },
  ],
};

export const skills = [
  {
    title: 'Languages',
    description: 'What I think and build in',
    items: ['C++', 'Python', 'JavaScript', 'Java'],
  },
  {
    title: 'Web development',
    description: 'Frontend to backend',
    items: ['React', 'Node.js', 'Express', 'HTML', 'CSS', 'REST APIs'],
  },
  {
    title: 'Data & ML',
    description: 'Where I\'m spending new time',
    items: ['NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'OpenCV'],
  },
  {
    title: 'Tools & databases',
    description: 'The rest of the stack',
    items: ['Git', 'GitHub', 'Docker', 'MySQL', 'MongoDB', 'Linux'],
  },
];

export const timeline = [
  {
    year: 'Now',
    title: 'Machine learning & AI',
    detail: 'Currently digging into machine learning and AI, alongside continuing to ship full-stack projects.',
  },
  {
    year: '2025',
    title: 'Java, Python & the backend',
    detail: 'Learned Java and Python in parallel, built projects with each, then rounded out the stack with Node.js on the backend and MySQL for storage.',
  },
  {
    year: '2024–25',
    title: 'Moved into web development',
    detail: 'Picked up frontend development, mainly React, and started building real interfaces instead of console programs.',
  },
  {
    year: '2024',
    title: 'Started with C & C++',
    detail: 'First year at IIIT Pune — learned the fundamentals of programming and data structures from the ground up.',
  },
];

export const projects = [
  {
    id: '01',
    name: 'Spotify web clone',
    category: 'Full-stack',
    description: 'A full-stack, Spotify-inspired music streaming app with mood-based playlists, JWT-secured accounts, and a REST API backing it all.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'MongoDB'],
    link: 'https://github.com/anaygoyal9',
  },
  {
    id: '02',
    name: 'GenAI YT video comparator',
    category: 'AI / LLM',
    description: 'Compares YouTube videos using an LLM pipeline — summarizing, scoring, and ranking them so you can tell which one is actually worth watching.',
    stack: ['Python', 'LangChain', 'OpenAI API'],
    link: 'https://github.com/anaygoyal9',
  },
  {
    id: '03',
    name: 'Resource management system',
    category: 'Full-stack',
    description: 'A dashboard for tracking organizational resources across faculty offices and classrooms, with multi-parameter search and live status indicators.',
    stack: ['React', 'Java', 'Spring Boot', 'H2 Database'],
    link: 'https://github.com/anaygoyal9',
  },
  {
    id: '04',
    name: 'Movie recommender',
    category: 'Machine learning',
    description: 'Suggests movies based on user preferences using a content-based filtering model trained on a public ratings dataset.',
    stack: ['Python', 'Pandas', 'Scikit-learn'],
    link: 'https://github.com/anaygoyal9',
  },
  {
    id: '05',
    name: 'To-do list',
    category: 'Web app',
    description: 'A clean, fast task manager with persistent local storage — the project that got the React fundamentals to actually stick.',
    stack: ['React', 'CSS'],
    link: 'https://github.com/anaygoyal9',
  },
];