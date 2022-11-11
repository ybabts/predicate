import { ComponentChildren } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";

const TAGLINES = [
    'The only Javascript API!',
    'The Crackhead Way',
    'Because why Not!',
    'Typescript > Javascript',
    `Security? What's that?`,
    `Your IP is 192.168.1.1`,
    `Hello? is this thing on?`,
    `() => true`,
    `Just... why?`,
    'Deno is Awesome!',
    'Fresh is Sick!'
];



export default function Navigator() {
    return (
        <h3 class='inline-block text-[2em] text-center font-thin'>
			{
                TAGLINES[Math.floor(Math.random() * TAGLINES.length)]
            }
		</h3>
    )
}