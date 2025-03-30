"use client";   
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(darkModeMediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    darkModeMediaQuery.addEventListener("change", handleChange);

    return () => darkModeMediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="hidden md:flex w-fit h-fit"
    >
      <img
        src="./logos/picture.png"
        alt="Theme Icon"
        width={420}
        height={420}
        className={`transition-transform duration-500 hover:scale-110 ${isDarkMode ? 'brightness-0 invert' : ''}`}
        style={{ pointerEvents: "none" }}
      />
    </motion.div>
  );
};

export default ThemeToggle;
