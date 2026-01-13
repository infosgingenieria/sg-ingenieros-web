// content/projects.ts

// Define el tipo de proyecto para TypeScript (opcional pero recomendable)
export type Project = {
  slug: string;
  title: { es: string; en: string };
  summary: { es: string; en: string };
  tags: string[];
  coverImage: string; // Ruta de la imagen dentro de /public/images/
};

// Lista de proyectos. Puedes añadir tantos como quieras.
export const projects: Project[] = [
  {
    slug: "clasificadora-corderos-6-salidas",
    title: {
      es: "Clasificadora de corderos 6 salidas",
      en: "Lamb sorter – 6 exits",
    },
    summary: {
      es: "Clasificación por peso con puertas neumáticas y registro de datos.",
      en: "Weight-based sorting with pneumatic gates and data logging.",
    },
    tags: ["Pesaje", "Automatización", "Neumática"],
    coverImage: "/images/proyecto-1.jpg", // asegúrate de tener esta imagen en public/images/
  },
  // Ejemplo adicional:
  {
    slug: "bascula-digital-ganado",
    title: {
      es: "Báscula digital para ganado",
      en: "Digital scale for livestock",
    },
    summary: {
      es: "Báscula de precisión con transmisión de datos en tiempo real.",
      en: "Precision scale with real-time data transmission.",
    },
    tags: ["Pesaje", "IoT"],
    coverImage: "/images/proyecto-2.jpg",
  },
  // Añade aquí más objetos con tus proyectos reales…
];
