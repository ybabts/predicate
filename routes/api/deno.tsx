import { Handlers } from "$fresh/server.ts";
import * as denoutil from "src/util/deno.ts";

export const handler: Handlers = {
  async GET(req, ctx) {
    if(denoutil.isUserAgentDeno(req.headers.get('user-agent')!)) {
      const file = await Deno.open('./src/api/mod.ts');
      return new Response(file.readable, {
        headers: {
          'Content-Type': 'application/x-typescript'
        }
      })
    }
    
    return new Response(null, {
      status: 404
    })
  }
}