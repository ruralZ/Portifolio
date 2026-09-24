import { FaCertificate, FaExternalLinkAlt, FaFilePdf, FaClock, FaCheckCircle, FaEye } from "react-icons/fa";
import type { Certificate } from "../types";

interface Props {
  certificate: Certificate;
  onOpen: (certificate: Certificate) => void;
}

export const CertificateCard = ({ certificate, onOpen }: Props) => {
  return (
    <article className="group flex flex-col justify-between overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div>
        {/* Certificate preview button */}
        <div
          onClick={() => onOpen(certificate)}
          className="relative aspect-[16/11] cursor-pointer overflow-hidden bg-gray-100 border-b border-gray-100"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onOpen(certificate);
            }
          }}
          aria-label={`Visualizar certificado de ${certificate.title} em tamanho ampliado`}
        >
          <img
            src={certificate.pages[0].src}
            alt={certificate.pages[0].alt}
            className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
            loading="lazy"
          />

          {/* Badges on image */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-700/90 px-3 py-1 text-xs font-bold text-white backdrop-blur-md shadow-sm">
              <FaCertificate className="text-yellow-300" />
              {certificate.issuer}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-600/90 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-md shadow-sm">
              <FaCheckCircle className="text-white text-[11px]" />
              Verificado
            </span>
          </div>

          <div className="absolute top-3 right-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-900/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
              <FaClock className="text-yellow-400" />
              {certificate.workload}
            </span>
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-gray-950/60 opacity-0 backdrop-blur-[2px] transition-all duration-300 group-hover:opacity-100">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-purple-700 shadow-xl transition-transform transform group-hover:scale-105">
              <FaEye />
              Visualizar em alta definição
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center justify-between gap-2 mb-2">
            <h3 className="text-2xl font-bold text-gray-900">{certificate.title}</h3>
            <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full whitespace-nowrap">
              {certificate.coursesCount} cursos concluídos
            </span>
          </div>

          <p className="text-xs font-medium text-purple-600 mb-3">
            Conclusão em {certificate.issueDate}
          </p>

          <p className="mb-4 text-sm leading-relaxed text-gray-600 line-clamp-3">
            {certificate.description}
          </p>

          {/* Skills tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {certificate.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-lg bg-purple-50 px-2.5 py-1 text-xs font-semibold text-purple-700 ring-1 ring-purple-200/50"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="border-t border-gray-100 bg-gray-50/70 p-4 sm:px-6 flex flex-wrap items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => onOpen(certificate)}
          className="inline-flex items-center gap-2 rounded-xl bg-purple-600 px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
        >
          <FaEye />
          Ver detalhes e grade
        </button>

        <div className="flex items-center gap-2">
          <a
            href={certificate.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-xs font-bold text-gray-700 transition hover:bg-gray-100 hover:text-purple-700 shadow-sm"
            title="Validar certificado oficial na Alura"
          >
            <FaExternalLinkAlt className="text-[11px]" />
            Validar
          </a>
          <a
            href={certificate.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-xs font-bold text-gray-700 transition hover:bg-gray-100 hover:text-red-600 shadow-sm"
            title="Abrir arquivo PDF original"
          >
            <FaFilePdf className="text-red-500" />
            PDF
          </a>
        </div>
      </div>
    </article>
  );
};
