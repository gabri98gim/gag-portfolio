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
    titulo: "Próximamente",
    descripcion:
      "Trabajando en nuevos proyectos para mostrar mis habilidades en React y Astro.",
    imagen: "https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&q=80&w=1000",
    tecnologias: ["WIP", "Loading..."],
    demo: "#",
    codigo: "#",
    categoria: "frontend",
  },
];