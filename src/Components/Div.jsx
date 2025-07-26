import React from 'react'

const Div = (props) => {
  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
        <img src={props.img} style={{height:'100px' ,width:'100px'}} alt="Image" />
        <h1>{props.name}</h1>
        <p>{props.description}</p>
    </div>
  )
}

export default Div
