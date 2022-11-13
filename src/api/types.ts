export default interface Root {
  users: User[];
  posts: Post[];
}

interface User {
  id: string;
  name: string;
  age: number;
  posts: Post[];
}

interface Post {
  author: User;
  title: string;
  posted: number;
  content: string;
  views: number;
}