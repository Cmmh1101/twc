export interface Resource {
  resources: Resources[];
}

export interface Resources {
  books: ResourceData[];
  courses: ResourceData[];
  tutorials: ResourceData[];
  podcasts: ResourceData[];
  websites: ResourceData[];
}

export interface ResourceData {
  title?: string;
  url?: string;
  description?: string;
  tag?: string;
  category?: string;
  author?: string;
}