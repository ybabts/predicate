import * as algo from 't/algorithms/Uint32toUint8Array.ts';
import * as e from 't/endianness.ts';
import * as r from 'bench/random.ts';

const random = r.Uint32();
const randombigint = BigInt(r.Uint32());

Deno.bench({
    name: 'Data View',
    group: 'Uint32 -> Uint8Array',
    fn: () => {
        algo.dataview(random,e.endian.BIG);
    }
});

Deno.bench({
    name: 'Bit Shifting',
    group: 'Uint32 -> Uint8Array',
    fn: () => {
        algo.bitshifting(random, e.endian.BIG);
    }
});

Deno.bench({
    name: 'New Array',
    group: 'Uint32 -> Uint8Array',
    fn: () => {
        algo.newarray(random ,e.endian.BIG);
    }
});

Deno.bench({
    name: 'BigInt Bit Shifting',
    group: 'Uint32 -> Uint8Array',
    fn: () => {
        algo.bigintbitshifting(randombigint, e.endian.BIG);
    }
});