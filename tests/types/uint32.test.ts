import * as uint32 from 't/uint32.ts';
import { assertEquals, fail } from "std/testing/asserts.ts";
import * as e from 't/endianness.ts'

const Uint32 = 966547743;
const Uint8ArrayBig = new Uint8Array([57,156,89,31]);
const Uint8ArrayLittle = new Uint8Array([31,89,156,57]);

Deno.test({
    name: 'Uint32.toUint8Array.BIG',
    fn: () => assertEquals(uint32.toUint8Array(Uint32, e.endian.BIG), Uint8ArrayBig)
});

Deno.test({
    name: 'Uint32.toUint8Array.LITTLE',
    fn: () => assertEquals(uint32.toUint8Array(Uint32, e.endian.LITTLE), Uint8ArrayLittle)
});

Deno.test({
    name: 'Uint32.fromUint8Array.BIG',
    fn: () => assertEquals(uint32.fromUint8Array(Uint8ArrayBig, e.endian.BIG), Uint32)
});

Deno.test({
    name: 'Uint32.fromUint8Array.LITTLE',
    fn: () => assertEquals(uint32.fromUint8Array(Uint8ArrayLittle, e.endian.LITTLE), Uint32)
});

Deno.test({
    name: 'Uint32.fromUint8Array.underflow',
    fn: () => {
        try {
            uint32.fromUint8Array(new Uint8Array([0,51,5]));
            fail();
        } catch(e) {
            assertEquals(e instanceof RangeError, true);
        }
    }
})

Deno.test({
    name: 'Uint32.fromUint8Array.overflow',
    fn: () => {
        try {
            uint32.fromUint8Array(new Uint8Array([0,51,5,41,5]));
            fail();
        } catch(e) {
            assertEquals(e instanceof RangeError, true);
        }
    }
})

Deno.test({
    name: 'Uint32.toUint8Array.underflow',
    fn: () => {
        try {
            uint32.toUint8Array(uint32.MIN - 1);
            fail();
        } catch(e) {
            assertEquals(e instanceof RangeError, true);
        }
    }
})

Deno.test({
    name: 'Uint32.toUint8Array.overflow',
    fn: () => {
        try {
            uint32.toUint8Array(uint32.MAX + 1);
            fail();
        } catch(e) {
            assertEquals(e instanceof RangeError, true);
        }
    }
})