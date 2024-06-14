import {child, get, getDatabase, push, ref, set} from 'firebase/database'
import app from './Firebaseconfig'

const db = getDatabase(app);


const sendData = (nodeName:string,data:any) => {
    const newQuesKey = push(child(ref(db),"questions")).key;
    data.id = newQuesKey;
   
    const reference = ref(db,`questions/${newQuesKey}`);
    set(reference,data)
   
}

const getAllData = () =>{
    const dbRef = ref(getDatabase());
    let temp:any;
    get(child(dbRef, `questions`)).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        console.log("done");
        temp = snapshot.val();
       return setTimeout(() => temp,10000)
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
    
}


export {sendData,getAllData}