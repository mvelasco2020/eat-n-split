import React from 'react'
import FriendsItem from './Friends-Item'


const FriendsList = ({ initialFriends, handleSelectFriend, selectedFriend, calculateFriendExpense }) => {
    return (
        <ul>
            {initialFriends.map((friend) => (<FriendsItem friend={friend}
                key={friend.id}
                handleSelectFriend={handleSelectFriend}
                selectedFriend={selectedFriend}>
            </FriendsItem  >))}
        </ul>
    )
}

export default FriendsList
