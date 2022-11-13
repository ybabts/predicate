// export default interface Root {
//   users: User[];
//   posts: Post[];
// }

// export interface User {
//   id: string;
//   name: string;
//   age: number;
//   posts: Post[];
// }

// export interface Post {
//   author: User;
//   title: string;
//   posted: number;
//   content: string;
//   views: number;
// }

import { Collection, FakeArray } from "src/api/mod.ts";

export default interface ROOT {
  users: FakeArray<User[]>;
  posts: FakeArray<Post[]>;
}

interface User extends Collection {
  name: string;
  age: number;
}

interface Post extends Collection {
  author: User;
  title: string;
  posted: number;
  content: string;
  views: number;
}