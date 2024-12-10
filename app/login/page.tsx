import Image from "next/image";
import { Button } from "../_components/ui/button";
import { LogInIcon } from "lucide-react";

const LoginPage = () => {
    return ( 
        <div className="flex items-center justify-center h-full px-5">
            
            <div className="max-w-[500px] text-center sm:text-left">
                <Image 
                    src="/login.svg"  
                    width={173} 
                    height={39} 
                    alt="Faça login" 
                    className="mb-8 mx-auto sm:mx-0"
                />

                <h1 className="text-4xl font-bold mb-3">Bem-vindo!</h1>

                <p className="mb-8 text-muted-foreground">
                    A Finance AI é uma plataforma de gestão financeira que utiliza IA para 
                    monitorar suas movimentações, e oferece insights personalizados,
                    facilitando o controle de seu orçamento.
                </p>

                <Button variant="outline" className="w-full">
                    <LogInIcon className="mr-2" />
                    Fazer login ou criar conta
                </Button>
            </div>
        </div>
     );
}
 
export default LoginPage;