import { skills } from "../data/skills";
import { projects } from "../data/projects";
import { useContactForm } from "../hooks/useContactForm";
import { SkillCard } from "../components/skillCard";
import { ProjectCard } from "../components/projectCard";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Navbar } from "../components/navbar";

export default function Portfolio() {
  const {
    formData,
    handleChange,
    handleSubmit,
    showModal,
    setShowModal,
    isSending,
  } = useContactForm();

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
                Excel | Power BI | MySQL | Automação com Python
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
            <div className="grid md:grid-cols-2 gap-12 items-center">
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
              <div className="flex justify-center md:justify-end">
                {/* max-w-md = Garante que o formulário não fique esticado demais */}
                <div className="w-full max-w-md bg-white/15 backdrop-blur-lg border border-white/30 rounded-3xl p-8 shadow-2xl">
                  <h4 className="text-2xl text-white text-center font-bold mb-6">
                    Entre em Contato
                  </h4>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Seu Nome"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-white/10 border border-white/50 text-white placeholder-white/70 rounded-lg p-3 focus:outline-none focus:bg-white/20 transition"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="Seu Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-white/10 border border-white/50 text-white placeholder-white/70 rounded-lg p-3 focus:outline-none focus:bg-white/20 transition"
                      />
                    </div>
                    <div>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        placeholder="Sua Mensagem"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-white/10 border border-white/50 text-white placeholder-white/70 rounded-lg p-3 focus:outline-none focus:bg-white/20 transition"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      disabled={isSending}
                      className="w-full bg-white text-purple-600 font-bold py-3 rounded-full hover:bg-gray-100 transition disabled:opacity-70"
                    >
                      {isSending ? "Enviando..." : "Enviar Mensagem"}
                    </button>
                  </form>
                </div>
              </div>
            </div>
            {/* Fim do Grid */}

            <footer className="mt-20 pt-8 border-t border-white/20 text-white/60 text-sm text-center">
              © 2026 Pedro Henrique. Todos os direitos reservados.
            </footer>
          </div>
        </section>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 animate-in fade-in duration-300">
            <div className="bg-white rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl transform scale-100 transition-all">
              <div className="text-green-500 mb-4 flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-800">
                Mensagem Enviada!
              </h3>
              <p className="text-gray-500 mb-6">
                Obrigado pelo contato. Responderei o mais breve possível.
              </p>
              <button
                onClick={() => setShowModal(false)}
                className="bg-purple-600 text-white px-6 py-2 rounded-full font-bold hover:bg-purple-700 transition"
              >
                Beleza, entendi!
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
