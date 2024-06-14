import { child, get, getDatabase, push, ref, set } from 'firebase/database';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import app from '../config/Firebaseconfig';
import Input from '../components/Input';
import Button from '../components/Button';

const SingleQuestion = () => {


    
    const [inpData,setInpData] = useState<any>({});
    
    const inpUpdate = (e:any)=>{
        setInpData((prev:any)=>({...prev,[e.target.id]:e.target.value}))
        }
        

    console.log(inpData);
    
    
    const db = getDatabase(app);
    
    
    const sendData = (value:any,inpData:any) => {
        
        const reference = ref(db,`questions/${value.id}`);
        let temp = value;
        if(temp.answers){

            temp.answers.push(inpData.newAnswer)
            }else{

                temp.answers = [inpData.newAnswer]
                }
        set(reference,temp)
        window.parent.location = window.parent.location.href;
        }
        
        
        const [value,setValue] = useState<any>()
        const params =useParams()
        console.log(params.id);
        const getData = () =>{
            const dbRef = ref(getDatabase(app));
            
            get(child(dbRef, `questions/${params.id}`)).then((snapshot) => {
                if (snapshot.exists()) {
                    console.log(snapshot.val());
                    setValue(snapshot.val());
                    
                    } else {
                        console.log("No data available");
                        }
        }).catch((error) => {
            console.error(error);
            });
            }
            
            useEffect(() => {
                getData();
            },[])
            console.log(value);
    
    
  return (
    <div>
        
       {
        value && <>
            <div className="container bg-danger">
                <div className="row">

                    <div>
                        Question:                          {value.question}?
                    </div>
                    <div>
                        Answers: <br/>
                        {value.answers?value.answers.map((e:any,i:any)=><>
                            {`${i+1} . ${e}`}<br/>
                        </>):<>No answers Found</>}
                    </div>
                </div>
                <br/>
                <div>
                    <Input type='text' id='newAnswer'  atChange={(e)=>inpUpdate(e)} placeholder='Add new Answer'/>
                    <div style={{
                        textAlign: 'center'
                    }}>

                    <Button value='submit' click={()=>{sendData(value,inpData)}}/>
                    </div>
                </div>
            </div>
        </>
       }
        
    </div>
  )
}

export default SingleQuestion
