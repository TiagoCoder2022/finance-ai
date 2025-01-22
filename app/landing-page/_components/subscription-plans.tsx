import { Card, CardHeader, CardContent } from "@/app/_components/ui/card";
import { CheckIcon, CreditCardIcon, HeadsetIcon, XIcon } from "lucide-react";
import Tag from "./tag";
import { Button } from "@/app/_components/ui/button";
import Link from "next/link";

const SubscriptionPlans = () => {
    return ( 
        <section className="py-24 px-5">
            <div className="text-center">
                <Tag>Assinaturas</Tag>
            </div>
            <h2 className="text-6xl font-medium text-center mt-6 max-w-2xl mx-auto">
            Planos flexíveis para{" "} 
                <span className="bg-gradient-to-r from-lime-400 to-lime-700 text-transparent bg-clip-text">
                    você
                </span>
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground text-base md:text-lg text-center mt-6">
            Escolha o plano ideal para você e aproveite recursos avançados que ajudam 
            a impulsionar sua gestão financeira de forma prática e eficiente.
            </p>
            <div className="flex justify-center space-y-6 mx-auto mt-8">
                <div className="flex flex-col md:flex-row gap-6 justify-center">
                    <div className="flex flex-col gap-4">
                        <Card className="w-[350px] md:w-[450px]">                        
                            <CardHeader className="border-b border-solid py-8 relative">                                                       
                                <h2 className="text-center text-xl md:text-2xl font-semibold">Plano Básico</h2>
                                <div className="flex items-center gap-3 justify-center">
                                    <span className="text-2xl md:text-4xl">R$</span>
                                    <span className="font-semibold text-4xl md:text-6xl">0</span>
                                    <div className="text-muted-foreground text-xl md:text-2xl">/mês</div>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-6 py-8">
                                <div className="flex items-center gap-2">
                                    <CheckIcon className="text-primary" />
                                    <p className="text-sm md:text-base">Apenas 10 transações por mês</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <XIcon />
                                    <p className="text-sm md:text-base">Relatórios de IA</p>
                                </div>
                                <Link href="/login">
                                    <Button variant="outline" className="w-full rounded-full mt-6">Adiquirir Plano</Button>
                                </Link>
                            </CardContent>
                        </Card>
                        <div className="inline-flex justify-center items-center text-center gap-2 mt-4">
                            <HeadsetIcon size={20}/>
                            <p className="text-muted-foreground text-sm md:text-base">
                                Dedicated customer support
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <Card className="w-[350px] md:w-[450px]">
                            <CardHeader className="border-b border-solid py-8 relative">                            
                                <h2 className="text-center text-xl md:text-2xl font-semibold">Plano Primium</h2>
                                <div className="flex items-center gap-3 justify-center">
                                    <span className="text-2xl md:text-4xl">R$</span>
                                    <span className="font-semibold text-4xl md:text-6xl">19</span>
                                    <div className="text-muted-foreground text-xl md:text-2xl">/mês</div>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-6 py-8">
                                <div className="flex items-center gap-2">
                                    <CheckIcon className="text-primary" />
                                    <p className="text-sm md:text-base">Transações ilimitadas</p>
                                </div>
                                <div className="flex items-center gap-2">
                                <CheckIcon className="text-primary" />
                                    <p  className="text-sm md:text-base">Relatórios de IA</p>
                                </div>
                                <Link href="/login">
                                    <Button className="w-full rounded-full mt-6">Adiquirir Plano</Button>
                                </Link>
                            </CardContent>
                        </Card>
                        <div className="inline-flex justify-center items-center text-center gap-2 mt-4">
                            <CreditCardIcon size={20}/>
                            <p className="text-muted-foreground text-sm md:text-base">100 % secure payments</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default SubscriptionPlans;