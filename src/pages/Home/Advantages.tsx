"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Palette, Shield, Sliders, Coins, Users } from "lucide-react";

const VENTAJAS = [
  {
    texto: "Diseños únicos sin plantillas.",
    icono: <Palette className="text-emerald-400 w-24 h-24" />,
  },
  {
    texto: "Mayor seguridad y estabilidad.",
    icono: <Shield className="text-emerald-400 w-24 h-24" />,
  },
  {
    texto: "Total flexibilidad en cada proyecto.",
    icono: <Sliders className="text-emerald-400 w-24 h-24" />,
  },
  {
    texto: "Inversión rentable a largo plazo.",
    icono: <Coins className="text-emerald-400 w-24 h-24" />,
  },
  {
    texto: "Atención personalizada en todo momento.",
    icono: <Users className="text-emerald-400 w-24 h-24" />,
  },
];

export default function Advantages() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % VENTAJAS.length);
    }, 3000); // Cambia cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[40rem] w-full flex flex-col items-center justify-center gap-10 px-10 text-center">
      {/* Ícono Animado */}
      <motion.div
        key={index}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {VENTAJAS[index].icono}
      </motion.div>

      {/* Texto Animado */}
      <h1 className="text-white text-4xl font-bold">
        +Ofrecemos{" "}
        <motion.span
          key={index} // Clave única para animación fluida
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="text-emerald-400"
        >
          {VENTAJAS[index].texto}
        </motion.span>
      </h1>
    </div>
  );
}
