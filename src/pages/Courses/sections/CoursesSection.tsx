import CourseCard from './CourseCard';
import { CourseProps } from '../../../types/types';

export default function CoursesSection({ courseList }: { courseList: CourseProps[] | null }) {
  if (courseList === null) {
    return null;
  }

  return (
    <>
      {courseList.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </>
  );
}
