import { Spotlight } from "@/components/ui/Spotlight";
import { Button } from "@/components/ui/button";
import ThemeToggle from "../../components/AsciiLogo/Picture_Introduction";

export default function Introduction() {
  return (
    <>
      {/* Contenedor principal */}
      <div className="relative flex flex-col md:flex-row justify-center w-full gap-6 py-10 md:py-28 md:gap-10 md:px-16">
        {/* Texto a la izquierda */}
        <div className="w-full md:w-1/2 z-10 space-y-6 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Hacemos tus proyectos con inteligencia artificial
          </h1>
          <p className="text-xl md:text-2xl">
            Soluciones basadas en IA para empresas
          </p>
          <div className="space-x-4">
            <Button variant="default">Contactanos</Button>
            <Button variant="outline">Prueba Gratuita</Button>
          </div>
        </div>
        
        {/* Imagen a la derecha */}
        <div className="w-full md:w-1/2 flex justify-center">
          <ThemeToggle />
        </div>
      </div>
    </>
  );
}