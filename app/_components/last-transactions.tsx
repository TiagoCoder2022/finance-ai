import Link from "next/link";
import { Button } from "./ui/button";
import { CardContent, CardHeader, CardTitle } from "./ui/card";
import { Transaction, TransactionType } from "@prisma/client";
import Image from "next/image";
import { formatCurrency } from "../_utils/currency";
import { TRANSACTION_PAYMENT_METHOD_ICONS } from "../_constants/transactions";
import { ScrollArea } from "./ui/scroll-area";

interface LastTransactionsProps {
    lastTransactions: Transaction[]
}

const LastTransactions = ({lastTransactions}: LastTransactionsProps) => {
    const getAmountColor = (transaction: Transaction) => {
        if (transaction.type === TransactionType.EXPENSE) {
            return "text-red-500"
        }
        if (transaction.type === TransactionType.DEPOSIT) {
            return "text-primary"
        }
        return "text-white"
    }
    const getAmountPrefix = (transaction: Transaction) => {
        if (transaction.type === TransactionType.DEPOSIT) {
          return "+";
        }
        return "-";
      }
    return ( 
      <ScrollArea className="rounded-md border">
        <CardHeader className="flex-row items-center justify-between">
          <CardTitle className="font-bold">Últimas Transações</CardTitle>
          <Button variant="outline" className="rounded-full font-bold" asChild>
            <Link href="/transactions">Ver mais</Link>
          </Button>
        </CardHeader>
        <CardContent className="space-y-6">
          {lastTransactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-white bg-opacity-[3%] p-3 text-white">
                  <Image
                    src={`/${TRANSACTION_PAYMENT_METHOD_ICONS[transaction.paymentMethod]}`}
                    height={20}
                    width={20}
                    alt="PIX"
                  />
                </div>
                <div>
                  <p className="text-sm font-bold">{transaction.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {new Date(transaction.date).toLocaleDateString("pt-BR", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>
              <p className={`text-sm font-bold ${getAmountColor(transaction)}`}>
                {getAmountPrefix(transaction)}
                {formatCurrency(Number(transaction.amount))}
              </p>
            </div>
          ))}
        </CardContent>
      </ScrollArea>
    );
}
 
export default LastTransactions;