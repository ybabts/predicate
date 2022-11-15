import * as e from 't/endianness.ts';
import * as d from 't/dataviews.ts';

export function bitshifting(n: number, endian: e.endian = e.native): Uint8Array {
  return new Uint8Array([
    (n & 0xff000000) >> 24,
    (n & 0x00ff0000) >> 16,
    (n & 0x0000ff00) >> 8,
    (n & 0x000000ff) >> 0
  ]);
}

export function dataview(n: number, endian: e.endian = e.native): Uint8Array {
  d.dv.Uint8.setInt32(0, n, !!endian);
  return d.ta.Uint8.slice(0,4);
}
