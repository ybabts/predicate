// deno-lint-ignore-file no-namespace

export class Node<T extends keyof structs> {
  constructor(type: T, data: structs[T]) {

  }
  filter() {

  }
}

export class Node_Collection<T> {
  constructor(arr: T[]) {

  }
  async all() {

  }
  async filter(predicate: (value: T, index: number, array: never[]) => boolean) {
    // do the shit
  }
}

import { structs } from "src/api/types.ts";



export function collection<T extends keyof structs>(id: T): structs[T] {

}

const posts = collection('user')

const node = new Node('post')