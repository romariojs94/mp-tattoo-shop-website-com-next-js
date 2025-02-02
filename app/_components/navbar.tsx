import Image from "next/image";
import logo from "@/app/_assets/logo.svg";
import { londrinaSolid } from "../_lib/fonts";

export default function Navbar() {
  return (
    <nav
      className={`container flex justify-between py-8 ${londrinaSolid.className}`}
    >
      <Image src={logo} alt="Logotipo da Página" width={128} height={78} />
      <ul className="flex gap-6 text-3xl">
        <li>
          <a href="/sobre">Serviços</a>
        </li>
        <li>
          <a href="/sobre">Sobre mim</a>
        </li>
        <li className="text-right">
          Contato<br />
          <span className="text-sm text-zinc-400 font-extralight flex gap-1 items-center">((+55 11) 99999 9999)</span>
        </li>
      </ul>
    </nav>
  );
}
