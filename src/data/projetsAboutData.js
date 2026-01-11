// Importamos la imagen igual que en el otro archivo
import cineImg from "../assets/img-projects/cine.png"; 

export const proyectos = [
  {
    titulo: "Your Directory",
    descripcion:
      "Plataforma interactiva de cine con API en tiempo real.", // He resumido la descripción un poco para la Home
    imagen: cineImg.src, 
    tecnologias: ["HTML", "CSS", "JavaScript", "API"],
    demo: "https://proyecto-cine-your-directory.vercel.app/",
    codigo: "https://github.com/gabri98gim/proyecto-cine-your-directory",
    categoria: "frontend",
  },
  {
    titulo: "Próximamente",
    descripcion:
      "Migrando más proyectos...",
    imagen: "https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&q=80&w=1000",
    tecnologias: ["WIP"],
    demo: "#",
    codigo: "#",
    categoria: "frontend",
  },
];