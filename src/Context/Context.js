import React,{useReducer,createContext} from 'react'

import contextReducer from './ContextReducer'
const initState = [];

export const ExpenseTrackerContext = createContext(initState);

export const Provider = ({children})=>{
    const [transactions,dispatch] = useReducer(contextReducer,initState);

    const deleteTransactions = (id)=>{
        dispatch({type:"DELETE_TRANSACTION", payload:id})
    }

    const addTransactions = (transaction)=>{
        dispatch({type:"ADD_TRANSACTION", payload:transaction})
    }

    return(
        <ExpenseTrackerContext.Provider value={{ deleteTransactions, addTransactions}}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}