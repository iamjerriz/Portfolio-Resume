// ─── Personal / Branding ────────────────────────────────────────────────────

export const PERSONAL = {
  name: 'Jerriz',
  lastName: 'Evangelista',
  fullName: 'Jerriz Evangelista',
  role: 'Frontend Developer',
  tagline: 'FRONTEND DEVELOPER',
  logo: '<JE />',
  email: 'iamjerriz@gmail.com',
  location: 'Central Luzon, Philippines',
  jobStreetUrl: 'https://ph.jobstreet.com/profiles/jerriz-evangelista-11NS2KcNmH',
  linkedInUrl: 'https://www.linkedin.com/in/jerriz-evangelista-071069277/',
  summary: 'Frontend Developer with 6 years of experience building responsive, scalable, and user-focused web applications. Passionate about crafting clean, performant interfaces.',
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
    "I'm a Frontend Developer based in Central Luzon, Philippines, with 6 years of professional experience crafting modern web applications. I specialize in building responsive, scalable, and accessible user interfaces using React and modern JavaScript frameworks.",
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
      desc: 'Node.js, REST APIs, MySQL, API integration',
    },
    {
      icon: 'GitBranch' as const,
      title: 'Tools',
      desc: 'Git, GitHub, CI/CD, Agile methodology',
    },
  ],
  skills: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'Node.js', 'Tailwind CSS', 'HTML5 / CSS3', 'REST APIs', 'Git', 'MySQL', 'Redux', 'Responsive Design'],
};

// ─── Work Experience ────────────────────────────────────────────────────────

export const EXPERIENCES = [
  {
    role: 'Front End Developer',
    company: 'Balboa Digital Center Services',
    period: 'Jul 2023 - Present',
    duration: '2 years 8 months',
    description: [
      'Maintain and enhance company websites with new features and tools for users.',
      'Collaborate with backend developers on data structure design and API integration.',
      'Work closely with the design team to ensure UI/UX standards and implement pixel-perfect interfaces.',
      'Build and optimize reusable frontend components for scalability.',
    ],
  },
  {
    role: 'Front End Developer',
    company: 'iGen Payment Systems Inc.',
    period: 'Feb 2021 - Jul 2023',
    duration: '2 years 6 months',
    description: [
      'Core developer for flagship platforms including Central.ph and dygenfood.com.',
      'Built secure, maintainable front-end modules for payment systems.',
      'Refactored legacy codebase to modern React standards, improving code quality and maintainability.',
      'Implemented responsive designs and ensured cross-browser compatibility.',
    ],
  },
  {
    role: 'Web Developer / Front End ReactJS',
    company: 'SA Dreamtech Group International Inc.',
    period: 'Dec 2019 - Nov 2020',
    duration: '1 year',
    description: [
      'Translated wireframes and mockups into fully functional, responsive web pages.',
      'Maintained and updated existing company websites.',
      'Developed interactive UI components using React.js.',
    ],
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
    url: 'http://www.central.ph/',
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
