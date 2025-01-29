"use client";
import React, { useState } from "react";
import { Card, CardBody, Button } from "@heroui/react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { Home } from "lucide-react";
import Projects from "@/components/Home/Projects"; // Importamos el componente
import dynamic from "next/dynamic";
import ExperienceEducation from "@/components/Home/ExperienceEducation";
import ContactSection from "@/components/Home/ContactSection"; // Importamos el componente
import AboutMeSection from "@/components/Home/AboutMeSection"; // Importamos el componente

// Dynamic import of Lottie
const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

// Import animation data directly
import animationData from "../../public/assets/docs/Pato.json";

const MenuGrid = ({ onHomeClick }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [activeView, setActiveView] = useState("menu"); // Estado para cambiar de vista

  const menuItems = [
    {
      title: "Proyectos",
      description: "Explora mi portafolio de proyectos",
      icon: "🚀",
    },
    {
      title: "Experiencia & Educación",
      description: "Mi trayectoria profesional",
      icon: "📚",
    },
    {
      title: "Sobre Mí",
      description: "Conoce más sobre quién soy",
      icon: "👋",
    },
    {
      title: "Contáctame",
      description: "¡Hablemos!",
      icon: "✉️",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      y: 50,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 100, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.5,
      y: 50,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
    hover: {
      scale: 1.05,
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
  };

  const handleExit = (nextView) => {
    setActiveView("exiting"); // Activar animación de salida
    setTimeout(() => setActiveView(nextView), 500); // Esperar la animación antes de cambiar de vista
  };

  const handleHomeClick = () => {
    setActiveView("exitingHome"); // Activar animación de salida para el botón Home
    setTimeout(() => {
      setActiveView("menu"); // Volver al menú después de la animación
      onHomeClick(); // Llamamos a la función pasada como prop
      setActiveView("menu"); // Asegurarse de que el estado se restablezca
    }, 500); // Duración de la animación de salida
  };

  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  // Client-side only Lottie component
  const LottieAnimation = () => {
    if (typeof window === "undefined") return null;

    return (
      <div className="fixed bottom-8 right-8">
        <Lottie options={lottieOptions} height={100} width={100} />
      </div>
    );
  };

  return (
    <div className="relative">
      {/* Botón de casa siempre visible */}
      <AnimatePresence>
        {activeView !== "projects" &&
          activeView !== "experienceEducation" &&
          activeView !== "contact" &&
          activeView !== "aboutMe" && ( // Añadimos la condición para ocultar el botón en AboutMeSection
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3 }}
              onClick={handleHomeClick}
              className="absolute top-8 left-8 text-white hover:text-gray-300 transition-colors z-10"
            >
              <Home size={32} />
            </motion.button>
          )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {activeView === "menu" && (
          <motion.div
            ref={ref}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={containerVariants}
            className="w-full max-w-4xl mx-auto p-6 h-dvh flex justify-center items-center"
          >
            <div className="grid grid-cols-2 gap-6" id="menu">
              {menuItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover="hover"
                  exit="exit"
                >
                  <Card className="bg-black/20 backdrop-blur-md border border-white/10 hover:bg-black/30 transition-all duration-300 overflow-hidden">
                    <CardBody className="flex flex-col items-center justify-center p-8 text-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : { scale: 0 }}
                        transition={{
                          delay: 0.3 + index * 0.1,
                          type: "spring",
                          stiffness: 200,
                        }}
                        className="text-4xl mb-4"
                      >
                        {item.icon}
                      </motion.div>
                      <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        animate={
                          isInView
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: -20 }
                        }
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="text-white text-xl font-bold mb-2"
                      >
                        {item.title}
                      </motion.h2>
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="text-white/70 mb-6 text-sm"
                      >
                        {item.description}
                      </motion.p>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={
                          isInView
                            ? { opacity: 1, y: 0 }
                            : { opacity: 0, y: 20 }
                        }
                        transition={{ delay: 0.6 + index * 0.1 }}
                      >
                        <Button
                          onClick={() => {
                            if (item.title === "Proyectos")
                              handleExit("projects");
                            if (item.title === "Experiencia & Educación")
                              handleExit("experienceEducation");
                            if (item.title === "Contáctame")
                              handleExit("contact");
                            if (item.title === "Sobre Mí")
                              handleExit("aboutMe"); // Añadimos la condición para "Sobre Mí"
                          }}
                          className="bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all duration-300"
                        >
                          Explorar
                        </Button>
                      </motion.div>
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {activeView === "projects" && (
          <Projects onHomeClick={() => setActiveView("menu")} />
        )}

        {activeView === "experienceEducation" && (
          <ExperienceEducation onHomeClick={() => setActiveView("menu")} />
        )}

        {activeView === "contact" && (
          <ContactSection onHomeClick={() => setActiveView("menu")} />
        )}

        {activeView === "aboutMe" && (
          <AboutMeSection onHomeClick={() => setActiveView("menu")} />
        )}
      </AnimatePresence>

      <LottieAnimation />
    </div>
  );
};

export default MenuGrid;
