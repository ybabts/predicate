import * as e from 't/endianness.ts';
import * as d from 't/dataviews.ts';

export function bitshifting(n: number, endian: e.endian = e.native): Uint8Array {
    
}

export function dataview(n: number, endian: e.endian = e.native): Uint8Array {
    d.dv.Uint8.setInt32(0, n, !!endian);
    return d.ta.Uint8.slice(0,4);
}

export function bigintbitshifting(n: bigint, endian: e.endian = e.native): Uint8Array {
    
}