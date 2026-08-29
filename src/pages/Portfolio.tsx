import { skills } from "../data/skills";
import { projects } from "../data/projects";
import { SkillCard } from "../components/skillCard";
import { ProjectCard } from "../components/projectCard";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Navbar } from "../components/navbar";
import { useState } from "react";
import type { Project } from "../types";

export default function Portfolio() {
  const [filter, setFilter] = useState<"Todos" | Project["category"]>("Todos");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const visibleProjects = filter === "Todos" ? projects : projects.filter((project) => project.category === filter);

  return (
    <main>
      <div className="font-sans bg-gray-50 text-gray-800">
        {/* Navbar */}
        <Navbar>💼 Portifolio</Navbar>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#737DF2] to-[#8E54E9] py-20 min-h-[50vh] flex items-center">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
            <div className="text-white space-y-6 animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
                Olá, sou um
                <br /> Especialista em{" "}
                <span className="text-yellow-300">Dados</span>
              </h1>
              <p className="text-xl opacity-90">
                Excel | Power BI | PostgreSQL | Python
              </p>
              <p className="opacity-80">
                Transformo dados em insights valiosos e crio soluções
                automatizadas.
              </p>
              <div className="flex gap-4 pt-4">
                <a
                  href="#projetos"
                  className="bg-white text-purple-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition shadow-lg"
                >
                  Ver Projetos
                </a>
                <a
                  href="#contato"
                  className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition"
                >
                  Entrar em Contato
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-72 h-72 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/20 shadow-2xl rotate-3 hover:rotate-0 transition duration-500"></div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="competencias" className="py-20 container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-2">Minhas Competências</h2>
            <p className="text-gray-500">
              Ferramentas e tecnologias que domino
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <SkillCard key={skill.title} skill={skill} />
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projetos" className="py-20 bg-gray-100">
          <div className="container mx-auto px-6">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-purple-600">Portfólio real</p>
              <h2 className="text-3xl font-bold text-gray-900">Projetos em destaque</h2>
              <p className="mt-3 text-gray-600">Uma seleção de dashboards e planilhas desenvolvidos por mim. Clique em um projeto para explorar as telas.</p>
            </div>
            <div className="mb-10 flex flex-wrap justify-center gap-3" role="group" aria-label="Filtrar projetos">
              {(["Todos", "Power BI", "Excel"] as const).map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setFilter(option)}
                  className={`rounded-full px-5 py-2 text-sm font-bold transition ${filter === option ? "bg-purple-600 text-white shadow-md" : "bg-white text-gray-600 ring-1 ring-gray-200 hover:bg-purple-50"}`}
                >
                  {option}
                </button>
              ))}
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {visibleProjects.map((project) => (
                <ProjectCard key={project.title} project={project} onOpen={setSelectedProject} />
              ))}
            </div>
            {visibleProjects.length === 0 && <p className="py-10 text-center text-gray-500">Nenhum projeto nessa categoria ainda.</p>}
          </div>
        </section>

        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950/70 p-4" role="dialog" aria-modal="true" aria-labelledby="project-title" onMouseDown={() => setSelectedProject(null)}>
            <div className="max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-2xl bg-white shadow-2xl" onMouseDown={(event) => event.stopPropagation()}>
              <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-100 bg-white/95 px-6 py-4 backdrop-blur">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-purple-600">{selectedProject.category}</p>
                  <h2 id="project-title" className="text-xl font-bold text-gray-900">{selectedProject.title}</h2>
                </div>
                <button type="button" onClick={() => setSelectedProject(null)} className="rounded-full px-4 py-2 font-bold text-gray-600 transition hover:bg-gray-100" aria-label="Fechar detalhes do projeto">Fechar ×</button>
              </div>
              <div className="p-6 md:p-8">
                <p className="mb-7 max-w-3xl leading-7 text-gray-600">{selectedProject.overview}</p>
                <div className="space-y-6">
                  {selectedProject.images.map((image) => (
                    <figure key={image.src} className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
                      <img src={image.src} alt={image.alt} className="w-full" />
                    </figure>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Contact Section (Glassmorphism) */}
        <section
          id="contato"
          className="py-20 bg-gradient-to-br from-[#737DF2] to-[#8E54E9]"
        >
          <div className="container mx-auto px-6">
            <div className="flex justify-center">
              {/* Agrupamos tudo isso numa div só para o Grid entender que isso é UMA coisa */}
              <div className="text-white text-center md:text-left">
                <h2 className="text-gray-800 text-4xl font-bold mb-4">
                  Vamos Conversar?
                </h2>
                <p className="text-lg opacity-80 mb-8">
                  Estou disponível para novos projetos e oportunidades.
                </p>
                {/* Div dos Links (Github/Linkedin) */}
                <div className="flex flex-col gap-4 items-center md:items-start">
                  <a
                    href="https://github.com/ruralZ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-2xl font-bold hover:text-yellow-300 transition-colors duration-300"
                  >
                    <FaGithub className="text-3xl" />
                    <span>Github</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/pedrozhenrique"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-2xl font-bold hover:text-yellow-300 transition-colors duration-300"
                  >
                    <FaLinkedin className="text-3xl" />
                    <span>Linkedin</span>
                  </a>
                </div>
              </div>
            </div>

            <footer className="mt-20 pt-8 border-t border-white/20 text-white/60 text-sm text-center">
              © 2026 Pedro Henrique. Todos os direitos reservados.
            </footer>
          </div>
        </section>
      </div>
    </main>
  );
}
