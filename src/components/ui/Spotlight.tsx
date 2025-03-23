import React from "react";
import { cn } from "@/lib/utils";

type SpotlightProps = {
    className?: string;
    fill?: string;
    height?: string; // Nueva prop para controlar la altura
};

export const Spotlight = ({ className, fill, height = "100vh" }: SpotlightProps) => {
    return (
        <div
            className="absolute top-0 left-0 w-full pointer-events-none -z-10"
            style={{ height }} // Aplicamos la altura personalizada aquí
        >
            {/* Div de fondo con degradado para difuminar los bordes */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/[0.96] to-transparent dark:via-black/[0.96] via-white/[0.96]">
                <div className="absolute inset-0 [background-size:40px_40px]
                    dark:[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]
                    [background-image:linear-gradient(to_right,rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.1)_1px,transparent_1px)]
                    spotlight-mask"
                />
            </div>
            <svg
                className={cn(
                    "animate-spotlight pointer-events-none absolute z-[1] h-[169%] w-[138%] lg:w-[84%] opacity-40",
                    className
                )}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 3787 2842"
                fill="none"
            >
                <g filter="url(#filter)">
                    <ellipse
                        cx="1924.71"
                        cy="273.501"
                        rx="1924.71"
                        ry="273.501"
                        transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
                        fill={fill || "white"}
                        fillOpacity="0.21"
                    ></ellipse>
                </g>
                <defs>
                    <filter
                        id="filter"
                        x="0.860352"
                        y="0.838989"
                        width="3785.16"
                        height="2840.26"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                        ></feBlend>
                        <feGaussianBlur
                            stdDeviation="151"
                            result="effect1_foregroundBlur_1065_8"
                        ></feGaussianBlur>
                    </filter>
                </defs>
            </svg>
        </div>
    );
};