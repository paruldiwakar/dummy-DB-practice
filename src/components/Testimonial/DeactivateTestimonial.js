import React, {useState,useEffect} from "react";
import Axios from 'axios';
 
export default function DeactivateTestimonial(props) {

    const url = 'http://localhost:5000/addtestimonial/'
   
     const [addtestimonial, setAddtestimonial] = useState(null);
     const [data, setData] = useState({
  
       });
     function userDeactivate(is_active){
        const id = props.match.params.id 
       data["is_active"] = false;
       console.log(data["is_active"])
       Axios.put(url+id,data)
       .then(res =>{
           console.log(res.data)
           props.history.push("/")
       }).catch(err => console.log(err))
       }
       useEffect(
         () => { 
        const id = props.match.params.id
        const is_active = props.match.params.is_active
        console.log(id, is_active);
         Axios.get(url+id)
         .then(
             res =>{
             // console.log(res.data)
             setData(res.data)
             console.log(res.data)
         }).catch(err => console.log(err))

         userDeactivate(is_active) ;    

     }, []);

    


    return (
        <div className="card text-center m-3">
            <h2 className="card-header">USER HAS BEEN DEACTIVATED</h2>
            
        </div>
    );
}

