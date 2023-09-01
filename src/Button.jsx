import React from 'react'

const Button = ({text,onClicke}) => {
  return (
    <div>


       <button onClick={onClicke}>{text}</button>
        
    </div>
  )
}

export default Button