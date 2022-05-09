import React, {useState} from 'react'

const UserForm = (props) => {
    const [color, setColor] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        props.onNewBox(color)
        setColor("")
    }

    return (
        <div>
            <h1>Block Form</h1>
            <form onSubmit={handleSubmit}>
            <input value={color} name="color" type="text" onChange={e => setColor(e.target.value)} placeholder="Enter Color" />
                <p>
                    <button type="submit">Add Box</button>
                </p>
            </form>
        </div>
    )
}

export default UserForm