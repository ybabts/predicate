import { assertEquals } from "std/testing/asserts.ts";
import * as t from "t/algorithms/Uint32toUint8Array.ts";
import * as f from "t/algorithms/Uint8ArraytoUint32.ts";
import * as e from "t/endianness.ts";

const Uint32 = 966547743;
const Uint8ArrayBig = new Uint8Array([57,156,89,31]);
const Uint8ArrayLittle = new Uint8Array([31,89,156,57]);

Deno.test({
    name: 'Uint32toUint8Array.bitshifting.BIG',
    fn: () => assertEquals(t.bitshifting(Uint32, e.endian.BIG), Uint8ArrayBig)
});

Deno.test({
    name: 'Uint32toUint8Array.newarray.BIG',
    fn: () => assertEquals(t.newarray(Uint32, e.endian.BIG), Uint8ArrayBig)
});

Deno.test({
    name: 'Uint32toUint8Array.dataview.BIG',
    fn: () => assertEquals(t.dataview(Uint32, e.endian.BIG), Uint8ArrayBig)
});

Deno.test({
    name: 'Uint32toUint8Array.bitshifting.LITTLE',
    fn: () => assertEquals(t.bitshifting(Uint32, e.endian.LITTLE), Uint8ArrayLittle)
});

Deno.test({
    name: 'Uint32toUint8Array.newarray.LITTLE',
    fn: () => assertEquals(t.newarray(Uint32, e.endian.LITTLE), Uint8ArrayLittle)
});

Deno.test({
    name: 'Uint32toUint8Array.dataview.LITTLE',
    fn: () => assertEquals(t.dataview(Uint32, e.endian.LITTLE), Uint8ArrayLittle)
});

Deno.test({
    name: 'Uint32toUint8Array.bitshifting.reversable',
    fn: () => assertEquals(f.bitshifting(t.bitshifting(Uint32)), Uint32)
});

Deno.test({
    name: 'Uint32toUint8Array.newarray.reversable',
    fn: () => assertEquals(f.newarray(t.newarray(Uint32)), Uint32)
});

Deno.test({
    name: 'Uint32toUint8Array.dataview.reversable',
    fn: () => assertEquals(f.dataview(t.dataview(Uint32)), Uint32)
});

Deno.test({
    name: 'Uint32toUint8Array.bitshifting.interchangeable.newarray',
    fn: () => assertEquals(f.bitshifting(t.newarray(Uint32)), Uint32)
});

Deno.test({
    name: 'Uint32toUint8Array.bitshifting.interchangeable.dataview',
    fn: () => assertEquals(f.bitshifting(t.dataview(Uint32)), Uint32)
});

Deno.test({
    name: 'Uint32toUint8Array.newarray.interchangeable.bitshifting',
    fn: () => assertEquals(f.newarray(t.bitshifting(Uint32)), Uint32)
});

Deno.test({
    name: 'Uint32toUint8Array.newarray.interchangeable.dataview',
    fn: () => assertEquals(f.newarray(t.dataview(Uint32)), Uint32)
});

Deno.test({
    name: 'Uint32toUint8Array.dataview.interchangeable.bitshifting',
    fn: () => assertEquals(f.dataview(t.bitshifting(Uint32)), Uint32)
});

Deno.test({
    name: 'Uint32toUint8Array.dataview.interchangeable.newarray',
    fn: () => assertEquals(f.dataview(t.newarray(Uint32)), Uint32)
});