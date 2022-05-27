import React, { useEffect, useState } from "react";
import ExpensesFilter from "./ExpenseFilter";

import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("");

  useEffect(() => {
    const year = props.years.length === 0 ? "" : props.years[0];
    setFilteredYear(year.toString());
  }, [props.years]);

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
        years={props.years}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
    </div>
  );
}

export default Expenses;
