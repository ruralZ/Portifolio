import React, { useState,type FormEvent } from 'react';

// 1. Interfaces (Modelos de Dados)
interface Skill {
  title: string;
  description: string;
  items: string[];
}

interface Project {
  title: string;
  description: string;
  tags: string[];
}

interface ContactFormState {
  name: string;
  email: string;
  message: string;
}

// 2. Dados (Simulando o banco)
const skillsList: Skill[] = [
  { title: "Excel Avançado", description: "Domínio completo em fórmulas complexas.", items: ["Fórmulas Avançadas", "Tabelas Dinâmicas", "VBA e Macros"] },
  { title: "Power BI", description: "Criação de dashboards interativos.", items: ["DAX", "Power Query", "Modelagem"] },
  { title: "MySQL", description: "Design e gerenciamento de bancos.", items: ["Queries Otimizadas", "Administração", "Modelagem"] },
  { title: "Automação Python", description: "Scripts de automação e scraping.", items: ["Web Scraping", "Pandas", "Scripts Admin"] }
];

const projectList: Project[] = [
  { title: "Dashboard de Vendas", description: "Dashboard completo em Power BI com análise em tempo real.", tags: ["Power BI", "DAX", "Excel"] },
  { title: "Automação de Relatórios", description: "Script Python que automatiza a leitura e envio de e-mails.", tags: ["Python", "Pandas", "Excel"] },
  { title: "Banco de Dados CRM", description: "Design e implementação de banco relacional.", tags: ["MySQL", "SQL"] }
];

export default function Portfolio() {
  // 3. Estado (Substitui as variáveis do @code)
  const [formData, setFormData] = useState<ContactFormState>({ name: '', email: '', message: '' });
  const [showModal, setShowModal] = useState(false);
  const [isSending, setIsSending] = useState(false);

  // Lógica de atualização do formulário
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // 4. Manipulação do Envio (Simulado)
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    // NOTA: React roda no navegador. Você não pode usar SMTP direto aqui por segurança.
    // Normalmente chamaria uma API ou usaria EmailJS. Aqui simulamos um delay de 1s.
    setTimeout(() => {
      console.log("Enviando dados:", formData);
      setIsSending(false);
      setShowModal(true);
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      
      {/* Navbar */}
      <section className="bg-gray-50 py-4 sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <h3 className="font-bold text-2xl text-gray-900">💼 Portfolio</h3>
          <nav className="hidden md:flex gap-6">
            {['Competências', 'Projetos', 'Contato'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`} 
                 className="group relative text-gray-700 hover:text-purple-600 transition-colors duration-300 py-1">
                {item}
                {/* Efeito de sublinhado animado com Tailwind */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#737DF2] to-[#8E54E9] py-20 min-h-[50vh] flex items-center">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          <div className="text-white space-y-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Olá, sou um<br /> Especialista em <span className="text-yellow-300">Dados</span>
            </h1>
            <p className="text-xl opacity-90">Excel | Power BI | MySQL | Automação com Python</p>
            <p className="opacity-80">Transformo dados em insights valiosos e crio soluções automatizadas.</p>
            <div className="flex gap-4 pt-4">
              <a href="#projetos" className="bg-white text-purple-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition shadow-lg">Ver Projetos</a>
              <a href="#contato" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition">Entrar em Contato</a>
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
          <p className="text-gray-500">Ferramentas e tecnologias que domino</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsList.map((skill, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-transparent hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
              {/* Slide effect no footer do card */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-purple-600 to-blue-500 transition-all duration-300 group-hover:w-full"></div>
              
              <h4 className="font-bold text-xl text-purple-600 mb-2">{skill.title}</h4>
              <p className="text-sm text-gray-500 mb-4">{skill.description}</p>
              <ul className="space-y-2">
                {skill.items.map((item, idx) => (
                  <li key={idx} className="text-sm flex items-center gap-2">
                    <span className="text-green-500">✔</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projetos" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Projetos Destacados</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projectList.map((project, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 relative">
                 <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-purple-600 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                <h5 className="font-bold text-lg mb-2">{project.title}</h5>
                <p className="text-sm text-gray-500 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="bg-purple-50 text-purple-600 px-3 py-1 rounded-full text-xs font-semibold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section (Glassmorphism) */}
      <section id="contato" className="py-20 bg-gradient-to-br from-[#737DF2] to-[#8E54E9]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-2">Vamos Conversar?</h2>
          <p className="text-white/80 mb-12">Estou disponível para novos projetos e oportunidades.</p>

          <div className="flex justify-end">
            <div className="w-full md:w-5/12 bg-white/15 backdrop-blur-lg border border-white/30 rounded-3xl p-8 text-left shadow-2xl">
              <h4 className="text-white text-center font-bold mb-6">Entre em Contato</h4>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input 
                    type="text" name="name" required placeholder="Seu Nome" 
                    value={formData.name} onChange={handleChange}
                    className="w-full bg-white/10 border border-white/50 text-white placeholder-white/70 rounded-lg p-3 focus:outline-none focus:bg-white/20 transition"
                  />
                </div>
                <div>
                  <input 
                    type="email" name="email" required placeholder="Seu Email" 
                    value={formData.email} onChange={handleChange}
                    className="w-full bg-white/10 border border-white/50 text-white placeholder-white/70 rounded-lg p-3 focus:outline-none focus:bg-white/20 transition"
                  />
                </div>
                <div>
                  <textarea 
                    name="message" required rows={4} placeholder="Sua Mensagem" 
                    value={formData.message} onChange={handleChange}
                    className="w-full bg-white/10 border border-white/50 text-white placeholder-white/70 rounded-lg p-3 focus:outline-none focus:bg-white/20 transition"
                  ></textarea>
                </div>
                <button type="submit" disabled={isSending} className="w-full bg-white text-purple-600 font-bold py-3 rounded-full hover:bg-gray-100 transition disabled:opacity-70">
                  {isSending ? 'Enviando...' : 'Enviar Mensagem'}
                </button>
              </form>
            </div>
          </div>
          
          <footer className="mt-20 pt-8 border-t border-white/20 text-white/60 text-sm">
            © 2026 Pedro Henrique. Todos os direitos reservados.
          </footer>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 animate-in fade-in duration-300">
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl transform scale-100 transition-all">
            <div className="text-green-500 mb-4 flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-2 text-gray-800">Mensagem Enviada!</h3>
            <p className="text-gray-500 mb-6">Obrigado pelo contato. Responderei o mais breve possível.</p>
            <button onClick={() => setShowModal(false)} className="bg-purple-600 text-white px-6 py-2 rounded-full font-bold hover:bg-purple-700 transition">
              Beleza, entendi!
            </button>
          </div>
        </div>
      )}
    </div>
  );
}