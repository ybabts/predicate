export function int() {
    return (Math.random() * 1000000) | 0;
}

export function bigint() {
    return BigInt((Math.random() * 10000000) | 0);
}

export function Uint8() {
    return Math.abs((Math.random() * 255) | 0);
}

export function Uint32() {
    return Math.abs((Math.random() * 0xFFFFFFFF) | 0);
}

export function Uint64() {
    return crypto.getRandomValues(new BigUint64Array(1))[0];
}

export function Uint8A(length: number) {
    return new Uint8Array(length).fill(Uint8());
}

export function hexToUint8Array(str: string) {
    const sec = str.match(/.{1,2}/g)!.map(v => Number(`0x${v}`));
    return new Array(4 - sec.length).fill(0).concat(sec);
}