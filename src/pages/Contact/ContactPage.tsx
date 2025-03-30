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
  w-full p-3 rounded-lg border-2 outline-none focus:ring-2 focus:ring-opacity-50
  dark:bg-neutral-900 dark:border-neutral-700 dark:focus:border-neutral-500 dark:focus:ring-neutral-400
  bg-white border-neutral-600 focus:border-gray-400 focus:ring-gray-300
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
        <div className="flex flex-col items-center p-2 lg:p-4 space-y-8">
            <h1 className="text-2xl font-bold text-center lg:text-left lg:text-4xl lg:ml-8 z-50">Contáctanos</h1>
            <p className="text-md text-center lg:text-left lg:text-lg lg:ml-8 z-50">
                Estamos aquí para ayudarte en todo momento, no dudes en contactarnos por los siguientes medios:
            </p>

            <div className="flex flex-col w-full lg:flex-row space-x-0 space-y-8 lg:space-x-8 lg:space-y-0 z-50 m-8">
                {/* Contact Form Section */}
                <div className="flex flex-col w-full lg:w-1/2 items-center">
                    <h2 className="text-2xl font-bold mb-8">
                        Escríbenos un mensaje
                    </h2>
                    <div className="w-full mt-2">
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
                                        placeholder="Mensaje"
                                        rows={5}
                                        className={`${inputClasses} resize-none ${errors.mensaje ? errorInputClasses : ''}`}
                                    />
                                    {errors.mensaje && (
                                        <p className="text-red-500 text-sm mt-1">{errors.mensaje.message}</p>
                                    )}
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full p-3 rounded-lg font-bold dark:text-white text-black transition-all duration-300
                    bg-gradient-to-r border-2 dark:border-white border-neutral-600 dark:hover:bg-neutral-900 
                    hover:bg-neutral-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center justify-center">
                                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Enviando...
                                    </span>
                                ) : "Enviar mensaje"}
                            </button>
                        </form>
                    </div>
                </div>

                {/* Social Media Section */}
                <div className="flex flex-col w-full lg:w-1/2 items-center">
                    <h2 className="text-2xl font-bold mb-6">
                        ... o contáctanos a través de nuestras redes sociales
                    </h2>
                    <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8 w-full">
                        {SocialMedias.map((socialMedia, index) => (
                            <SpotlightCard
                                key={index}
                                spotlightColor="rgba(150, 150, 150, 0.15)"
                                className="bg-transparent p-3 hover:shadow-md transition-all duration-300 cursor-pointer"
                            >
                                <div className="flex flex-col items-center space-y-3">
                                    <socialMedia.icon className="text-4xl" />
                                    <p className="text-md font-medium text-center break-words overflow-hidden w-full">
                                        {socialMedia.username}
                                    </p>
                                </div>
                            </SpotlightCard>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}