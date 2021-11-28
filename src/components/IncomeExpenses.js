import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext)

    const amount = transactions.map(transaction => transaction.amount)
    console.log(amount)

    const income = amount
    .filter(item => item > 0)
    .reduce((acc, item) => (acc +=item), 0)
    .toFixed(2)

    const expense = (
        amount.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1)
    return (
        <div className="income">
            <div>
                <h4 className="title">Income</h4>
                <p className="money plus">+${income}</p>
            </div>
            <div>
                <h4 className="title">Expense</h4>
                <p className="money minus">-${expense}</p>
            </div>
        </div>
    )
}

export default IncomeExpenses
