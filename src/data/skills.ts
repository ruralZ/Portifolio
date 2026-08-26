import type { Skill } from "../types";

// 2. Dados (Simulando o banco)
export const skills: Skill[] = [
    { title: "Excel Avançado", description: "Domínio completo em fórmulas complexas.", items: ["Fórmulas Avançadas", "Tabelas Dinâmicas", "VBA e Macros"] },
    { title: "Power BI", description: "Criação de dashboards interativos.", items: ["DAX", "Power Query", "Modelagem"] },
    { title: "PostgreSQL", description: "Design e gerenciamento de bancos relacionais.", items: ["Consultas Otimizadas", "Administração", "Modelagem"] },
    { title: "Google Sheets", description: "Planilhas colaborativas e automação de dados.", items: ["Fórmulas", "Tabelas Dinâmicas", "Apps Script"] },
    { title: "Python", description: "Automação e análise de dados.", items: ["Pandas", "Scripts", "Integrações"] }
];
