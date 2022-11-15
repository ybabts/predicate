import { assertEquals } from "std/testing/asserts.ts";
import * as t from "t/algorithms/Uint64toUint8Array.ts";
import * as f from "t/algorithms/Uint8ArraytoUint64.ts";
import * as e from "t/endianness.ts";

const Uint64 = 9665477445641651563n;
const Uint8ArrayBig = new Uint8Array([134,34,172,134,228,5,69,107]);
const Uint8ArrayLittle = new Uint8Array([107,69,5,228,134,172,34,134]);

Deno.test({
    name: 'Uint64toUint8Array.bitshifting.BIG',
    fn: () => assertEquals(t.bitshifting(Uint64, e.endian.BIG), Uint8ArrayBig)
});

Deno.test({
    name: 'Uint64toUint8Array.newarray.BIG',
    fn: () => assertEquals(t.newarray(Uint64, e.endian.BIG), Uint8ArrayBig)
});

Deno.test({
    name: 'Uint64toUint8Array.dataview.BIG',
    fn: () => assertEquals(t.dataview(Uint64, e.endian.BIG), Uint8ArrayBig)
});

Deno.test({
    name: 'Uint64toUint8Array.bitshifting.LITTLE',
    fn: () => assertEquals(t.bitshifting(Uint64, e.endian.LITTLE), Uint8ArrayLittle)
});

Deno.test({
    name: 'Uint64toUint8Array.newarray.LITTLE',
    fn: () => assertEquals(t.newarray(Uint64, e.endian.LITTLE), Uint8ArrayLittle)
});

Deno.test({
    name: 'Uint64toUint8Array.dataview.LITTLE',
    fn: () => assertEquals(t.dataview(Uint64, e.endian.LITTLE), Uint8ArrayLittle)
});

Deno.test({
    name: 'Uint64toUint8Array.bitshifting.reversable',
    fn: () => assertEquals(f.bitshifting(t.bitshifting(Uint64)), Uint64)
});

Deno.test({
    name: 'Uint64toUint8Array.newarray.reversable',
    fn: () => assertEquals(f.newarray(t.newarray(Uint64)), Uint64)
});

Deno.test({
    name: 'Uint64toUint8Array.dataview.reversable',
    fn: () => assertEquals(f.dataview(t.dataview(Uint64)), Uint64)
});

Deno.test({
    name: 'Uint64toUint8Array.bitshifting.interchangeable.newarray',
    fn: () => assertEquals(f.bitshifting(t.newarray(Uint64)), Uint64)
});

Deno.test({
    name: 'Uint64toUint8Array.bitshifting.interchangeable.dataview',
    fn: () => assertEquals(f.bitshifting(t.dataview(Uint64)), Uint64)
});

Deno.test({
    name: 'Uint64toUint8Array.newarray.interchangeable.bitshifting',
    fn: () => assertEquals(f.newarray(t.bitshifting(Uint64)), Uint64)
});

Deno.test({
    name: 'Uint64toUint8Array.newarray.interchangeable.dataview',
    fn: () => assertEquals(f.newarray(t.dataview(Uint64)), Uint64)
});

Deno.test({
    name: 'Uint64toUint8Array.dataview.interchangeable.bitshifting',
    fn: () => assertEquals(f.dataview(t.bitshifting(Uint64)), Uint64)
});

Deno.test({
    name: 'Uint64toUint8Array.dataview.interchangeable.newarray',
    fn: () => assertEquals(f.dataview(t.newarray(Uint64)), Uint64)
});