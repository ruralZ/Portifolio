import type { Project } from "../types";

const publicAsset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.split("/").map(encodeURIComponent).join("/")}`;

export const projects: Project[] = [
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
