import '../App.css'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
const Balance = () => {
    const { transactions } = useContext(GlobalContext)
    
    const amounts = transactions.map(transaction => transaction.amount)
    console.log(amounts)
    const total = amounts.reduce((first, second) => (first += second), 0).toFixed(2)
    console.log(total)

    return (
        <div className="balance_container">
            <h4 className="balance">YOUR BALANCE</h4>
            <h1 className="balance">${total}</h1>
        </div>
    )
}

export default Balance
