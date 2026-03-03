// content/projects.ts

export type Project = {
  slug: string;
  title: { es: string; en: string };

  // Texto corto para tarjetas
  summary?: { es?: string; en?: string };

  // Texto algo más largo (fallback)
  description?: { es?: string; en?: string };

  tags?: string[];
  coverImage?: string; // Ruta dentro de /public

  location?: string;
  year?: string;

  // Contenido largo opcional (detalle)
  content?: { es?: string[]; en?: string[] };
};

// ✅ Proyectos (visual y textos)
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
];

// --- helpers robustos para slug ---

export function normalizeSlug(input: string) {
  return (input || "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\- ]/g, "")
    .replace(/\s+/g, "-")
    .replace(/\-+/g, "-");
}

export function getProjectBySlug(slug: string) {
  const raw = decodeURIComponent(slug || "").trim().replace(/\/+$/, "");
  const target = normalizeSlug(raw);

  return (
    projects.find((p) => normalizeSlug(p.slug) === target) ??
    projects.find((p) => (p.slug || "").trim() === raw)
  );
}