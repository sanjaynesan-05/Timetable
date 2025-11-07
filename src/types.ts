export interface Countdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface Exam {
  id: number;
  subject: string;
  date: string;
  time: string;
  session: string;
  fullTime: string;
  type: 'LAB' | 'SEM'; // LAB or SEMESTER exam
  batch?: 1 | 2; // For LAB exams only
}

