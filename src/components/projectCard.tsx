import type { Project } from "../types";

interface Props {
  project: Project;
  onOpen: (project: Project) => void;
}

export const ProjectCard = ({ project, onOpen }: Props) => (
  <article className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
    <button
      type="button"
      onClick={() => onOpen(project)}
      className="block w-full overflow-hidden text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-purple-300"
      aria-label={`Ver detalhes do projeto ${project.title}`}
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
        <img src={project.images[0].src} alt={project.images[0].alt} className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105" />
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-purple-700 shadow-sm">{project.category}</span>
        <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-gray-950/70 to-transparent px-5 py-4 text-sm font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Ver projeto completo →</span>
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold text-gray-900">{project.title}</h3>
        <p className="mb-5 text-sm leading-6 text-gray-600">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => <span key={tag} className="rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-700">{tag}</span>)}
        </div>
      </div>
    </button>
  </article>
);
