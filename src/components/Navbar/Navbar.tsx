"use client";

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { FaMoon, FaSun } from "react-icons/fa6";
import GradientText from '../GradientText/GradientText';

export default function Navbar() {
    const [mounted, setMounted] = useState(false)
    const { setTheme, resolvedTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <nav className="flex items-center justify-between p-4 w-full">

            <Image
                src="/logos/logo.webp"
                alt="Logo"
                width={50}
                height={50}
                className={`${resolvedTheme === 'dark' ? 'invert' : ''}`}
            />
            <ul className="flex space-x-4">
                <li>
                    <Link href="/products" className="hover:text-gray-400">Productos</Link>
                </li>
                <li>
                    <Link href="/solutions" className="hover:text-gray-400">Soluciones</Link>
                </li>
                <li>
                    <Link href="/resources" className="hover:text-gray-400">Recursos</Link>
                </li>
                <li>
                    <Link href="/about" className="hover:text-gray-400">Sobre nosotros</Link>
                </li>
            </ul>
            <div className='flex flex-row w-fit space-x-4 test'>
                <GradientText
                    colors={["#ffaa40", "#9c40ff", "#ffaa40"]}
                    animationSpeed={8}
                    showBorder={true}
                    className="p-2"
                >
                    Contactanos
                </GradientText>
                <button
                    className={`rounded-full hover:bg-gray-200 p-2 transition duration-300 ease-in-out ${resolvedTheme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'}`}
                    onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                >
                    {resolvedTheme === 'dark' ? (
                        <FaMoon className={`${resolvedTheme === 'dark' ? 'white' : 'black'}`} />
                    ) : (
                        <FaSun className={`${resolvedTheme === 'dark' ? 'white' : 'black'}`} />
                    )}
                </button>
            </div>
        </nav>
    )
}
