import courses from '../data/courses.json';
import { CourseProps } from '../types/types.tsx';

export const getCourses = async (): Promise<[CourseProps[]]> => {
  return [courses as CourseProps[]];
};
