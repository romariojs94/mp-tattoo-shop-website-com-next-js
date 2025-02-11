import Image from "next/image";
import { londrinaSolid } from "./_lib/fonts";
import Portrait from '@/app/_assets/portrait.png';

export default function Home() {
  return (
   <main className="relative flex flex-col md:flex-row py-10 max-md:px-4">
      <h1 className={`absolute md:text-[400px] text-9xl text-zinc-800 md:-left-20 -top-6 leading-tight -z-10 uppercase ${londrinaSolid.className}`}>Tattoo</h1>
      <div className="font-black text-zinc-600 md:pt-56 pt-12 uppercase md:text-5xl lg:text-8xl text-4xl">
        <h2>inspire-se</h2>
        <h2>Expresse-se</h2>
        <h2 className="text-yellow-400">Tatue-se</h2>
      </div>
      <Image className="absolute right-0 max-md:-bottom-[21rem] -bottom-20 grayscale max-sm:w-52 max-md:w-56" src={Portrait} alt="Retrado de Sandro Luz" width={300} />
   </main>
  );
}
