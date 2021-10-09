import React, { useReducer, createContext } from 'react'

import contextReducer from './ContextReducer'
const initState = JSON.parse(localStorage.getItem('transactions')) || [];

export const ExpenseTrackerContext = createContext(initState);

export const Provider = ({ children }) => {
    const [transactions, dispatch] = useReducer(contextReducer, initState);
    // action creator
    const deleteTransactions = (id) => {
        dispatch({ type: "DELETE_TRANSACTION", payload: id })
    }

    const addTransactions = (transaction) => {
        dispatch({ type: "ADD_TRANSACTION", payload: transaction })
    }
    console.log(transactions);

    const balance = transactions.reduce((acc, curVal) => {
        return (curVal.type === "Expense" ? acc - curVal.amount : acc + curVal.amount)
    }, 0)
    return (
        <ExpenseTrackerContext.Provider value={{ deleteTransactions, addTransactions, transactions, balance }}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}