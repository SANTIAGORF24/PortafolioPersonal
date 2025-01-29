"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  Phone,
  Mail,
  Linkedin,
  Send,
  MessageSquare,
  ArrowLeft,
} from "lucide-react";

const ContactSection = ({ onHomeClick }) => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isExiting, setIsExiting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setSubmitStatus("success");
        form.current.reset();
      })
      .catch((error) => {
        console.error("Error al enviar el correo:", error);
        setSubmitStatus("error");
      })
      .finally(() => {
        setIsSubmitting(false);
        setTimeout(() => setSubmitStatus(null), 5000);
      });
  };

  const handleExit = () => {
    setIsExiting(true);
    setTimeout(() => onHomeClick(), 500);
  };

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Teléfono",
      value: "+57 3154852832",
      action: () => (window.location.href = "tel:+573154852832"),
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      label: "WhatsApp",
      value: "Envíame un mensaje",
      action: () => (window.location.href = "https://wa.me/573154852832"),
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "santiforero57@gmail.com",
      action: () => (window.location.href = "mailto:santiforero57@gmail.com"),
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "Visita mi perfil",
      action: () =>
        window.open(
          "https://www.linkedin.com/in/santiago-ramírez-forero",
          "_blank"
        ),
    },
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

          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold text-white mb-12 text-center"
          >
            Contacto
          </motion.h2>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={method.action}
                className="bg-gray-800/30 backdrop-blur-lg p-6 rounded-xl border border-gray-700/50 cursor-pointer transition-colors hover:bg-gray-800/50"
              >
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="text-blue-400">{method.icon}</div>
                  <h3 className="text-lg font-semibold text-white">
                    {method.label}
                  </h3>
                  <p className="text-gray-300 text-sm">{method.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="max-w-2xl mx-auto">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="bg-gray-800/30 backdrop-blur-lg p-8 rounded-xl border border-gray-700/50"
            >
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 px-6 rounded-lg flex items-center justify-center gap-2 ${
                    isSubmitting
                      ? "bg-gray-600 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700"
                  } text-white font-medium transition-colors`}
                >
                  <Send className="w-5 h-5" />
                  {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                </motion.button>

                {submitStatus === "success" && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-green-400 text-center mt-4"
                  >
                    ¡Mensaje enviado con éxito!
                  </motion.p>
                )}

                {submitStatus === "error" && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-400 text-center mt-4"
                  >
                    Hubo un error al enviar el mensaje. Por favor, intenta
                    nuevamente.
                  </motion.p>
                )}
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactSection;
