import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { CourseProps } from '../types/types';
import { getCourses } from '../services/index';

interface CheckedFiltersState {
  selections: string[];
}
interface SearchContextProps {
  searchFilter: string;
  setSearchFilter: React.Dispatch<React.SetStateAction<string>>;
  coursesToShow: CourseProps[];
  checkedFilters: CheckedFiltersState; // Cambiado aquí para usar la interfaz CheckedFiltersState
  setCheckedFilters: React.Dispatch<React.SetStateAction<CheckedFiltersState>>; // Cambiado aquí para usar la interfaz CheckedFiltersState
  coursesToShowLength: number;
}

const SearchContext = createContext<SearchContextProps | undefined>(undefined);

export const SearchProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [searchFilter, setSearchFilter] = useState<string>('');
  const [courses, setCourses] = useState<CourseProps[] | null>([]);
  const [checkedFilters, setCheckedFilters] = useState<{ selections: string[] }>({ selections: [] });

  useEffect(() => {
    getCourses().then(([data]) => {
      setCourses(data);
    });
  }, []);

  const filterCoursesBySelections = (courses: CourseProps[]): CourseProps[] => {
    if (!checkedFilters.selections.length) {
      return courses;
    }
    return courses.filter((course) => {
      return checkedFilters.selections.includes(course.modality) || checkedFilters.selections.includes(course.category) || checkedFilters.selections.includes(course.level);
    });
  };

  const filterCoursesBySearch = (courses: CourseProps[]): CourseProps[] => {
    return courses.filter((course) => {
      return course.title.toLowerCase().includes(searchFilter.toLowerCase());
    });
  };

  // Aplicar filtros
  const applyFilters = (courses: CourseProps[]): CourseProps[] => {
    let filtered = filterCoursesBySelections(courses);
    filtered = filterCoursesBySearch(filtered);
    return filtered;
  };

  const coursesToShow = courses ? applyFilters(courses) : [];
  const coursesToShowLength = coursesToShow.length;

  return <SearchContext.Provider value={{ searchFilter, setSearchFilter, coursesToShow, coursesToShowLength, checkedFilters, setCheckedFilters }}>{children}</SearchContext.Provider>;
};

export const useSearch = (): SearchContextProps => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};
