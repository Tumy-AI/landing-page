"use client";
import { useEffect, useState } from "react";
import { Terminal, AnimatedSpan, TypingAnimation } from "@/components/magicui/terminal";
import { Palette, Shield, Sliders, Coins, Users } from "lucide-react";
import { useTheme } from "next-themes";

const VENTAJAS = [
  {
    id: 1,
    titulo: "+Diseño Único",
    texto: "Creamos diseños exclusivos sin plantillas genéricas.",
    icono: <Palette className="w-5 h-5" />,
  },
  {
    id: 2,
    titulo: "+Seguridad Garantizada",
    texto: "Mayor seguridad y estabilidad en todas las soluciones.",
    icono: <Shield className="w-5 h-5" />,
  },
  {
    id: 3,
    titulo: "+Flexibilidad Total",
    texto: "Adaptamos cada elemento a tus necesidades específicas.",
    icono: <Sliders className="w-5 h-5" />,
  },
  {
    id: 4,
    titulo: "+Inversión Inteligente",
    texto: "Soluciones rentables que reducen costos a largo plazo.",
    icono: <Coins className="w-5 h-5" />,
  },
  {
    id: 5,
    titulo: "Atención Personalizada",
    texto: "Acompañamiento constante durante todo el proceso.",
    icono: <Users className="w-5 h-5" />,
  },
];

export default function Advantages() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % VENTAJAS.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-full py-20 px-4 md:px-16 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Texto a la izquierda */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white mb-6">
            +Ventajas de trabajar con nosotros
          </h2>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-md">
            Todas son ventajas, sin plantillas, con seguridad y un equipo que se adapta a ti.
          </p>
        </div>

        {/* Terminal a la derecha */}
        <div className="flex-1 w-full">
          <Terminal className="w-full max-w-2xl mx-auto">
          

            <AnimatedSpan delay={1500} className="text-green-500 flex items-center gap-2">
              <span>{VENTAJAS[0].icono}</span>
              <span>{VENTAJAS[0].titulo} — {VENTAJAS[0].texto}</span>
            </AnimatedSpan>

            <AnimatedSpan delay={3000} className="text-green-500 flex items-center gap-2">
              <span>{VENTAJAS[1].icono}</span>
              <span>{VENTAJAS[1].titulo} — {VENTAJAS[1].texto}</span>
            </AnimatedSpan>

            <AnimatedSpan delay={4500} className="text-green-500 flex items-center gap-2">
              <span>{VENTAJAS[2].icono}</span>
              <span>{VENTAJAS[2].titulo} — {VENTAJAS[2].texto}</span>
            </AnimatedSpan>

            <AnimatedSpan delay={6000} className="text-green-500 flex items-center gap-2">
              <span>{VENTAJAS[3].icono}</span>
              <span>{VENTAJAS[3].titulo} — {VENTAJAS[3].texto}</span>
            </AnimatedSpan>

            <AnimatedSpan delay={7500} className="text-green-500 flex items-center gap-2">
              <span>{VENTAJAS[4].icono}</span>
              <span>{VENTAJAS[4].titulo} — {VENTAJAS[4].texto}</span>
            </AnimatedSpan>

            <TypingAnimation delay={9000} className="text-muted-foreground">
              ¡Tu proyecto en buenas manos!
            </TypingAnimation>
          </Terminal>
        </div>
      </div>
    </div>
  );
}