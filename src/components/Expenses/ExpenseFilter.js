import React from "react";

import "./ExpenseFilter.css";

function ExpensesFilter(props) {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          {props.years.map((year) => {
            return (
              <option value={year.toString()} key={year}>
                {year}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default ExpensesFilter;
