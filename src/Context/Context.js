import React,{useReducer,createContext} from 'react'

import contextReducer from './ContextReducer'
const initState = [];

export const ExpenseTrackerContext = createContext(initState);

export const Provider = ({children})=>{
    const [transactions,dispatch] = useReducer(contextReducer,initState);
    // action creator
    const deleteTransactions = (id)=>{
        dispatch({type:"DELETE_TRANSACTION", payload:id})
    }

    const addTransactions = (transaction)=>{
        dispatch({type:"ADD_TRANSACTION", payload:transaction})
    }
console.log(transactions);
    return(
        <ExpenseTrackerContext.Provider value={{ deleteTransactions, addTransactions, transactions}}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}