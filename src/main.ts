
const server = Deno.listen({ port: 2150 });
console.log(`HTTP webserver running.  Access it at:  http://localhost:2150/`);

interface RemoteRequest {
  collection: string,
  call: string,
  variables: string,
  predicate: string
}

const COLLECTION: Record<string,any[]> = {
  users: [
    {
      id: 515,
      name: 'Bob Hohem',
      age: 32
    },
    {
        id: 51,
        name: 'George Floyd',
        age: 21
    },
    {
        id: 896,
        name: 'Robert Daniro',
        age: 69
    },
    {
        id: 200,
        name: 'Phil Castro',
        age: 13
    },
    {
        id: 5,
        name: 'Tommy Bobbins',
        age: 50
    }
  ]
}

for await (const conn of server) {
  serveHttp(conn);
}


async function serveHttp(conn: Deno.Conn) {
  const httpConn = Deno.serveHttp(conn);
  for await (const requestEvent of httpConn) {
    const data: RemoteRequest = JSON.parse(await (await (requestEvent.request.blob())).text());
    if(data.call === 'collection_filter') {
      if(COLLECTION[data.collection]) {
        const fn = Function(data.variables + data.predicate)();
        const result = COLLECTION[data.collection].filter(fn);
        requestEvent.respondWith(new Response(JSON.stringify({ result }), {
          status: 200,
          headers: {
            'Content-Type': 'application/json'
          }
        }))
      }
    }
  }
}