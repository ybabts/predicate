import * as e from 't/endianness.ts';
import * as d from 't/dataviews.ts';

export function bitshifting(a: Uint8Array, endian: e.endian = e.native): number {
    
}

export function dataview(a: Uint8Array, endian: e.endian = e.native): number {
  d.ta.Uint8.set(a);
  return d.dv.Uint8.getInt32(0, !!endian);
}