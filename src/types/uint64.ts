import * as Uint64toUint8Array from 't/algorithms/Uint64toUint8Array.ts';
import * as Uint8ArraytoUint64 from 't/algorithms/Uint8ArraytoUint64.ts';
import * as e from 't/endianness.ts';

export const MAX = 18446744073709551615n;
export const MIN = 0n;

export function fromUint8Array(array: Uint8Array, endian: e.endian = e.native): bigint {
    if(array.length !== 4) throw new RangeError;
    return Uint8ArraytoUint64.dataview(array, endian);
}
export function toUint8Array(number: bigint, endian: e.endian = e.native): Uint8Array {
    if(number > MAX) throw new RangeError;
    if(number < MIN) throw new RangeError;
    return Uint64toUint8Array.dataview(number, endian);
}