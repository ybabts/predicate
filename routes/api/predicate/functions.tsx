import { Handlers } from "$fresh/server.ts";
import { resolve } from "https://deno.land/std@0.150.0/path/win32.ts";
import { client } from 'src/predicateFunctions.ts';

export const handler: Handlers = {
    GET(req, ctx) {
        const fns = Object.fromEntries(Object.entries(client));
        const exp = []
        const result = [];
        for(const name in fns) {
            const fn = fns[name];
            result.push(`export ${fn.toString()}`);
            exp.push(`${name}: ${fn.toString()}`);
        }
        return new Response(`export default {\n${exp.join('\n')}\n}`+'\n'+result.join('\n'), {
            status: 200,
            headers: {
                'content-type': 'application/x-typescript'
            }
        })
    },
}