
import * as t from 't/mod.ts';
import * as Uint8ArraytoInt32 from 't/algorithms/Uint8ArraytoInt32.ts';

const test = new Uint8Array([255,255,255,255])
const en = 0;

const attempt = Uint8ArraytoInt32.bitshifting(test, en);
const actual = t.Int32.fromUint8Array(test, en);

console.log('ACTUAL ',actual);
console.log('ATTEMPT',attempt)