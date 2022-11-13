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
//         }
//       }
//     }
//   }
// }



// Imported via URL and is generated based on the database schema
import ROOT from 'src/api/types.ts';

export namespace Collection {
  export type identifier = string | number;
}

export class Collection {
  identifier: Collection.identifier;
  private static instance_map: Map<Collection.identifier, Collection> = new Map;
  private variables: Record<string, any> = {};
  constructor(identifier: Collection.identifier) {
    this.identifier = identifier;
  }
  static get(identifier: Collection.identifier): Collection {
    if(Collection.instance_map.has(identifier)) return Collection.instance_map.get(identifier)!;
    return new Collection(identifier);
  }
  pass(variables: Record<string, any>) {
    this.variables = {
      ...this.variables,
      variables
    }
    return this;
  }
  async filter(predicate: (document: Document) => boolean): Promise<any> {
    
  }
}

export function collection(identifier: Collection.identifier): Collection {
  return new Collection(identifier);
}

export namespace Document {
  export type identifier = string | number;
}

export class Document {
  identifier: Document.identifier;
  private static instance_map: Map<Document.identifier, Document> = new Map;
  constructor(identifier: Document.identifier) {
    this.identifier = identifier;
  }
  static get(identifier: Document.identifier): Document {
    if(Document.instance_map.has(identifier)) return Document.instance_map.get(identifier)!;
    return new Document(identifier);
  }
}
