import React from 'react'

const Todo = (props) => {
  return (
    <>
      <li><i className="fa fa-times aria-hidden-true" onClick={()=>props.onSelect(props.id)}></i>
      {props.interval}</li>
    </>
  )
}

export default Todo