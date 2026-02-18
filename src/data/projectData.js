import cineImg from "../assets/img-projects/cine.png";
import factosImg from "../assets/img-projects/factos.png";
import italianoImg from "../assets/img-projects/italiano.png";
import loveoImg from "../assets/img-projects/loveo.png";
import efimeraThumb from "../assets/img-projects/Efimera.png";
import excusasThumb from "../assets/img-projects/Excusas.png";

// --- IMPORTACIÓN DE DISEÑOS (PDFos finales) ---
import bbvaPdf from "../assets/img-diseños-pdf/BBVA Final.pdf";
import bannerCarpetasPdf from "../assets/img-diseños-pdf/Banner Carpetas y Solapas Publi.pdf";
import bannerDescuentoPdf from "../assets/img-diseños-pdf/Banner Descuento.pdf";
import bannerImanPdf from "../assets/img-diseños-pdf/Banner Iman.pdf";
import boutiquePdf from "../assets/img-diseños-pdf/Boutique.pdf";
import carpetasPubliPdf from "../assets/img-diseños-pdf/Carpetas Pretroqueladas Publi.pdf";
import carpetasCorpPdf from "../assets/img-diseños-pdf/Carpetas Pretroqueladas.pdf";
import carpetasWebPdf from "../assets/img-diseños-pdf/Carpetas y Solapas Web.pdf";
import cervezaPdf from "../assets/img-diseños-pdf/Cerveza.pdf";
import chamaleonPdf from "../assets/img-diseños-pdf/Chamaleon.pdf";
import circoPdf from "../assets/img-diseños-pdf/Circo.pdf";
import galeriaPdf from "../assets/img-diseños-pdf/Colores vivos-Poco Gasto Galeria de Arte.pdf";
import puzzlesPdf from "../assets/img-diseños-pdf/Colores vivos-Poco Gasto Puzzles.pdf";
import corePdf from "../assets/img-diseños-pdf/Core - Tienda Online.pdf";
import packagingPdf from "../assets/img-diseños-pdf/Dato Variable Caja Final.pdf";
import ecoPdf from "../assets/img-diseños-pdf/Eco-Logic.pdf";
import trinidadPdf from "../assets/img-diseños-pdf/Estudio Trinidad.pdf";
import herboristeriaPdf from "../assets/img-diseños-pdf/Herboristeria.pdf";
import imanV1Pdf from "../assets/img-diseños-pdf/Iman 1 version.pdf";
import impricavPdf from "../assets/img-diseños-pdf/Impricav.pdf";
import repairPdf from "../assets/img-diseños-pdf/SmartPhone Repair.pdf";
import videojuegosPdf from "../assets/img-diseños-pdf/Tienda Videojuegos.pdf";
import austriaPdf from "../assets/img-diseños-pdf/Visit Austria.pdf";
import yummyPdf from "../assets/img-diseños-pdf/Yummy Delivery.pdf";

