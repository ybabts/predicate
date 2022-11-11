import { Head } from "$fresh/runtime.ts";
import Navigator from "../components/navigator.tsx";
import Taglines from "../components/taglines.tsx"

export default function Home() {
  return (
	<>
	<Head>
		<title>Predicate</title>
		<link href='./css/signika-negative.css' rel='stylesheet'></link>
		<link href='./css/unisans.css' rel='stylesheet'></link>
		<link href='./css/index.css' rel='stylesheet'></link>
	</Head>
	<body class='font-signika-negative h-[10000px] bg-black text-white'>
		<Navigator/>
		<div class='w-full bg-black sm:min-h-[600px] m:min-h-[700px] lg:min-h-[800px] xl:min-h-[1000px] flex flex-col justify-center overflow-hidden relative'>
			<img src='./img/lilzidesigns-rTzIzsbBHi8-unsplash.jpg' class='absolute scale-[-1] animate-rainbow-fadein w-full' style='filter: contrast(1.5)'/>
			<div class='w-[500vw] h-[500vw] absolute z-0 animate-spin-slow left-[-200vw] top-[-240vw]' style='background: radial-gradient(black 0%, black 75%, transparent 95%); background-size: 35px 35px; backdrop-filter: blur(5px)'></div>
			<div class='mb-[10vh] font-bold z-10 text-white text-center block'>
				<h1 class='text-[5em] font-unisans-heavy tracking-wider leading-[4.5rem] inline-block'>
					Predicate
				</h1>
				<br/>
				<Taglines />
			</div>
		</div>
		<div class='w-full'>
			<div class='w-full h-[600px] translate-y-[-600px] absolute' style='background: linear-gradient(to bottom, transparent, #000)'/>
			<div class='w-[80%] m-auto translate-y-[-50px] justify-center flex flex-row align-middle animate-rainbow'>
				<img src='./img/function-symbol.png' class='inline-block w-[200px] mr-32 rainbow-rave'/>
				<div class='w-[50%] align-middle flex flex-col justify-center'>
					<h1 class='text-[1.75em] font-unisans-heavy tracking-wider inline-block'>What the fuck is Predicate?</h1>
					<p class='mb-2'>
						Predicate is a new way to do APIs that doesn't require an abstraction. If you know how to write Typescript (or Javascript),
						you know how to write a query in Predicate!
					</p>
					<button class='p-3 bg-white inline-block w-32 mt-3 bg-transparent border-white border-solid border-2 rounded-md cool-hover'>
						Try it out
					</button>
				</div>
			</div>
		</div>
	</body>
	</>
  );
}
