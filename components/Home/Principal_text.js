"use client";
import dynamic from "next/dynamic";
import { Button } from "@heroui/button";
import { Github, Linkedin, ExternalLink } from "lucide-react";
import { useState } from "react";
import { Navbarhome } from "./Navbarhome";
import ResumeModal from "./ResumeModal";
import MenuGrid from "./MenuGrid";

const Typewriter = dynamic(() => import("typewriter-effect"), {
  ssr: false,
});

export function Principal_text() {
  const [isExiting, setIsExiting] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleReadMore = () => {
    setIsExiting(true);
    setTimeout(() => {
      setShowMenu(true);
    }, 1000);
  };

  const handleHomeClick = () => {
    setShowMenu(false);
    setIsExiting(false);
  };

  if (showMenu) {
    return <MenuGrid onHomeClick={handleHomeClick} />;
  }

  return (
    <div
      className={`flex flex-col items-center justify-center h-screen bg-transparent transition-all duration-1000 ${
        isExiting ? "opacity-0 translate-y-[-50px]" : "opacity-100"
      }`}
    >
      {/* Título con animación */}
      <h1 className="text-white text-5xl md:text-7xl lg:text-9xl font-bold mb-16 animate-fade-up opacity-0 animate-delay-200 animate-duration-1000 animate-fill-forwards">
        <Typewriter
          options={{
            strings: [
              "HOLA!",
              "SOY",
              "DEVELOPER",
              "FRONTEND",
              "BACKEND",
              "JUNIOR",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      </h1>

      {/* Íconos de redes sociales */}
      <div className="flex space-x-6 md:space-x-12 mb-12">
        <a
          href="www.linkedin.com/in/santiago-ramírez-forero"
          className="text-white hover:text-gray-300 transition-colors animate-slide-in-left opacity-0 animate-delay-700 animate-duration-700 animate-fill-forwards"
        >
          <Linkedin size={32} />
        </a>
        <a
          href="https://github.com/SANTIAGORF24"
          className="text-white hover:text-gray-300 transition-colors animate-slide-in-left opacity-0 animate-delay-900 animate-duration-700 animate-fill-forwards"
        >
          <Github size={32} />
        </a>
        <a
          href="https://es.fiverr.com/users/santiagorf24"
          className="text-white hover:text-gray-300 transition-colors animate-slide-in-left opacity-0 animate-delay-1100 animate-duration-700 animate-fill-forwards"
        >
          <ExternalLink size={32} />
        </a>
        <a className="text-white hover:text-gray-300 transition-colors animate-slide-in-left opacity-0 animate-delay-1300 animate-duration-700 animate-fill-forwards">
          <ResumeModal />
        </a>
      </div>

      {/* Botón de "Leer más" */}
      <Button
        variant="outline"
        className="text-white border-2 border-white hover:bg-white hover:text-black transition-colors px-8 py-2 animate-scale-up opacity-0 animate-delay-1300 animate-duration-700 animate-fill-forwards"
        onClick={handleReadMore}
      >
        Leer más
      </Button>

      {/* Información en la esquina inferior derecha */}
      <div className="fixed bottom-4 right-4 text-white text-sm md:text-base opacity-70">
        <Typewriter
          options={{
            strings: [
              "Santiago Ramírez Forero",
              "santiforero57@gmail.com",
              "+57 3154852832",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      </div>
    </div>
  );
}
