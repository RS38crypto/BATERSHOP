function CTA() {
    return (
        <section className="bg-black text-white py-24 text-center px-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Seu carro não está ligando?
            </h2>

            <p className="text-gray-400 mb-10 text-lg">
                Fale agora com um especialista e resolva em minutos.
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-6 flex-wrap">
                <a
                    href="https://wa.me/556130218830?text=Olá,%20preciso%20de%20uma%20bateria"
                    target="_blank"
                    className="bg-green-500 hover:bg-green-600 transition px-10 py-5 rounded-2xl text-lg font-bold shadow-xl"
                >
                    UNIDADE TAGUATINGA
                </a>
                
                <a
                    href="https://wa.me/556132225966?text=Olá,%20preciso%20de%20uma%20bateria"
                    target="_blank"
                    className="bg-green-500 hover:bg-green-600 transition px-10 py-5 rounded-2xl text-lg font-bold shadow-xl"
                >
                    UNIDADE EPTG
                </a>
            </div>
        </section>
    );
}

export default CTA;
