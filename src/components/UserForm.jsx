import React, {useState} from 'react'
import UserInput from './UserInput';

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
            <UserInput placeholder="Enter Color" update={setColor} value={color} />
                <p>
                    <button disabled={color.length<1?true:false} type="submit">Add Box</button>
                </p>
            </form>
        </div>
    )
}

export default UserForm

//<UserInput placeholder="Enter Height" update={setHeight} value={height} />
//<UserInput placeholder="Enter Width" update={setWidth} value={width} />

//setHeight("")
//setWidth("")

//const [height, setHeight] = useState("");
//const [width, setWidth] = useState("");