import { Lesson } from './lesson';

export interface Subject {
    id: string;
    name: string;
    teacher: string;
    lessons: Lesson[];
}