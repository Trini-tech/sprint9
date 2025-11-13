import CourseCard from './CourseCard';
import { CourseProps } from '../../../types/types';

interface CoursesSectionProps {
  courseList: CourseProps[];
}

export default function CoursesSection({ courseList }: CoursesSectionProps) {
  if (!courseList || courseList.length === 0) {
    return <p className="text-center text-gray-500">No courses available</p>;
  }

  return (
    <div className="flex flex-col gap-4">
      {courseList.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}
