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
    slug: "clasificadora-corderos-multiples-salidas",
    title: {
      es: "Clasificadora de corderos múltiples salidas",
      en: "Lamb sorter – multiple exits",
    },
    summary: {
      es: "Clasificación por peso con puertas neumáticas y registro de datos.",
      en: "Weight-based sorting with pneumatic gates and data logging.",
    },
    tags: ["Pesaje", "Automatización", "Neumática"],
    coverImage: "/images/proyecto-1.jpg",
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
  {
    slug: "encamadora",
    title: {
      es: "Encamadora S&G – Carga y tritura paquetes de hasta 120×90",
      en: "S&G Bedding Machine – Straw Bale Loading and Shredding",
    },
    summary: {
      es: "Máquina encamadora para engancharse a la pala del tractor. Permite cargar y triturar paquetes de paja de hasta 120×90 cm para una distribución homogénea de la cama.",
      en: "Bedding machine designed to attach to a tractor loader. Loads and shreds straw bales up to 120×90 cm for uniform bedding distribution.",
    },
    tags: ["Encamado", "Paja", "Tractor"],
    coverImage: "/images/encamadora.jpg",
},
  // Añade aquí más objetos con tus proyectos reales…
];
