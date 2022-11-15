import { bitshifting } from 't/algorithms/Uint8ArraytoUint32.ts';
import { dataview } from 't/algorithms/Uint32toUint8Array.ts';
import * as e from 't/endianness.ts';

export const MAX = 4294967295;
export const MIN = 0;
export function fromUint8Array(array: Uint8Array, endian: e.endian = e.native) {
    if(array.length !== 4) throw new RangeError;
    return bitshifting(array, endian);
}
export function toUint8Array(number: number, endian: e.endian = e.native) {
    if(number > MAX) throw new RangeError;
    if(number < MIN) throw new RangeError;
    return dataview(number, endian);
}