export const proyectos = [
  // ══════════════════════════════════════════════════════════════════
  // 🖥️ PRIORIDAD TECH: FRONTEND / BACKEND / FULLSTACK
  // ══════════════════════════════════════════════════════════════════
  {
    titulo: "Factos",
    descripcion:
      "🏆 GANADOR CodeJam: Premio a Mejor Diseño y Usabilidad. Trivia interactiva desarrollada bajo presión en hackathon, destacando por su interfaz intuitiva y pulida.",
    imagen: factosImg,
    tecnologias: ["React", "Tailwind", "Vite"],
    demo: "https://factos-three.vercel.app/",
    codigo: "https://github.com/gabri98gim/factos",
    categoria: "frontend",
    size: "large",
  },
  {
    titulo: "Your Directory",
    descripcion: "Plataforma de cine con consumo de API en tiempo real. Exploración de tendencias y detalles multimedia.",
    imagen: cineImg,
    tecnologias: ["HTML", "CSS", "JavaScript", "API REST"],
    demo: "https://proyecto-cine-your-directory.vercel.app/",
    codigo: "https://github.com/gabri98gim/proyecto-cine-your-directory",
    categoria: "frontend",
    size: "standard",
    imagePosition: "left top",
  },
  {
    titulo: "Ristorante Italiano",
    descripcion: "E-commerce gastronómico con diseño 'Pixel Perfect' y gestión de carta digital.",
    imagen: italianoImg,
    tecnologias: ["React", "Tailwind", "Responsive"],
    demo: "https://ecommerce-ristorante-italiano.vercel.app/",
    codigo: "https://github.com/gabri98gim/ecommerce-ristorante-italiano",
    categoria: "frontend",
    size: "standard",
  },
  {
    titulo: "Lo Veo y Te Digo",
    descripcion: "Blog de reseñas multimedia con diseño editorial moderno y limpio.",
    imagen: loveoImg,
    tecnologias: ["HTML", "CSS", "JavaScript"],
    demo: "https://lo-veo-y-te-digo.vercel.app/",
    codigo: "https://github.com/gabri98gim/lo-veo-y-te-digo",
    categoria: "frontend",
    size: "large",
  },

  // ══════════════════════════════════════════════════════════════════
  // 🎬 REALIZACIÓN (Justo después de Tech)
  // ══════════════════════════════════════════════════════════════════
  {
    titulo: "EFÍMERA",
    descripcion:
      "Cortometraje | Dirección y Realización. Una exploración visual sobre la brevedad del tiempo y las emociones transitorias.",
    imagen: efimeraThumb,
    tecnologias: ["Realización", "Premiere Pro", "Post-producción"],
    demo: "https://drive.google.com/file/d/1M-O5qs3LGaorlImEn5_JABMNQb06PVmO/view?usp=sharing",
    codigo: "#",
    categoria: "realizacion",
    size: "standard",
    fit: "contain",
  },
  {
    titulo: "ACROMATOPSIA",
    descripcion:
      "Cortometraje | Realización y Edición. Un relato audiovisual que juega con la percepción del color y la realidad.",
    imagen: excusasThumb,
    tecnologias: ["Realización", "AVID", "Color Grading"],
    demo: "https://drive.google.com/file/d/1oFFCmleOwAQiH7b4fMs_hJnUpoYdnmMl/view?usp=sharing",
    codigo: "#",
    categoria: "realizacion",
    size: "standard",
    fit: "contain",
  },

  // ══════════════════════════════════════════════════════════════════
  // 🎨 DISEÑO GRÁFICO (Resto)
  // ══════════════════════════════════════════════════════════════════
  {
    titulo: "Bodegas Lagunilla",
    descripcion: "Diseño de etiqueta y branding para vinos riojanos selectos de Bodegas Lagunilla.",
    imagen: bbvaPdf,
    tecnologias: ["Suite Adobe"],
    demo: bbvaPdf,
    codigo: "#",
    categoria: "diseno",
    size: "standard",
    imagePosition: "center",
    fit: "contain",
  },
  {
    titulo: "Boutique Creative",
    descripcion: "Branding y diseño visual para boutique de moda. Enfoque en elegancia y minimalismo.",
    imagen: boutiquePdf,
    tecnologias: ["Suite Adobe"],
    demo: boutiquePdf,
    codigo: "#",
    categoria: "diseno",
    size: "standard",
  },
  {
    titulo: "Etiqueta Cerveza",
    descripcion: "Diseño de packaging para cerveza artesanal. Estética visual llamativa para producto premium.",
    imagen: cervezaPdf,
    tecnologias: ["Suite Adobe"],
    demo: cervezaPdf,
    codigo: "#",
    categoria: "diseno",
    size: "standard",
  },
  {
    titulo: "Yummy Delivery UI",
    descripcion: "Prototipo de interfaz para aplicación de comida a domicilio con foco en UX.",
    imagen: yummyPdf,
    tecnologias: ["Suite Adobe"],
    demo: yummyPdf,
    codigo: "#",
    categoria: "diseno",
    size: "standard",
  },
  {
    titulo: "Eco-Logic branding",
    descripcion: "Identidad visual para consultoría sostenible. Transmite confianza y compromiso ambiental.",
    imagen: ecoPdf,
    tecnologias: ["Suite Adobe"],
    demo: ecoPdf,
    codigo: "#",
    categoria: "diseno",
    size: "standard",
  },
  {
    titulo: "Cartel Circo",
    descripcion: "Diseño publicitario para eventos de gran formato. Composición dinámica y colorida.",
    imagen: circoPdf,
    tecnologias: ["Suite Adobe"],
    demo: circoPdf,
    codigo: "#",
    categoria: "diseno",
    size: "standard",
  },
  {
    titulo: "Chamaleon Logo",
    descripcion: "Creación de logotipo y bases de identidad visual versátil para marca creativa.",
    imagen: chamaleonPdf,
    tecnologias: ["Suite Adobe"],
    demo: chamaleonPdf,
    codigo: "#",
    categoria: "diseno",
    size: "standard",
    imagePosition: "center",
    fit: "contain",
  },
  {
    titulo: "UI Tienda Gaming",
    descripcion: "Interfaz de usuario para e-commerce de videojuegos con estética gamer moderna.",
    imagen: videojuegosPdf,
    tecnologias: ["Suite Adobe"],
    demo: videojuegosPdf,
    codigo: "#",
    categoria: "diseno",
    size: "standard",
  },
  {
    titulo: "SmartPhone UI",
    descripcion: "Interfaces limpias para servicios de reparación técnica con alta usabilidad.",
    imagen: repairPdf,
    tecnologias: ["Suite Adobe"],
    demo: repairPdf,
    codigo: "#",
    categoria: "diseno",
    size: "standard",
    fit: "contain",
  },
  {
    titulo: "Herboristería Ordaz",
    descripcion: "Identidad visual y logotipo para herboristería tradicional con un toque moderno y natural.",
    imagen: herboristeriaPdf,
    tecnologias: ["Suite Adobe"],
    demo: herboristeriaPdf,
    codigo: "#",
    categoria: "diseno",
    size: "standard",
    imagePosition: "center",
    fit: "contain",
  },
  {
    titulo: "Visit Austria",
    descripcion: "Diseño editorial y maquetación de brochure turístico con fotografía premium.",
    imagen: austriaPdf,
    tecnologias: ["Suite Adobe"],
    demo: austriaPdf,
    codigo: "#",
    categoria: "diseno",
    size: "standard",
    imagePosition: "center",
    fit: "contain",
  },
  {
    titulo: "Carpeta Corporativa",
    descripcion: "Diseño técnico de carpetas pretroqueladas para papelería de empresa.",
    imagen: carpetasCorpPdf,
    tecnologias: ["Suite Adobe"],
    demo: carpetasCorpPdf,
    codigo: "#",
    categoria: "diseno",
    size: "standard",
  },
  {
    titulo: "Galería de Arte UI",
    descripcion: "Proyecto de diseño para plataforma de arte digital con colores vivos.",
    imagen: galeriaPdf,
    tecnologias: ["Suite Adobe"],
    demo: galeriaPdf,
    codigo: "#",
    categoria: "diseno",
    size: "standard",
  },
  {
    titulo: "Puzzles Branding",
    descripcion: "Adaptación de identidad visual para línea de productos de entretenimiento.",
    imagen: puzzlesPdf,
    tecnologias: ["Suite Adobe"],
    demo: puzzlesPdf,
    codigo: "#",
    categoria: "diseno",
    size: "standard",
  },
  {
    titulo: "Core Tienda Online",
    descripcion: "Diseño de interfaz para tienda online moderna centrado en conversión.",
    imagen: corePdf,
    tecnologias: ["Suite Adobe"],
    demo: corePdf,
    codigo: "#",
    categoria: "diseno",
    size: "standard",
  },
  {
    titulo: "Packaging Caja",
    descripcion: "Diseño de troquel y gráfica para packaging de producto con dato variable.",
    imagen: packagingPdf,
    tecnologias: ["Suite Adobe"],
    demo: packagingPdf,
    codigo: "#",
    categoria: "diseno",
    size: "standard",
  },
  {
    titulo: "Estudio Trinidad",
    descripcion: "Identidad visual minimalista para estudio de arquitectura y diseño.",
    imagen: trinidadPdf,
    tecnologias: ["Suite Adobe"],
    demo: trinidadPdf,
    codigo: "#",
    categoria: "diseno",
    size: "standard",
  },
  {
    titulo: "Imán Publicitario",
    descripcion: "Pieza gráfica para publicidad exterior y merchandising magnético.",
    imagen: bannerImanPdf,
    tecnologias: ["Suite Adobe"],
    demo: bannerImanPdf,
    codigo: "#",
    categoria: "diseno",
    size: "standard",
  },
  {
    titulo: "Banner Descuento",
    descripcion: "Creatividad para campañas de rebajas y promociones especiales.",
    imagen: bannerDescuentoPdf,
    tecnologias: ["Suite Adobe"],
    demo: bannerDescuentoPdf,
    codigo: "#",
    categoria: "diseno",
    size: "standard",
    imagePosition: "center",
    fit: "contain",
  },
  {
    titulo: "Logo Impricav",
    descripcion: "Rediseño de marca para empresa de artes gráficas e impresión.",
    imagen: impricavPdf,
    tecnologias: ["Suite Adobe"],
    demo: impricavPdf,
    codigo: "#",
    categoria: "diseno",
    size: "standard",
  },
];
