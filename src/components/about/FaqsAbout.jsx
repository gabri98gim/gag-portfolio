import React, { useState } from "react";

// (Mantén aquí tu objeto CategoryIcons tal cual lo tenías)
const CategoryIcons = {
    // ... tus iconos ...
    "Web Development": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-primary h-6 w-6 opacity-70">
      <path d="M21 3C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21ZM20 11H4V19H20V11ZM20 5H4V9H20V5ZM11 6V8H9V6H11ZM7 6V8H5V6H7Z"></path>
    </svg>
  ),
  // ... resto de iconos (asegúrate de que tengan className="text-primary ...")
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState(null);

  // (Mantén aquí tu objeto skills con las respuestas del CV)
  const skills = {
     // ... tus textos ...
  };

  const toggleItem = (item) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="flex flex-col items-center px-4 text-left w-full">
      <div className="mx-auto w-full max-w-4xl">
        {/* Título: Usamos text-custom y shadow-cyan */}
        <h2 className="text-custom text-center text-4xl font-bold text-shadow-cyan mb-8">
          Sobre mí y mi trabajo
        </h2>
        
        <ul className="space-y-4 text-lg">
          {Object.entries(skills).map(([category, items]) => (
            <li key={category} className="w-full">
              <div
                onClick={() => toggleItem(category)}
                // CAMBIO IMPORTANTE: Usamos 'card' en vez de bg-gray-900
                className="card w-full cursor-pointer overflow-hidden rounded-2xl text-left transition-all hover:border-primary"
              >
                <div className="flex items-center gap-3 p-4">
                  {/* Si el icono está en el mapa, renderízalo, si no, uno por defecto */}
                  {CategoryIcons[category] || <div className="text-primary">🔹</div>}
                  
                  <div className="flex grow items-center justify-between gap-2">
                    <div className="max-w-[200px] min-w-0 overflow-hidden md:max-w-none">
                      {/* Texto del título: text-custom */}
                      <span className="block truncate text-lg text-custom font-bold">
                        {category}
                      </span>
                    </div>
                    {/* Flecha: text-primary */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={`h-6 w-6 shrink-0 transform text-primary transition-transform duration-300 ${
                        openItem === category ? "rotate-180" : ""
                      }`}
                    >
                      <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                    </svg>
                  </div>
                </div>

                <div
                  className={`px-4 transition-all duration-300 ease-in-out ${
                    openItem === category
                      ? "max-h-[500px] pb-4 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {/* Texto interior: text-muted para leer fácil */}
                  <p className="text-[0.9em] text-muted font-medium leading-relaxed">
                    {items}
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