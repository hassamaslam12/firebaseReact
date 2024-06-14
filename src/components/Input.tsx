import React from 'react'
import './Input.css'


type Props ={
    type: string,
    id:string,
    label?: string,
    placeholder?: string,
    atChange:(e:any) => void
}

const Input = (props : Props) => {
  return (
    
    <div className='inp'>
        <input type={props.type} placeholder={props.placeholder} onChange={(e)=>props.atChange(e)} id={props.id}/>
        {props.label && <label>{props.label}</label> }
    </div>
  )
}

export default Input
