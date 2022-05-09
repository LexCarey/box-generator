import React from 'react'

const Box = (props) => {
    return (
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
            {
            props.boxes.map((element, i) => {
                return(
                <div key={i}>
                <div style={{backgroundColor: element.color,
                    width: element.width+"px",
                    height: element.height+"px"}}>
                    </div>
                </div>
                )
            })
            }
        </div>
    )
}

export default Box