import React, {useState,useEffect} from "react";
import axios from 'axios';
// import { DropdownButton, Dropdown} from 'react-bootstrap';
//image
import logo from 'static/images/cds logo-02.svg'

// components
import Sidebar from "components/Sidebar/Sidebar.js";

//table
import Testimonialtable from "components/Testimonial/Testimonialtable.js";


export default function Testimonial() {

//     const [apiData, setApiData] = React.useState([]);
//   React.useEffect(() => {
//     fetch('http://localhost:5000/addtestimonial/k6PNvF3')
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         setApiData(data);
//       });
//   }, []);


const [posts,setPosts]=useState([])

const url = 'https://cds-back.uurl.xyz/api/v1';

const titles =[]
const fetchCourse = () => {
  // axios.get('/addtestimonial')
  axios.get('http://localhost:5000/addtestimonial')
  .then(res =>{
    console.log(res)
    setPosts(res.data)
  })
  .catch(err =>{
    console.log(err)
  })
}  

useEffect(() => {

  fetchCourse()
},
[])

Object.entries(posts).forEach(key =>{
    // console.log(key[1]["title"]);
    let tt =  key[1]["title"]
     if( tt === "exoplanets"){
         titles.push(key[1]["fullname"]);
     }
  
 })

// console.log("these are the title !!!!!!!")
// console.log(titles)



  return (
    <>
      <Sidebar />
        <div className="relative md:ml-64 bg-gray-200">
            <div className="px-4 md:px-10 mx-auto w-full -m-24">
                <br/><br/><br/><br/><br/>
                    {/* logo */}
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <center>
                                <img src={logo} alt="Logo"  style={{width:'130px', height:'130px'}} /> 
                            </center>
                        </div>
                    </div>
                    {/* heading */}
                        <center><h1><u>ALL TESTIMONIAL</u></h1></center>
                    {/* table */}
                    <div className="flex flex-wrap mt-4">
                        <div className="w-full mb-12 px-4">
                            <Testimonialtable color="dark" />


                    <select>
                        {
                            titles.map(t =>(
                                <option key={t} value={t}>
                                  {t}
                                </option>
                            ))
                        }
                    </select>
                        </div>
                      
                    </div>
                   
                    <div>
                  

                     
                            
                    </div>
                   
            </div>
        </div>
    </>
  );
}
