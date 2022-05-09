import React from 'react'

const Box = (props) => {
    return (
        <div style={{display: "flex", flexWrap: "wrap"}}>
            {
            props.boxes.map((element, i) => {
                return(
                <div key={i}>
                <div style={{backgroundColor: element,
                    width: "100px",
                    height: "100px"}}>
                    </div>
                </div>
                )
            })
            }
        </div>
    )
}

export default Box