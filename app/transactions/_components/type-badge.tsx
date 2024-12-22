import { Badge } from "@/app/_components/ui/badge"
import { Transaction, TransactionType } from "@prisma/client"
import { Circle } from "lucide-react"

interface TransactionTypeBadgeProps {
    transaction: Transaction
}

const TransactionTypeBadge = ({ transaction }: TransactionTypeBadgeProps) => {
  if (transaction.type === TransactionType.DEPOSIT) {
    return (
      <Badge className="hover:bg-muted bg-muted font-bold text-primary">
        <Circle size={10}  className="mr-2 fill-primary"/>
        Depósito
      </Badge>)
  }
  if (transaction.type === TransactionType.EXPENSE) {
    return (
      <Badge className="hover:bg-muted font-bold text-danger bg-danger bg-opacity-10">
        <Circle size={10}  className="mr-2 fill-danger"/>
        Despesa
      </Badge>)
  }
  return (
    <Badge className="hover:bg-muted font-bold text-white bg-white bg-opacity-10">
      <Circle size={10}  className="mr-2 fill-white"/>
      Investiemento
    </Badge>)
}

export default TransactionTypeBadge;