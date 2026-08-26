import { skills } from "../data/skills";
import { projects } from "../data/projects";
import { SkillCard } from "../components/skillCard";
import { ProjectCard } from "../components/projectCard";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Navbar } from "../components/navbar";

export default function Portfolio() {
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
            <h2 className="text-3xl font-bold text-center mb-16">
              Projetos Destacados
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        </section>

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
