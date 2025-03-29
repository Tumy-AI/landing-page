"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import Link from "next/link";
import { FaTiktok, FaLinkedin, FaInstagram } from "react-icons/fa6";

export default function Footer() {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const year = new Date().getFullYear();

    return (
        <footer className="dark:bg-black bg-white py-4 mt-auto flex flex-col space-y-8 w-full border-t-2 border-gray-200 dark:border-gray-700">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="flex flex-row items-center lg:items-start justify-center space-x-8">
                    {/* Se renderiza solo si el componente ya está montado */}
                    {mounted && (
                        <Image
                            src={"/logos/logo.webp"}
                            alt="Logo"
                            width={50}
                            height={50}
                            className={resolvedTheme === "dark" ? "invert" : ""}
                        />
                    )}
                    <h3 className="text-center text-2xl font-bold">Tumy.ai</h3>
                </div>
                <div className="flex flex-col items-center lg:items-start justify-start font-bold text-md space-y-4">
                    <Link href={"/contact"}>¿Por qué Tumy.ai?</Link>
                    <Link href={"/contact"}>Casos de éxito</Link>
                    <Link href={"/contact"}>Preguntas frecuentes</Link>
                    <Link href={"/contact"}>Blog</Link>
                    <Link href={"/contact"}>Contáctanos</Link>
                </div>
                <div className="flex flex-col items-center lg:items-start justify-start font-bold text-md space-y-4">
                    <Link href={"/contact"}>Términos de servicio</Link>
                    <Link href={"/contact"}>Política de privacidad</Link>
                    <Link href={"/contact"}>Política de cookies</Link>
                </div>
                <div className="flex flex-col items-center lg:items-start justify-start font-bold text-md space-y-4">
                    <h3 className="text-center text-2xl font-bold">Redes sociales</h3>
                    <div className="flex flex-row items-center justify-center space-x-4">
                        <Link href={"https://www.instagram.com/tumyai/"} target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="text-2xl" />
                        </Link>
                        <Link href={"https://www.tiktok.com/@tumyai"} target="_blank" rel="noopener noreferrer">
                            <FaTiktok className="text-2xl" />
                        </Link>
                        <Link href={"https://www.linkedin.com/company/tumyai/"} target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="text-2xl" />
                        </Link>

                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-start font-bold text-md space-y-4 w-full">
                <h3 className="text-center">
                    {year} © Tumy.ai - Todos los derechos reservados
                </h3>
            </div>
        </footer>
    );
}
