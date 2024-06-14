import React from 'react'

type Props = {
    value: string,
    click?:() => void
    
}

const Button = (props:Props) => {
  return (
    <div style={{
        
        padding:5,
        margin:2
    }}>

    <button onClick={props.click} style={{
        padding:'10px 40px',
        backgroundColor: '#268be4',
        color: '#fff',
        border: '1px solid #fff',
        borderRadius: '10px',
    }}
    >{props.value}</button>
    </div>
  )
}

export default Button
