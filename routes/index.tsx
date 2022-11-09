import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Predicate</title>
        <link href='./css/unisans.css' rel='stylesheet'></link>
        <link href='./css/index.css' rel='stylesheet'></link>
      </Head>
      <div class='w-full h-screen bg-black flex align-middle justify-center text-white flex-col text-center text-8xl relative overflow-hidden'>
        <div class='anime-grid-spin w-[200%] h-[200%] z-0'></div>
        <div class='anime-grid-spin2 w-[200%] h-[200%] z-0'></div>
        <h1 class='font-unisans-heavy tracking-wide z-10 drop-shadow-2xl align-middle justify-center h-48'>Predicate</h1>
      </div>
    </>
  );
}
