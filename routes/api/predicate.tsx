import { Handlers } from "$fresh/server.ts";
import { resolve } from "https://deno.land/std@0.150.0/path/win32.ts";

interface entry {
  id: number,
  name: string,
  age: number
}

const ENTRIES: entry[] = [
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

export const handler: Handlers = {
    GET(req, ctx) {
      const url = new URL(req.url)
      const query = url.searchParams.get('q') || ''
      const results = ENTRIES.filter((name) => name.name.includes(query))
      return new Response(JSON.stringify(results), {
        headers: {
            "Content-Type": "application/json"
        }
      })
    },
    POST(req, ctx): Promise<Response> {
      return new Promise((resolve, reject) => {
        req.blob().then(blob => {
          blob.text().then(body => {
            const worker = new Worker(new URL('../../src/execute.ts', import.meta.url).href, {
              type: 'module',
              deno: {
                permissions: {
                  env: false,
                  ffi: false,
                  hrtime: false,
                  net: false,
                  read: false,
                  run: false,
                  sys: false,
                  write: false
                }
              }
            });
            worker.onerror = e => {
                resolve(new Response(JSON.stringify({
                  error: e.message
                }), {
                  status: 500,
                  headers: {
                    "Content-Type": "application/json"
                  }
                }))
            }
            worker.onmessage = msg => {
              resolve(new Response(JSON.stringify({
                result: msg.data
              }), {
                  status: 200,
                  headers: {
                    "Content-Type": "application/json"
                  }
              }))
            }
            worker.postMessage({
              body,
              data: ENTRIES,
              methods: {
                testing: (() => 'Hello World!').toString(),
                name: ((name: string) => `My name is ${name}.`).toString()
              }
            });
            setTimeout(() => {
              resolve(new Response(JSON.stringify({
                error: 'request took too long to complete: 1500ms'
              }), {
                  status: 500,
                  headers: {
                    "Content-Type": "application/json"
                  }
              }))
            }, 1500);
          })
        })
      })
    },
}