function Services() {
    return (
        <section className="py-24 bg-gray-100 px-6">
            <div className="max-w-6xl mx-auto text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">
                    Nossos serviços
                </h2>
                <p className="text-gray-500 text-lg">
                    A solução para o seu veículo.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                <div className="bg-white p-10 rounded-2xl shadow-md hover:shadow-xl transition">
                    <h3 className="text-xl font-bold mb-4">Troca de Bateria</h3>
                    <p className="text-gray-600">
                        Instalação profissional no local.
                    </p>
                </div>

                <div className="bg-white p-10 rounded-2xl shadow-md hover:shadow-xl transition">
                    <h3 className="text-xl font-bold mb-4">Teste Gratuito</h3>
                    <p className="text-gray-600">
                        Avaliação completa da bateria.
                    </p>
                </div>

                <div className="bg-white p-10 rounded-2xl shadow-md hover:shadow-xl transition">
                    <h3 className="text-xl font-bold mb-4">Atendimento Emergencial</h3>
                    <p className="text-gray-600">
                        Suporte rápido quando o carro não liga.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Services;
