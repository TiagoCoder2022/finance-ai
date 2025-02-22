import { auth, clerkClient } from "@clerk/nextjs/server";
import Navbar from "../_components/navbar";
import { redirect } from "next/navigation";
import { Card, CardContent, CardHeader } from "../_components/ui/card";
import { CheckIcon, XIcon } from "lucide-react";
import AcquirePlanButton from "./_component/acquire-plan-button";
import { Badge } from "../_components/ui/badge";
import { getCurrentMonthTransaction } from "../_data/get-current-month-transactions";

const SubscriptionPage = async () => {
    const { userId } = await auth()
    
    if (!userId) {
        redirect("/login")
    }
    
    const user = await clerkClient().users.getUser(userId)

    const currentMonthTransactions = await getCurrentMonthTransaction()
    
    const hasPrimiumPlan = user?.publicMetadata.subscriptionPlan === 'premium' 
    return ( 
        <>
            <Navbar />
            <h1 className="p-6 font-bold text-2xl">Assinatura</h1>
            <div className="space-y-6 mx-auto">
                <div className="flex flex-col md:flex-row gap-6">
                    <Card className="w-[350px] md:w-[450px]">                        
                        <CardHeader className="border-b border-solid py-8 relative">
                            {!hasPrimiumPlan && (
                                <Badge className="absolute top-12 left-4 bg-primary/10 text-primary">Ativo</Badge>
                            )}                            
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
                                <p className="text-sm md:text-base">Apenas 10 transações por mês ({currentMonthTransactions}/10)</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <XIcon />
                                <p className="text-sm md:text-base">Relatórios de IA</p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="w-[350px] md:w-[450px]">
                        <CardHeader className="border-b border-solid py-8 relative">
                            {hasPrimiumPlan && (
                                <Badge className="absolute top-12 left-4 bg-primary/10 text-primary">Ativo</Badge>
                            )}
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
                            <AcquirePlanButton />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    );
}
 
export default SubscriptionPage;