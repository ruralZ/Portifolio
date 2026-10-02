import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaExternalLinkAlt, FaCheckCircle, FaInfoCircle } from "react-icons/fa";
import { Navbar } from "../components/navbar";
import { ProjectCard } from "../components/projectCard";
import { SkillCard } from "../components/skillCard";
import { CertificateCard } from "../components/certificateCard";
import { CertificateModal } from "../components/certificateModal";
import { projects } from "../data/projects";
import { skills } from "../data/skills";
import { certificates } from "../data/certificates";
import type { Certificate, Project } from "../types";

export default function Portfolio() {
  const [filter, setFilter] = useState<"Todos" | Project["category"]>("Todos");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  const visibleProjects =
    filter === "Todos" ? projects : projects.filter((project) => project.category === filter);

  // Manage body scroll locking when project modal is open
  useEffect(() => {
    if (selectedProject) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setSelectedProject(null);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [selectedProject]);

  return (
    <main className="font-sans bg-gray-50 text-gray-800">
      <Navbar>Pedro Henrique</Navbar>

      {/* Hero Section */}
      <section className="min-h-[50vh] bg-gradient-to-br from-[#737DF2] to-[#8E54E9] py-20 flex items-center">
        <div className="container mx-auto grid items-center gap-8 px-6 md:grid-cols-2">
          <div className="space-y-6 text-white animate-fade-in-up">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-200">Portfólio</p>
            <h1 className="text-5xl font-extrabold leading-tight md:text-6xl">
              Olá, sou<br />
              <span className="text-yellow-300">Pedro Henrique</span>
            </h1>
            <p className="text-xl opacity-90">Estudante de BI • Dados & Programação</p>
            <p className="max-w-xl opacity-80">
              Desenvolvo projetos envolvendo análise de dados, dashboards, automações e programação.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#projetos"
                className="rounded-full bg-white px-7 py-3 font-bold text-purple-600 shadow-lg transition hover:bg-gray-100"
              >
                Ver projetos
              </a>
              <a
                href="#certificados"
                className="rounded-full bg-white/20 border-2 border-white px-7 py-3 font-bold text-white transition hover:bg-white/30 backdrop-blur-sm"
              >
                Ver certificados
              </a>
              <a
                href="#contato"
                className="rounded-full border-2 border-white/60 px-7 py-3 font-semibold text-white/90 transition hover:bg-white/10"
              >
                Entrar em contato
              </a>
            </div>
          </div>
          <div className="flex justify-center" aria-hidden="true">
            <div className="h-72 w-72 rotate-3 rounded-3xl border border-white/20 bg-white/10 shadow-2xl backdrop-blur-sm transition duration-500 hover:rotate-0" />
          </div>
        </div>
      </section>

      {/* Competências */}
      <section id="competencias" className="container mx-auto py-20 px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-2 text-3xl font-bold">Competências</h2>
          <p className="text-gray-500">Ferramentas e tecnologias em desenvolvimento</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {skills.map((skill) => (
            <SkillCard key={skill.title} skill={skill} />
          ))}
        </div>
      </section>

      {/* Certificados Section */}
      <section id="certificados" className="bg-slate-100/70 py-20 border-y border-gray-200/60">
        <div className="container mx-auto px-6">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-purple-600">
              Qualificação & Certificações
            </p>
            <h2 className="text-3xl font-bold text-gray-900">Certificados de Conclusão</h2>
            <p className="mt-3 text-gray-600">
              Trilhas de especialização concluídas na Alura totalizando 87 horas de formação prática
              em Power BI e Excel. Clique nos certificados para visualizar em alta resolução e conferir a grade curricular.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            {certificates.map((certificate) => (
              <CertificateCard
                key={certificate.id}
                certificate={certificate}
                onOpen={setSelectedCertificate}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Projetos Section */}
      <section id="projetos" className="bg-gray-100 py-20">
        <div className="container mx-auto px-6">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-purple-600">Portfólio</p>
            <h2 className="text-3xl font-bold text-gray-900">Projetos em destaque</h2>
            <p className="mt-3 text-gray-600">
              Uma seleção de projetos de dados, dashboards e desenvolvimento de software. Clique em um projeto para explorar as telas e detalhes.
            </p>
          </div>
          <div className="mb-10 flex flex-wrap justify-center gap-3" role="group" aria-label="Filtrar projetos">
            {(["Todos", "Dados & BI", "Programação"] as const).map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setFilter(option)}
                className={`rounded-full px-5 py-2 text-sm font-bold transition ${
                  filter === option
                    ? "bg-purple-600 text-white shadow-md"
                    : "bg-white text-gray-600 ring-1 ring-gray-200 hover:bg-purple-50"
                }`}
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
          {visibleProjects.length === 0 && (
            <p className="py-10 text-center text-gray-500">Nenhum projeto nessa categoria ainda.</p>
          )}
        </div>
      </section>

      {/* Certificate Modal */}
      <CertificateModal
        key={selectedCertificate?.id}
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950/75 p-3 sm:p-6 backdrop-blur-sm animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-title"
          onMouseDown={() => setSelectedProject(null)}
        >
          <div
            className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/10"
            onMouseDown={(event) => event.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-gray-100 bg-white/95 px-6 py-4 backdrop-blur">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-purple-600">
                  {selectedProject.category}
                </p>
                <h2 id="project-title" className="text-xl sm:text-2xl font-extrabold text-gray-900">
                  {selectedProject.title}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="rounded-full px-4 py-2 font-bold text-gray-600 transition hover:bg-gray-100"
                aria-label="Fechar detalhes do projeto"
              >
                Fechar ×
              </button>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6">
              {/* Action buttons (Live project and repository) */}
              {(selectedProject.liveUrl || selectedProject.githubUrl) && (
                <div className="flex flex-wrap items-center gap-3">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-purple-600 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-purple-700"
                    >
                      <FaExternalLinkAlt className="text-xs" />
                      Visitar projeto (aurya.dev.br)
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm font-bold text-gray-700 transition hover:bg-gray-100 hover:text-purple-700"
                    >
                      <FaGithub className="text-base" />
                      Código-fonte
                    </a>
                  )}
                </div>
              )}

              {/* Overview */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Visão Geral</h3>
                <p className="max-w-3xl leading-relaxed text-gray-700">{selectedProject.overview}</p>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Tecnologias Utilizadas</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-700 ring-1 ring-purple-200/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features (if present) */}
              {selectedProject.features && selectedProject.features.length > 0 && (
                <div className="rounded-xl border border-gray-200/80 bg-slate-50/80 p-5">
                  <h3 className="mb-3 text-sm font-bold text-gray-900 uppercase tracking-wider flex items-center gap-2">
                    <FaCheckCircle className="text-purple-600 text-base" />
                    Principais Funcionalidades
                  </h3>
                  <ul className="grid gap-2.5 sm:grid-cols-2 text-sm text-gray-700">
                    {selectedProject.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-500 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Role & Transparency note (if present) */}
              {selectedProject.roleNote && (
                <div className="rounded-xl border border-purple-200/70 bg-purple-50/60 p-5 text-sm text-purple-950 leading-relaxed">
                  <h4 className="font-bold flex items-center gap-2 mb-1.5 text-purple-900">
                    <FaInfoCircle className="text-purple-600 shrink-0" />
                    Transparência & Papel no Projeto
                  </h4>
                  <p>{selectedProject.roleNote}</p>
                </div>
              )}

              {/* Image gallery */}
              <div className="space-y-6 pt-2">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">
                  Telas e Visualizações ({selectedProject.images.length})
                </h3>
                {selectedProject.images.map((image) => (
                  <figure
                    key={image.src}
                    className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50 shadow-sm"
                  >
                    <img src={image.src} alt={image.alt} className="w-full" loading="lazy" />
                    {image.caption && (
                      <figcaption className="border-t border-gray-100 bg-white px-4 py-2.5 text-xs text-gray-600">
                        {image.caption}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="border-t border-gray-100 bg-gray-50 px-6 py-3 flex justify-between items-center text-xs text-gray-500">
              <span>{selectedProject.title} • {selectedProject.category}</span>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="rounded-lg px-4 py-1.5 font-bold text-gray-600 transition hover:bg-gray-200"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Contato Section */}
      <section id="contato" className="bg-gradient-to-br from-[#737DF2] to-[#8E54E9] py-20">
        <div className="container mx-auto px-6">
          <div className="flex justify-center">
            <div className="text-center text-white md:text-left">
              <h2 className="mb-4 text-4xl font-bold">Vamos conversar?</h2>
              <p className="mb-8 text-lg opacity-80">
                Estou disponível para novos projetos e oportunidades.
              </p>
              <div className="flex flex-col items-center gap-4 md:items-start">
                <a
                  href="https://github.com/ruralZ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-2xl font-bold transition-colors hover:text-yellow-300"
                >
                  <FaGithub className="text-3xl" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/pedrozhenrique"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-2xl font-bold transition-colors hover:text-yellow-300"
                >
                  <FaLinkedin className="text-3xl" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
          <footer className="mt-20 border-t border-white/20 pt-8 text-center text-sm text-white/60">
            © 2026 Pedro Henrique. Todos os direitos reservados.
          </footer>
        </div>
      </section>
    </main>
  );
}
