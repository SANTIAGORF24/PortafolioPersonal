"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Book,
  Briefcase,
  Code,
  Server,
  Users,
  Video,
  Cog,
  Zap,
  ArrowLeft,
} from "lucide-react";

const ExperienceEducation = ({ onHomeClick }) => {
  const [isExiting, setIsExiting] = useState(false);

  const skills = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Desarrollo Web",
      tech: ["React", "Next.js", "Tailwind", "Python", "Flask", "Git"],
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Soporte Técnico",
      tech: ["Sistemas", "Redes", "Mantenimiento"],
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Innovación",
      tech: ["Diseño", "Soluciones", "Tecnología"],
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Capacitación",
      tech: ["Formación", "Workshops", "Documentación"],
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "Multimedia",
      tech: ["Diseño", "Video", "Contenido"],
    },
    {
      icon: <Cog className="w-6 h-6" />,
      title: "Gestión",
      tech: ["Proyectos", "Colaboración", "Proveedores"],
    },
  ];

  const experience = [
    {
      title: "Desarrollador y Especialista en Soporte",
      company: "Ministerio de Deporte",
      period: "Sept 2023 - Dec 2024",
      responsibilities: [
        "Desarrollo de Mintickets (React/Next.js + Flask)",
        "Mantenimiento de plataforma GESDOC",
        "Gestión de Microsoft Admin y Sophos",
        "Capacitaciones técnicas institucionales",
      ],
      techStack: [
        "React",
        "Next.js",
        "Python",
        "Flask",
        "Microsoft Admin",
        "Sophos",
      ],
    },
    {
      title: "Diseñador Multimedia y Técnico de Soporte",
      company: "Colegio Nacional de Curadores Urbanos",
      period: "Ene 2022 - Jun 2023",
      responsibilities: [
        "Creación de contenido multimedia",
        "Diseño de materiales promocionales",
        "Desarrollo de guías técnicas",
        "Soporte técnico integral",
      ],
      techStack: ["Adobe Creative Suite", "Diseño Web", "Soporte Técnico"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const handleBack = () => {
    setIsExiting(true);
    setTimeout(() => {
      onHomeClick();
    }, 800);
  };

  return (
    <AnimatePresence mode="wait">
      {!isExiting && (
        <div className="min-h-screen bg-transparent py-8 px-4 sm:px-6 relative">
          <motion.button
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            onClick={handleBack}
            className="fixed top-8 left-4 sm:left-8 text-white hover:text-gray-300 transition-colors z-50 flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg"
          >
            <ArrowLeft size={24} />
            <span>Regresar</span>
          </motion.button>

          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={containerVariants}
            className="max-w-6xl mx-auto space-y-16 sm:space-y-24"
          >
            {/* Skills Section */}
            <section>
              <motion.h2
                variants={itemVariants}
                className="text-3xl sm:text-4xl font-bold text-white mb-8 sm:mb-12 text-center"
                exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
              >
                Áreas de Experiencia
              </motion.h2>

              <motion.div
                variants={containerVariants}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
                exit={{ opacity: 0, x: -20, transition: { duration: 0.3 } }}
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-800/50 backdrop-blur-lg p-4 sm:p-6 rounded-xl border border-gray-700/50"
                    exit={{ opacity: 0, y: 20, transition: { duration: 0.3 } }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-blue-400">{skill.icon}</div>
                      <h3 className="text-base sm:text-lg font-semibold text-white">
                        {skill.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </section>

            {/* Experience Section */}
            <section>
              <motion.h2
                variants={itemVariants}
                className="text-3xl sm:text-4xl font-bold text-white mb-8 sm:mb-12 text-center"
                exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
              >
                Experiencia Laboral
              </motion.h2>

              <motion.div
                variants={containerVariants}
                className="space-y-6 sm:space-y-8"
                exit={{ opacity: 0, x: -20, transition: { duration: 0.3 } }}
              >
                {experience.map((job, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-gray-800/30 backdrop-blur-lg p-4 sm:p-6 rounded-xl border border-gray-700/50"
                    exit={{ opacity: 0, y: 20, transition: { duration: 0.3 } }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white">
                          {job.title}
                        </h3>
                        <p className="text-blue-400 font-medium mt-1">
                          {job.company}
                        </p>
                      </div>
                      <span className="text-gray-400 text-sm mt-2 sm:mt-0">
                        {job.period}
                      </span>
                    </div>

                    <ul className="space-y-2 mb-4 pl-3">
                      {job.responsibilities.map((resp, i) => (
                        <li
                          key={i}
                          className="text-gray-300 flex items-center gap-2 text-sm sm:text-base"
                        >
                          <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                          {resp}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {job.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 bg-blue-500/10 text-blue-300 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </section>

            {/* Education Section */}
            <section>
              <motion.h2
                variants={itemVariants}
                className="text-3xl sm:text-4xl font-bold text-white mb-8 sm:mb-12 text-center"
                exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
              >
                Educación
              </motion.h2>

              <motion.div
                variants={itemVariants}
                className="bg-gray-800/30 backdrop-blur-lg p-4 sm:p-6 rounded-xl border border-gray-700/50"
                exit={{ opacity: 0, y: 20, transition: { duration: 0.3 } }}
              >
                <div className="flex items-start sm:items-center gap-4 mb-4">
                  <Book className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      Ingeniería de Sistemas
                    </h3>
                    <p className="text-blue-400 text-sm sm:text-base mt-1">
                      Universidad de San Buenaventura, Bogotá
                    </p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm sm:text-base">
                  Actualmente cursando 7° semestre, especializándome en
                  programación y desarrollo de software.
                </p>
              </motion.div>
            </section>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ExperienceEducation;
