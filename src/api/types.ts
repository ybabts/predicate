// deno-lint-ignore-file no-empty-interface no-namespace

import { Node, Node_Collection } from 'src/api/mod.ts';

type node<T> = {
  [P in keyof T]: Promise<T[P]>
}

type collection<T> = {
  [P in keyof T]: Array<T[P]>
}

export type structs = {
  user: user;
  post: post;
}

interface user {
  name: string;
  age: number;
  posts: post[];
}
interface post {
  title: string;
  author: user;
  content: string;
}

