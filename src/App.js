import React, { useEffect, useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [years, setYears] = useState([]);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  useEffect(() => {
    const expenseYears = expenses.map((expense) => expense.date.getFullYear());
    const uniqueYears = [...new Set(expenseYears)];
    const sortedExpenseYears = uniqueYears.sort((a, b) => a - b);
    setYears(sortedExpenseYears);
  }, [expenses]);

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} years={years} />
    </div>
  );
}

export default App;
