import logo from './logo.svg';
import './App.css';
import FriendsList from './components/Friends-List';
import AddFriendForm from './components/AddFriendForm';
import SplitBillForm from './components/SplitBillForm';
import { useState } from 'react';
import Button from './components/Button';

function App() {
  const initialFriends = [
    {
      id: 118836,
      name: "Clark",
      image: "https://i.pravatar.cc/48?u=118836",
      balance: -7,
    },
    {
      id: 933372,
      name: "Sarah",
      image: "https://i.pravatar.cc/48?u=933372",
      balance: 20,
    },
    {
      id: 499476,
      name: "Anthony",
      image: "https://i.pravatar.cc/48?u=499476",
      balance: 0,
    },
  ];

  const [showAddFriendForm, setShowAddFriendForm] = useState(false)
  const [friends, setFriends] = useState(initialFriends)
  const [selectedFriend, setSelectedFriend] = useState(null)



  const handleAddFriend = (friend) => {
    setFriends(friends => [...friends, friend])
  }

  const handleSelectFriend = (friend) => {
    setSelectedFriend(friend)
  }

  const calculateFriendExpense = (expense) => {
    console.log(expense)

    setFriends(friends.map(friend => friend.id === selectedFriend.id ? { ...friend, balance: expense } : friend))
  }

  return (
    <div className="app">
      <div className='sidebar'>
        <FriendsList initialFriends={friends}
          selectedFriend={selectedFriend}
          handleSelectFriend={handleSelectFriend}
        ></FriendsList>
        {
          showAddFriendForm && (<AddFriendForm handleAddFriend={handleAddFriend}></AddFriendForm>)
        }
        <Button onClick={() => {
          setShowAddFriendForm(!showAddFriendForm)
        }}>{showAddFriendForm ? "Back" : "Add Friend"}</Button>
      </div>
      {
        selectedFriend && <SplitBillForm selectedFriend={selectedFriend}
          calculateFriendExpense={calculateFriendExpense}>
        </SplitBillForm>
      }
    </div>
  );
}

export default App;
