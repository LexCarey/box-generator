import React, {useState} from 'react'
import UserInput from './UserInput';

const UserForm = (props) => {
    const [color, setColor] = useState("");
    const [height, setHeight] = useState("");
    const [width, setWidth] = useState(""); 

    const handleSubmit = (e) => {
        e.preventDefault()
        props.onNewBox({color, width, height})
        setColor("")
        setHeight("")
        setWidth("")
    }

    return (
        <div>
            <h1>Block Form</h1>
            <form onSubmit={handleSubmit}>
            <UserInput placeholder="Enter Color" update={setColor} value={color} />
            <UserInput placeholder="Enter Height" update={setHeight} value={height} />
            <UserInput placeholder="Enter Width" update={setWidth} value={width} />
                <p>
                    <button disabled={color.length<1?true:false} type="submit">Add Box</button>
                </p>
            </form>
        </div>
    )
}

export default UserForm
