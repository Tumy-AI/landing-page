"use client";

import React, { ReactNode, useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';

interface GradientTextProps {
    children: ReactNode;
    className?: string;
    colors?: string[];
    animationSpeed?: number;
    showBorder?: boolean;
    redirectTo?: string;
    asLink?: boolean; // Changed from isLink to asLink for clarity
}

export default function GradientText({
    children,
    className = "",
    colors = ["#ffaa40", "#9c40ff", "#ffaa40"],
    animationSpeed = 8,
    showBorder = false,
    redirectTo = "/contact",
    asLink = false, // Default to false to avoid hydration errors
}: GradientTextProps) {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    const gradientStyle = {
        backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
        animationDuration: `${animationSpeed}s`,
    };

    // Determine background color based on theme
    const bgColor = mounted && resolvedTheme === 'dark' ? 'black' : 'white';

    // Common container className - cursor-pointer conditional on asLink
    const containerClassName = `relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-[1.25rem] font-mono backdrop-blur transition-shadow duration-500 overflow-hidden ${asLink ? 'cursor-pointer' : ''} ${className}`;

    // Inner content for both variants
    const innerContent = (
        <>
            {showBorder && (
                <div
                    className="absolute inset-0 bg-cover z-0 pointer-events-none animate-gradient"
                    style={{
                        ...gradientStyle,
                        backgroundSize: "300% 100%",
                    }}
                >
                    <div
                        className="absolute inset-0 rounded-[1.25rem] z-[-1]"
                        style={{
                            width: "calc(100% - 4px)",
                            height: "calc(100% - 4px)",
                            left: "50%",
                            top: "50%",
                            transform: "translate(-50%, -50%)",
                            backgroundColor: bgColor,
                        }}
                    ></div>
                </div>
            )}
            <div
                className="inline-block relative z-2 text-transparent bg-cover animate-gradient"
                style={{
                    ...gradientStyle,
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    backgroundSize: "300% 100%",
                }}
            >
                {children}
            </div>
        </>
    );

    // Handle the wrapping based on asLink prop
    if (asLink) {
        return (
            <Link className={containerClassName} href={redirectTo}>
                {innerContent}
            </Link>
        );
    }

    // Default non-link version
    return <div className={containerClassName}>{innerContent}</div>;
}