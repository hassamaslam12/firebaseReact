import React, { useState } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import { sendData } from '../config/FirebaseMethods';

const AskQuestion = () => {
const [inpData,setInpData] = useState<any>({});

const inpUpdate = (e:any)=>{
  setInpData((prev:any)=>({...prev,[e.target.id]:e.target.value}))
}

const sendtoDatabase =(inpData:any) => {
  sendData("questions",inpData);
  alert("added");
  window.parent.location = window.parent.location.href;
}
console.log(inpData);

  return (
    <div>
        <h1 style={{
            textAlign: 'center'
        }}>ADD NEW QUESTION</h1>
        <Input type='text' placeholder="Your question" atChange={(e)=>inpUpdate(e)} id="question"/>
        <Input type='text' placeholder="Your Name" atChange={(e)=>{inpUpdate(e);}} id="name"/>
        <div style={{
            textAlign: 'center'
        }}>

        <Button  value='Submit' click={()=>sendtoDatabase(inpData)}/>
        </div>
    </div>
  )
}

export default AskQuestion
