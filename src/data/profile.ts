export type Project = {
  id: string
  title: string
  description: string
  bullets: string[]
  stack: string[]
  link?: string
  github?: string
}

export type SkillGroup = {
  category: string
  skills: string[]
}

export const profile = {
  name: 'Javed Ahmed Baig',
  title: 'Product Engineer',
  email: 'mogaljavedahmedbaig@gmail.com',
  github: 'https://github.com/JavedBaig03',
  linkedin: 'https://linkedin.com/in/javed-ahmed-baig-mogal-aa0757318'
}

export const hero = {
  headline: 'Building Digital Experiences.',
  subheadline: 'Product engineer crafting scalable systems with clean code and creative vision.',
  stats: [
    'React + Spring Boot',
    'Unity + Blender',
    'Systems thinker'
  ]
}

export const about = 
  'I build products with a systems-first mindset. Every feature, interaction, and line of code is optimized for performance and clarity. From full-stack web applications to 3D game prototypes, I focus on architecture that scales and experiences that feel effortless.'

export const projects: Project[] = [
  {
    id: 'car-rental',
    title: 'Car Rental Platform',
    description: 'Solves the problem of manual vehicle booking through a centralized digital platform.',
    bullets: [
      'Full-stack vehicle booking system with authentication',
      'Implemented REST APIs using Spring Boot',
      'Optimized MySQL queries for faster performance',
      'Built responsive UI using React'
    ],
    stack: ['React', 'Spring Boot', 'MySQL'],
    github: 'https://github.com/JavedBaig03',
    link: '#'
  },
  {
    id: 'music-player',
    title: 'Online Music Player',
    description: 'Addresses seamless, cross-device music playback without heavy resource consumption.',
    bullets: [
      'Web-based music player with playlist management',
      'Real-time controls with seamless track switching',
      'Smooth UI state updates minimizing re-renders',
      'Built entirely within the React ecosystem'
    ],
    stack: ['React'],
    github: 'https://github.com/JavedBaig03',
    link: '#'
  },
  {
    id: 'over-steer',
    title: 'Over Steer',
    description: 'Aimed at achieving realistic vehicle physics simulation within custom web-ready tracks.',
    bullets: [
      '3D driving prototype with custom vehicle physics',
      'Built environments optimized for fast rendering',
      'Tuned lighting systems to run smoothly',
      'Developed core physics logic entirely in C#'
    ],
    stack: ['Unity', 'Blender', 'C#'],
    github: 'https://github.com/JavedBaig03'
  },
  {
    id: 'last-light',
    title: 'The Last Light',
    description: 'Experimenting with atmosphere-focused world building and light-based gameplay mechanics.',
    bullets: [
      'Survival horror prototype with torch-based mechanics',
      'Implemented visibility logic to guide player interaction',
      'Built custom procedural scenes and immersive levels',
      'Applied real-time dynamic lighting via Unity'
    ],
    stack: ['Unity', 'Blender', 'C#'],
    github: 'https://github.com/JavedBaig03'
  }
]

export const skillGroups: SkillGroup[] = [
  {
    category: 'Development',
    skills: ['React', 'Java', 'Spring Boot', 'MySQL', 'REST APIs', 'Python', 'C']
  },
  {
    category: 'Game & 3D',
    skills: ['Unity', 'Blender', 'Cinema 4D']
  },
  {
    category: 'Core',
    skills: ['DSA', 'Systems Design']
  }
]
