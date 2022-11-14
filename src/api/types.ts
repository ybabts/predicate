import { Node, Collection } from 'src/api/mod.ts';

type collect<T> = {
  [P in keyof T]: Array<T[P]>
}

export type node_collection = collect<node_types>;
export type data_collection = collect<data_types>;

export type node_types = {
  user: node_user;
  post: node_post;
}

export type data_types = {
  user: data_user;
  post: data_post;
}

// ---------------------------

interface node_user {
  name: string;
  age: number;
  posts: Collection<'post'>;
}

interface node_post {
  author: Node<'user'>;
  title: string;
  content: string;
}

// ----------------------------

interface data_user {
  name: string;
  age: number;
  posts: data_post[];
}

interface data_post {
  author: data_user;
  title: string;
  content: string;
}