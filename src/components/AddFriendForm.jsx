import React, { useState } from 'react'
import Button from './Button'

const AddFriendForm = ({ handleAddFriend }) => {
    const [friendName, setFriendName] = useState("")
    const [friendImg, setFriendImg] = useState("https://i.pravatar.cc/48")


    const handleSubmit = (e) => {
        e.preventDefault()

        if (!friendName || !friendImg) {
            return
        }
        
        const id = crypto.randomUUID()
        const newFriend = {
            name: friendName,
            image: `${friendImg}?=${id}`,
            balance: 0,
            id: id
        }
        handleAddFriend(newFriend)
        setFriendName('')
        setFriendImg('https://i.pravatar.cc/48')
    }
    return (
        <form className='form-add-friend'
            onSubmit={handleSubmit}
        >
            <label>Friend Name</label>
            <input type='text'
                onChange={(e) => setFriendName(e.target.value)}
                value={friendName}
            />

            <label>Img Url</label>
            <input type='text'
                value="https://i.pravatar.cc/48"
                onChange={(e) => setFriendImg(e.target.value)}
            />
            <Button >Add Friend</Button>
        </form>
    )
}

export default AddFriendForm
