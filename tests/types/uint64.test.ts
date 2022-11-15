import * as uint64 from 't/uint64.ts';
import { assertEquals, fail } from "std/testing/asserts.ts";

Deno.test({
    name: 'uint64.fromUint8Array.underflow',
    fn: () => {
        try {
            uint64.fromUint8Array(new Uint8Array([0,51,5]));
            fail();
        } catch(e) {
            assertEquals(e instanceof RangeError, true);
        }
    }
})

Deno.test({
    name: 'uint64.fromUint8Array.overflow',
    fn: () => {
        try {
            uint64.fromUint8Array(new Uint8Array([0,51,5,41,5]));
            fail();
        } catch(e) {
            assertEquals(e instanceof RangeError, true);
        }
    }
})

Deno.test({
    name: 'uint64.toUint8Array.underflow',
    fn: () => {
        try {
            uint64.toUint8Array(uint64.MIN - 1n);
            fail();
        } catch(e) {
            assertEquals(e instanceof RangeError, true);
        }
    }
})

Deno.test({
    name: 'uint64.toUint8Array.overflow',
    fn: () => {
        try {
            uint64.toUint8Array(uint64.MAX + 1n);
            fail();
        } catch(e) {
            assertEquals(e instanceof RangeError, true);
        }
    }
})