"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

// Icons para cada ventaja
import { Palette, Shield, Sliders, Coins, Users } from "lucide-react";

let interval: NodeJS.Timeout;

type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards]; // crea una copia del array
        newArray.unshift(newArray.pop()!); // mueve el último elemento al frente
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="relative h-60 w-full max-w-3xl">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute dark:bg-black bg-white h-60 w-full max-w-3xl rounded-3xl p-6 shadow-xl border border-neutral-200 dark:border-white/[0.1] shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // disminuye escala para tarjetas que están atrás
              zIndex: cards.length - index, // disminuye z-index para tarjetas que están atrás
            }}
          >
            <div className="font-normal text-neutral-700 dark:text-neutral-200">
              {card.content}
            </div>
            <div>
              <p className="text-neutral-800 font-medium dark:text-white">
                {card.name}
              </p>
              <p className="text-neutral-500 font-normal dark:text-neutral-400">
                {card.designation}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

// Utilidad para resaltar contenido específico (ahora en blanco y negro)
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={`font-bold bg-gray-100 text-black dark:bg-gray-800 dark:text-white px-1 py-0.5 ${className}`}
    >
      {children}
    </span>
  );
};

export default function Advantages() {
  return (
    <div className="h-[40rem] flex items-center justify-center w-full px-4">
      <CardStack items={VENTAJAS} />
    </div>
  );
}

const VENTAJAS = [
  {
    id: 0,
    name: "Creación desde Cero",
    designation: "Diseño Único",
    content: (
      <div className="flex justify-between items-start">
        <p className="pr-4 text-lg">
          Diseñamos páginas web <Highlight>personalizadas</Highlight> sin depender de plantillas, 
          asegurando un diseño único y exclusivo.
        </p>
        <Palette className="text-black dark:text-white w-12 h-12 flex-shrink-0" />
      </div>
    ),
  },
  {
    id: 1,
    name: "Mayor Seguridad",
    designation: "Protección Garantizada",
    content: (
      <div className="flex justify-between items-start">
        <p className="pr-4 text-lg">
          Nuestro desarrollo <Highlight>personalizado</Highlight> minimiza vulnerabilidades comunes 
          de plantillas y garantiza mayor seguridad para tu sitio.
        </p>
        <Shield className="text-black dark:text-white w-12 h-12 flex-shrink-0" />
      </div>
    ),
  },
  {
    id: 2,
    name: "Flexibilidad Total",
    designation: "Adaptación Perfecta",
    content: (
      <div className="flex justify-between items-start">
        <p className="pr-4 text-lg">
          Te acompañamos en sesiones <Highlight>personalizadas</Highlight> para entender tu visión 
          y convertirla en un proyecto a medida.
        </p>
        <Sliders className="text-black dark:text-white w-12 h-12 flex-shrink-0" />
      </div>
    ),
  },
  {
    id: 3,
    name: "Inversión Inteligente",
    designation: "Rentabilidad a Largo Plazo",
    content: (
      <div className="flex justify-between items-start">
        <p className="pr-4 text-lg">
          Aunque el desarrollo personalizado puede parecer más costoso al inicio, a largo plazo 
          <Highlight> reduce gastos</Highlight> en licencias y mantenimiento.
        </p>
        <Coins className="text-black dark:text-white w-12 h-12 flex-shrink-0" />
      </div>
    ),
  },
  {
    id: 4,
    name: "Atención Personalizada",
    designation: "Servicio a Medida",
    content: (
      <div className="flex justify-between items-start">
        <p className="pr-4 text-lg">
          Te acompañamos en sesiones <Highlight>personalizadas</Highlight> para entender tu visión 
          y convertirla en un proyecto a medida.
        </p>
        <Users className="text-black dark:text-white w-12 h-12 flex-shrink-0" />
      </div>
    ),
  },
];