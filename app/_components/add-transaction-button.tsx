"use client"

import { ArrowDownUp } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import UpsertTransactionDialog from "./upsert-transaction-dialog";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

interface AddTransactionButtonProps {
    userCanAddTransaction?: boolean
}
const AddTransactionButton = ({userCanAddTransaction}: AddTransactionButtonProps) => {  
    const [dialogIsOpen, setDialogIsOpen] = useState(false)
    return ( 
        <>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button 
                            className="text-sm md:text-base rounded-full font-bold" 
                            onClick={() => setDialogIsOpen(true)}
                            disabled={!userCanAddTransaction}
                        >
                            Adicionar transações
                            <ArrowDownUp />
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        {!userCanAddTransaction && "Você atingiu o limite de transações, atualize seu plano para obter transações ilimitadas."}
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
            <UpsertTransactionDialog 
                isOpen={dialogIsOpen} 
                setIsOpen={setDialogIsOpen}                 
            />
        </>
    )
}
 
export default AddTransactionButton;