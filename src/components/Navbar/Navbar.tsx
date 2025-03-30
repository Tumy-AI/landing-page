"use client";

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { FaMoon, FaSun, FaBars, FaX } from "react-icons/fa6";
import GradientText from '../GradientText/GradientText';

interface NavbarItem {
    title: string;
    href: string;
}

const navbarItems: NavbarItem[] = [
    { title: 'Productos', href: '/products' },
    { title: 'Soluciones', href: '/solutions' },
    { title: 'Recursos', href: '/resources' },
    { title: 'Nosotros', href: '/about' },
];

export default function Navbar() {
    const [mounted, setMounted] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { setTheme, resolvedTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    // Detectar scroll para cambiar apariencia del navbar
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Verificar posición inicial
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    // Prevenir el scroll cuando el menú está abierto
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [menuOpen]);

    // Cerrar el menú cuando la pantalla se redimensiona a un tamaño donde se muestra la navegación de escritorio
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768 && menuOpen) {
                setMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [menuOpen]);

    if (!mounted) {
        return null;
    }

    return (
        <>
            {/* Overlay de pantalla completa con animación */}
            <div
                className={`z-200 fixed inset-0 bg-black/70 backdrop-blur-md md:hidden transition-all duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
            >
                <div className={`flex flex-col h-full p-6 transition-transform duration-300 ${menuOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}>
                    <div className="flex justify-end">
                        <button
                            className="p-2 text-white"
                            onClick={() => setMenuOpen(false)}
                            aria-label="Cerrar menú"
                        >
                            <FaX className="text-xl" />
                        </button>
                    </div>
                    <ul className="flex flex-col space-y-8 mt-12">
                        {navbarItems.map((item, index) => (
                            <li
                                key={index}
                                className={`transform transition-all duration-300 delay-${index * 100} ${menuOpen ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                                    }`}
                            >
                                <Link
                                    href={item.href}
                                    className="text-2xl font-bold text-white hover:text-gray-300 transition-colors"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                        {/* Opción de cambiar tema en el menú móvil como una opción más */}
                        <li className={`transform transition-all duration-300 delay-400 ${menuOpen ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
                            <button
                                className="text-2xl font-bold text-white hover:text-gray-300 transition-colors flex items-center gap-2"
                                onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                            >
                                {resolvedTheme === 'dark' ? (
                                    <>
                                        <FaSun className="text-xl" />
                                        <span>Modo claro</span>
                                    </>
                                ) : (
                                    <>
                                        <FaMoon className="text-xl" />
                                        <span>Modo oscuro</span>
                                    </>
                                )}
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Barra de navegación fixed con efecto de blur al hacer scroll */}
            <nav
                className={`fixed top-0 left-0 right-0 flex items-center justify-between w-full z-100 py-4 px-4 md:px-6 lg:px-8 select-none transition-all duration-300 ${scrolled
                    ? `${resolvedTheme === 'dark'
                        ? 'bg-black/50 backdrop-blur-lg shadow-md'
                        : 'bg-white/50 backdrop-blur-lg shadow-md'}`
                    : 'bg-transparent'
                    }`}
            >
                <Link className='flex items-center gap-2' href={"/"}>
                    <Image
                        src="/logos/logo.webp"
                        alt="Logo"
                        width={50}
                        height={50}
                        className={`${resolvedTheme === 'dark' ? 'invert' : ''}`}
                    />
                    <h2 className="text-xl font-bold">Tumy.ai</h2>
                </Link>
                <ul className="hidden md:flex space-x-4 lg:space-x-6">
                    {navbarItems.map((item, index) => (
                        <li key={index}>
                            <Link href={item.href} className="text-md hover:text-gray-400 transition-colors font-bold">
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="md:hidden flex items-center gap-2">
                    {/* Solo botón de contacto y menú en la barra de navegación móvil */}
                    <Link href="/contact">
                        <GradientText
                            colors={["#03dd00", "#00d7ce", "#03dd00"]}
                            animationSpeed={8}
                            showBorder={true}
                            className="p-2"
                        >
                            Contáctanos
                        </GradientText>
                    </Link>

                    <button
                        className="p-2 z-50 relative transition-transform duration-300"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
                    >
                        <FaBars className='text-xl transition-transform duration-300' />
                    </button>
                </div>
                <div className='hidden md:flex flex-row w-fit gap-2'>
                    <Link href="/contact">
                        <GradientText
                            colors={["#03dd00", "#00d7ce", "#03dd00"]}
                            animationSpeed={8}
                            showBorder={true}
                            className="p-2"
                        >
                            Contáctanos
                        </GradientText>
                    </Link>
                    <button
                        className={`rounded-full transition duration-300 px-2 ease-in-out ${resolvedTheme === 'dark' ? 'text-gray-200 hover:bg-gray-900' : 'text-black hover:bg-gray-300'}`}
                        onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                    >
                        {resolvedTheme === 'dark' ? (
                            <FaSun className="text-xl" />
                        ) : (
                            <FaMoon className="text-xl" />
                        )}
                    </button>
                </div>
            </nav>

            {/* Div espaciador para compensar el navbar fixed */}
            <div className="h-20"></div>
        </>
    );
}