"use client";
import React from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const Typewriter = dynamic(() => import("typewriter-effect"), {
  ssr: false,
});

const AboutMeSection = ({ onHomeClick }) => {
  const [isExiting, setIsExiting] = React.useState(false);

  const handleExit = () => {
    setIsExiting(true);
    setTimeout(() => onHomeClick(), 500);
  };

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    initial: { y: 20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
    exit: {
      y: 20,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  const skills = [
    "Desarrollador frontend",
    "Desarrollador backend",
    "Soporte Técnico Profesional",
    "Especialista en Soporte de Aplicaciones y Tecnología",
  ];

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          className="min-h-screen bg-transparent p-8 relative"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={containerVariants}
        >
          <motion.button
            variants={itemVariants}
            onClick={handleExit}
            className="fixed top-8 left-8 text-white hover:text-gray-300 transition-colors z-50 flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg"
          >
            <ArrowLeft size={24} />
            <span>Regresar</span>
          </motion.button>

          <div className="max-w-4xl mx-auto mt-16">
            <motion.div
              variants={containerVariants}
              className="flex flex-col items-center"
            >
              <motion.div
                className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-blue-500 shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src="/assets/img/pefil.jpg"
                  alt="Santiago Ramírez Forero"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-4xl font-bold text-white mb-4 text-center"
              >
                Santiago Ramírez Forero
              </motion.h1>

              <motion.div
                variants={itemVariants}
                className="text-lg text-blue-400 mb-8 h-12 text-center"
              >
                <Typewriter
                  options={{
                    strings: skills,
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                  }}
                />
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-gray-800/30 backdrop-blur-lg p-8 rounded-xl border border-gray-700/50 mb-8"
              >
                <h2 className="text-2xl font-semibold text-white mb-4 text-center">
                  Idiomas
                </h2>
                <div className="flex gap-4 flex-wrap justify-center">
                  <div className="bg-blue-500/20 p-4 rounded-lg flex-1 min-w-[150px]">
                    <p className="text-white font-medium text-center">
                      Español
                    </p>
                    <p className="text-gray-300 text-center">Nativo</p>
                  </div>
                  <div className="bg-blue-500/20 p-4 rounded-lg flex-1 min-w-[150px]">
                    <p className="text-white font-medium text-center">Inglés</p>
                    <p className="text-gray-300 text-center">
                      Conversacional (A2/B1)
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-gray-800/30 backdrop-blur-lg p-8 rounded-xl border border-gray-700/50"
              >
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Sobre Mí
                </h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    Como ingeniero de Sistemas, he liderado proyectos
                    estratégicos en entidades gubernamentales y empresariales,
                    destacándome por mi compromiso con la innovación tecnológica
                    y el diseño de excelencia. Mi experiencia en el Ministerio
                    del Deporte y el Colegio Nacional de Curadores Urbanos ha
                    enriquecido mis habilidades en el desarrollo de
                    aplicaciones, desde HTML y CSS3 hasta Python, React y Flask.
                  </p>
                  <p>
                    Mi trabajo como freelance me ha permitido adquirir valiosa
                    experiencia en WordPress y gestión de clientes,
                    desarrollando sitios web personalizados y brindando
                    soluciones efectivas a diversas necesidades empresariales.
                    Siempre estoy dispuesto a aprender y afrontar nuevos
                    desafíos, manteniéndome actualizado con las últimas
                    tendencias tecnológicas.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AboutMeSection;
