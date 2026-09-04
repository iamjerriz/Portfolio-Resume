// ─── Personal / Branding ────────────────────────────────────────────────────

export const PERSONAL = {
  name: 'Jerriz',
  lastName: 'Evangelista',
  fullName: 'Jerriz Evangelista',
  role: 'Software Developer',
  tagline: 'SOFTWARE DEVELOPER',
  logo: '<JE />',
  email: 'iamjerriz@gmail.com',
  location: 'Central Luzon, Philippines',
  jobStreetUrl: 'https://ph.jobstreet.com/profiles/jerriz-evangelista-11NS2KcNmH',
  linkedInUrl: 'https://www.linkedin.com/in/jerriz-evangelista-071069277/',
  summary: 'Software Developer with 6 years of experience building responsive, scalable, and user-focused web applications. Passionate about crafting clean, performant interfaces.',
};

// ─── Navigation ─────────────────────────────────────────────────────────────

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

// ─── About ──────────────────────────────────────────────────────────────────

export const ABOUT = {
  bio: [
    "I'm a Software Developer based in Central Luzon, Philippines, with 6 years of professional experience crafting modern web applications. I specialize in building responsive, scalable, and accessible user interfaces using React and modern JavaScript frameworks.",
    "I thrive in cross-functional teams, working closely with designers and backend developers to deliver high-quality solutions. I'm passionate about clean code, performance optimization, and creating seamless user experiences.",
  ],
  highlights: [
    {
      icon: 'Code2' as const,
      title: 'Frontend',
      desc: 'React, Next.js, TypeScript, JavaScript ES6+',
    },
    {
      icon: 'Layout' as const,
      title: 'UI/UX',
      desc: 'Responsive design,Bootstrap, Mui, Tailwind CSS, Figma to code',
    },
    {
      icon: 'Server' as const,
      title: 'Backend',
      desc: 'Node.js, Next.js, Supabase, REST APIs, MySQL, API integration',
    },
    {
      icon: 'GitBranch' as const,
      title: 'Tools',
      desc: 'Git, GitHub, CI/CD, Agile methodology',
    },
  ],
  skills: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'Node.js', 'Supabase', 'Tailwind CSS', 'HTML5 / CSS3', 'REST APIs', 'Git', 'MySQL', 'Redux', 'Responsive Design'],
};

// ─── Work Experience ────────────────────────────────────────────────────────

export const EXPERIENCES = [
  {
    role: 'Fullstack Developer',
    company: 'iGen System Inc.',
    location: 'Remote',
    period: 'Jul 2023 - Apr 2026',
    duration: '2 years 9 months',
    description: [
      'Maintained and enhanced core web platforms with a focus on performance and scalability.',
      'Designed and developed RESTful APIs while managing backend databases to ensure reliable data flow and system stability.',
      'Utilised the React framework to build dynamic and interactive web applications, improving site performance.',
      'Built secure, maintainable front-end modules for online shopping platforms.',
      'Collaborated with cross-functional teams to ensure seamless integration with RESTful APIs for efficient data flow.',
      'Engaged in architecture discussions, providing insights into front-end technology and best practices.',
    ],
    techStack: ['React.js', 'TypeScript', 'JavaScript (ES6+)', 'Context API', 'HTML', 'CSS3', 'SASS', 'Tailwind', 'Material UI', 'REST API', 'Axios', 'Node.js', 'SQL', 'GitHub', 'Figma'],
  },
  {
    role: 'Fullstack Developer',
    company: 'Codabyte',
    location: 'Remote',
    period: 'Feb 2021 - Jul 2023',
    duration: '2 years 5 months',
    description: [
      'Built and maintained robust backend services and RESTful APIs to power web operations.',
      'Helped build full-stack solutions leveraging Next.js and PostgreSQL, alongside a responsive admin dashboard for inventory and merchandise tracking.',
      'Translated complex UI/UX designs into functional React components, significantly improving usability.',
      'Implemented responsive web design principles, ensuring cross-browser compatibility and accessibility.',
      'Participated in agile methodologies, collaborating within teams to consistently meet project milestones.',
    ],
    techStack: ['React.js', 'Next.js', 'PostgreSQL', 'Supabase', 'JavaScript (ES6+)', 'Redux', 'HTML', 'CSS3', 'SASS', 'Material UI', 'REST API', 'Axios', 'Figma'],
  },
  {
    role: 'Frontend Developer',
    company: 'SA Dream Tech / SA Gaming',
    location: 'Makati, Philippines',
    period: 'Dec 2019 - Oct 2020',
    duration: '11 months',
    description: [
      'Worked closely with UX and design teams to create intuitive user interfaces, enhancing overall user satisfaction.',
      'Implemented rigorous testing and debugging processes to sustain high performance and reliability.',
      'Supported seamless integration with backend services, improving API collaboration and data handling.',
      'Engaged in continuous learning to adapt to modern frameworks and tools in front-end development.',
    ],
    techStack: ['React.js', 'JavaScript (ES6+)', 'HTML', 'CSS3', 'SASS', 'REST API', 'Axios'],
  },
];

