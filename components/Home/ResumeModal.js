"use client";
import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";
import { Download } from "lucide-react";

const spanishPdfPath =
  "/assets/docs/CV Santiago Ramírez Forero actualizada.pdf";
const englishPdfPath =
  "/assets/docs/CV Santiago Ramírez Forero ingles actualizada.pdf";

const ResumeModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [language, setLanguage] = useState("spanish");

  const currentPdfPath =
    language === "spanish" ? spanishPdfPath : englishPdfPath;

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "spanish" ? "english" : "spanish"));
  };

  return (
    <>
      <button
        onClick={onOpen}
        className="text-white hover:text-gray-300 transition-colors animate-slide-in-left opacity-0 animate-delay-1300 animate-duration-700 animate-fill-forwards"
      >
        <Download size={32} />
      </button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="4xl"
        scrollBehavior="inside"
      >
        <ModalContent
          className="bg-[radial-gradient(circle_at_50%_50%,rgb(32,40,78),rgb(0,0,0))] 
          animate__animated animate__fadeIn animate__delay-300ms"
        >
          <ModalHeader className="flex justify-between items-center border-b border-white/20 animate__animated animate__fadeInLeft">
            <span className="text-white">Resume / Curriculum Vitae</span>
            <Button
              onPress={toggleLanguage}
              className="bg-transparent text-white border border-white hover:bg-white hover:text-black transition-all duration-300"
            >
              {language === "spanish"
                ? "Switch to English"
                : "Cambiar a Español"}
            </Button>
          </ModalHeader>
          <ModalBody className="animate__animated animate__fadeInUp">
            <div className="w-full h-[70vh]">
              <iframe
                src={currentPdfPath}
                type="application/pdf"
                className="w-full h-full"
                title="Resume PDF"
              >
                <p className="text-white">
                  Your browser does not support PDFs. Please
                  <a
                    href={currentPdfPath}
                    className="text-blue-400 hover:text-blue-300 ml-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    download the PDF
                  </a>
                </p>
              </iframe>
            </div>
          </ModalBody>
          <ModalFooter className="animate__animated animate__fadeInUp">
            <Button
              onPress={onClose}
              className="bg-transparent text-white border border-white hover:bg-white hover:text-black transition-all duration-300"
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ResumeModal;
