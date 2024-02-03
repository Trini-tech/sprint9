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
  modality?: string;
  category?: string;
};

export interface CenterList {
  centerType?: string;
  centers: Center[];
}

export interface Center {
  centerName: string;
  address: string;
  openHours: string;
}

export type Activity = {
  id: number;
  date: string;
  hours: string;
  title: string;
  center: string;
};
