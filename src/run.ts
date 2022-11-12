import { resolve } from "https://deno.land/std@0.150.0/path/win32.ts";

const worker = new Worker(new URL("./worker.ts", import.meta.url).href, { type: "module" });

function wait(worker: Worker) {
    return new Promise((resolve, reject) => {
        worker.addEventListener('message', msg => {
            if(msg.data === 'I died') resolve(void null);
        });
    })
}

wait(worker).then(() => {
    console.log('END')
})

console.log('Start')