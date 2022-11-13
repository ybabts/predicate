// deno-lint-ignore-file no-namespace


// export function collection(id: string) {
//   return {
//     pass: (vars: Record<string, any>) => {
//       const variables = Object.entries(vars).map(v => `const ${v[0]} = ${Deno.inspect(v[1])};`).join('\n');
//       return {
//         filter: async (predicate: (entry: Record<string,any>) => boolean) => {
//           const result = await fetch('http://localhost:2150/', {
//             method: 'POST',
//             body: JSON.stringify({
//               collection: id,
//               call: 'collection_filter',
//               variables,
//               predicate: `return ${predicate.toString()}`
//             })
//           });
//           return JSON.parse(await (await result.blob()).text());
//         }()
//       }
//     }
//   }
// }



// Imported via URL and is generated based on the database schema
import ROOT from 'src/api/types.ts';

export function collection<I extends keyof P, P extends ROOT>(identifier: I): P[I] {
  
}

export class Collection {
  identifier: string;
  data: Record<string,unknown>;
  constructor(identifier: string, data?: Record<string,unknown>) {
    this.identifier = identifier;
    this.data = data ? data : {};
  }
  write() {

  }
}

export class FakeArray<T extends Array<any>> {
  constructor(arr: T) {
    
  }
  filter(predicate: (e: string) => boolean) {

  }
  pass(variables: Record<string, any>) {
    return this;
  }
}

collection('posts').pass({}).filter(e => true)