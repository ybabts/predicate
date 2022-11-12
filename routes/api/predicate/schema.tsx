import { Handlers } from "$fresh/server.ts";

async function get() {
    const result = await fetch('http://localhost:8000/api/predicate', {
        method: 'POST',
        body: 'e => e'
    });
    return JSON.parse(await (await result.blob()).text())
}

export const handler: Handlers = {
    async GET(req, ctx) {
        const result = Object.values((await get()).result);
        const types: Record<string,string[]> = {}
        for(const entry of result) {
            const entries = Object.entries(entry!);
            for(const [key, value] of entries) {
                if(types[key] === undefined) types[key] = [];
                if(!types[key].includes(typeof value)) types[key].push(typeof value);
            }
        }
        return new Response(`export default interface ENTRY {\n${
            (() => {
                const result = Object.entries(types).map((v) => `    ${v[0]}: ${v[1].join(' | ')},`).join('\n');
                return result;
            })()
        }\n}`, {
            status: 200,
            headers: {
                'content-type': 'application/x-typescript'
            }
        })
    },
}