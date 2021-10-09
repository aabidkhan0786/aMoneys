
const contextReducer = (state, actions) => {
    let transaction;

    switch (actions.type) {
        case "DELETE_TRANSACTION":
            transaction = state.filter(t => t.id !== actions.payload)
            localStorage.setItem('transactions', JSON.stringify(transaction))
            return transaction

        case "ADD_TRANSACTION":
            transaction = [actions.payload, ...state]
            localStorage.setItem('transactions', JSON.stringify(transaction))
            return transaction
            
        default:
            return state
    }
}

export default contextReducer