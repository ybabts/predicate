import * as e from 't/endianness.ts';
import * as d from 't/dataviews.ts';

export function bitshifting(n: bigint, endian: e.endian = e.native): Uint8Array {
    if(endian) return new Uint8Array([
        Number((n & 0x00000000000000ffn) >> 0n),
        Number((n & 0x000000000000ff00n) >> 8n),
        Number((n & 0x0000000000ff0000n) >> 16n),
        Number((n & 0x00000000ff000000n) >> 24n),
        Number((n & 0x000000ff00000000n) >> 32n),
        Number((n & 0x0000ff0000000000n) >> 40n),
        Number((n & 0x00ff000000000000n) >> 48n),
        Number((n & 0xff00000000000000n) >> 56n)
    ]);
    return new Uint8Array([
        Number((n & 0xff00000000000000n) >> 56n),
        Number((n & 0x00ff000000000000n) >> 48n),
        Number((n & 0x0000ff0000000000n) >> 40n),
        Number((n & 0x000000ff00000000n) >> 32n),
        Number((n & 0x00000000ff000000n) >> 24n),
        Number((n & 0x0000000000ff0000n) >> 16n),
        Number((n & 0x000000000000ff00n) >> 8n),
        Number((n & 0x00000000000000ffn) >> 0n),
    ]);
}

export function dataview(n: bigint, endian: e.endian = e.native): Uint8Array {
    d.dv.Uint8.setBigUint64(0, n, !!endian);
    return d.ta.Uint8.slice(0,8);
}

export function newarray(n: bigint, endian: e.endian = e.native): Uint8Array {
    const a = new BigUint64Array([n]);
    const result = new Uint8Array(a.buffer, a.byteOffset, a.byteLength);
    return endian !== e.native ? result.reverse() : result;
}