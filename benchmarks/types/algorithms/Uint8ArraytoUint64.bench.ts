import * as algo from 't/algorithms/Uint8ArraytoUint64.ts';
import * as e from 't/endianness.ts';
import * as r from 'bench/random.ts';

const random = r.Uint8A(8);

Deno.bench({
    name: 'Data View',
    group: 'Uint8Array -> Uint8A',
    fn: () => {
        algo.dataview(random,e.endian.BIG);
    }
});

Deno.bench({
    name: 'Bit Shifting',
    group: 'Uint8Array -> Uint8A',
    fn: () => {
        algo.bitshifting(random, e.endian.BIG);
    }
});

Deno.bench({
    name: 'New Array',
    group: 'Uint8Array -> Uint8A',
    fn: () => {
        algo.newarray(random ,e.endian.BIG);
    }
});