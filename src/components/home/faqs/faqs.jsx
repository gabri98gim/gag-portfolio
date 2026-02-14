import React, { useState } from "react";

const SkillsList = () => {
  const [openItem, setOpenItem] = useState(null);

  const skills = {
    "¿Qué tecnologías uso?": [
      "Domino el desarrollo frontend con HTML, CSS, JavaScript y TypeScript. Utilizo frameworks y librerías modernas como React, Next.js y Astro para crear interfaces rápidas. También manejo el diseño con Tailwind CSS y la gestión de proyectos con Git y WordPress.",
    ],
    "Mi Experiencia": [
      "Vengo del mundo del diseño gráfico y la realización audiovisual, lo que me otorga una visión polivalente única. Actualmente me formo como desarrollador Full Stack, combinando mi capacidad técnica en el código con mi experiencia previa en edición de video (AVID, Premiere) y diseño editorial.",
    ],
    "Mi formación": [
      "Soy Técnico Superior en Diseño y Edición de Publicaciones Impresas y Multimedia, y Técnico Superior en Realización de Audiovisuales. He complementado mi perfil con formación en el programa Pro-In TIC en Desarrollo Web Front End (300h) y Desarrollo de Software con Metodologías Ágiles.",
    ],
    "¿Cómo trabajo en equipo?": [
      "Me considero un profesional comunicativo y flexible, acostumbrado a colaborar en entornos creativos y técnicos. Entiendo que un buen producto digital nace del compromiso grupal y la responsabilidad individual, aportando siempre una actitud resolutiva y puntual.",
    ],
    "Metodologías Ágiles": [
      "Cuento con formación específica en Metodologías Ágiles, especialmente en SCRUM (100h). Estoy habituado a trabajar con ciclos de desarrollo dinámicos, priorizando tareas de forma eficiente y participando activamente en el flujo de trabajo del equipo para optimizar resultados.",
    ],
  };

  const toggleItem = (item) => {
    setOpenItem(openItem === item ? null : item);
  };

  const icons = {
    "¿Qué tecnologías uso?": (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M24 12L18.3431 17.6569L16.9289 16.2426L21.1716 12L16.9289 7.75736L18.3431 6.34315L24 12ZM2.82843 12L7.07107 16.2426L5.65685 17.6569L0 12L5.65685 6.34315L7.07107 7.75736L2.82843 12ZM9.78845 21H7.66009L14.2116 3H16.3399L9.78845 21Z"></path>
      </svg>
    ),
    "Mi Experiencia": (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M7 5V2C7 1.44772 7.44772 1 8 1H16C16.5523 1 17 1.44772 17 2V5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V6C2 5.44772 2.44772 5 3 5H7ZM4 15V19H20V15H4ZM4 13H20V7H4V13ZM9 3V5H15V3H9ZM11 11H13V13H11V11Z"></path>
      </svg>
    ),
    "Mi formación": (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M12 2L0 9L12 16L22 10.1667V17.5H24V9L12 2ZM3.99902 13.4905V18.0001C3.99902 20.667 7.99902 22.0001 11.999 22.0001C15.999 22.0001 19.999 20.667 19.999 18.0001V13.4905L11.999 17.6501L3.99902 13.4905Z"></path>
      </svg>
    ),
    "¿Cómo trabajo en equipo?": (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M2 22C2 17.5817 5.58172 14 10 14C14.4183 14 18 17.5817 18 22H16C16 18.6863 13.3137 16 10 16C6.68629 16 4 18.6863 4 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315 1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM10 11C12.21 11 14 9.21 14 7C14 4.79 12.21 3 10 3C7.79 3 6 4.79 6 7C6 9.21 7.79 11 10 11ZM18.2837 14.7028C21.0644 15.9561 23 18.752 23 22H21C21 19.564 19.5483 17.4671 17.4628 16.5271L18.2837 14.7028ZM17.5962 3.41321C19.5944 4.23703 21 6.20361 21 8.5C21 10.7964 19.5944 12.763 17.5962 13.5868L16.8197 11.7639C18.1236 11.1847 19 9.9395 19 8.5C19 7.0605 18.1236 5.81533 16.8197 5.23606L17.5962 3.41321Z"></path>
      </svg>
    ),
    "Metodologías Ágiles": (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M12 1L21.5 6.5V17.5L12 23L2.5 17.5V6.5L12 1ZM12 3.311L4.5 7.65311V16.3469L12 20.689L19.5 16.3469V7.65311L12 3.311ZM12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16ZM12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"></path>
      </svg>
    ),
  };

  return (
    <div className="flex flex-col items-center px-6 text-left py-28">
      <div className="mx-auto w-full max-w-3xl">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <span
              className="inline-block w-12 h-[3px] rounded-full"
              style={{
                background: "linear-gradient(90deg, var(--color-primary), var(--color-secondary))",
              }}
            ></span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-extrabold tracking-tight"
            style={{ color: "var(--color-text)", letterSpacing: "-0.03em" }}
          >
            Sobre mí y mi{" "}
            <span style={{ color: "var(--color-primary)" }}>trabajo</span>
          </h2>
        </div>
        <ul className="space-y-3">
          {Object.entries(skills).map(([category, items]) => (
            <li key={category} className="w-full">
              <div
                onClick={() => toggleItem(category)}
                className="w-full cursor-pointer overflow-hidden rounded-2xl text-left transition-all duration-300"
                style={{
                  backgroundColor: "var(--color-card)",
                  border: "1px solid var(--color-border)",
                  ...(openItem === category
                    ? { borderColor: "var(--color-border-hover)" }
                    : {}),
                }}
                onMouseEnter={(e) => {
                  if (openItem !== category) {
                    e.currentTarget.style.borderColor = "var(--color-border-hover)";
                    e.currentTarget.style.backgroundColor = "var(--color-card-hover)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (openItem !== category) {
                    e.currentTarget.style.borderColor = "var(--color-border)";
                    e.currentTarget.style.backgroundColor = "var(--color-card)";
                  }
                }}
              >
                <div className="flex items-center gap-4 p-5">
                  <div
                    className="shrink-0 rounded-xl p-2.5 transition-colors"
                    style={{
                      backgroundColor: openItem === category
                        ? "var(--color-primary)"
                        : "color-mix(in srgb, var(--color-primary) 10%, transparent)",
                      color: openItem === category ? "white" : "var(--color-primary)",
                    }}
                  >
                    {icons[category]}
                  </div>
                  <div className="flex grow items-center justify-between gap-2">
                    <span
                      className="text-base font-bold"
                      style={{ color: "var(--color-text)" }}
                    >
                      {category}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={`h-5 w-5 shrink-0 transform transition-transform duration-300 ${
                        openItem === category ? "rotate-180" : ""
                      }`}
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                    </svg>
                  </div>
                </div>

                <div
                  className={`px-5 transition-all duration-300 ${
                    openItem === category
                      ? "max-h-[500px] pb-5 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p
                    className="text-sm leading-relaxed pl-12"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {skills[category]}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default SkillsList;
