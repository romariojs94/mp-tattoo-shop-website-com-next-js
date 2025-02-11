import Link from "next/link";
import type React from "react";
import { FaWhatsapp } from "react-icons/fa";

interface FullScreenMenuProps {
  isOpen: boolean;
}

const FullScreenMenu: React.FC<FullScreenMenuProps> = ({ isOpen }) => {
  const menuItems = ["Serviços", "Sobre mim", "Contato"];
  console.log(isOpen)
  return (
    <div
      className={`fixed inset-0 bg-zinc-800 z-40 transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <nav className="flex flex-col items-center justify-center h-full">
        {menuItems.map((item, index) => (
          <Link
          key={index}
          href="/servicos"
          className="text-4xl font-bold my-4 text-zinc-200 hover:text-zinc-50 transition-colors duration-200"
          >
            {item}
          </Link>
        ))}
        
        <span className="text-lg text-zinc-400 font-extralight flex gap-1 items-center -mt-4">
          <FaWhatsapp />
          (11) 99999 9999
        </span>
      </nav>
    </div>
  );
};

export default FullScreenMenu;
