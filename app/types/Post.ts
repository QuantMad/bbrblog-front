export interface Post {
  id: number;
  title: string;
  content: string;
  tags: Array<string>;
  created: string;
}

export interface DTO_PostCreate {
  title: string;
  content: string;
  tags: Array<string>;
}