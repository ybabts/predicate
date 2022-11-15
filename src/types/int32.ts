import * as Int32toUint8Array from 't/algorithms/Int32toUint8Array.ts';
import * as Int32fromUint8Array from 't/algorithms/Uint8ArraytoInt32.ts';
import * as e from 't/endianness.ts';

export const MAX = 2147483647;
export const MIN = -2147483648;
export function fromUint8Array(array: Uint8Array, endian: e.endian = e.native) {
    if(array.length !== 4) throw new RangeError;
    return Int32fromUint8Array.dataview(array, endian);
}
export function toUint8Array(number: number, endian: e.endian = e.native) {
    if(number > MAX) throw new RangeError;
    if(number < MIN) throw new RangeError;
    return Int32toUint8Array.dataview(number, endian);
}