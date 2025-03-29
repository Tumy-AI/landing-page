"use client";
import { useState, useEffect, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, Shield, Sliders, Coins, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useTheme } from "next-themes";

const VENTAJAS = [
  {
    id: 1,
    titulo: "+Diseño Único",
    texto: "Creamos diseños exclusivos sin plantillas genéricas.",
    icono: <Palette className="w-12 h-12" />,
  },
  {
    id: 2,
    titulo: "+Seguridad Garantizada",
    texto: "Mayor seguridad y estabilidad en todas las soluciones.",
    icono: <Shield className="w-12 h-12" />,
  },
  {
    id: 3,
    titulo: "+Flexibilidad Total",
    texto: "Adaptamos cada elemento a tus necesidades específicas.",
    icono: <Sliders className="w-12 h-12" />,
  },
  {
    id: 4,
    titulo: "+Inversión Inteligente",
    texto: "Soluciones rentables que reducen costos a largo plazo.",
    icono: <Coins className="w-12 h-12" />,
  },
  {
    id: 5,
    titulo: "Atención Personalizada",
    texto: "Acompañamiento constante durante todo el proceso.",
    icono: <Users className="w-12 h-12" />,
  },
];

export default function Advantages() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Para evitar problemas de hidratación
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setActiveIndex((prevIndex) => (prevIndex + 1) % VENTAJAS.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleCardClick = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      zIndex: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      scale: 0.8,
      zIndex: 0,
    }),
  };

  // No renderizar hasta que se monte el componente para evitar problemas de hidratación
  if (!mounted) return null;

  const isDarkMode = theme === "dark";

  return (
    <div className={`py-16 px-4 ${isDarkMode ? "bg-black" : "bg-white"}`}>
    
      <div className="max-w-7xl mx-auto">
        <div className="relative h-72 mb-12">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={VENTAJAS[activeIndex].id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.5 },
              }}
              className="absolute w-full h-full flex justify-center items-center"
            >
              <Card
                className={`w-full max-w-2xl overflow-hidden ${
                  isDarkMode
                    ? "bg-black border-gray-800 shadow-md"
                    : "bg-white border-gray-200 shadow-sm"
                }`}
              >
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 md:grid-cols-3 h-full">
                    <div
                      className={`${
                        isDarkMode
                          ? "bg-black border-r border-gray-800"
                          : "bg-gray-50 border-r border-gray-100"
                      } flex items-center justify-center p-6`}
                    >
                      <div
                        className={`${
                          isDarkMode ? "bg-black" : "bg-gray-100"
                        } p-4 rounded-full`}
                      >
                        <div
                          className={isDarkMode ? "text-white" : "text-black"}
                        >
                          {VENTAJAS[activeIndex].icono}
                        </div>
                      </div>
                    </div>
                    <div className="md:col-span-2 p-6 flex flex-col justify-center">
                      <h3 className="text-xl font-bold text-emerald-500 mb-2">
                        {VENTAJAS[activeIndex].titulo}
                      </h3>
                      <p
                        className={`${
                          isDarkMode ? "text-white" : "text-black"
                        } text-base`}
                      >
                        {VENTAJAS[activeIndex].texto}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-3">
          {VENTAJAS.map((ventaja, index) => (
            <button
              key={ventaja.id}
              onClick={() => handleCardClick(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "bg-emerald-500 scale-125"
                  : isDarkMode
                  ? "bg-gray-700"
                  : "bg-gray-300"
              }`}
              aria-label={`Ver ventaja: ${ventaja.titulo}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
