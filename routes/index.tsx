import { Head } from "$fresh/runtime.ts";
import Navigator from "../components/navigator.tsx";

export default function Home() {
  return (
	<>
	<Head>
		<title>Predicate</title>
		<link href='./css/signika-negative.css' rel='stylesheet'></link>
		<link href='./css/unisans.css' rel='stylesheet'></link>
		<link href='./css/index.css' rel='stylesheet'></link>
	</Head>
	<body class='font-signika-negative h-[10000px]'>
		<Navigator/>
		<div class='w-full bg-black min-h-[800px] max-h-[65vh] flex flex-col justify-center overflow-hidden relative'>
			<img src='./img/lilzidesigns-rTzIzsbBHi8-unsplash.jpg' class='absolute scale-[-1]' style='filter: contrast(1.5) hue-rotate(220deg)'/>
			<div class='w-[500%] h-[500vw] absolute animate-spin-slow z-0 left-[-250vw] top-[-250vw]' style='background: radial-gradient(black 0%, black 75%, transparent 95%); background-size: 35px 35px; backdrop-filter: blur(5px)'></div>
			<div class='mr-[10vw] font-bold z-10 text-white text-right block'>
				<h1 class='text-[5em] font-unisans-heavy tracking-wider leading-[4.5rem] inline-block'>
					Predicate
				</h1>
				<br/>
				<h3 class='inline-block text-[2em] text-center font-thin'>
					A Javascript API
				</h3>
			</div>
		</div>
	</body>
	</>
  );
}
