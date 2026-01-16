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
    slug: "clasificadora-multiples-salidas",
    title: {
      es: "Clasificadora de corderos u otro tipo de ganado con múltiples salidas",
      en: "Multi-exit sorter for lambs and other livestock",
    },
    summary: {
      es: "Clasificación por peso y RFID (crotal, bolo, inyectable electrónico) con puertas neumáticas y registro de datos.",
      en: "Weight-based and RFID identification sorting (ear tag, bolus, injectable electronic tag) with pneumatic gates and data logging.",
    },
  tags: ["Pesaje", "RFID", "Automatización", "Neumática"],
  coverImage: "/images/clasificadora-ganado-multiples-salidas.jpg",
  },
  {
    slug: "bascula-digital-ganado",
    title: {
      es: "Báscula digital para ganado",
      en: "Digital livestock scale",
    },
    summary: {
      es: "Báscula de precisión con estructura robusta y transmisión de datos.",
      en: "Precision livestock scale with robust structure and data transmission.",
    },
    tags: ["Pesaje", "Ganado", "Automatización"],
    coverImage: "/images/bascula-digital-ganado.jpg",
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
  {
    slug: "estaciones-alimentacion-individual-vacuno",
    title: {
      es: "Estaciones de alimentación individual para vacuno",
      en: "Individual feeding stations for cattle",
    },
    summary: {
      es: "Dosificación individualizada e identificación por RFID (crotal o collar electrónico) con registro de consumo, peso del animal y control de acceso.",
      en: "Individualized feeding with RFID identification (ear tag or electronic collar), including feed intake tracking, animal weight recording, and access control.",
    },
    tags: ["Alimentación", "Dosificación", "RFID", "Automatización"],
    coverImage: "/images/estaciones-vacuno.jpg",
  },
];
