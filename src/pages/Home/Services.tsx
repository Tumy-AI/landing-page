"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { RiGlobalLine } from "react-icons/ri";
import { FaStore, FaGears } from "react-icons/fa6";
import { MdOutlineInventory } from "react-icons/md";
import { FaWhatsapp, FaRegStar } from "react-icons/fa";

export default function ServicesAdaptive() {
  const services = [
    {
      icon: <RiGlobalLine className="text-3xl" />,
      title: "Lading Page",
      description:
        "Diseñamos landing pages atractivas y optimizadas para convertir visitantes en clientes",
    },
    {
      icon: <FaStore className="text-3xl" />,
      title: "Tiendas Online",
      description:
        "Creamos plataformas de venta online intuitivas, seguras y personalizadas para tu negocio",
    },
    {
      icon: <FaGears className="text-3xl" />,
      title: "Automatización Industrial",
      description:
        "Optimizamos procesos con soluciones tecnológicas avanzadas para aumentar la eficiencia",
    },
    {
      icon: <MdOutlineInventory className="text-3xl" />,
      title: "Gestión de Inventario",
      description:
        "Implementamos sistemas inteligentes para el control y administración de inventarios en tiempo real",
    },
    {
      icon: <FaWhatsapp className="text-3xl" />,
      title: "Bots de Venta",
      description:
        "Automatiza la atención al cliente y las ventas con bots personalizados y eficientes",
    },
    {
      icon: <FaRegStar className="text-3xl" />,
      title: "Software Especializado",
      description:
        "Desarrollamos software a medida para resolver necesidades específicas de tu empresa",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full gap-6 py-20 px-4 md:px-16">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 text-black dark:text-white">
        <span className="font-bold">+Servicios</span>{" "}
        <span className="font-light">
          digitales a la medida y alcance de tu mano
        </span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {services.map((service, index) => (
          <AdaptiveCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
}

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const AdaptiveCard = ({ service }: { service: Service }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ type: "spring", stiffness: 250, damping: 20 }}
      className="group relative overflow-hidden rounded-2xl bg-white dark:bg-black p-8 h-full border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 shadow-md hover:shadow-xl transition-shadow duration-500"
    >
      <div className="absolute inset-0 -translate-y-full group-hover:translate-y-0 bg-gradient-to-b from-black/10 to-transparent dark:from-white/10 blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

      <div className="relative z-10 mb-6 flex justify-center">
        <div className="rounded-full p-5 bg-gray-100 dark:bg-zinc-900 border border-gray-300 dark:border-gray-700 shadow-inner">
          <div className="text-4xl text-gray-800 dark:text-white transition-colors duration-500">
            {service.icon}
          </div>
        </div>
      </div>

      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-4 transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-base text-gray-600 dark:text-gray-300 text-center leading-relaxed transition-colors duration-300">
          {service.description}
        </p>
      </div>

      <Sparkles />
    </motion.div>
  );
};

const Sparkles = () => {
  const [stars, setStars] = useState<
    {
      top: string;
      left: string;
      size: string;
      delay: number;
      duration: number;
    }[]
  >([]);

  useEffect(() => {
    const newStars = [...Array(8)].map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 1}px`,
      delay: Math.random() * 2,
      duration: Math.random() * 3 + 5,
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {stars.map((star, i) => (
        <motion.span
          key={`star-${i}`}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: star.delay,
          }}
          style={{
            position: "absolute",
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="bg-black dark:bg-white"
        />
      ))}
    </div>
  );
};
