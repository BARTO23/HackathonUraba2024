import { useState } from "react";

export function HeroSection() {
  const faqs = [
    {
      question: "¿Cómo puedo crear una nueva cuenta?",
      answer:
        "Para crear una nueva cuenta, haga clic en el botón 'Registrarse' en la esquina superior derecha de la página. Luego, siga las instrucciones para completar el formulario de registro con su información personal.",
    },
    {
      question: "¿Cuáles son los métodos de pago aceptados?",
      answer:
        "Aceptamos varios métodos de pago, incluyendo tarjetas de crédito (Visa, MasterCard, American Express), PayPal y transferencias bancarias. Puede seleccionar su método preferido durante el proceso de pago.",
    },
    {
      question: "¿Cómo puedo restablecer mi contraseña?",
      answer:
        "Si olvidó su contraseña, haga clic en el enlace 'Olvidé mi contraseña' en la página de inicio de sesión. Se le pedirá que ingrese su dirección de correo electrónico, y le enviaremos instrucciones para restablecer su contraseña.",
    },
    {
      question:
        "¿Cuál es el tiempo de respuesta para las solicitudes de soporte?",
      answer:
        "Nos esforzamos por responder a todas las solicitudes de soporte dentro de las 24 horas. Para problemas urgentes, nuestro tiempo de respuesta promedio es de 2-4 horas durante el horario laboral.",
    },
  ];

  // Estado de qué FAQ está abierto
  const [openIndex, setOpenIndex] = useState(null);

  // Función para alternar la visibilidad del FAQ
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          Preguntas Frecuentes
        </h1>
        <p className="text-xl text-center mb-12 max-w-2xl mx-auto">
          Encuentre respuestas rápidas a las preguntas más comunes sobre
          nuestros servicios y cómo podemos ayudarle.
        </p>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4 bg-white bg-opacity-10 rounded-lg overflow-hidden"
            >
              <button
                className="w-full p-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <span className="h-5 w-5">▲</span> // Icono para FAQ abierto
                ) : (
                  <span className="h-5 w-5">▼</span> // Icono para FAQ cerrado
                )}
              </button>
              {openIndex === index && (
                <div className="p-4 bg-white bg-opacity-5">
                  <p className="text-sm md:text-base">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-white text-purple-700 hover:bg-purple-100 py-2 px-4 rounded">
            Ver todas las preguntas
          </button>
        </div>
      </div>
    </section>
  );
}
