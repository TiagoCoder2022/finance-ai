import { PiggyBankIcon, TrendingUpIcon, WalletIcon } from "lucide-react";
import FeatureCard from "./feature-card";


const FeatureCards = async () => {
    const features = [
        "Análises preditivas",
        "Gestão automatizada",
        "Alertas inteligentes",
        "Relatórios personalizados",
        "Conciliação simplificada",
        "Planejamento estratégico",
        "Segurança aprimorada"
    ]
       
    return (
        <div className="block">
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8">

                <FeatureCard
                    icon={<WalletIcon size={22} className="text-red-500"/>}
                    title="Despesas"
                    content="Tenha total controle sobre seus gastos, categorizando despesas e identificando oportunidades de economia."
                    className="md:col-span-2 lg:col-span-1"   
                />            

                <FeatureCard
                    icon={<TrendingUpIcon size={22} className="text-primary"/>}
                    title="Receita"
                    content="Monitore suas fontes de renda em detalhes e descubra maneiras de aumentar seus ganhos."
                    className="md:col-span-2 lg:col-span-1"
                />            
                
                <FeatureCard
                    icon={<PiggyBankIcon size={22} />}
                    title="Investido"
                    content="Gerencie seus investimentos com eficiência e receba insights para construir um futuro financeiro sólido."
                    className="md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-auto"
                />               
            </div>
            <div className="flex flex-wrap gap-3 justify-center mt-8">
                {features.map((feature) => (
                    <div key={feature} className="bg-neutral-900 border border-white/10 inline-flex px-3 md:px-5 py-1.5 md:py-2 rounded-2xl gap-3 items-center">
                        <span className="bg-lime-400 text-neutral-950 size-5 rounded-full inline-flex items-center justify-center text-xl">&#10038;</span>
                        <span className="font-medium md:text-lg">{feature}</span>
                    </div>
                ))}
            </div>
        </div>        
     );
}
 
export default FeatureCards;