// 1. IMPORTAMOS TU FOTO (Asegúrate de que el nombre coincida)
import cineImg from "../assets/img-projects/cine.png";

export const proyectos = [
  {
    titulo: "Your Directory",
    descripcion:
      "Plataforma interactiva de cine. Permite explorar tendencias, buscar películas y ver detalles en tiempo real consumiendo una API externa.",
    imagen: cineImg.src, // <--- Aquí Astro optimiza tu imagen automáticamente
    tecnologias: ["HTML", "CSS", "JavaScript", "API REST"],
    demo: "https://proyecto-cine-your-directory.vercel.app/",
    codigo: "https://github.com/gabri98gim/proyecto-cine-your-directory",
    categoria: "frontend",
  },
  {
    titulo: "Cinematic Portfolio",
    descripcion:
      "Una experiencia web inmersiva con temática cinematográfica. Diseño moderno con 'Glassmorphism', animaciones fluidas y una paleta de colores eléctrica.",
    imagen:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800",
    tecnologias: ["Astro", "TailwindCSS", "React"],
    demo: "#",
    codigo: "#",
    categoria: "design",
  },
  {
    titulo: "Próximamente",
    descripcion: "Trabajando en nuevas ideas y conceptos creativos.",
    imagen:
      "https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&q=80&w=800",
    tecnologias: ["WIP", "Loading..."],
    demo: "#",
    codigo: "#",
    categoria: "frontend",
  },
];
