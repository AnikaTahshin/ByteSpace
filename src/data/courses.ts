export interface Course {
  slug: string
  title: string
  image: string
  author: string
  rating: number
  reviews: string
  students: string
  level: string
  price: number
  note: string
}

export const COURSES: Course[] = [
  {
    slug: 'learn-figma-from-basic',
    title: 'Learn Figma from Basic',
    image: '/assets/images/courses/course_1.png',
    author: 'popupart studio',
    rating: 4.5,
    reviews: '1,173',
    students: '399',
    level: 'Beginner',
    price: 25,
    note: 'Lifetime',
  },
  {
    slug: 'build-digital-asset',
    title: 'Build Digital Asset',
    image: '/assets/images/courses/course_2.png',
    author: 'popupart studio',
    rating: 4.8,
    reviews: '1,173',
    students: '399',
    level: 'Intermediate',
    price: 25,
    note: 'Lifetime',
  },
  {
    slug: 'the-power-of-big-data',
    title: 'The Power of Big Data',
    image: '/assets/images/courses/course_3.png',
    author: 'popupart studio',
    rating: 4.5,
    reviews: '986',
    students: '354',
    level: 'Intermediate',
    price: 25,
    note: 'Lifetime',
  },
  {
    slug: 'balancing-productivity-and-life',
    title: 'Balancing Productivity and Life',
    image: '/assets/images/courses/course_4.png',
    author: 'popupart studio',
    rating: 4.6,
    reviews: '1,024',
    students: '412',
    level: 'Beginner',
    price: 25,
    note: 'Lifetime',
  },
  {
    slug: 'mastering-money-management',
    title: 'Mastering Money Management',
    image: '/assets/images/courses/course_5.png',
    author: 'popupart studio',
    rating: 4.7,
    reviews: '1,540',
    students: '468',
    level: 'Beginner',
    price: 25,
    note: 'Lifetime',
  },
  {
    slug: 'from-idea-to-startup-success',
    title: 'From Idea to Startup Success',
    image: '/assets/images/courses/course_6.png',
    author: 'popupart studio',
    rating: 4.8,
    reviews: '1,301',
    students: '437',
    level: 'Intermediate',
    price: 25,
    note: 'Lifetime',
  },
]

export const LESSONS = [
  { name: 'Introduction to Digital Creation', duration: '12 mins' },
  { name: 'Design Principles for Digital Creation', duration: '13 mins' },
  { name: 'Advanced Techniques in Digital Creation', duration: '16 mins' },
]

export const COURSE_INCLUDES = [
  { icon: '/assets/images/courses/resources.png', label: 'Learning Resources' },
  { icon: '/assets/images/courses/video.png', label: 'Daily Live Meetings' },
  { icon: '/assets/images/courses/certificate.png', label: 'Certificate of Completion' },
  { icon: '/assets/images/courses/consultation.png', label: 'Private Consultation' },
]

export const KEY_POINTS = [
  'Foundational Concepts',
  'Design Principles Mastery',
  'Advanced Techniques in Digital Creation',
  'Project Showcases and Critiques',
  'Implementing in Various Platforms',
  'Digital Asset Management Best Practices',
  'monitization Strategies',
  'Capstone Project: Building Your Portfolio',
]

export function descriptionFor(course: Course): string[] {
  const t = course.title
  return [
    `Embark on an enlightening exploration into the world of digital creation with our comprehensive course, "${t}." This transformative learning experience unites with the skills needed to navigate the ever-evolving digital landscape. From fundamentals to advanced techniques, this course is designed to empower you with the knowledge and skills essential for navigating the dynamic landscape of digital asset creation.`,

    `In the initial modules, you'll establish a solid foundation by delving into the foundational concepts of digital asset creation from the basics of digital asset creation. Understanding the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate your ideas effectively.`,

    `As you progress through the course, you'll delve into higher levels of expertise, diving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply theoretical knowledge to practical scenarios.`,
  ]
}

export function getCourseBySlug(slug: string): Course | undefined {
  return COURSES.find((course) => course.slug === slug)
}
