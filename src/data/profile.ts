export type Project = {
  id: string
  title: string
  description: string
  stack: string[]
  link?: string
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
    description: 'Full-stack vehicle booking system with authentication, REST APIs, and optimized database queries.',
    stack: ['React', 'Spring Boot', 'MySQL']
  },
  {
    id: 'music-player',
    title: 'Online Music Player',
    description: 'Web-based music player with playlist management, real-time controls, and smooth UI state updates.',
    stack: ['React']
  },
  {
    id: 'over-steer',
    title: 'Over Steer',
    description: '3D driving prototype with custom environments, vehicle physics, and optimized lighting systems.',
    stack: ['Unity', 'Blender', 'C#']
  },
  {
    id: 'last-light',
    title: 'The Last Light',
    description: 'Survival horror prototype with torch-based mechanics and atmosphere-focused world building.',
    stack: ['Unity', 'Blender', 'C#']
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
