// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Celso Rios de Oliveira",
        text: "Bom atendimento. Muito honestos. Já ia comprar uma bateria nova, mas detectaram que a minha antiga ainda estava na garantia. E ainda me emprestaram uma bateria reserva até que o processo de verificação da garantia da bateria fosse concluída. Resultado: Era só problema de carga, deram uma boa carga lenta e a bateria ficou boa novamente. Solucionaram meu problema e não gastei nada. Ainda existe gente honesta no mundo.",
    },

    {
        name: "Jason Rodrigues",
        text: "Sempre que eu preciso de uma bateria Procuro Bater Shop, Sempre com bom atendimento e preço justo sou cliente desde 2019, E fica aqui meu sincero Agradecimento por sempre ser muito bem atendido em especial pelo Rangel, Obrigado mesmo, desejo sucesso pra vocês!!!",
    },

    {
        name: "José Pompílio Gonzaga",
        text: "Excelente atendimento. Rápido no orçamento e também no serviço. O Rangel, que foi quem fez a troca da bateria, foi atencioso e eficiente. Recomendo!",
    },

    {
        name: "Eduardo Vinicius Coelho",
        text: "Gostei muito, o rapaz que trocou a bateria informou antes de medir a bateria quais valores deveriam ser atingido para manter a bateria antiga ou substituir. Trocou super rápido. Indico muito!",
    },

    {
        name: "Munize Gonçalves",
        text: "Meu carro acabou a bateria no meio da rua, eu liguei pra Bater Shop falei com o proprietário e na mesma hora eles enviaram o colaborador deles para me socorrer. Gente vocês estão de parabéns a qualidade no atendimento, a rapidez e a presteza com que me atenderam superam qualquer um. Vocês são top",
    },

    {
        name: "Hudson Coutinho",
        text: "Recebi um excelente atendimento , preço justo, recomendo e voltarei quando precisar novamente. Agradecimento pela agilidade na troca de minha bateria. até breve.",
    },
];

const Testimonials = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6 text-center">

                <motion.h2
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold mb-12"
                >
                    O que nossos clientes dizem:
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0}}
                            transition={{ duration: 0.6, delay: index * 0.2}}
                            className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition"
                        >
                            <div className="flex justify-center mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="text-yellow-400 fill-yellow fill-yellow-400" />
                                ))}
                            </div>

                            <p className="text-gray-600 mb-4">"{item.text}"</p>
                            <h4 className="font-semibold">{item.name}</h4>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;