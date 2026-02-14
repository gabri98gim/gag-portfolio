// --- IMPORTACIÓN DE TUS IMÁGENES REALES ---
import cineImg from "../assets/img-projects/cine.png";
import factosImg from "../assets/img-projects/factos.png";
import italianoImg from "../assets/img-projects/italiano.png";
import loveoImg from "../assets/img-projects/loveo.png";

export const proyectos = [
  {
    titulo: "Factos",
    descripcion:
      "🏆 GANADOR CodeJam: Premio a Mejor Diseño y Usabilidad. Trivia interactiva desarrollada bajo presión en hackathon, destacando por su interfaz intuitiva y pulida.",
    imagen: factosImg.src, 
    tecnologias: ["React", "Tailwind", "Vite"],
    demo: "https://factos-three.vercel.app/",
    codigo: "https://github.com/gabri98gim/factos",
    categoria: "frontend",
    size: "large",
  },
  {
    titulo: "Your Directory",
    descripcion:
      "Plataforma de cine con consumo de API en tiempo real. Permite explorar tendencias, buscar películas y ver detalles detallados.",
    imagen: cineImg.src, 
    tecnologias: ["HTML", "CSS", "JavaScript", "API REST"],
    demo: "https://proyecto-cine-your-directory.vercel.app/",
    codigo: "https://github.com/gabri98gim/proyecto-cine-your-directory",
    categoria: "frontend",
    size: "standard",
  },
  {
    titulo: "Ristorante Italiano",
    descripcion:
      "E-commerce gastronómico con diseño 'Pixel Perfect'. Gestión de carta digital y carrito de compras con una estética cuidada y apetecible.",
    imagen: italianoImg.src, 
    tecnologias: ["React", "Tailwind", "Responsive"],
    demo: "https://ecommerce-ristorante-italiano.vercel.app/",
    codigo: "https://github.com/gabri98gim/ecommerce-ristorante-italiano",
    categoria: "frontend",
    size: "standard",
  },
  {
    titulo: "Lo Veo y Te Digo",
    descripcion:
      "Blog de reseñas multimedia. Un espacio personal para crítica de cine y series con un diseño editorial moderno y limpio.",
    imagen: loveoImg.src,
    tecnologias: ["HTML", "CSS", "JavaScript"],
    demo: "https://lo-veo-y-te-digo.vercel.app/",
    codigo: "https://github.com/gabri98gim/lo-veo-y-te-digo",
    categoria: "frontend",
    size: "standard",
  },
];