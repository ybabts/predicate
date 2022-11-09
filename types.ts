export interface entry {
    id: number,
    name: string,
    age: number,
    fn: 
}

// deno-lint-ignore no-explicit-any
export type predicate = (e: entry) => boolean | any;

export async function get(predicate: predicate): Promise<entry[]> {
    const result = await fetch('http://localhost/', {
        method: 'POST',
        body: predicate.toString()
    });
    return JSON.parse(await (await result.blob()).text());
}