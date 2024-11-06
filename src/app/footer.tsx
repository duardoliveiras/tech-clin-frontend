import { Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-third text-gray-200 py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">Tech Clin</h2>
          <p className="text-gray-400">Automatizando e inovando sua clínica.</p>
        </div>

        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-4">Links Rápidos</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/sobre" className="hover:text-white">
                Sobre Nós
              </Link>
            </li>
            <li>
              <Link href="/servicos" className="hover:text-white">
                Serviços
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-white">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Contato e redes sociais */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-4">Contato</h3>
          <p>Endereço: Rua barão de melgaço</p>
          <p>Telefone: (65) 3333-4444</p>
          <p>Email: duardooliveiras@gmail.com </p>

          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <Facebook />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Instagram />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Linkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-10">
        &copy; {new Date().getFullYear()} Tech Clin. Todos os direitos
        reservados.
      </div>
    </footer>
  );
};

export default Footer;
