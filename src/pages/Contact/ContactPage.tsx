"use client";

import { useForm } from "react-hook-form";
import { toast } from "sonner";
import SpotlightCard from "@/components/SpotlightCard/SpotlightCard";
import { FaTiktok, FaInstagram, FaWhatsapp, FaEnvelope, FaLinkedinIn } from "react-icons/fa6";
import { IconType } from "react-icons";
import axios from 'axios';

interface SocialMediaCardProps {
    icon: IconType;
    username: string;
}

interface FormValues {
    nombre: string;
    correo: string;
    mensaje: string;
}

const SocialMedias: SocialMediaCardProps[] = [
    { icon: FaInstagram, username: "@TumyAI" },
    { icon: FaTiktok, username: "@TumyAI" },
    { icon: FaWhatsapp, username: "+51 999999999" },
    { icon: FaEnvelope, username: "tumy.ai.pe@gmail.com" },
    { icon: FaLinkedinIn, username: "Tumy AI" },
];

// Common styles extracted as constants
const inputClasses = `
  w-full p-4 rounded-lg border border-neutral-300 outline-none focus:ring-2 focus:ring-opacity-50
  dark:bg-neutral-800 dark:border-neutral-700 dark:focus:border-neutral-500 dark:focus:ring-neutral-400
  bg-white focus:border-gray-400 focus:ring-gray-300 text-base
`;

const errorInputClasses = "border-red-500 focus:border-red-500 focus:ring-red-300";

export default function ContactPage() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset
    } = useForm<FormValues>();

    const onSubmit = async (data: FormValues) => {
        try {
            const response = await axios.post('/api/email', data);

            toast.success("¡Mensaje enviado con éxito, nos pondremos en contacto contigo lo más antes posible.", {
                duration: 3000,
            });

            reset();
        } catch (error) {
            toast.error("Error al enviar el mensaje. Inténtalo de nuevo.", {
                duration: 3000,
            });
        }
    };

    return (
        <div className="flex flex-col items-center min-h-screen">
            <div className="w-full max-w-6xl px-6 py-24 mx-auto">
                {/* Header Section */}
                <div className="mb-16 text-center lg:text-left">
                    <h1 className="text-3xl font-bold lg:text-5xl mb-4">Contáctanos</h1>
                    <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl">
                        Estamos aquí para ayudarte en todo momento, no dudes en contactarnos por los siguientes medios:
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
                    {/* Contact Form Section */}
                    <div className="flex flex-col">
                        <h2 className="text-2xl font-bold mb-8">
                            Escríbenos un mensaje
                        </h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-6 w-full">
                            {/* Name Input */}
                            <div className="flex flex-col space-y-2">
                                <div className="relative">
                                    <input
                                        {...register("nombre", {
                                            required: "El nombre es requerido"
                                        })}
                                        type="text"
                                        placeholder="Nombre"
                                        className={`${inputClasses} ${errors.nombre ? errorInputClasses : ''}`}
                                    />
                                    {errors.nombre && (
                                        <p className="text-red-500 text-sm mt-1">{errors.nombre.message}</p>
                                    )}
                                </div>
                            </div>

                            {/* Email Input */}
                            <div className="flex flex-col space-y-2">
                                <div className="relative">
                                    <input
                                        {...register("correo", {
                                            required: "El correo es requerido",
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: "Correo electrónico inválido"
                                            }
                                        })}
                                        type="email"
                                        placeholder="Correo electrónico"
                                        className={`${inputClasses} ${errors.correo ? errorInputClasses : ''}`}
                                    />
                                    {errors.correo && (
                                        <p className="text-red-500 text-sm mt-1">{errors.correo.message}</p>
                                    )}
                                </div>
                            </div>

                            {/* Message Input */}
                            <div className="flex flex-col space-y-2">
                                <div className="relative">
                                    <textarea
                                        {...register("mensaje", {
                                            required: "El mensaje es requerido",
                                            minLength: {
                                                value: 10,
                                                message: "El mensaje debe tener al menos 10 caracteres"
                                            }
                                        })}
                                        placeholder="¿Cómo podemos ayudarte?"
                                        rows={6}
                                        className={`${inputClasses} resize-none ${errors.mensaje ? errorInputClasses : ''}`}
                                    />
                                    {errors.mensaje && (
                                        <p className="text-red-500 text-sm mt-1">{errors.mensaje.message}</p>
                                    )}
                                </div>
                            </div>

                            {/* Submit Button - Changed to black and white */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full p-4 rounded-lg font-medium text-base
                                  bg-black dark:bg-white text-white dark:text-black
                                  border border-black dark:border-white
                                  hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white
                                  transition-all duration-300
                                  ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center justify-center">
                                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Enviando...
                                    </span>
                                ) : "Enviar mensaje"}
                            </button>
                        </form>
                    </div>

                    {/* Social Media Section */}
                    <div className="flex flex-col">
                        <h2 className="text-2xl font-bold mb-8">
                            ... o contáctanos a través de nuestras redes sociales
                        </h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 w-full">
                            {SocialMedias.map((socialMedia, index) => (
                                <SpotlightCard
                                    key={index}
                                    spotlightColor="rgba(150, 150, 150, 0.15)"
                                    className="bg-transparent dark:bg-neutral-900/40 p-6 rounded-lg backdrop-blur-sm hover:shadow-lg transition-all duration-300 cursor-pointer border border-neutral-200 dark:border-neutral-800"
                                >
                                    <div className="flex flex-col items-center space-y-4">
                                        {/* Changed icon color to white */}
                                        <socialMedia.icon className="text-4xl text-white" />
                                        <p className="text-md font-medium text-center break-words overflow-hidden w-full">
                                            {socialMedia.username}
                                        </p>
                                    </div>
                                </SpotlightCard>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Stats Section (similar to Vercel example) */}
                <div className="border-t border-b border-neutral-200 dark:border-neutral-800 grid grid-cols-1 md:grid-cols-2 my-12">
                    <div className="p-12 border-b md:border-b-0 md:border-r border-neutral-200 dark:border-neutral-800">
                        <div className="text-2xl font-bold mb-2">+500</div>
                        <p className="text-neutral-600 dark:text-neutral-300">Clientes satisfechos</p>
                    </div>
                    <div className="p-12">
                        <div className="text-2xl font-bold mb-2">98% de respuestas</div>
                        <p className="text-neutral-600 dark:text-neutral-300">en menos de 24 horas</p>
                    </div>
                </div>

                {/* Testimonial Section */}
                <div className="mb-24">
                    <div className="p-8 border border-neutral-200 dark:border-neutral-800 rounded-lg">
                        <p className="text-lg italic mb-4">&quot;Tumy AI ha transformado la manera en que gestionamos nuestras consultas y nos ha permitido llegar al mercado más rápido.&quot;</p>
                        <p className="font-medium">Empresa Cliente</p>
                    </div>
                </div>
            </div>
        </div>
    );
}