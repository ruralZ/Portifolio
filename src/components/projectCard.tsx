import type { Project } from "../types";

interface Props {
  project: Project;
}

export const ProjectCard = ({ project }: Props) => {
  return (
    <div
      className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 relative"
    >
      <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-purple-600 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
      <h5 className="font-bold text-lg mb-2">{project.title}</h5>
      <p className="text-sm text-gray-500 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="bg-purple-50 text-purple-600 px-3 py-1 rounded-full text-xs font-semibold"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};
