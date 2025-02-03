import Image from "next/image";
import { londrinaSolid } from "./_lib/fonts";
import Portrait from '@/app/_assets/portrait.png';

export default function Home() {
  return (
   <main className="relative flex py-10">
      <h1 className={`absolute text-[400px] text-zinc-800 -left-20 -top-6 leading-tight -z-10 uppercase ${londrinaSolid.className}`}>Tattoo</h1>
      <div className="font-black text-zinc-600 text-8xl pt-56 uppercase">
        <h2>inspire-se</h2>
        <h2>Expresse-se</h2>
        <h2 className="text-yellow-400">Tatue-se</h2>
      </div>
      <Image className="absolute right-0 -bottom-20 grayscale" src={Portrait} alt="Retrado de Sandro Luz" width={300} />
   </main>
  );
}
