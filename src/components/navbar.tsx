// components/Navbar.tsx
"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Button } from "@/components/ui/button";
import Logo from "../../public/logos/logo.webp";
import { Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Define el componente ListItem correctamente
const ListItem = React.forwardRef<HTMLAnchorElement, React.ComponentPropsWithoutRef<"a"> & { title: string }>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";

// Enlaces de soluciones
const solucionesItems = [
  {
    title: "Análisis de Datos",
    href: "/soluciones/analisis-datos",
    description: "Extrae insights valiosos de tus datos con nuestra IA avanzada.",
  },
  {
    title: "Chatbots Inteligentes",
    href: "/soluciones/chatbots",
    description: "Automatiza tu atención al cliente con chatbots conversacionales.",
  },
  {
    title: "Modelos Predictivos",
    href: "/soluciones/prediccion",
    description: "Anticipa tendencias y comportamientos con nuestros modelos de IA.",
  },
  {
    title: "Automatización Inteligente",
    href: "/soluciones/automatizacion",
    description: "Optimiza procesos empresariales con flujos de trabajo automatizados.",
  },
];

// Enlaces de industrias
const industriasItems = [
  {
    title: "Sector Financiero",
    href: "/industrias/finanzas",
    description: "Soluciones para bancos, aseguradoras y fintech.",
  },
  {
    title: "Salud",
    href: "/industrias/salud",
    description: "IA aplicada a diagnósticos, tratamientos y gestión hospitalaria.",
  },
  {
    title: "Retail",
    href: "/industrias/retail",
    description: "Mejora la experiencia de compra y optimiza inventarios.",
  },
  {
    title: "Manufactura",
    href: "/industrias/manufactura",
    description: "Automatización y optimización de procesos industriales.",
  },
];

export function Navbar() {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  
  // Montar el componente una vez que está en el cliente
  React.useEffect(() => {
    setMounted(true);
  }, []);
  
  // Decidir si aplicar la inversión solo después de montar el componente en el cliente
  const shouldInvertLogo = React.useMemo(() => {
    if (!mounted) return false;
    
    // Si está usando el tema del sistema, verificar si el sistema está en modo oscuro
    if (theme === "system") {
      return systemTheme === "dark";
    }
    
    return theme === "dark";
  }, [theme, systemTheme, mounted]);
  
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4 container mx-auto">
        <div className="mr-4 flex">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-8 h-8">
              <Image 
                src={Logo} 
                alt="Tumy.ai Logo" 
                fill
                className={cn(
                  "object-contain",
                  shouldInvertLogo ? "filter invert" : ""
                )}
              />
            </div>
            <h1 className="text-xl font-bold">Tumy.ai</h1>
          </Link>
        </div>
        
        {/* Menú de navegación para pantallas medianas y grandes */}
        <NavigationMenu className="mx-6 flex-1 hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Soluciones</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {solucionesItems.map((item) => (
                    <ListItem key={item.href} href={item.href} title={item.title}>
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Industrias</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {industriasItems.map((item) => (
                    <ListItem key={item.href} href={item.href} title={item.title}>
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/precios" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Precios
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/blog" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Blog
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        {/* Botones de acción para pantallas medianas y grandes */}
        <div className="ml-auto flex items-center space-x-4">
          <ModeToggle />
          <Link href="/contacto" className="hidden md:inline-flex">
            <Button>Contáctanos</Button>
          </Link>
          
          {/* Menú hamburguesa para móviles */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-80">
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-center py-4">
                    <Link href="/" className="flex items-center space-x-2">
                      <div className="relative w-8 h-8">
                        <Image 
                          src={Logo} 
                          alt="Tumy.ai Logo" 
                          fill
                          className={cn(
                            "object-contain",
                            shouldInvertLogo ? "filter invert" : ""
                          )}
                        />
                      </div>
                      <h1 className="text-xl font-bold">Tumy.ai</h1>
                    </Link>
                    <SheetClose asChild>
                      <Button variant="ghost" size="icon">
                        <X className="h-6 w-6" />
                      </Button>
                    </SheetClose>
                  </div>
                  
                  <div className="flex flex-col space-y-4 mt-4">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="soluciones">
                        <AccordionTrigger>Soluciones</AccordionTrigger>
                        <AccordionContent>
                          <div className="flex flex-col space-y-2">
                            {solucionesItems.map((item) => (
                              <SheetClose key={item.href} asChild>
                                <Link href={item.href} className="px-4 py-2 hover:bg-accent rounded-md">
                                  <div className="font-medium">{item.title}</div>
                                  <p className="text-sm text-muted-foreground">{item.description}</p>
                                </Link>
                              </SheetClose>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="industrias">
                        <AccordionTrigger>Industrias</AccordionTrigger>
                        <AccordionContent>
                          <div className="flex flex-col space-y-2">
                            {industriasItems.map((item) => (
                              <SheetClose key={item.href} asChild>
                                <Link href={item.href} className="px-4 py-2 hover:bg-accent rounded-md">
                                  <div className="font-medium">{item.title}</div>
                                  <p className="text-sm text-muted-foreground">{item.description}</p>
                                </Link>
                              </SheetClose>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                    
                    <SheetClose asChild>
                      <Link href="/precios" className="px-4 py-2 hover:bg-accent rounded-md">
                        Precios
                      </Link>
                    </SheetClose>
                    
                    <SheetClose asChild>
                      <Link href="/blog" className="px-4 py-2 hover:bg-accent rounded-md">
                        Blog
                      </Link>
                    </SheetClose>
                  </div>
                  
                  <div className="mt-auto pt-4">
                    <SheetClose asChild>
                      <Link href="/contacto" className="w-full">
                        <Button className="w-full">Contáctanos</Button>
                      </Link>
                    </SheetClose>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
}