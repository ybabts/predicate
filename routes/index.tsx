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
	<body class='font-signika-negative h-[10000px] bg-black'>
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
		<div class='bg-black'>
			<div class='w-full h-[600px] translate-y-[-600px]' style='background: linear-gradient(to bottom, transparent, #000)'/>
		</div>
	</body>
	</>
  );
}
