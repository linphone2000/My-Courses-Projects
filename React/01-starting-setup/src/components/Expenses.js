import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expences({expenses}) {
    return(
        <Card className="expenses">
            <ExpenseItem expenses={expenses[0]}/>
            <ExpenseItem expenses={expenses[1]}/>
            <ExpenseItem expenses={expenses[2]}/>
        </Card>
    )
}
export default Expences;