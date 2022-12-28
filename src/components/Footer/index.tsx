import Link from "next/link";

import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-zinc-100 w-full flex flex-col items-center justify-center pt-5 pb-2 absolute">
      <div className="mb-3">
        <h3 className="font-semibold">Redes Sociais</h3>

        <div className="flex items-center justify-center text-3xl gap-3 py-2">
          <Link target={'_blank'} href="https://www.instagram.com/d.joiasonline/">
            <p className="pb-1 border-b-2 border-b-solid border-b-transparent hover:border-b-[#fb426b] hover:text-[#fb426b] hover:scale-105 transition-all">
              <FaInstagram />
            </p>
          </Link>

          <Link target={'_blank'} href="https://wa.me/558288331213">
            <p className="pb-1 border-b-2 border-b-solid border-b-transparent hover:border-b-[#fb426b] hover:text-[#fb426b] hover:scale-105 transition-all">
              <FaWhatsapp />
            </p>
          </Link>
        </div>
      </div>

      <div className="flex flex-col text-center text-[#424242]">
        <p>© 2022</p>
        <p>by Gustavo Silva</p>
        <p>All rights reserved.</p>
      </div>

      <Link target={'_blank'} href="https://wa.me/558288331213" className="fixed -right-2 -bottom-1 cursor-pointer transition-all flex flex-col items-center justify-center scale-75 hover:scale-90 sm:scale-100 sm:hover:scale-110 sm:right-3 sm:bottom-3">
        <strong className="w-24 text-center text-sm">Atendimento Via WPP</strong>
        
        <RiWhatsappFill className="text-5xl text-[#00E676]" />
      </Link>
    </footer>
  )
}

export default Footer