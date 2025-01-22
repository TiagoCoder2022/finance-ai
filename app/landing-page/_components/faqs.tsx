import { PlusIcon } from "lucide-react";
import Tag from "./tag";
import { twMerge } from "tailwind-merge";

const faqs = [
    {
        question: "Como posso acompanhar minhas despesas em tempo real?",
        answer: "Nosso painel de controle fornece uma visão detalhada e atualizada das suas despesas, permitindo que você acompanhe seus gastos em tempo real de qualquer dispositivo."
    },
    {
        question: "Posso importar meus dados financeiros de outros sistemas?",
        answer: "Sim, nossa plataforma permite a importação de dados financeiros de sistemas populares através de arquivos CSV, facilitando a migração e integração dos seus dados."
    },
    {
        question: "A plataforma é segura para armazenar meus dados financeiros?",
        answer: "Sim, utilizamos criptografia de ponta a ponta e protocolos de segurança avançados para garantir que seus dados financeiros estejam protegidos contra acessos não autorizados."
    },
    {
        question: "O que acontece se eu ultrapassar o limite de transações no plano gratuito?",
        answer: "Caso atinja o limite de transações, você poderá continuar utilizando a plataforma, mas algumas funcionalidades avançadas estarão limitadas até que você atualize para um plano premium."
    },
    {
        question: "Posso acessar meus dados financeiros de qualquer lugar?",
        answer: "Sim, nossa plataforma é baseada na nuvem, permitindo que você acesse seus dados financeiros com segurança de qualquer lugar e em qualquer dispositivo com conexão à internet."
    }
];


const Faqs = () => {
    const selectedIndex = 0 
    return ( 
        <section className="py-24 px-5">
            <div>
                <div className="flex justify-center">
                    <Tag>FAQs</Tag>
                </div>
                <h2 className="text-5xl font-medium mt-6 text-center">
                    Dúvidas? Nós temos {" "} 
                    <span className="bg-gradient-to-r from-lime-400 to-lime-700 text-transparent bg-clip-text">respostas</span>
                </h2>
                <p className="max-w-2xl mx-auto text-muted-foreground text-base md:text-lg text-center mt-6">
                    Confira as perguntas mais frequentes sobre nossa plataforma e descubra como podemos ajudar você a manter suas finanças sob controle.
                </p>
                <div className="flex flex-col pag-6 max-w-2xl mx-auto mt-12">
                    {faqs.map((faq, faqIndex) => (
                        <div key={faq.question} className="bg-neutral-900 rounded-2xl border border-white/10 p-6 mt-8">
                            <div className="flex justify-between items-center cursor-pointer">
                                <h3 className="font-medium">{faq.question}</h3>
                                <PlusIcon className={twMerge("text-lime-400", selectedIndex === faqIndex && "rotate-45")}/>
                            </div>
                            <div className={twMerge("mt-6", selectedIndex !== faqIndex && "hidden")}>
                                <p className="text-white/50">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
     );
}
 
export default Faqs;