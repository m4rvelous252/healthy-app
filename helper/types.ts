export interface Column {
  id: string;
  imgSrc: string;
  title: string;
  tags: string[];
  date: string;
  time: string;
}

export interface DiaryEntries {
  id: string;
  title: string;
  content: string;
  createdAt: string;
}

export interface MyMeal {
  id: string;
  src: string;
  info: string;
}

export interface Exercise {
  id: string;
  name: string;
  calories: number;
  time: string;
  createdAt: string;
}
