// content/projects.ts

export type Project = {
  slug: string;
  title: { es: string; en: string };
  summary: { es: string; en: string };
  tags: string[];
  coverImage: string;
  video?: string; // (opcional)
  content?: {
      es: string[]
      en: string[]
  }
  contentImages?: string[]
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
    video: "/videos/clasificadora.mp4",
  },
  {
    slug: "bascula-inteligente-cebadero-terneros",
    title: {
      es: "Báscula inteligente para cebadero de terneros",
      en: "Smart weighing system for calf feedlots",
    },
    summary: {
    es: "Sistema de pesaje inteligente para cebaderos de terneros que permite realizar seguimiento automático del crecimiento mediante identificación RFID y generación de curvas de pesaje individuales.",
    en: "Smart weighing system for calf feedlots that automatically tracks animal growth through RFID identification and individual weight curves.",
    },
    tags: ["Pesaje", "RFID", "Crecimiento", "Automatización"],
    coverImage: "/images/bascula-inteligente-terneros.jpg",
    content: {
      es: [
        "El sistema permite realizar pesajes automáticos cada vez que el animal acude libremente a comer o a beber agua, generando curvas de crecimiento individuales para cada animal identificado mediante crotal electrónico.",
    
        "Estas curvas permiten detectar cuándo el animal deja de ganar peso, ayudando al ganadero a determinar el momento óptimo de salida a venta o matadero.",
    
        "El sistema puede consultarse de forma remota, permitiendo visualizar la evolución de cada animal o lote desde ordenador o móvil.",
    
        "Opcionalmente el sistema puede incorporar una puerta selectora automática que permite clasificar animales según diferentes criterios de peso o estado productivo."
      ],

      en: [
        "The system automatically records weight each time the animal freely goes to eat or drink water, generating individual growth curves for each animal identified through electronic ear tags.",
    
        "These growth curves help farmers detect when animals stop gaining weight and determine the optimal moment for sale or slaughter.",
    
        "The system can be accessed remotely, allowing farmers to monitor the evolution of each animal or group from a computer or mobile device.",
    
        "Optionally the system can include an automatic sorting gate to classify animals according to weight ranges or production status."
      ]
    },
    contentImages: [
    "/images/curva-crecimiento-terneros.jpg"
    ]
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
    video: "/videos/encamadora.mp4",
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