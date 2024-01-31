import FiltersSection from './sections/FiltersSection';
/* import Pagination from '../../components/atoms/Pagination';*/
import CoursesHeading from './sections/CoursesHeading';
import { getCourses } from '../../services';
import { useState, useEffect } from 'react';
import { CourseProps } from '../../types/types';
import CoursesSection from './sections/CoursesSection';
import courseFilters from '../../data/courseFilters.json';
import { useSearch } from '../../context/SearchContext';

export default function Cursospage() {
  const [courses, setCourses] = useState<CourseProps[] | null>([]);
  const { searchFilter } = useSearch();
  useEffect(() => {
    getCourses().then(([data]) => {
      setCourses(data);
    });
  }, []);

  const filteredCourses =
    courses && typeof searchFilter === 'string' && searchFilter.length > 0
      ? courses.filter((course) => {
          return course.title.toLowerCase().includes(searchFilter.toLowerCase());
        })
      : courses || [];

  return (
    <div className="w-full mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="justify-center items-center flex w-full flex-col pb-10 max-md:max-w-full max-md:px-5">
        <div className="flex w-full flex-col items-stretch max-md:max-w-full">
          <div className="pb-10 max-md:max-w-full">
            <div className=" flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="hidden lg:flex flex-col items-stretch w-[28%] max-md:w-full">
                <FiltersSection courseFilters={courseFilters} />
              </div>
              <div className="flex flex-col items-stretch w-full lg:w-[72%]">
                <span className="items-stretch self-stretch flex grow flex-col py-10 max-md:max-w-full">
                  <CoursesHeading />
                  <CoursesSection courseList={filteredCourses} />
                </span>
              </div>
            </div>
          </div>
          {/* <Pagination /> */}
        </div>
      </div>
    </div>
  );
}
