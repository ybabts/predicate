import { Handlers } from "$fresh/server.ts";
import * as predicat from 'src/api/mod.ts';

export const handler: Handlers = {
  GET(req, ctx) {
    const url = new URL(req.url);
    const query = url.searchParams.get("name") || "";
    const result = predicat.collection('users').filter(user => user.displayName.includes(query));
    return new Response()
  }
}