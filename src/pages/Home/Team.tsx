"use client";

import { Card, CardHeader, CardContent } from "@/components/ui/card";

export default function Team() {
  const teamMembers = [
    {
      name: "Adrian Auqui Perez",
      role: "Ingeniero de Software",
      imageUrl: "./logos/adrian.jpeg",
    },
    {
      name: "Ronal Condor Blas",
      role: "Ingeniero de Software",
      imageUrl: "./logos/adrian.jpeg",
    },
    {
      name: "Fabrizzio Vilchez",
      role: "Ingeniero de Software",
      imageUrl: "./logos/adrian.jpeg",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full gap-6 py-20 px-4 md:px-16 bg-white text-black dark:bg-black dark:text-white transition-colors duration-500">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">
        <span className="font-bold">+Expertos</span>{" "}
        <span className="font-light">en nuestro grupo de desarrollo</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {teamMembers.map((member, index) => (
          <Card
            key={index}
            className="bg-gray-100 dark:bg-[#111] border border-gray-300 dark:border-neutral-800 text-black dark:text-white transition-all hover:scale-[1.03] hover:shadow-xl"
          >
            <CardHeader className="flex items-center justify-center p-4">
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-48 h-64 object-cover rounded-md"
              />
            </CardHeader>
            <CardContent className="text-center space-y-1">
              <h2 className="text-lg font-semibold">{member.name}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">{member.role}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
