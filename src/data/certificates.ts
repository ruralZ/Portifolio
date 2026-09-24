import type { Certificate } from "../types";

const publicAsset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.split("/").map(encodeURIComponent).join("/")}`;

export const certificates: Certificate[] = [
  {
    id: "power-bi",
    title: "Trilha Power BI",
    trackName: "Power BI",
    issuer: "Alura",
    credentialUrl: "https://cursos.alura.com.br/degree/certificate/6b1a833a-e96a-4a53-adf3-44b011f2e468",
    pdfUrl: publicAsset("certificados/power-bi.pdf"),
    issueDate: "07 de agosto de 2025",
    workload: "37 horas",
    coursesCount: 4,
    description: "Formação completa na trilha de Power BI pela Alura, englobando desde a construção de relatórios e ETL com Power Query até modelagem avançada de cálculos com DAX e boas práticas de visualização de dados.",
    tags: ["Power BI Desktop", "DAX", "Power Query", "ETL", "Dashboards Interativos", "Data Viz"],
    courses: [
      "Power BI Desktop: construindo meu primeiro dashboard",
      "Power BI Desktop: realizando ETL no Power Query",
      "Power BI: construindo cálculos com Dax",
      "Power BI: visualizando e analisando dados",
    ],
    pages: [
      {
        src: publicAsset("certificados/power-bi-page-1.png"),
        alt: "Certificado de Conclusão da Trilha Power BI - Pedro Henrique - Alura",
        title: "Certificado Oficial (Frente)",
        subtitle: "Documento oficial de certificação e validação da formação",
      },
      {
        src: publicAsset("certificados/power-bi-page-2.png"),
        alt: "Grade Curricular e Cursos Concluídos na Trilha Power BI - Alura",
        title: "Grade Curricular (Verso)",
        subtitle: "Relação detalhada de todos os 4 cursos concluídos na trilha",
      },
    ],
  },
  {
    id: "excel",
    title: "Trilha Excel",
    trackName: "Excel",
    issuer: "Alura",
    credentialUrl: "https://cursos.alura.com.br/degree/certificate/87489659-50fa-45b5-b5be-e7aab5cf38b3",
    pdfUrl: publicAsset("certificados/excel.pdf"),
    issueDate: "21 de janeiro de 2025",
    workload: "50 horas",
    coursesCount: 6,
    description: "Formação intensiva em Microsoft Excel pela Alura, cobrindo funções matemáticas e lógicas, gráficos dinâmicos, tabelas dinâmicas para análise estruturada e automação de rotinas com Macros.",
    tags: ["Excel Avançado", "Fórmulas & Filtros", "Tabelas Dinâmicas", "Gráficos Dinâmicos", "Macros", "Automação"],
    courses: [
      "Excel: domine o editor de planilhas",
      "Funções com Excel: operações matemáticas e filtros",
      "Recursos Visuais com Excel: explorando gráficos e formatos",
      "Excel: aprendendo lógica booleana e busca por valores",
      "Excel: utilizando tabelas dinâmicas e gráficos dinâmicos",
      "Excel: automatizando tarefas com Macros",
    ],
    pages: [
      {
        src: publicAsset("certificados/excel-page-1.png"),
        alt: "Certificado de Conclusão da Trilha Excel - Pedro Henrique - Alura",
        title: "Certificado Oficial (Frente)",
        subtitle: "Documento oficial de certificação e validação da formação",
      },
      {
        src: publicAsset("certificados/excel-page-2.png"),
        alt: "Grade Curricular e Cursos Concluídos na Trilha Excel - Alura",
        title: "Grade Curricular (Verso)",
        subtitle: "Relação detalhada de todos os 6 cursos concluídos na trilha",
      },
    ],
  },
];
