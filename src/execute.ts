/// <reference lib="webworker" />

interface DATA {
    body: string,
    methods: Record<string,string>,
    data: unknown[];
}


onmessage = msg => {
    const data: DATA = msg.data;
    const m = Object.fromEntries(Object.entries(data.methods).map(([key, val]) => [key, (Function(`return ${val}`))()]))
    const fn = Function(`return ${data.body}`)();
    let result;
    try {
        result = fn(data.data, m);
        postMessage({
            result
        });
    } catch(e) {
        postMessage({
            error: Deno.inspect(e).split('\n')
        })
    }
}