import React from 'react'
import Button from './Button'

const FriendsItem = ({ friend, handleSelectFriend, selectedFriend,  }) => {


    const isSelected = friend.id === selectedFriend?.id
    return (
        <li className={isSelected ? 'selected' : ''}>
            <img src={friend.image} alt={friend.name}></img>
            <h3>
                {friend.name}
            </h3>
            {
                friend.balance < 0 && (
                    <p className='red'>You owe {friend.name} ${Math.abs(friend.balance)}</p>
                )
            }
            {
                friend.balance > 0 && (
                    <p className='green'> {friend.name} owes you ${Math.abs(friend.balance)}</p>
                )
            }
            {
                friend.balance === 0 && (
                    <p >You and {friend.name} are even</p>
                )
            }
            <Button onClick={() => { handleSelectFriend(friend) }}>Select</Button>
        </li>
    )
}

export default FriendsItem
