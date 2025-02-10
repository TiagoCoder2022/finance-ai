import { auth, clerkClient } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Navbar from "../_components/navbar";
import SummaryCards from "./_components/summary-cards";
import TimeSelect from "./_components/time-select";
import { isMatch } from "date-fns";
import TransactionPieChart from "./_components/transactions-pie-chart";
import { getDashboard } from "../_data/get-dashboard";
import ExpensesPerCategory from "./_components/expenses-per-category";
import LastTransactions from "../_components/last-transactions";
import { canUserAddTransaction } from "../_data/can-user-add-transaction";
import AiReportButton from "./_components/ai-resport-button";

interface DashboardProps {
  searchParams: {
    month: string;
  }
}

const Dashboard = async ({searchParams: { month }}: DashboardProps) => {
  const {userId} = await auth()
  if (!userId) {
    redirect("/login")
  }
  const monthIsValid = !month || !isMatch(month, "MM")
  if (monthIsValid) {
    redirect(`/dashboard?month=${new Date().getMonth() + 1}`)
  }
  const dashboard = await getDashboard(month)
  const userCanAddTransaction = await canUserAddTransaction()
  const user = await clerkClient().users.getUser(userId)
  return ( 
    <>
      <Navbar />
      <div className="p-6 h-full space-y-4 lg:space-y-6 flex flex-col">
        <div className="lg:flex lg:justify-between">
          <h1 className="mb-4 lg:mb-0 text-xl lg:text-2xl font-bold">Dashboard</h1>
          <div className="flex justify-between lg:items-center gap-3">
            <AiReportButton month={month} hasPremiumPlan={user.publicMetadata.subscriptionPlan === "premium"}/>
            <TimeSelect />
          </div>
        </div>
        <div className="flex flex-col lg:grid lg:grid-cols-[2fr,1fr] h-full lg:gap-6 gap-3">
          <div className="flex flex-col gap-3 lg:gap-6 lg:overflow-hidden lg:pb-4">
            <SummaryCards month={month} {...dashboard} userCanAddTransaction={userCanAddTransaction}/>
            <div className="block lg:hidden xl:hidden">
              <LastTransactions lastTransactions={dashboard.lastTransactions}/>
            </div>
            <div className="flex flex-col lg:grid lg:grid-cols-3 h-full grid-rows-1 gap-3 lg:gap-6">
              <TransactionPieChart {...dashboard}/>
              <ExpensesPerCategory expensesPerCategory={dashboard.totalExpensePerCategory}/>
            </div>
          </div>
          <div className="hidden lg:block lg:mb-6 max-h-full">
            <LastTransactions lastTransactions={dashboard.lastTransactions}/>
          </div>
        </div>                        
      </div>      
    </>
  );
}
 
export default Dashboard;