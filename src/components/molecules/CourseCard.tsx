import Button from '../atoms/Button';
import { CourseProps } from '../../types/types';
import { ChartBarIcon } from '@heroicons/react/24/outline';
import { CalendarIcon } from '@heroicons/react/24/outline';

export default function CourseCard({ courseList }: { courseList: CourseProps[] | null }) {
  if (courseList === null) {
    return null;
  }
  return (
    <>
      {courseList.map((course) => (
        <div key={course.id} className="py-6 border-b border-gray-200  max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-3/12 max-md:w-full max-md:ml-0">
              <div className="justify-center items-center border border-[color:var(--gray-200,#E5E7EB)] flex flex-col w-full my-auto rounded-xl border-solid max-md:mt-10">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/60a74484ee1a2d0be651e5cf1fae99a10e3706b130207c6492059e1021100a7c?apiKey=f46cbfe603664861b277383241817b92&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/60a74484ee1a2d0be651e5cf1fae99a10e3706b130207c6492059e1021100a7c?apiKey=f46cbfe603664861b277383241817b92&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/60a74484ee1a2d0be651e5cf1fae99a10e3706b130207c6492059e1021100a7c?apiKey=f46cbfe603664861b277383241817b92&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/60a74484ee1a2d0be651e5cf1fae99a10e3706b130207c6492059e1021100a7c?apiKey=f46cbfe603664861b277383241817b92&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/60a74484ee1a2d0be651e5cf1fae99a10e3706b130207c6492059e1021100a7c?apiKey=f46cbfe603664861b277383241817b92&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/60a74484ee1a2d0be651e5cf1fae99a10e3706b130207c6492059e1021100a7c?apiKey=f46cbfe603664861b277383241817b92&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/60a74484ee1a2d0be651e5cf1fae99a10e3706b130207c6492059e1021100a7c?apiKey=f46cbfe603664861b277383241817b92&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/60a74484ee1a2d0be651e5cf1fae99a10e3706b130207c6492059e1021100a7c?apiKey=f46cbfe603664861b277383241817b92&"
                  className="aspect-[1.45] object-contain object-center w-[215px] overflow-hidden"
                />
              </div>
            </div>
            <div className="flex flex-col items-stretch w-9/12 ml-5 max-md:w-full max-md:ml-0">
              <span className="items-stretch self-stretch flex grow flex-col max-md:max-w-full max-md:mt-6">
                <div className="text-pink-600 text-sm leading-5 max-md:max-w-full">{course.location}</div>
                <div className="text-blue-950 text-xl font-bold leading-7 mt-3 max-md:max-w-full">{course.title}</div>
                <div className="text-gray-500 text-sm leading-5 mt-3 max-md:max-w-full">{course.description}</div>
                <div className="items-stretch flex justify-between gap-4 max-md:max-w-full max-md:flex-wrap">
                  <div className="justify-end flex grow basis-[0%] flex-col pt-5 items-start max-md:max-w-full">
                    <span className="items-stretch flex gap-2">
                      <ChartBarIcon className=" text-gray-500 aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full" />
                      <div className="text-gray-500 text-sm leading-5 grow whitespace-nowrap">{course.level}</div>
                    </span>
                    <span className="items-stretch self-stretch flex justify-between gap-2 mt-2 max-md:max-w-full max-md:flex-wrap">
                      <CalendarIcon className=" text-gray-500 aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full" />{' '}
                      <div className="text-gray-500 text-sm leading-5 grow max-md:max-w-full">
                        {course.schedule} - Durada: {course.sessions} sessions
                      </div>
                    </span>
                  </div>
                  <span className="justify-end items-stretch flex basis-[0%] flex-col">
                    <div className="text-pink-600 text-sm leading-5 whitespace-nowrap">Places disponibles</div>
                    <Button styles="bg-teal-500 mt-2">Inscriure'm</Button>
                  </span>
                </div>
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
