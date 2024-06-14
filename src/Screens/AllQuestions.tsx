import React, { useEffect, useState } from 'react'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'
import { child, get, getDatabase, ref } from 'firebase/database';
import app from '../config/Firebaseconfig';




const AllQuestions = () => {
  const [temp,setTemp] = useState<any>()


  
  const getAllData = () =>{
    const dbRef = ref(getDatabase(app));
    
    get(child(dbRef, `questions`)).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        console.log("done");
        setTemp(snapshot.val());
      setKeys(Object.keys(snapshot.val()));
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }

  console.log(temp);
  
  
  
  
  const [keys,setKeys] = useState<any>();
  console.log(keys);



// if(keys[0])
// console.log(keys)


    const navigate =useNavigate();
    const [AllQuestions,setAllQuestions] = useState<any>()
    console.log(AllQuestions)


    useEffect(() => {
      getAllData()
    
   },[])

   
  return (
    <div>
      {keys && keys.map((e:any ,i:any)=><div key={i}>
        <div className="question">

        {`${i+1} . ${temp[e].question}`}
        </div>
        <div className="btn">
            <Button value='See Answer' click ={()=>navigate(`/question/${e}`)}/>
        </div>

        </div>)}


        <Button value='Add new question' click={()=>navigate('/askquestion')}/>
    </div>
  )
}

export default AllQuestions
