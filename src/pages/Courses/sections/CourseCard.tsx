import Button from '../../../components/atoms/Button';
import { CourseProps } from '../../../types/types';
import { CalendarIcon, ChartBarIcon, TagIcon } from '@heroicons/react/24/outline';

export default function CourseCard({ course }: { course: CourseProps | null }) {
  if (course === null) {
    return null;
  }
  return (
    <>
      <div key={course.id} className="py-6 border-b border-gray-200  max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch justify-center w-3/12 max-md:w-full max-md:ml-0">
            <div className="overflow-hidden justify-center items-center border border-gray-200 w-full my-auto rounded-xl border-solid max-md:mt-10">
              <img loading="lazy" srcSet={course.image} className="object-cover object-center w-[215px] h-36 " />
            </div>
          </div>
          <div className="flex flex-col items-stretch w-9/12 ml-5 max-md:w-full max-md:ml-0">
            <span className="items-stretch self-stretch flex grow flex-col max-md:max-w-full max-md:mt-6">
              <div className="text-pink-600 text-sm max-md:max-w-full">{course.location ? `${course.location} - ${course.modality}` : course.modality}</div>
              <div className="text-blue-950 text-xl font-bold mt-3 max-md:max-w-full">{course.title}</div>
              <div className="text-gray-500 text-sm mt-3 max-md:max-w-full">{course.description}</div>
              <div className="items-stretch flex justify-between gap-4 max-md:max-w-full max-md:flex-wrap">
                <div className="justify-end flex grow basis-[0%] flex-col pt-5 items-start max-md:max-w-full">
                  <span className="items-stretch flex gap-2">
                    <ChartBarIcon className=" text-gray-500 aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full" />
                    <div className="text-gray-500 text-sm marker:grow whitespace-nowrap">Nivell {course.level}</div>
                  </span>
                  <span className="items-stretch self-stretch flex justify-between gap-2 mt-2 max-md:max-w-full max-md:flex-wrap">
                    <CalendarIcon className=" text-gray-500 aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full" />{' '}
                    <div className="text-gray-500 text-sm grow max-md:max-w-full">
                      {course.schedule} - Durada: {course.sessions} sessions
                    </div>
                  </span>
                  <span className="bg-gray-100 rounded-md py-1 px-2 flex gap-2 mt-2 max-md:max-w-full max-md:flex-wrap">
                    <TagIcon className=" text-gray-500 aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full" />
                    <div className=" text-gray-500 text-xs max-md:max-w-full">{course.category}</div>
                  </span>
                </div>
                <span className="justify-end items-stretch flex basis-[0%] flex-col">
                  <div className="text-pink-600 text-sm whitespace-nowrap">Places disponibles</div>
                  <Button styles="bg-teal-500 mt-2">Inscriure'm</Button>
                </span>
              </div>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
