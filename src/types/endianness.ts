/** @description BIG = 0 and LITTLE = 1 */
export enum endian {
    BIG = 0,
    LITTLE = 1
}

/** @description Uses enum "endian", BIG = 0 and LITTLE = 1 */
export const native = getNative();

export function getNative() {
    const a = new ArrayBuffer(4);
    const b = new Uint32Array(a);
    const c = new Uint8Array(a);
    b[0] = 0x12345678;
    if(c[0] === 0x78) return endian.LITTLE;
    if(c[0] === 0x12) return endian.BIG;
    throw new Error('Unknown Endianness! Are you on a quantum computer?');
}
