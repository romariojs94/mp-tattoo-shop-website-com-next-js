"use client";

import Image from "next/image";
import logo from "@/app/_assets/logo.svg";
import { londrinaSolid } from "../_lib/fonts";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (currentPath: string, pathname: string) => {
    if (currentPath.includes(pathname)) {
      return "underline";
    }
  };
  return (
    <nav
      className={`container flex justify-between py-8 ${londrinaSolid.className}`}
    >
      <Link href="/">
        <Image src={logo} alt="Logotipo da Página" />
      </Link>
      <ul className="flex gap-6 text-3xl">
        <li className={`${isActive(pathname, "servicos")}`}>
          <Link href="/servicos">Serviços</Link>
        </li>
        <li className={`${isActive(pathname, "sobre")}`}>
          <Link href="/sobre">Sobre mim</Link>
        </li>
        <li>
          <Link href="/contato" className="flex flex-col items-end">
            <span className={`${isActive(pathname, "contato")}`}>
              Contato
              <br />
            </span>
            <span className="text-sm text-zinc-400 font-extralight flex gap-1 items-center">
              <FaWhatsapp />
              (11) 99999 9999
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
