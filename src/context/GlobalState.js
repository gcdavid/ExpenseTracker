import { createContext, useReducer} from 'react'
import AppReducer from './AppReducer'

//Initital state
const initialState = { 
    transactions: [
        { id:1, text: 'Flower', amount: 150 },
        { id:2, text: 'Salary', amount: 300 },
        { id:3, text: 'Book', amount: -10 },
        { id:4, text: 'Camera', amount: 150}
    ]
}

// Create context
export const GlobalContext = createContext(initialState)

//Provider component
export const GlobalProvider = ( { children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

//Actions
const deleteTransactions = (id) => {
    dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id
    })
}

const addTransactions = (transaction) => {
    dispatch({
        type: 'ADD_TRANSACTION',
        payload: transaction
    })
}

    return (
    <GlobalContext.Provider value = {{
        transactions: state.transactions,
        deleteTransactions,
        addTransactions
    }}>
        {children}
    </GlobalContext.Provider>)
}
