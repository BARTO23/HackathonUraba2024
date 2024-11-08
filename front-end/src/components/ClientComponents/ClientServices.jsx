import React from "react";
import { Wifi, Code, Cpu, Video } from "lucide-react";

const services = [
  {
    title: "Internet",
    description:
      "Conexiones de alta velocidad y confiabilidad para hogares y empresas.",
    icon: Wifi,
  },
  {
    title: "Desarrollo de Software",
    description:
      "Soluciones personalizadas para optimizar sus procesos de negocio.",
    icon: Code,
  },
  {
    title: "Desarrollo de Hardware",
    description: "Diseño y fabricación de componentes electrónicos a medida.",
    icon: Cpu,
  },
  {
    title: "Instalación CCTV",
    description:
      "Sistemas de vigilancia avanzados para la seguridad de su propiedad.",
    icon: Video,
  },
];

const ClientServices = () => {
  return (
    <section className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">
        Nuestros Servicios
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 shadow-lg rounded-lg flex flex-col"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <service.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="text-sm text-gray-500 mb-4">{service.description}</p>
            <div className="flex-grow">
              {/* Aquí puedes añadir más contenido si lo deseas */}
            </div>
            <div className="mt-4">
              <button className="w-full px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/80">
                Más información
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientServices;
