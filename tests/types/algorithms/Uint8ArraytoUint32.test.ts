import { assertEquals } from "std/testing/asserts.ts";
import * as t from "t/algorithms/Uint8ArraytoUint32.ts";
import * as f from "t/algorithms/Uint32toUint8Array.ts";
import * as e from "t/endianness.ts";

const Uint32 = 966547743;
const Uint8ArrayBig = new Uint8Array([57,156,89,31]);
const Uint8ArrayLittle = new Uint8Array([31,89,156,57]);

Deno.test({
    name: 'Uint8ArraytoUint32.bitshifting.BIG',
    fn: () => assertEquals(t.bitshifting(Uint8ArrayBig, e.endian.BIG), Uint32)
});

Deno.test({
    name: 'Uint8ArraytoUint32.newarray.BIG',
    fn: () => assertEquals(t.newarray(Uint8ArrayBig, e.endian.BIG), Uint32)
});

Deno.test({
    name: 'Uint8ArraytoUint32.dataview.BIG',
    fn: () => assertEquals(t.dataview(Uint8ArrayBig, e.endian.BIG), Uint32)
});

Deno.test({
    name: 'Uint8ArraytoUint32.bitshifting.LITTLE',
    fn: () => assertEquals(t.bitshifting(Uint8ArrayLittle, e.endian.LITTLE), Uint32)
});

Deno.test({
    name: 'Uint8ArraytoUint32.newarray.LITTLE',
    fn: () => assertEquals(t.newarray(Uint8ArrayLittle, e.endian.LITTLE), Uint32)
});

Deno.test({
    name: 'Uint8ArraytoUint32.dataview.LITTLE',
    fn: () => assertEquals(t.dataview(Uint8ArrayLittle, e.endian.LITTLE), Uint32)
});

Deno.test({
    name: 'Uint8ArraytoUint32.bitshifting.reversable',
    fn: () => assertEquals(f.bitshifting(t.bitshifting(Uint8ArrayLittle, e.endian.LITTLE), e.endian.LITTLE), Uint8ArrayLittle)
});

Deno.test({
    name: 'Uint8ArraytoUint32.newarray.reversable',
    fn: () => assertEquals(f.newarray(t.newarray(Uint8ArrayLittle, e.endian.LITTLE), e.endian.LITTLE), Uint8ArrayLittle)
});

Deno.test({
    name: 'Uint8ArraytoUint32.dataview.reversable',
    fn: () => assertEquals(f.dataview(t.dataview(Uint8ArrayLittle, e.endian.LITTLE), e.endian.LITTLE), Uint8ArrayLittle)
});

Deno.test({
    name: 'Uint8ArraytoUint32.bitshifting.interchangeable.newarray',
    fn: () => assertEquals(f.bitshifting(t.newarray(Uint8ArrayLittle, e.endian.LITTLE), e.endian.LITTLE), Uint8ArrayLittle)
});

Deno.test({
    name: 'Uint8ArraytoUint32.bitshifting.interchangeable.dataview',
    fn: () => assertEquals(f.bitshifting(t.dataview(Uint8ArrayLittle, e.endian.LITTLE), e.endian.LITTLE), Uint8ArrayLittle)
});

Deno.test({
    name: 'Uint8ArraytoUint32.newarray.interchangeable.bitshifting',
    fn: () => assertEquals(f.newarray(t.bitshifting(Uint8ArrayLittle, e.endian.LITTLE), e.endian.LITTLE), Uint8ArrayLittle)
});

Deno.test({
    name: 'Uint8ArraytoUint32.newarray.interchangeable.dataview',
    fn: () => assertEquals(f.newarray(t.dataview(Uint8ArrayLittle, e.endian.LITTLE), e.endian.LITTLE), Uint8ArrayLittle)
});

Deno.test({
    name: 'Uint8ArraytoUint32.dataview.interchangeable.bitshifting',
    fn: () => assertEquals(f.dataview(t.bitshifting(Uint8ArrayLittle, e.endian.LITTLE), e.endian.LITTLE), Uint8ArrayLittle)
});

Deno.test({
    name: 'Uint8ArraytoUint32.dataview.interchangeable.newarray',
    fn: () => assertEquals(f.dataview(t.newarray(Uint8ArrayLittle, e.endian.LITTLE), e.endian.LITTLE), Uint8ArrayLittle)
});