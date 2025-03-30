"use client";

import { useState, useEffect } from "react";


interface AsciiLogoProps {
    color?: string;
    hoverColor?: string;
    fontSize?: number; // en px
    blurOnHover?: boolean;
}

const asciiLogo = `\
                                          333333                      33333333333333333                                                                   
                                         333333333                    23333333333333333333331                                                             
                                        4333   333                333 2332              33333333                                                          
                                         333333333                333 2332              23  4333332                                                       
                                          233333   333            333 2332           33333333  333333                                                     
                                           2333    333332         333 2333          2333  333     33333                                                   
                                           2333    333333333      333  3333         2333  333       3333                                                  
                                           2333    333   33333    333   43333       333333333   4    4333                                                 
                                           2333    333     3333   23333   3333333333333123  33333333   3333                                               
                                           2333    333    333332    33333   233333332       333  3333333333                                               
                                           33333   333  433333333     3333  333333333       333  33333333333                                              
                                             333333333  333   3332    2333 333333333332333  23333333     4333                                             
                                               3333333  333333333     2333 3332    233333333  3333        333                                             
                                                  3333    333333      2333 3332     333   333 2333        3333                                            
                                                   333                2333 3332     3332 3333 2333         333                                            
                                          333334   333                2333 3332      3333333  2333  3333333333                                            
                                        333333333  333   3333333      2333 33334              2333 33333333333                                            
                                        333   333  333  3333 2333     2333  333333            4333 3333    333                                            
                                        333333333  333  3332  333     2333     3333 23333333333333 3333    333                                            
                                          33333    333   33333332     2333     3333 2333333333333  333     333                                            
                                           333     333     3333       3333     3333 2332          3332    3332                                            
                                           333     23334   3333     33334      3333 2332         3333    3333                                             
                                           333       3333  3333   33333   33333333333333333333333333      333                                             
                                           333        3334 3333 33333   333333333333333333333333333       3333                                            
                                         3333333      3334 33333333   33332                                3333                                           
                                        333333333     3334 333333   23333                                   333                                           
                                        333   333     3334 3333   23333                                     3333                                          
                                        433333332     3334       3333                                        3332                                         
                                          23333       3332      3332                                          333                                         
                                                    33333333    333     333                              222222333                                        
                                                   3333  3332   333     333                             3333333333                                        
                                                   4333233333   333     333                              333                                              
                                                    33333333    333     333                              3333                                             
                                                               23334    3333                          2333333                                             
                                                             333333332   3333                         3333                                                
                                                             333   333    33331                         333                                               
                                                             3333 3333      3333                      33333                                               
                                                              2333333        233333                   333                                                 
                                                                                3333332               333                                                 
                                                                                   333333323         2333                                                 
                                                                                       33333333332333333                                                  
                                                                                            33333333333                                                   `;

export default function AsciiLogo({
    color = "#06fcae",
    hoverColor = "#00fff2",
    fontSize = 8,
    blurOnHover = true,
}: AsciiLogoProps) {
    const [hover, setHover] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const checkSize = () => {
            setIsSmallScreen(window.innerWidth < 1024);
        };

        checkSize(); // on mount
        window.addEventListener("resize", checkSize);

        return () => window.removeEventListener("resize", checkSize);
    }, []);

    const computedFontSize = Math.max(fontSize - (isSmallScreen ? 3 : 0), 1);

    return (
        <div className="flex justify-center items-center w-full h-full text-center overflow-hidden">
            <pre
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                className={`transition-all duration-300 ease-in-out font-mono leading-[0.65em] whitespace-pre select-none
                                                                                                      ${hover ? "scale-[1.025] blur-[0.5px]" : ""}`}
                style={{
                    fontSize: `${computedFontSize}px`,
                    color: hover ? hoverColor : color,
                    textAlign: "center",
                    display: "inline-block",
                    paddingInline: "1em",
                    margin: "0 auto",
                    textShadow: "0 0 6px #00f2ff40",
                }}
            >
                {asciiLogo}
            </pre>
        </div>
    );
}
