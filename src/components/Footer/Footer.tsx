"use client";
import Image from "next/image";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function Footer() {

    const { resolvedTheme } = useTheme();

    const year = new Date().getFullYear();

    return (
        <footer className="dark:bg-black bg-white py-4 mt-auto flex flex-col space-y-8 w-full">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex flex-row items-start justify-center space-x-8">
                    <Image src={"/logos/logo.webp"} alt="Logo" width={50} height={50} className={`${resolvedTheme === 'dark' ? 'invert' : ''}`} />
                    <h3 className="text-center text-2xl font-bold">Tumy.ai</h3>
                </div>
                <div className="flex flex-col items-start justify-start font-bold text- text-md space-y-4">
                    <Link href={"/contact"}>
                        ¿Por qué Tumy.ai?
                    </Link>
                    <Link href={"/contact"}>
                        Casos de éxito
                    </Link>
                    <Link href={"/contact"}>
                        Preguntas frecuentes
                    </Link>
                    <Link href={"/contact"}>
                        Blog
                    </Link>
                    <Link href={"/contact"}>
                        Contáctanos
                    </Link>
                </div>
                <div className="flex flex-col items-start justify-start font-bold text- text-md space-y-4">
                    <Link href={"/contact"}>
                        Términos de servicio
                    </Link>
                    <Link href={"/contact"}>
                        Política de privacidad
                    </Link>
                    <Link href={"/contact"}>
                        Política de cookies
                    </Link>
                </div>

            </div>
            <div>
                <h3 className="text-center">
                    {year} © Tumy.ai - Todos los derechos reservados
                </h3>
            </div>
        </footer>
    );

}