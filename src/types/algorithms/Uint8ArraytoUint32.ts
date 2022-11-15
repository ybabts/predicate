import * as e from 't/endianness.ts';
import * as d from 't/dataviews.ts';

export function bitshifting(a: Uint8Array, endian: e.endian = e.native): number {
    if(endian) return ((a[a.length - 4] << 0) | 
        (a[a.length - 3] << 8) | 
        (a[a.length - 2] << 16) | 
        (a[a.length - 1] << 24)) >>> 0;
    return ((a[a.length - 4] << 24) | 
        (a[a.length - 3] << 16) | 
        (a[a.length - 2] << 8) | 
        (a[a.length - 1] << 0)) >>> 0;
}

export function dataview(a: Uint8Array, endian: e.endian = e.native): number {
    d.ta.Uint8.set(a);
    return d.dv.Uint8.getUint32(0, !!endian);
}

export function newarray(a: Uint8Array, endian: e.endian = e.native): number {
    return new Uint32Array((endian !== e.native ? a.slice().reverse() : a).buffer, a.byteOffset, a.byteLength / 4)[0];
}