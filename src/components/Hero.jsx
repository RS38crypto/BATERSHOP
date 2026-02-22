import React from "react";

export default function Hero({ units = {}, unitKey = "unidade1" }) {
  const selected = units[unitKey] || units.unidade1 || Object.values(units)[0] || {};

  return (
    <section
      className="relative bg-cover bg-no-repeat bg-center md:bg-right text-white min-h-[70vh] md:min-h-[600px]"
      style={{
        backgroundImage: "url(./gm3.5.png)",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.55) 40%, rgba(0,0,0,0) 85%)",
        }}
      />

      <div className="relative max-w-4xl px-6 py-20 md:py-32 text-left md:ml-16 lg:ml-28">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight break-words">
          {selected.title || "BATER⚡SHOP BATERIAS AUTOMOTIVAS EM BRASÍLIA"}
        </h1>

        <p className="mt-4 text-gray-300 max-w-2xl text-base sm:text-lg">
          {selected.description ||
            "⚡ Atendimento em até 40 minutos | Entrega e Instalação no Local"}
        </p>

        <div className="mt-10">
          <a
            href="https://wa.me/556130218830?text=Olá,%20gostaria%20de%20solicitar%20um%20atendimento"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg transition w-full sm:w-auto text-center mx-auto"
          >
            Solicitar Atendimento Agora
          </a>
        </div>
      </div>
    </section>
  );
}
