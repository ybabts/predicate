type collect<T> = {
  [P in keyof T]: Array<T[P]>
}

export type struct_collection = collect<struct>;

export interface struct {
  user: user;
  post: post;
}

interface user {
  name: string;
  age: number;
  posts: post[];
}

interface post {
  author: user;
  title: string;
  content: string;
}