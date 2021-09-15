import { useContext } from "react"
import { ExpenseTrackerContext } from "./Context/Context"
import { expenseCategories, incomeCategories } from "./Files/Categories";

const useTransactions = (title)=>{
    const {transactions} = useContext(ExpenseTrackerContext);
    console.log(transactions);
    const transType = transactions.filter(t=> t.type === title);
    console.log(transType);
    const total = transType.reduce((acc,currVal)=>acc += currVal.amount,0);
    const totalCategories = title === "Income" ? incomeCategories : expenseCategories;

    transType.forEach(t=>{
        const category = totalCategories.find(c=>c.type === t.category);

        if(category){
            category.amount += t.amount;
        }
    })

    const filteredCategories = totalCategories.filter(c=>c.amount >0);

    const chartData = {
        datasets:[{
            data:filteredCategories.map(fc=>(fc.amount)),
            backgroundColor: filteredCategories.map(fc=>(fc.color))
        }],
        labels:filteredCategories.map(fc=>(fc.type))
    }

    console.log({chartData,total,filteredCategories});
    return { chartData,total}
}

export default useTransactions;