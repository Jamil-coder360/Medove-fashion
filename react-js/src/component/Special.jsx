import React from 'react'

const Special = (props) => {
    console.log(props)
  return (
    <div className='offer'>
        <p> {props.text} </p>
        <h3> {props.heading} </h3>
        <button> {props.button} </button>
    </div>
  )
}

export default Special