// ─── Education ──────────────────────────────────────────────────────────────

export const EDUCATION = {
  degree: 'Bachelor of Science',
  school: 'Lyceum of the Philippines',
  year: 'Graduated 2019',
  description: 'Equipped with a strong foundation in computing, problem-solving, and software engineering principles that drive my professional development career.',
};

// ─── Projects ───────────────────────────────────────────────────────────────

export const PROJECTS = [
  {
    title: 'Central.ph',
    description: 'A flagship e-commerce and digital services platform. Served as core frontend developer, building secure and maintainable modules for the payment system and user-facing features.',
    tags: ['React', 'JavaScript', 'REST API', 'Payment Integration'],
    type: 'Professional',
    url: 'https://www.landers.ph/',
  },
  {
    title: 'Dygenfood.ph',
    description: 'A food ordering and delivery platform. Developed responsive frontend components, integrated APIs for order management, and ensured a smooth user experience across devices.',
    tags: ['React', 'Node.js', 'API Integration', 'Responsive Design'],
    type: 'Professional',
    url: 'https://dygenfood.ph/',
  },
  {
    title: 'MindDump',
    description:
      'A modern journaling web app designed to help users declutter their minds by capturing and organizing thoughts. The platform emphasizes simplicity, usability, and structured reflection to make ideas easier to understand and act on.',
    tags: ['React', 'Nextjs', 'API Integration', 'Responsive Design', 'Supabase'],
    type: 'Personal',
    url: 'https://minddumpz.vercel.app/',
  },
  {
    title: 'Snout&About',
    description:
      'Snout & About Vet is a modern veterinary service website designed to provide pet owners with easy access to information, inquiries, and contact options. It features a clean, responsive interface that highlights services, improves user engagement, and simplifies communication between clients and the clinic.',
    tags: ['React', 'Nextjs', 'API Integration', 'Responsive Design', 'Supabase'],
    type: 'Professional',
    url: 'https://snoutandaboutvet.vercel.app/',
  },
  {
    title: 'Casino Web Applications',
    description: 'Developed interactive casino web applications at SA Dreamtech, transforming wireframes into fully functional, responsive interfaces with engaging user interactions.',
    tags: ['React', 'JavaScript', 'CSS3', 'Animation'],
    type: 'Professional',
    url: 'https://www.sagaming.com/',
  },
];

// ─── Contact Section Copy ───────────────────────────────────────────────────

export const CONTACT = {
  subtitle: "Have a project in mind or want to collaborate? Let's connect.",
  openMessage: "I'm currently open to new opportunities and exciting projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
  successHeading: 'Message Sent!',
  successMessage: "Thank you for reaching out. I'll get back to you soon.",
};
