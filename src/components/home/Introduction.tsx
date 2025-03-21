import { Spotlight } from "@/components/ui/Spotlight";
import { Button } from "@/components/ui/button";

export default function Introduction() {
  return (
    <>
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
        height="100vh"
      />

      {/* Contenedor principal */}
      <div className="relative flex flex-col md:flex-row justify-center w-full gap-6 py-10 md:py-28w3 md:gap-10 px- md:px-16 test">
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
        <div className="w-full md:w-1/2 flex justify-center max-h-60">
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-700 shadow-lg max-w-md w-full aspect-video flex items-center justify-center">
            <p className="text-gray-400">Imagen de demostración</p>
          </div>
        </div>
      </div>
    </>
  );
}
