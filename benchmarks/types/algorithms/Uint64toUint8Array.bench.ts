import * as algo from 't/algorithms/Uint64toUint8Array.ts';
import * as e from 't/endianness.ts';
import * as r from 'bench/random.ts';

const random = r.Uint64();

Deno.bench({
    name: 'Data View',
    group: 'Uint32 -> Uint8Array',
    fn: () => {
        algo.dataview(random, e.endian.BIG);
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
        algo.newarray(random, e.endian.BIG);
    }
});