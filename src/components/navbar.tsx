import type React from "react";
import { useState } from "react";

const navItens = ["Competências", "Certificados", "Projetos", "Contato"];
const formatAnchor = (item: string) => `#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`;

interface NavbarProps { children: React.ReactNode; }

export function Navbar({ children }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-gray-50 py-4 shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-6">
        <h3 className="text-2xl font-bold text-gray-900">{children}</h3>
        <button className="text-gray-700 focus:outline-none md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Abrir menu">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} /></svg>
        </button>
        <nav className={`${isOpen ? "flex" : "hidden"} absolute left-0 top-full mt-0 w-full flex-col gap-4 bg-gray-50 px-6 py-2 shadow-md md:static md:mt-2 md:flex md:w-auto md:flex-row md:gap-6 md:shadow-none`}>
          {navItens.map((item) => <a key={item} href={formatAnchor(item)} onClick={() => setIsOpen(false)} className="group relative px-1 py-1 text-gray-700 transition-colors duration-300 hover:text-purple-600">{item}<span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-purple-600 to-blue-500 transition-all duration-300 group-hover:w-full" /></a>)}
        </nav>
      </div>
    </header>
  );
}
