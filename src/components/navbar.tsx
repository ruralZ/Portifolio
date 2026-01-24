import type React from "react";
import { useState, type ReactNode } from "react";

const navItens = ["Competências", "Projetos", "Contato"];
const formatAnchor = (item: string) => {
  return `#${item
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")}`;
};

interface NavbarProps {
  children: React.ReactNode;
}

export function Navbar({ children }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-gray-50 py-4 sticky top-0 z-40 shadow-sm">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <h3 className="font-bold text-2xl text-gray-900">{children}</h3>

        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              ></path>
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            )}
          </svg>
        </button>

        <nav
          className={`${isOpen ? "flex" : "hidden"}
            flex-col gap-4 mt-0
            absolute top-full left-0 w-full bg-gray-50 px-6 py-2 shadow-md
            md:static md:flex md:flex-row md:gap-6 md:mt-2 md:shadow-none md:w-auto`}
        >
          {navItens.map((item) => (
            <a
              key={item}
              href={formatAnchor(item)}
              onClick={() => setIsOpen(false)}
              className="px-1 group relative text-gray-700 hover:text-purple-600 transition-colors duration-300 py-1"
            >
              {item}
              {/* Efeito de sublinhado animado com Tailwind */}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}
