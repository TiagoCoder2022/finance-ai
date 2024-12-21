import { ArrowDownUp } from "lucide-react";
import { Button } from "../_components/ui/button";
import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/data-table";
import { TransactionColumns } from "./_columns";


const TransactionsPage = async () => {
    const transactions = await db.transaction.findMany({ })
    return ( 
        <div className="p-6 space-y-6">
            <div className="flex w-full items-center justify-between">
                <h1 className="text-2xl font-bold">Transações</h1>
                <Button className="rounded-full">
                    Adicionar transações
                    <ArrowDownUp />
                </Button>
            </div>
            <DataTable columns={TransactionColumns} data={transactions} />
        </div>
    );
}
 
export default TransactionsPage;