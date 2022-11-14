// deno-lint-ignore-file no-namespace
import { types } from 'src/api/typings.td.ts';

class Operation<O extends keyof Collection.operations<any>, P extends Collection.operations<types[any]>[O]> {
  name: O;
  predicate: P;
  constructor(name: O, predicate: P) {
    this.name = name;
    this.predicate = predicate;
  }
  serialize() {
    return {
      name: this.name,
      predicate: this.predicate.toString()
    };
  }
}



namespace Collection {
  export interface operations<T> {
    filter: (entry: T, index: number) => boolean,
    find: (entry: T, index: number) => boolean
  }
}

class Collection<T extends keyof types> {
  operations: Operation<any,any>[] = [];
  variables: Record<string,unknown> = {};
  constructor(type: T) {
    
  }
  addOperation<N extends keyof Collection.operations<T>>(name: N, predicate: Collection.operations<types[T]>[N]) {
    this.operations.push(new Operation(name, predicate));
    return this;
  }
  filter(predicate: Collection.operations<types[T]>['filter']) {
    return this.addOperation('filter', predicate);
  }
  find(predicate: Collection.operations<types[T]>['find']) {
    return this.addOperation('find', predicate);
  }
  pass(variables: Record<string,unknown>) {
    this.variables = {
      ...this.variables,
      ...variables
    }
    return this;
  }
  serialize() {
    return {
      variables: this.variables,
      operations: this.operations.map(v => v.serialize())
    }
  }
  async get() {
    fetch('127.0.0.1', {
      body: JSON.stringify(this.serialize()),
      method: 'POST',
      credentials: 'include'
    })
  }
}

const test = 123

const doc = new Collection('match').pass({ test }).find(v => v.game_mode === 0);

const matches: types['match'][] = [
  {
    game_mode: 1,
    match_id: 515231,
    duration: 5102,
    radiant_win: true,
    players: [
      {
        account_id: 4132412,
        hero: {
          id: 123,
          localized_name: 'bbo',
          attack_type: 'melee',
          name: 'BBBO',
          primary_attr: 'str'
        }
      }
    ]
  },{
    game_mode: 1,
    match_id: 1515125,
    duration: 200,
    radiant_win: true,
    players: [
      {
        account_id: 4132412,
        hero: {
          id: 123,
          localized_name: 'bbo',
          attack_type: 'melee',
          name: 'BBBO',
          primary_attr: 'str'
        }
      }
    ]
  },{
    game_mode: 0,
    match_id: 5655501,
    duration: 1560,
    radiant_win: true,
    players: [
      {
        account_id: 4132412,
        hero: {
          id: 123,
          localized_name: 'bbo',
          attack_type: 'melee',
          name: 'BBBO',
          primary_attr: 'str'
        }
      }
    ]
  }
]

const serial = doc.serialize();

const txt = `${Object.entries(serial.variables).map(v => `const ${v[0]} = ${Deno.inspect(v[1])};`).join('')}return (INPUT) => INPUT${serial.operations.map(v => `.${v.name}(${v.predicate})`).join('')}`;
const fn = Function(txt)();
console.log(serial);

