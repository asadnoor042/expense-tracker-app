import { Link } from "react-router-dom"
// import { Button } from "./Button"
import Button from "./Button"

const Sidebar = () => {
  return (

    // here we can use "/dashboard/transaction" for routing in "LINK" also we can use only "transaction" react understand bth by itself that pages belonf to first dashboard/transaction 
   <aside className="w-64 border-r p-4 flex flex-col gap-2">

      <Button asChild variant="ghost">
        <Link to="/dashboard">Dashboard</Link>
      </Button>

      <Button asChild variant="ghost">
        <Link to="/dashboard/transactions">Transactions</Link>
      </Button>

      <Button asChild variant="ghost">
        <Link to="/dashboard/budgets">Budgets</Link>
      </Button>

      <Button asChild variant="ghost">
        <Link to="/dashboard/settings">Settings</Link>
      </Button>

    </aside>
  )
}

export default Sidebar