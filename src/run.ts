
import * as predicat from 'src/api/mod.ts';


const age = 21
const result = await predicat.collection('users').pass({ age }).filter(() => true);

console.log(result);