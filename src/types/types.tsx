export type Filter = {
  title: string;
  types: string[];
};

export type CourseProps = {
  id: number;
  location: string;
  title: string;
  description: string;
  level: string;
  schedule: string;
  sessions: string;
  availability: boolean;
  img?: string;
};
