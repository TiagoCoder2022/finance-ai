import AddTransactionButton from "@/app/_components/add-transaction-button";
import { Card, CardContent, CardHeader } from "@/app/_components/ui/card";

interface SummaryCardProps {
    icon: React.ReactNode;
    title: string;
    amount: number;
    size?: "small" | "large";
    userCanAddTransaction?: boolean;
}
const SummaryCard = ({icon, title, amount, size = 'small', userCanAddTransaction }: SummaryCardProps) => {
    return ( 
        <Card className={`${size === "large" ? "bg-white bg-opacity-5" : ""}`}>
            <CardHeader className="flex flex-row justify-between">
                <div className="flex flex-row items-center text-center gap-2 lg:gap-4 p-0">
                    {icon}
                    <p className={`${size === "small" ? "text-sm md:text-base text-muted-foreground" : "text-base md:text-lg text-white opacity-70"}`}>{title}</p>
                </div>
                {size === "large" && (<AddTransactionButton userCanAddTransaction={userCanAddTransaction} />)}
            </CardHeader>
            <CardContent>
                <p className={`${size === "small" ? " text-sm md:text-2xl" : "text-xl md:text-4xl"} font-bold`}>
                    {Intl.NumberFormat("pt-BR", {
                        style: "currency", 
                        currency: "BRL"
                    }).format(amount)}
                </p>                
            </CardContent>
        </Card>
     );
}
 
export default SummaryCard;