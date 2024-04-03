import {Course} from './app/model/course';

export const COURSES: Course[] = [
  {
    id: 1,
    title: 'Angular Core Deep Dive',
    iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png',
    description: 'A detailed walk-through of the most important part of Angular - the Core and Common modules',
    category: 'INTERMEDIATE',
    lessonsCount: 10
  },
  {
    id: 2,
    title: 'RxJs In Practice Course',
    iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/rxjs-in-practice-course.png',
    description: 'Understand the RxJs Observable pattern, learn the RxJs Operators via practical examples',
    category: 'BEGINNER',
    lessonsCount: 10
  },
  {
    id: 3,
    title: 'NgRx In Depth',
    description: 'Learn the modern Ngrx Ecosystem, including Store, Effects, Router Store, Ngrx Entity, Dev Tools and Schematics.',
    iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-ngrx-course.png',
    category: 'ADVANCED'
  },
  {
    id: 4,
    title: 'Angular for Beginners',
    iconUrl: 'https://angular-academy.s3.amazonaws.com/thumbnails/angular2-for-beginners-small-v2.png',
    description: 'Establish a solid layer of fundamentals, learn what\'s under the hood of Angular',
    category: 'BEGINNER',
    lessonsCount: 10
  },
  {
    id: 5,
    title: 'Angular Security Course',
    description: 'Learn Web Security Fundamentals and apply them to defend an Angular / Node Application from multiple types of attacks.',
    iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/security-cover-small-v2.png',
    category: 'ADVANCED',
    lessonsCount: 11
  },
  {
    id: 6,
    title: 'Angular PWA Course',
    description: '<p class=\'course-description\'>Learn Angular Progressive Web Applications, build the future of the Web Today.',
    iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-pwa-course.png',
    category: 'ADVANCED',
    lessonsCount: 8
  },
  {
    id: 7,
    title: 'Angular Advanced Course',
    description: 'Learn Advanced Angular functionality typically used in Library Development. Advanced Components, Directives, Testing, Npm',
    iconUrl: 'https://angular-academy.s3.amazonaws.com/thumbnails/advanced_angular-small-v3.png',
    category: 'ADVANCED'
  },
  {
    id: 8,
    title: 'Complete Typescript Course',
    description: 'Complete Guide to Typescript From Scratch: Learn the language in-depth and use it to build a Node REST API.',
    iconUrl: 'https://angular-academy.s3.amazonaws.com/thumbnails/typescript-2-small.png',
    category: 'BEGINNER'
  },
  {
    id: 9,
    title: 'Angular Architecture Course',
    description: 'Learn the core RxJs Observable Pattern as well and many other Design Patterns for building Reactive Angular Applications.',
    iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-academy/blog/images/rxjs-reactive-patterns-small.png',
    category: 'BEGINNER'
  },
  {
    id: 10,
    title: 'Angular Material Course',
    iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/material_design.png',
    description: 'Build Applications with the official Angular Widget Library',
    category: 'ADVANCED'
  }
];

export function findCourseById(courseId: number) {
  return COURSES.find(course => course.id === courseId);
}
