import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Navbar } from "../components/navbar";
import { ProjectCard } from "../components/projectCard";
import { SkillCard } from "../components/skillCard";
import { projects } from "../data/projects";
import { skills } from "../data/skills";
import type { Project } from "../types";

export default function Portfolio() {
  const [filter, setFilter] = useState<"Todos" | Project["category"]>("Todos");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const visibleProjects = filter === "Todos" ? projects : projects.filter((project) => project.category === filter);

  return (
    <main className="font-sans bg-gray-50 text-gray-800">
      <Navbar>Pedro Henrique</Navbar>

      <section className="min-h-[50vh] bg-gradient-to-br from-[#737DF2] to-[#8E54E9] py-20 flex items-center">
        <div className="container mx-auto grid items-center gap-8 px-6 md:grid-cols-2">
          <div className="space-y-6 text-white animate-fade-in-up">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-200">Portfólio</p>
            <h1 className="text-5xl font-extrabold leading-tight md:text-6xl">
              Olá, sou<br /><span className="text-yellow-300">Pedro Henrique</span>
            </h1>
            <p className="text-xl opacity-90">Estudante de BI • Dados & Programação</p>
            <p className="max-w-xl opacity-80">Desenvolvo projetos envolvendo análise de dados, dashboards, automações e programação.</p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#projetos" className="rounded-full bg-white px-8 py-3 font-bold text-purple-600 shadow-lg transition hover:bg-gray-100">Ver projetos</a>
              <a href="#contato" className="rounded-full border-2 border-white px-8 py-3 font-bold text-white transition hover:bg-white/10">Entrar em contato</a>
            </div>
          </div>
          <div className="flex justify-center" aria-hidden="true">
            <div className="h-72 w-72 rotate-3 rounded-3xl border border-white/20 bg-white/10 shadow-2xl backdrop-blur-sm transition duration-500 hover:rotate-0" />
          </div>
        </div>
      </section>

      <section id="competencias" className="container mx-auto py-20 px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-2 text-3xl font-bold">Competências</h2>
          <p className="text-gray-500">Ferramentas e tecnologias em desenvolvimento</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => <SkillCard key={skill.title} skill={skill} />)}
        </div>
      </section>

      <section id="projetos" className="bg-gray-100 py-20">
        <div className="container mx-auto px-6">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-purple-600">Portfólio</p>
            <h2 className="text-3xl font-bold text-gray-900">Projetos em destaque</h2>
            <p className="mt-3 text-gray-600">Uma seleção de dashboards e planilhas desenvolvidos por mim. Clique em um projeto para explorar as telas.</p>
          </div>
          <div className="mb-10 flex flex-wrap justify-center gap-3" role="group" aria-label="Filtrar projetos">
            {(["Todos", "Dados & BI", "Programação"] as const).map((option) => (
              <button key={option} type="button" onClick={() => setFilter(option)} className={`rounded-full px-5 py-2 text-sm font-bold transition ${filter === option ? "bg-purple-600 text-white shadow-md" : "bg-white text-gray-600 ring-1 ring-gray-200 hover:bg-purple-50"}`}>
                {option}
              </button>
            ))}
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {visibleProjects.map((project) => <ProjectCard key={project.title} project={project} onOpen={setSelectedProject} />)}
          </div>
          {visibleProjects.length === 0 && <p className="py-10 text-center text-gray-500">Nenhum projeto nessa categoria ainda.</p>}
        </div>
      </section>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950/70 p-4" role="dialog" aria-modal="true" aria-labelledby="project-title" onMouseDown={() => setSelectedProject(null)}>
          <div className="max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-2xl bg-white shadow-2xl" onMouseDown={(event) => event.stopPropagation()}>
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-100 bg-white/95 px-6 py-4 backdrop-blur">
              <div><p className="text-xs font-bold uppercase tracking-wider text-purple-600">{selectedProject.category}</p><h2 id="project-title" className="text-xl font-bold text-gray-900">{selectedProject.title}</h2></div>
              <button type="button" onClick={() => setSelectedProject(null)} className="rounded-full px-4 py-2 font-bold text-gray-600 transition hover:bg-gray-100" aria-label="Fechar detalhes do projeto">Fechar ×</button>
            </div>
            <div className="p-6 md:p-8"><p className="mb-7 max-w-3xl leading-7 text-gray-600">{selectedProject.overview}</p><div className="space-y-6">{selectedProject.images.map((image) => <figure key={image.src} className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50"><img src={image.src} alt={image.alt} className="w-full" /></figure>)}</div></div>
          </div>
        </div>
      )}

      <section id="contato" className="bg-gradient-to-br from-[#737DF2] to-[#8E54E9] py-20">
        <div className="container mx-auto px-6">
          <div className="flex justify-center"><div className="text-center text-white md:text-left"><h2 className="mb-4 text-4xl font-bold">Vamos conversar?</h2><p className="mb-8 text-lg opacity-80">Estou disponível para novos projetos e oportunidades.</p><div className="flex flex-col items-center gap-4 md:items-start"><a href="https://github.com/ruralZ" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-2xl font-bold transition-colors hover:text-yellow-300"><FaGithub className="text-3xl" /><span>GitHub</span></a><a href="https://www.linkedin.com/in/pedrozhenrique" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-2xl font-bold transition-colors hover:text-yellow-300"><FaLinkedin className="text-3xl" /><span>LinkedIn</span></a></div></div></div>
          <footer className="mt-20 border-t border-white/20 pt-8 text-center text-sm text-white/60">© 2026 Pedro Henrique. Todos os direitos reservados.</footer>
        </div>
      </section>
    </main>
  );
}
