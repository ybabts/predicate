export type endian = boolean | undefined;

export const typedArrays = {
    Uint8Array: new Uint8Array(16),
    Uint32Array: new Uint32Array(16)
}
export const dataViews = {
    Uint8Array: new DataView(typedArrays.Uint8Array.buffer),
    Uint32Array: new DataView(typedArrays.Uint32Array.buffer)
}

export * as Uint32 from 't/uint32.ts';
export * as Uint64 from 't/uint64.ts';
export * as Int32 from 't/int32.ts';