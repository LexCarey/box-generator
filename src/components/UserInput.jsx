import React from 'react'

const UserInput = (props) => {

    return (
        <div>
            <input value={props.value} type="text" onChange={e => props.update(e.target.value)} placeholder={props.placeholder} />
        </div>
    )
}

export default UserInput