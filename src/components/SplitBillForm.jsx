import React, { useState } from 'react'
import Button from './Button'

const SplitBillForm = ({ selectedFriend, calculateFriendExpense }) => {
    const [billValue, setBillValue] = useState(0)
    const [selfExpense, setSelfExpense] = useState(0)

    const friendExpense = billValue ? (billValue - selfExpense) : 0

    const [whoIsPaying, setWhoIsPaying] = useState("user")


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!billValue && !selfExpense) {
            return;
        }

        let expense = 0
        if (whoIsPaying === "user") {
            expense = friendExpense
        }
        else {
            expense = -selfExpense
        }
        calculateFriendExpense(expense)
    }

    return (
        <form className='form-split-bill' onSubmit={handleSubmit}>
            <h2>Split the Tab with: {selectedFriend.name}</h2>
            <label>Bill Value</label>
            <input type='decimal' min="0"
                onChange={(e) => setBillValue(Number(e.target.value))}
                value={billValue} />

            <label>Your Expense</label>
            <input type='decimal' min="0" max={billValue}
                onChange={(e) => setSelfExpense(Number(e.target.value > billValue) ? selfExpense : Number(e.target.value))}
                value={selfExpense} />

            <label>{selectedFriend.name}'s Expense</label>
            <input type='decimal' min="0" value={friendExpense} disabled />

            <label>Who is paying the bill</label>
            <select value={whoIsPaying} onChange={(e) => setWhoIsPaying(e.target.value)}>
                <option value={selectedFriend.name}>{selectedFriend.name}</option>
                <option value="user">You</option>
            </select>
            <Button>Split Bill</Button>

        </form>
    )
}

export default SplitBillForm
