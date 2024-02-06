import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { CourseProps } from '../types/types';
import { getCourses } from '../services/index';

interface SearchContextProps {
  searchFilter: string;
  setSearchFilter: React.Dispatch<React.SetStateAction<string>>;
  filteredCourses: CourseProps[];
}

const SearchContext = createContext<SearchContextProps | undefined>(undefined);

export const SearchProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [searchFilter, setSearchFilter] = useState<string>('');
  const [courses, setCourses] = useState<CourseProps[] | null>([]);

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

  return <SearchContext.Provider value={{ searchFilter, setSearchFilter, filteredCourses }}>{children}</SearchContext.Provider>;
};

export const useSearch = (): SearchContextProps => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};
