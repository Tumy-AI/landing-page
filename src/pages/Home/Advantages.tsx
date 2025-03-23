"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react"; // Changed from framer-motion to match your project
import { cn } from "@/lib/utils";

// Icons for each advantage
import { Palette, Shield, Sliders, Coins, Users } from "lucide-react";

// Reuse the existing CardStack component instead of importing it
import { CardStack } from "@/components/ui/card-stack";

export default function Advantages() {
  return (
    <div className="h-[40rem] flex items-center justify-center w-full">
      <CardStack items={VENTAJAS} />
    </div>
  );
}

// Small utility to highlight the content of specific section
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const VENTAJAS = [
  {
    id: 0,
    name: "Creación desde Cero",
    designation: "Diseño Único",
    content: (
      <div className="flex justify-between items-start">
        <p className="pr-4">
          Diseñamos páginas web <Highlight>personalizadas</Highlight> sin depender de plantillas, 
          asegurando un diseño único y exclusivo.
        </p>
        <Palette className="text-emerald-600 w-12 h-12 flex-shrink-0" />
      </div>
    ),
  },
  {
    id: 1,
    name: "Mayor Seguridad",
    designation: "Protección Garantizada",
    content: (
      <div className="flex justify-between items-start">
        <p className="pr-4">
          Diseñamos páginas web <Highlight>personalizadas</Highlight> sin depender de plantillas, 
          asegurando un diseño único y exclusivo.
        </p>
        <Shield className="text-emerald-600 w-12 h-12 flex-shrink-0" />
      </div>
    ),
  },
  {
    id: 2,
    name: "Flexibilidad Total",
    designation: "Adaptación Perfecta",
    content: (
      <div className="flex justify-between items-start">
        <p className="pr-4">
          Te acompañamos en sesiones <Highlight>personalizadas</Highlight> para entender tu visión 
          y convertirla en un proyecto a medida.
        </p>
        <Sliders className="text-emerald-600 w-12 h-12 flex-shrink-0" />
      </div>
    ),
  },
  {
    id: 3,
    name: "Inversión Inteligente",
    designation: "Rentabilidad a Largo Plazo",
    content: (
      <div className="flex justify-between items-start">
        <p className="pr-4">
          Aunque el desarrollo personalizado puede parecer más costoso al inicio, a largo plazo 
          <Highlight> reduce gastos</Highlight> en licencias y mantenimiento.
        </p>
        <Coins className="text-emerald-600 w-12 h-12 flex-shrink-0" />
      </div>
    ),
  },
  {
    id: 4,
    name: "Atención Personalizada",
    designation: "Servicio a Medida",
    content: (
      <div className="flex justify-between items-start">
        <p className="pr-4">
          Te acompañamos en sesiones <Highlight>personalizadas</Highlight> para entender tu visión 
          y convertirla en un proyecto a medida.
        </p>
        <Users className="text-emerald-600 w-12 h-12 flex-shrink-0" />
      </div>
    ),
  },
];