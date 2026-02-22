function Diferenciais() {
    return (
        <section className="py-24 bg-white px-6">
            <div className="max-w-6xl mx-auto text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">
                    Por que escolher nossa empresa?
                </h2>
                <p className="text-gray-500 text-lg">
                    A Bater Shop nasceu para ser a solução definitiva em baterias no Distrito Federal. Com inovação, qualidade e agilidade, nosso grupo se dedica a entregar não apenas produtos, mas a confiança de um serviço superior, feito para manter sua vida em movimento. Aqui, cada bateria é o coração de um novo começo, a garantia de que, ao dar a partida, você terá toda a força para conquistar o seu dia. Escolha a Batershop e sinta a tranquilidade de ter um parceiro que entende de energia.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                <div className="p-10 rounded-2xl shadow-lg hover:shadow-2xl transition">
                    <h3 className="text-xl font-bold mb-4">Instalação no Local</h3>
                    <p className="text-gray-600">
                        Vamos até você e resolvemos na hora.
                    </p>
                </div>

                <div className="p-10 rounded-2xl shadow-lg hover:shadow-2xl transition">
                    <h3 className="text-xl font-bold mb-4">Atendimento Rápido</h3>
                    <p className="text-gray-600">
                       Chegada em até 40 minutos.
                    </p>
                </div>

                <div className="p-10 rounded-2xl shadow-lg hover:shadow-2xl transition">
                    <h3 className="text-xl font-bold mb-4">Garantia e Nota Fiscal</h3>
                    <p className="text-gray-600">
                        Segurança e confiança para você.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Diferenciais;

