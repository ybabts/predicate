interface entry {
    id: number,
    name: string,
    age: number
}

function execute(entries: entry[], predicate: string) {
    const modified: entry[] = [];
    return entries.filter((v,i) => {
        const test = Function(`let Deno; let window; let Function; let fetch; return (${predicate}).bind({})`)()(v);
        if(typeof test === 'boolean') return test;
        if(typeof test === 'object') {
            entries[i] = test;
            modified.push(entries[i])
        }
        return undefined;
    }).filter(v => v !== undefined).concat(modified);
}

// Start listening on port 8080 of localhost.
const server = Deno.listen({ port: 80 });
console.log(`HTTP webserver running.  Access it at:  http://localhost:8080/`);

const entries = [
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

// Connections to the server will be yielded up as an async iterable.
for await (const conn of server) {
  // In order to not be blocking, we need to handle each connection individually
  // without awaiting the function
  serveHttp(conn);
}


async function serveHttp(conn: Deno.Conn) {
  // This "upgrades" a network connection into an HTTP connection.
  const httpConn = Deno.serveHttp(conn);
  // Each request sent over the HTTP connection will be yielded as an async
  // iterator from the HTTP connection.
  for await (const requestEvent of httpConn) {
    // The native HTTP server uses the web standard `Request` and `Response`
    // objects.
    if(requestEvent.request.method === 'POST') {
        const predicateString = await requestEvent.request.blob();
        try {
            const result = execute(entries, await predicateString.text());
            const body = JSON.stringify(result);
            // The requestEvent's `.respondWith()` method is how we send the response
            // back to the client.
            requestEvent.respondWith(
                new Response(body, {
                    status: 200,
                    headers: {
                        'content-type': 'application/json'
                    }
                }),
            );
        } catch(e) {
            requestEvent.respondWith(
                new Response(e, {
                    status: 400
                })
            )
        }
    }
    if(requestEvent.request.method === 'GET') {
        const types = await Deno.open('./types.ts');
        requestEvent.respondWith(new Response(types.readable, {
            status: 200,
            headers: {
                'content-type': 'application/x-typescript'
            }
        }))
    }
  }
}