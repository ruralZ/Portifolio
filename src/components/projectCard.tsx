import { FaExternalLinkAlt } from "react-icons/fa";
import type { Project } from "../types";

interface Props {
  project: Project;
  onOpen: (project: Project) => void;
}

export const ProjectCard = ({ project, onOpen }: Props) => (
  <article className="group flex flex-col justify-between overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
    <div>
      <div
        onClick={() => onOpen(project)}
        className="relative aspect-[16/9] cursor-pointer overflow-hidden bg-gray-100"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onOpen(project);
          }
        }}
        aria-label={`Ver detalhes do projeto ${project.title}`}
      >
        <img
          src={project.images[0].src}
          alt={project.images[0].alt}
          className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-purple-700 shadow-sm backdrop-blur-sm">
          {project.category}
        </span>
        <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-gray-950/70 to-transparent px-5 py-4 text-sm font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          Ver projeto completo →
        </span>
      </div>

      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold text-gray-900">{project.title}</h3>
        <p className="mb-5 text-sm leading-6 text-gray-600">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-700 ring-1 ring-purple-200/50"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>

    <div className="border-t border-gray-100 bg-gray-50/70 p-4 sm:px-6 flex flex-wrap items-center justify-between gap-3">
      <button
        type="button"
        onClick={() => onOpen(project)}
        className="inline-flex items-center gap-2 rounded-xl bg-purple-600 px-4 py-2 text-xs sm:text-sm font-bold text-white shadow-sm transition hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
      >
        Ver detalhes
      </button>

      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-xs font-bold text-gray-700 transition hover:bg-gray-100 hover:text-purple-700 shadow-sm"
          title="Visitar site do projeto"
        >
          <FaExternalLinkAlt className="text-[11px]" />
          Acessar site
        </a>
      )}
    </div>
  </article>
);
