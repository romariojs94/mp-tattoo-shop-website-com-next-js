import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 py-8 max-md:px-4 text-zinc-500 text-xs">
      <div className="container flex max-md:flex-wrap gap-2 items-center max-md:flex-col max-md:items-start">
        <p>Sandro Luz Tattoo Shop</p>
        <span className="text-yellow-400 text-base leading-3">&#8226;</span>
        <p>Rua Limoeiro, 1000 - Catalão - SP</p>
        <span className="text-yellow-400 text-base leading-3">&#8226;</span>
        <p className="flex gap-1 items-center">
          <FaWhatsapp />
          (+55 11) 99999 9999</p>
      </div>
    </footer>
  );
}
