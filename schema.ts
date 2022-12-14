export interface schema {
    id: number,
    name: string,
    age: number,
    msg: string
}
// deno-lint-ignore no-explicit-any
export type predicate = (e: schema, m: { getURL: () => string }) => boolean | any;

export async function get(predicate: predicate): Promise<schema[]> {
    const result = await fetch('http://localhost/', {
        method: 'POST',
        body: predicate.toString()
    });
    return JSON.parse(await (await result.blob()).text());
}