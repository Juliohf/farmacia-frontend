import React from "react";
import "./Footer.css";
import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";

function Footer() {
  return (
    <>
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            &copy; 2024 Farmácia da Esquina. Todos os direitos reservados.
          </p>
          <p className="text-sm mt-2">
            Contato: (11) 1234-5678 | Farmacia@daesquina.com
          </p>
          <p className="text-lg p-2">Acesse nossas redes sociais</p>
          <div className="flex gap-4">
            <LinkedinLogo size={48} weight="bold" id="social" />
            <InstagramLogo size={48} weight="bold" id="social" />
            <FacebookLogo size={48} weight="bold" id="social" />
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
