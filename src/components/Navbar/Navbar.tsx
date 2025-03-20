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
            <Link className='flex items-center gap-2' href={"/"}>
                <Image
                    src="/logos/logo.webp"
                    alt="Logo"
                    width={50}
                    height={50}
                    className={`${resolvedTheme === 'dark' ? 'invert' : ''}`}
                />
                <h2 className="text-2xl font-bold">Tumy.ai</h2>
            </Link>
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
            <div className='flex flex-row w-fit gap-2'>
                <GradientText
                    colors={["#ff8d00", "#7b00ff", "#ff8d00"]}
                    animationSpeed={8}
                    showBorder={true}
                    className="p-2"
                >
                    Contactanos
                </GradientText>
                <button
                    className={`rounded-full transition duration-300 px-2 ease-in-out ${resolvedTheme === 'dark' ? 'text-gray-200 hover:bg-gray-900' : 'text-black hover:bg-gray-300'}`}
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
