import { Spotlight } from "@/components/ui/Spotlight";

export default function Home() {
  return (
    <>
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="white" />

      {/* Contenedor principal */}
      <div className="relative flex flex-col md:flex-row justify-center w-full gap-6 md:gap-10 px-6 md:px-16 pt-8">

        {/* Texto a la izquierda */}
        <div className="w-full md:w-1/2 z-10 space-y-6 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Hacemos tus proyectos con inteligencia artificial
          </h1>
          <p className="text-xl md:text-2xl">
            Soluciones basadas en IA para empresas
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
            Contáctanos
          </button>
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
