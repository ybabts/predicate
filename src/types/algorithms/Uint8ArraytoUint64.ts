import * as e from 't/endianness.ts';
import * as d from 't/dataviews.ts';

export function bitshifting(a: Uint8Array, endian: e.endian = e.native): bigint {
    if(endian) return (BigInt(a[a.length - 8]) << 0n) |
        (BigInt(a[a.length - 7]) << 8n) |
        (BigInt(a[a.length - 6]) << 16n) |
        (BigInt(a[a.length - 5]) << 24n) |
        (BigInt(a[a.length - 4]) << 32n) |
        (BigInt(a[a.length - 3]) << 40n) |
        (BigInt(a[a.length - 2]) << 48n) |
        (BigInt(a[a.length - 1]) << 56n);
    return (BigInt(a[a.length - 8]) << 56n) |
        (BigInt(a[a.length - 7]) << 48n) |
        (BigInt(a[a.length - 6]) << 40n) |
        (BigInt(a[a.length - 5]) << 32n) |
        (BigInt(a[a.length - 4]) << 24n) |
        (BigInt(a[a.length - 3]) << 16n) |
        (BigInt(a[a.length - 2]) << 8n) |
        (BigInt(a[a.length - 1]) << 0n);
}

export function dataview(a: Uint8Array, endian: e.endian = e.native): bigint {
    d.ta.Uint8.set(a);
    return d.dv.Uint8.getBigUint64(0, !!endian);
}

export function newarray(a: Uint8Array, endian: e.endian = e.native): bigint {
    return new BigUint64Array((endian !== e.native ? a.slice().reverse() : a).buffer, a.byteOffset, a.byteLength / 8)[0];
}