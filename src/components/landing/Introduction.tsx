import { cn } from "@/lib/utils";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import { Button } from "../ui/button";
export default function Introduction() {
    return (
      <div className="relative flex h-screen w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-20">
        {/* Fondo animado */}
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
            "absolute inset-0 h-full w-full",
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            "skew-y-12"
          )}
        />
  
        {/* Contenido principal */}
        <div className="relative z-10 flex w-full max-w-6xl items-center justify-between">
          {/* Texto a la izquierda */}
          <div className="w-1/2 text-white">
            <h1 className="text-4xl font-bold">
              HACEMOS TUS PROYECTOS CON INTELIGENCIA ARTIFICIAL
            </h1>
            <p className="text-lg">Soluciones basadas en IA para empresas</p>

            <div className="space-x-4">
                <Button className="mt-4 cursor-pointer" variant="default" size="lg">
                    Demo Gratuita
                </Button>

                <Button className="mt-4 cursor-pointer" variant="outline" size="lg">
                    Precios
                </Button>
            </div>
          </div>
  
          {/* Imagen a la derecha */}
          <div className="w-1/2 flex justify-end">
           
          </div>
        </div>
      </div>
    );
  }
  