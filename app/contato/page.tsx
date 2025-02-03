import Image from "next/image";
import ImagemContato from '@/app/_assets/imagem_contato.png'
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
export default function Contato() {
  return (
    <main className="flex justify-between gap-10">
      <section>
        <h1 className="font-black text-3xl mt-12 mb-10">Entre em <span className="text-yellow-400">Contato</span></h1>
        <p className="mt-10 font-light text-zinc-400">Clique no botão abaixo e envie uma mensagem.<br />
        Vamos conversar!</p>
        <Link target="_blank" href="https://wa.me//5511999999999?text=Tenho%20interesse%20em%20Fazer%20uma%20tattoo!">
        <button className="bg-zinc-700 p-4 border-b-4 border-zinc-800 rounded-lg flex items-center justify-start gap-4 mt-10">
          <FaWhatsapp className="w-8 h-8" />
          <div>
            <p>Envie uma mensagem</p>
            <p className="text-zinc-500 text-xs justify-self-start">(11) 99999-9999</p>
          </div>
        </button>
        </Link>

      </section>
      <Image width="600" src={ImagemContato} alt="Imagem de contato" />
    </main>
  );
}
