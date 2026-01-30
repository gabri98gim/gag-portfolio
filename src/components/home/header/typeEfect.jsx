import React from "react";
import Typewriter from "typewriter-effect";

const TypewriterComponent = () => {
  return (
    <div className="notranslate mt-2 text-3xl md:text-5xl font-bold bg-linear-to-r from-[#2c77f2] to-[#8d4cdbd8] bg-clip-text text-transparent drop-shadow-sm h-[50px]">
      <Typewriter
        options={{
          strings: [
            "Front End",
            "Back End",
            "Full Stack",
            "WordPress",
            "Diseño Gráfico",
            "Realización de Audiovisuales",
          ],
          autoStart: true,
          loop: true,
          delay: 50,
          deleteSpeed: 30,
        }}
      />
    </div>
  );
};

export default TypewriterComponent;
