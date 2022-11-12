import { Handlers } from "$fresh/server.ts";
import { resolve } from "https://deno.land/std@0.150.0/path/win32.ts";
import { server, client } from 'src/predicateFunctions.ts';

interface entry {
  id: number,
  name: string,
  age: number
}

const fns = Object.fromEntries(Object.entries(server))

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
    async POST(req, ctx) {
      const timeout = 1500;
      const headers = {
        "Content-Type": "application/json"
      }
      const body = await (await req.blob()).text();
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
      return await new Promise((resolve) => {
        setTimeout(() => resolve(new Response(JSON.stringify({
            error: [`request took too long to complete: ${timeout}ms timeout`]
          }), {
            status: 500,
            headers
        })), timeout);
        worker.onerror = e => {
          worker.terminate();
          resolve(new Response(JSON.stringify({
            error: e.message
          }), {
            status: 500,
            headers
          }))
        }
        worker.onmessage = msg => {
          if(msg.data.result) {
            worker.terminate();
            resolve(new Response(JSON.stringify({
                result: msg.data.result
              }), {
                status: 200,
                headers
            }));
          }
          if(msg.data.action && fns[msg.data.action.name]) fns[msg.data.action.name](msg, ENTRIES);
        }
        worker.postMessage({
          body,
          data: ENTRIES,
          methods: Object.fromEntries(Object.entries(client).map(([key, val]) => [key, val.toString()]))
        })
      })
    },
}