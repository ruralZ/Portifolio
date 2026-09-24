import { useEffect, useState } from "react";
import {
  FaTimes,
  FaExternalLinkAlt,
  FaFilePdf,
  FaCheckCircle,
  FaClock,
  FaCalendarAlt,
  FaGraduationCap,
  FaChevronLeft,
  FaChevronRight,
  FaSearchPlus,
  FaCertificate,
} from "react-icons/fa";
import type { Certificate } from "../types";

interface Props {
  certificate: Certificate | null;
  onClose: () => void;
}

export const CertificateModal = ({ certificate, onClose }: Props) => {
  const [activePageIndex, setActivePageIndex] = useState(0);

  // Lock background scroll and listen to Esc key
  useEffect(() => {
    if (!certificate) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        setActivePageIndex((prev) => (prev > 0 ? prev - 1 : certificate.pages.length - 1));
      } else if (e.key === "ArrowRight") {
        setActivePageIndex((prev) => (prev < certificate.pages.length - 1 ? prev + 1 : 0));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [certificate, onClose]);

  if (!certificate) return null;

  const currentPage = certificate.pages[activePageIndex] || certificate.pages[0];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950/80 p-3 sm:p-6 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cert-title"
      onMouseDown={onClose}
    >
      <div
        className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/10"
        onMouseDown={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-gray-100 bg-white/95 px-6 py-4 backdrop-blur">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="inline-flex items-center gap-1 rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-bold text-purple-700">
                <FaGraduationCap /> Formação {certificate.issuer}
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200">
                <FaCheckCircle className="text-[10px]" /> Autenticado
              </span>
            </div>
            <h2 id="cert-title" className="text-xl sm:text-2xl font-extrabold text-gray-900">
              {certificate.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
            aria-label="Fechar visualizador de certificado"
          >
            <FaTimes className="text-xl" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          {/* Page Switcher Tabs */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 pb-3">
            <div className="flex rounded-xl bg-gray-100 p-1">
              {certificate.pages.map((page, index) => (
                <button
                  key={page.title}
                  type="button"
                  onClick={() => setActivePageIndex(index)}
                  className={`flex items-center gap-2 rounded-lg px-4 py-2 text-xs sm:text-sm font-bold transition ${
                    activePageIndex === index
                      ? "bg-white text-purple-700 shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <span>Página {index + 1}:</span>
                  <span>{index === 0 ? "Certificado" : "Grade Curricular"}</span>
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 text-xs text-gray-500">
              <span className="hidden sm:inline">Use as setas do teclado ← → para alternar</span>
              <button
                type="button"
                onClick={() => setActivePageIndex((prev) => (prev > 0 ? prev - 1 : certificate.pages.length - 1))}
                className="rounded-lg border border-gray-200 p-2 hover:bg-gray-50 transition"
                aria-label="Página anterior"
              >
                <FaChevronLeft />
              </button>
              <button
                type="button"
                onClick={() => setActivePageIndex((prev) => (prev < certificate.pages.length - 1 ? prev + 1 : 0))}
                className="rounded-lg border border-gray-200 p-2 hover:bg-gray-50 transition"
                aria-label="Próxima página"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>

          {/* Certificate Image Viewer */}
          <div className="relative group overflow-hidden rounded-xl border border-gray-200 bg-slate-900 shadow-inner flex items-center justify-center">
            <img
              src={currentPage.src}
              alt={currentPage.alt}
              className="max-h-[60vh] w-auto max-w-full object-contain mx-auto"
            />

            {/* Quick link to view full raw image */}
            <a
              href={currentPage.src}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-lg bg-black/75 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur transition hover:bg-black"
              title="Abrir imagem em tamanho real"
            >
              <FaSearchPlus />
              Ampliar imagem
            </a>
          </div>

          <div className="text-center sm:text-left">
            <p className="font-semibold text-gray-800 text-sm">{currentPage.title}</p>
            <p className="text-xs text-gray-500">{currentPage.subtitle}</p>
          </div>

          {/* Certificate Metadata & Course Breakdown */}
          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2 space-y-4">
              <div className="rounded-xl border border-gray-100 bg-gray-50/70 p-5">
                <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <FaGraduationCap className="text-purple-600" />
                  Cursos Concluídos na Trilha ({certificate.courses.length})
                </h4>
                <ul className="space-y-2.5">
                  {certificate.courses.map((course, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                      <FaCheckCircle className="mt-0.5 text-emerald-500 shrink-0 text-sm" />
                      <span>{course}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-gray-100 bg-purple-50/50 p-4">
                <p className="text-xs text-gray-600 leading-relaxed">
                  <strong className="text-purple-900">Sobre esta certificação: </strong>
                  {certificate.description}
                </p>
              </div>
            </div>

            {/* Side info box */}
            <div className="space-y-4">
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-5 space-y-3 text-xs sm:text-sm">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-purple-100 p-2 text-purple-700">
                    <FaClock className="text-base" />
                  </div>
                  <div>
                    <span className="block text-gray-500 text-xs">Carga Horária</span>
                    <strong className="text-gray-900">{certificate.workload}</strong>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-blue-100 p-2 text-blue-700">
                    <FaCalendarAlt className="text-base" />
                  </div>
                  <div>
                    <span className="block text-gray-500 text-xs">Data de Conclusão</span>
                    <strong className="text-gray-900">{certificate.issueDate}</strong>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-emerald-100 p-2 text-emerald-700">
                    <FaCertificate className="text-base" />
                  </div>
                  <div>
                    <span className="block text-gray-500 text-xs">Plataforma</span>
                    <strong className="text-gray-900">{certificate.issuer}</strong>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2">
                <a
                  href={certificate.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full rounded-xl bg-purple-600 px-4 py-3 text-xs sm:text-sm font-bold text-white shadow-sm transition hover:bg-purple-700 hover:shadow-md"
                >
                  <FaExternalLinkAlt />
                  Validar na Alura
                </a>

                <a
                  href={certificate.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-xs sm:text-sm font-bold text-gray-700 transition hover:bg-gray-100 hover:text-red-600"
                >
                  <FaFilePdf className="text-red-500" />
                  Abrir / Baixar PDF Oficial
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="border-t border-gray-100 bg-gray-50 px-6 py-3 flex justify-between items-center text-xs text-gray-500">
          <span>Autenticidade garantida por chave criptográfica da Alura</span>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg px-4 py-1.5 font-bold text-gray-600 transition hover:bg-gray-200"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
