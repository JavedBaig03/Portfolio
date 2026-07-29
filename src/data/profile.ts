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
  headline: 'Engineering Scalable Digital Products',
  subheadline: 'Product-focused engineer specializing in full-stack web applications and interactive 3D experiences.',
  stats: [
    'React + Spring Boot',
    'Flutter + Firebase',
    'Systems Architecture'
  ]
}

export const about = 
  'I approach product development with a systems-first mindset — every feature, interaction, and architectural decision is optimized for performance and long-term scalability. From full-stack web applications to cross-platform mobile apps and real-time 3D environments, I focus on building solutions that are both technically robust and intuitive to use.'

export const projects: Project[] = [
  {
    id: 'furniture-cms',
    title: 'Luxury Furniture Platform',
    description: 'A modern furniture e-commerce platform featuring a built-in live CMS that enables administrators to customize content visually — without touching code.',
    bullets: [
      'Engineered a luxury landing page with GSAP-powered 3D scroll animations for a premium experience',
      'Built a real-time visual CMS allowing admins to edit text, colors, typography, and layouts directly on-page',
      'Implemented Firebase Authentication with role-based access control for secure admin workflows',
      'Developed a product catalog editor with Cloud Firestore, enabling real-time updates across all clients'
    ],
    stack: ['React 19', 'TypeScript', 'Vite', 'Firebase', 'GSAP', 'CSS3'],
    github: 'https://github.com/JavedBaig03'
  },
  {
    id: 'jewellery-system',
    title: 'Jewellery Management System',
    description: 'A multi-admin inventory and reservation platform designed for jewellery retailers to digitize stock management and customer workflows.',
    bullets: [
      'Architected a multi-admin authentication system with Firebase for concurrent store management',
      'Built real-time inventory tracking with Firestore, supporting live gold and silver price updates',
      'Designed a customer reservation workflow with status tracking and automated notifications',
      'Developed a responsive interface optimized for both desktop counter use and mobile access'
    ],
    stack: ['React', 'Firebase Auth', 'Firestore'],
    github: 'https://github.com/JavedBaig03'
  },
  {
    id: 'car-rental',
    title: 'Car Rental Platform',
    description: 'A full-stack vehicle rental application with secure booking, search and filter capabilities, and a dedicated admin dashboard for fleet management.',
    bullets: [
      'Engineered end-to-end booking system with user authentication and role-based access',
      'Designed RESTful API layer using Spring Boot with OOP-driven models for Car, User, Booking, and Payment',
      'Optimized MySQL query performance through indexing, joins, and efficient collection handling',
      'Built a responsive React frontend with vehicle search, filtering, and booking history views'
    ],
    stack: ['React', 'Spring Boot', 'MySQL', 'REST APIs'],
    github: 'https://github.com/JavedBaig03',
    link: '#'
  },
  {
    id: 'chancly',
    title: 'Chancly — Decision Making App',
    description: 'A cross-platform Flutter application that helps users make unbiased decisions through randomization tools — combining multiple utilities into a single, polished interface.',
    bullets: [
      'Built interactive randomization tools including coin flip, dice roller, and custom number generator',
      'Developed animated name and number wheels with smooth spinning animations and dynamic selections',
      'Implemented customizable thresholds and user-defined inputs for flexible decision-making scenarios',
      'Delivered a responsive cross-platform experience on both iOS and Android using Flutter and Dart'
    ],
    stack: ['Flutter', 'Dart'],
    github: 'https://github.com/JavedBaig03'
  }
]

export const skillGroups: SkillGroup[] = [
  {
    category: 'Development',
    skills: ['React', 'TypeScript', 'Spring Boot', 'MySQL', 'REST APIs', 'Python', 'Java']
  },
  {
    category: 'Mobile & 3D',
    skills: ['Flutter', 'Dart', 'Unity', 'Blender']
  },
  {
    category: 'Cloud & Core',
    skills: ['Firebase', 'DSA', 'Systems Design']
  }
]
