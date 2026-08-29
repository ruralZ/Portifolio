import type { Project } from "../types";

const publicAsset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.split("/").map(encodeURIComponent).join("/")}`;

export const projects: Project[] = [
  {
    title: "Dashboard Analítico",
    description: "Relatório interativo desenvolvido no Power BI.",
    tags: ["Power BI", "Visualização de dados"],
    category: "Power BI",
    overview:
      "Dashboard criado para apresentar informações de forma clara, permitindo uma leitura rápida dos indicadores e das análises visuais.",
    images: [
      { src: publicAsset("Power BI/dashboard.png"), alt: "Prévia do dashboard analítico desenvolvido no Power BI" },
    ],
  },
  {
    title: "Áurea — Dashboard em Excel",
    description: "Planilha com painel e organização de produtos.",
    tags: ["Excel", "Dashboard", "Análise de dados"],
    category: "Excel",
    overview:
      "Projeto em Excel que reúne um painel visual e uma visão estruturada de produtos. Explore as telas para conhecer a organização da solução.",
    images: [
      { src: publicAsset("Excel/Aurea/dashboard.png"), alt: "Painel principal do projeto Áurea em Excel" },
      { src: publicAsset("Excel/Aurea/produtos.png"), alt: "Visão de produtos do projeto Áurea em Excel" },
    ],
  },
];
