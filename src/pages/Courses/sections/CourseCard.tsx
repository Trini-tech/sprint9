import Button from '../../../components/atoms/Button';
import { CourseProps } from '../../../types/types';
import { CalendarIcon, ChartBarIcon, TagIcon } from '@heroicons/react/24/outline';

export default function CourseCard({ course }: { course: CourseProps | null }) {
  if (course === null) {
    return null;
  }

  return (
    <div key={course.id} className="py-6 border-b border-gray-200 max-md:max-w-full">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        {/* Imatge */}
        <div className="flex flex-col items-stretch justify-center w-3/12 max-md:w-full max-md:ml-0">
          <div className="overflow-hidden border border-gray-200 w-full rounded-xl max-md:h-52">
            <img loading="lazy" srcSet={course.image} className="w-full h-full object-cover object-center" />
          </div>
        </div>

        {/* Contingut del curs */}
        <div className="flex flex-col items-stretch w-9/12 ml-5 max-md:w-full max-md:ml-0">
          <span className="flex flex-col grow max-md:max-w-full max-md:mt-6">
            <div className="text-pink-600 text-sm max-md:max-w-full">{course.location ? `${course.location} - ${course.modality}` : course.modality}</div>

            <div className="text-blue-950 text-xl font-bold mt-3 max-md:max-w-full">{course.title}</div>

            <div className="text-gray-500 text-sm mt-3 max-md:max-w-full">{course.description}</div>

            <div className="flex justify-between gap-4 max-md:flex-wrap max-md:max-w-full">
              <div className="flex flex-col grow basis-0 pt-5 items-start max-md:max-w-full">
                <span className="flex gap-2 items-center">
                  <ChartBarIcon className="text-gray-500 w-5 h-5 shrink-0" />
                  <div className="text-gray-500 text-sm whitespace-nowrap">Nivell {course.level}</div>
                </span>

                <span className="flex gap-2 items-center mt-2 max-md:flex-wrap">
                  <CalendarIcon className="text-gray-500 w-5 h-5 shrink-0" />
                  <div className="text-gray-500 text-sm grow max-md:max-w-full">
                    {course.schedule} - Durada: {course.sessions} sessions
                  </div>
                </span>

                <span className="flex gap-2 items-center mt-2 bg-gray-100 rounded-md py-1 px-2 max-md:flex-wrap">
                  <TagIcon className="text-gray-500 w-4 h-4 shrink-0" />
                  <div className="text-gray-500 text-xs max-md:max-w-full">{course.category}</div>
                </span>
              </div>

              <span className="flex flex-col justify-end basis-0 items-stretch">
                <div className="text-pink-600 text-sm whitespace-nowrap">Places disponibles</div>
                <Button styles="bg-teal-500 mt-2">Inscriure'm</Button>
              </span>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}
