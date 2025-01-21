import { Card, CardContent, CardHeader } from "@/app/_components/ui/card";
import { twMerge } from "tailwind-merge";

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;  
    content: string;
    className?: string;    
}
const FeatureCard = ({icon, title, content, className}: FeatureCardProps) => {
    return ( 
        <Card className={twMerge("bg-neutral-900 border border-white/10 p-6", className)}>
            <CardHeader className="flex flex-row justify-between">
                <div className="flex flex-row items-center text-center gap-2 lg:gap-4 p-0">
                    {icon}
                    <p className="text-lg lg:text-2xl text-white font-semibold">{title}</p>
                </div>                
            </CardHeader>
            <CardContent>
                <p className="text-base text-muted-foreground">
                    {content}
                </p>                
            </CardContent>
        </Card>
     );
}
 
export default FeatureCard;