import type { Project } from "../types";

const publicAsset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.split("/").map(encodeURIComponent).join("/")}`;

export const projects: Project[] = [
  {
    title: "Aurya",
    description: "Sistema web de gestão desenvolvido para clínicas de estética, integrando agenda, clientes, serviços, financeiro, metas e dashboards.",
    tags: ["Node.js", "Full Stack", "Web"],
    category: "Programação",
    overview:
      "Aurya é um sistema web de gestão desenvolvido para clínicas de estética, reunindo recursos para gerenciamento de agenda, clientes, serviços, financeiro, metas e dashboards em uma única plataforma. O projeto foi desenvolvido com auxílio de ferramentas de IA, com participação no planejamento, definição das funcionalidades, estruturação, testes, ajustes e evolução do produto.",
    features: [
      "Dashboard com indicadores de faturamento, clientes ativos, agendamentos e ticket médio",
      "Agenda completa com visualização de atendimentos, filtros rápidos e status",
      "Gestão de clientes com perfis, histórico de procedimentos e importação via CSV",
      "Controle financeiro de movimentações e acompanhamento de metas mensais",
    ],
    roleNote:
      "Desenvolvido com auxílio de ferramentas de inteligência artificial. Minha atuação concentrou-se no planejamento do produto, definição da arquitetura funcional, estruturação dos fluxos, testes, validação de usabilidade e refinamento das telas e recursos.",
    liveUrl: "https://www.aurya.dev.br",
    images: [
      {
        src: publicAsset("site/dashboard.png"),
        alt: "Painel de controle e dashboard de indicadores do sistema Aurya",
        caption: "Dashboard gerencial com métricas de faturamento, total de clientes, agendamentos do dia e gráficos de evolução.",
      },
      {
        src: publicAsset("site/agenda.png"),
        alt: "Visualização do módulo de agenda e atendimentos do sistema Aurya",
        caption: "Módulo de agendamentos com horários, serviços vinculados, atalhos de contato e status de cada cliente.",
      },
      {
        src: publicAsset("site/clientes.png"),
        alt: "Visualização do módulo de gestão de clientes do sistema Aurya",
        caption: "Gestão e perfis de clientes, exibindo gasto total acumulado, agendamentos realizados e importação por CSV.",
      },
    ],
  },
  {
    title: "Dashboard Analítico",
    description: "Relatório interativo desenvolvido no Power BI.",
    tags: ["Power BI", "Visualização de dados"],
    category: "Dados & BI",
    overview: "Dashboard criado para apresentar informações de forma clara, permitindo uma leitura rápida dos indicadores e das análises visuais.",
    images: [{ src: publicAsset("Power BI/dashboard.png"), alt: "Prévia do dashboard analítico desenvolvido no Power BI" }],
  },
  {
    title: "Dashboard de Vendas de Jogos",
    description: "Painel no Power BI para acompanhar receita, vendas, jogos e regiões.",
    tags: ["Power BI", "Dashboard", "Análise de dados"],
    category: "Dados & BI",
    overview: "Dashboard desenvolvido para visualizar indicadores de vendas de jogos, receita líquida ao longo do tempo, formas de pagamento, plataformas e regiões.",
    images: [{ src: publicAsset("Power BI/dashboard_jogos.png"), alt: "Dashboard de vendas de jogos desenvolvido no Power BI" }],
  },
  {
    title: "Áurea — Dashboard em Excel",
    description: "Planilha com painel e organização de produtos.",
    tags: ["Excel", "Dashboard", "Análise de dados"],
    category: "Dados & BI",
    overview: "Projeto em Excel que reúne um painel visual e uma visão estruturada de produtos. Explore as telas para conhecer a organização da solução.",
    images: [
      { src: publicAsset("Excel/Aurea/dashboard.png"), alt: "Painel principal do projeto Áurea em Excel" },
      { src: publicAsset("Excel/Aurea/produtos.png"), alt: "Visão de produtos do projeto Áurea em Excel" },
    ],
  },
];
