// deno-lint-ignore-file no-namespace

namespace Node {
  export type identifier = string;
  export type data = Record<string, unknown>;
}

import { struct as data_struct, struct_collection as data_struct_collection } from 'src/api/struct.ts';
import { struct as node_struct, struct_collection as node_struct_collection} from 'src/api/nodes.ts';


export class Node<T extends keyof node_struct> {
  identifier: Node.identifier;
  constructor(id: Node.identifier, type: T) {
    this.identifier = id;
  }
  get data(): Promise<node_struct[T]> {
    
  }
}

export class Collection<T extends keyof node_struct_collection> {
  constructor(type: T) {

  }
  async filter(predicate: (node: data_struct[T], index: number) => boolean): Promise<node_struct_collection[T]> {

  }
  async all(): Promise<node_struct_collection[T]> {

  }
  pass(variables: Record<string,unknown>) {
    return this;
  }
}


// Node.prototype.data is a promise that contains the
// data of that node. If the data needs to be accessed
// by the getter which does a fetch request to the server.

const users = await new Collection('user').filter(v => v.age > 21);
const posts = await Promise.all(users.map(v => v.posts.all()));

console.log(posts.flat());