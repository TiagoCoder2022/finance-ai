import { useState } from "react";
import { Button } from "./ui/button";
import { PencilIcon } from "lucide-react";
import UpsertTransactionDialog from "./upsert-transaction-dialog";
import { Transaction } from "@prisma/client";

interface EditTransactionProps {
    transaction: Transaction
}

const EditTransactionButton = ({transaction}: EditTransactionProps) => {  
    const [isOpen, setIsOpen] = useState(false)
    return ( 
        <>
            <Button variant="ghost" size="icon" className="text-muted-foreground" onClick={() => setIsOpen(true)}>
                <PencilIcon/>
            </Button>
            <UpsertTransactionDialog 
                isOpen={isOpen} 
                setIsOpen={setIsOpen}
                defaultValues={{
                    ...transaction, 
                    amount: Number(transaction.amount)
                }} 
                transactionId={transaction.id}
            />
        </>
    )
}
 
export default EditTransactionButton;