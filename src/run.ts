import methods from 'http://localhost:8000/api/predicate/functions'
import schema from 'http://localhost:8000/api/predicate/schema';

const METHODS = Object.assign({}, methods);

async function get(fn: (e: schema[], m: typeof METHODS) => any) {
    const result = await fetch('http://localhost:8000/api/predicate', {
        method: 'POST',
        body: fn.toString()
    })
    return JSON.parse(await (await result.blob()).text());
}

console.log(await get((e,m) => {
    return e.map((v,i) => {
        return v.
    })
}))