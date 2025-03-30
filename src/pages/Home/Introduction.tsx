import { AuroraText } from "@/components/magicui/aurora-text";
import { Button } from "@/components/ui/button";
import AsciiLogo from "@/components/AsciiLogo/AsciiLogo";

export default function Introduction() {
  return (
    <>
      {/* Contenedor principal */}
      <div className="relative flex flex-col lg:flex-row justify-center w-full gap-6 py-10 lg:py-20 lg:gap-10 lg:px-16">
        {/* Texto a la izquierda */}
        <div className="w-full lg:w-1/2 z-10 space-y-6 text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Hacemos tus proyectos con <AuroraText colors={["#03dd00", "#00d7ce", "#03dd00"]}>inteligencia artificial</AuroraText>
          </h1>
          <p className="text-xl lg:text-2xl">
            Soluciones basadas en IA para empresas
          </p>
          <div className="space-x-4">
            <Button variant="default">Contactanos</Button>
            <Button variant="outline">Prueba Gratuita</Button>
          </div>
        </div>

        {/* Imagen a la derecha */}
        <div className="w-full lg:w-1/2 flex justify-center h-[380px]">
          <div className="overflow-hidden w-full aspect-video flex items-center justify-center">
            <AsciiLogo
              fontSize={11}
              color="#00b743"
              hoverColor="#00b7a9"
              blurOnHover={true}
            />
          </div>
        </div>
      </div>
    </>
  );
}
