const x = 8;

export const ta = {
    Uint8: new Uint8Array(x),
    Uint16: new Uint16Array(x / 2),
    Uint32: new Uint32Array(x / 4),
    Uint64: new BigUint64Array(x / 8)
}

export const dv = {
    Uint8: new DataView(ta.Uint8.buffer),
    Uint16: new DataView(ta.Uint16.buffer),
    Uint32: new DataView(ta.Uint32.buffer),
    Uint64: new DataView(ta.Uint64.buffer)
}