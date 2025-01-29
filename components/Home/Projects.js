"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Card, CardBody } from "@heroui/react";
import MenuGrid from "./MenuGrid";
import dynamic from "next/dynamic";

// Dynamic import of Lottie
const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

// Import animation data directly
import animationData from "../../public/assets/docs/Pato.json";

const Projects = ({ onHomeClick }) => {
  const [isExiting, setIsExiting] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const projects = [
    {
      title: "Mintickets",
      description:
        "Mintickets es una aplicación web construida con React, Next.js y Python Flask. Permite gestionar tickets, asignarlos a especialistas, enviar notificaciones por correo electrónico, visualizar gráficas, calificar tickets, revisar el historial de los mismos y descargar reportes en formato Excel. Además, ofrece la posibilidad de vincular usuarios desde un directorio activo.",
      image: "/assets/img/mintickets.png",
      githubFrontend: "https://github.com/SANTIAGORF24/front_mintickets.git",
      githubBackend: "https://github.com/SANTIAGORF24/backend_mintickets.git",
      live: "https://mintickets.com",
      tags: [
        "React (Next.js)",
        "Python (Flask)",
        "Nextui (HeroUI)",
        "jspdf",
        "xlsx",
        "gunicorn",
        "ldap3",
        "sphinx",
        "Flask-Migrate",
      ],
    },
    {
      title: "Textgame",
      description:
        "Textgame es una landing page moderna creada con React (Next.js) y el diseño de NextUI (HeroUI). Además de la presentación principal, la app incluye juegos interactivos tipo arcade como la clásica 'culebrita' y un juego de nave espacial que dispara a objetos de JavaScript, con sistema de puntuación. También permite visualizar tablas y gráficas en tiempo real.",
      image: "/assets/img/landing.png",
      github: "https://github.com/SANTIAGORF24/Eduacionesdiferenciales.git",
      live: "https://textgame-nine.vercel.app/",
      tags: [
        "React",
        "Next.js",
        "NextUI",
        "HeroUI",
        "JavaScript",
        "Arcade Games",
        "Charts",
      ],
    },
    {
      title: "Systecnova",
      description:
        "Systecnova es una tienda en línea desarrollada en WordPress utilizando tecnologías como Elementor, WooCommerce, y pasarela de pagos. La aplicación incluye registro de usuarios, notificaciones por correo electrónico, y un diseño moderno y responsive para una experiencia de compra óptima.",
      image: "/assets/img/wordpress.png",
      live: "https://systecnova.com/",
      tags: [
        "WordPress",
        "Elementor",
        "WooCommerce",
        "Pasarela de Pagos",
        "Responsive Design",
      ],
    },
    {
      title: "Minuser",
      description:
        "Minuser es una aplicación de escritorio desarrollada en Python con interfaz gráfica en PyQt5. Permite generar datos y ejecutar comandos de PowerShell para crear usuarios en un directorio activo, editar fechas de expiración, reactivar usuarios y actualizar contraseñas. Además, la aplicación genera respuestas en archivos .txt. Para realizar estas operaciones, es necesario iniciar sesión con un usuario que tenga permisos de creación y edición en el directorio activo. Si el usuario no tiene los permisos adecuados, la app mostrará un mensaje de error.",
      image: "/assets/img/minuser.png",
      github: "https://github.com/SANTIAGORF24/minuser",
      live: "https://youtu.be/jJR-Pko6hvU",
      tags: [
        "Python",
        "PyQt5",
        "PowerShell",
        "Active Directory",
        "UI",
        "Automation",
      ],
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
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: {
        duration: 0.3,
      },
    },
  };

  const handleBack = () => {
    setIsExiting(true);
    setTimeout(() => {
      onHomeClick();
    }, 800);
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
    <AnimatePresence mode="wait">
      {!isExiting && (
        <div className="min-h-dvh bg-transparent p-8 relative">
          <motion.button
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            onClick={handleBack}
            className="fixed top-8 left-8 text-white hover:text-gray-300 transition-colors z-50 flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg"
          >
            <ArrowLeft size={24} />
            <span>Regresar</span>
          </motion.button>

          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white text-5xl font-bold text-center mb-16 mt-8"
          >
            Mis Proyectos
          </motion.h1>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="h-full"
              >
                <Card className="h-full bg-black/20 backdrop-blur-md border border-white/10 hover:bg-black/30 transition-all duration-300">
                  <CardBody className="flex flex-col h-full">
                    <motion.div
                      className="relative w-full h-48 mb-4 overflow-hidden rounded-lg"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>

                    <h3 className="text-white text-xl font-bold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-white/70 mb-4 flex-grow">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-white/10 rounded-full text-white/90 text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4 mt-auto">
                      {project.title === "Mintickets" ? (
                        <div className="relative">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setShowDropdown(!showDropdown)}
                            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors"
                          >
                            <Github size={20} />
                            GitHub
                          </motion.button>
                          {showDropdown && (
                            <div className="absolute bottom-full mb-2 bg-black rounded-lg shadow-lg">
                              <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href={project.githubFrontend}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block px-4 py-2 text-white hover:bg-white/20 rounded-t-lg"
                              >
                                Frontend
                              </motion.a>
                              <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href={project.githubBackend}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block px-4 py-2 text-white hover:bg-white/20 rounded-b-lg"
                              >
                                Backend
                              </motion.a>
                            </div>
                          )}
                        </div>
                      ) : (
                        project.github && (
                          <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors"
                          >
                            <Github size={20} />
                            GitHub
                          </motion.a>
                        )
                      )}
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors"
                      >
                        <ExternalLink size={20} />
                        {project.title === "Mintickets"
                          ? "Explicación"
                          : "Demo"}
                      </motion.a>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <LottieAnimation />
        </div>
      )}
    </AnimatePresence>
  );
};

export default Projects;
