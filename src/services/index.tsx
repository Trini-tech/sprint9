import { supabase } from './supabase.ts';
import { CourseProps } from '../types/types.tsx';

export const getCourses = async () => {
  const { data }: { data: CourseProps[] | null } = await supabase.from('courses').select(`*`);
  console.log(data);
  return [data];
};
