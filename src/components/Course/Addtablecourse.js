import React, {useEffect,useState} from "react";
import axios from "axios";

import { forEachChild } from "typescript";

export default function Addtablecourse() {

  const [addcourse, setAddcourse] = useState([]);

 let [posts,setPosts]=useState([])


  const [form, setForm] = useState({
    mentor_id:"",
    name :"" ,
    mentor: "",
    pricing : "",
    duration : "",
    description:"",
    created_at:"",
    image_enc_data:""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
 

// const fetchCourse = async () => {
//   setIsSubmitting(true);
//   const res = await fetch('https://cds-back.uurl.xyz/api/v1/course');
//   // /addcourse');
//   const data = await res.json();
//   setIsSubmitting(false);
//   setAddcourse(data);
// }

const fetchCourse = () => {
  setIsSubmitting(true);
   const mentorAPI = 'http://localhost:5000/addmentor';
   const courseAPI = 'http://localhost:5000/addcourse';

   const getMentor = axios.get(mentorAPI)
   const getCourse = axios.get(courseAPI)
   axios.all([getMentor, getCourse]).then(
   axios.spread((...allData) => {

     let MentorData  = allData[0]
     const CourseData = allData[1]
    //  console.log(MentorData["data"][1])
     setIsSubmitting(false);
     setAddcourse(CourseData);
     
   })
   
 )}

 const fetchMentor=()=>{
  let titles =[];
  axios.get('http://localhost:5000/addmentor')
    .then(res =>{
      setPosts(res.data)
      console.log(res.data)
       Object.entries(res.data).forEach(key =>{
          // console.log("this is key")
          // console.log(key[1]["course"])
           let tt = key[1]["course"]
           if( tt === "python"){
               titles.push(key[1]["firstname"]+ " " + key[1]["lastname"]);
           }
        })
        console.log(titles)
        return titles;
    })
    .catch(err =>{
      console.log(err)
    })
    
 }

useEffect(() => { 
  fetchCourse();
  fetchMentor();
}, [])

// let mentorname =  fetchMentor();



// Object.entries(posts).forEach(key =>{
//   console.log("this is key")
//   // console.log(key[1]["course"])
//    let tt = key[1]["course"]
//    if( tt === "python"){
//        titles.push(key[1]["firstname"]+ " " + key[1]["lastname"]);
//    }
// })

const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    }
    )
}

const handleMentor = (e) =>{

}





const validate = () => {
  let err = {};

  return err; 
}
 
const showError = (errorObj) => {
  let errMsg = '';

  for(let err in errorObj){
    errMsg += `${errorObj[err]}. `;
  }
 
  alert(`Errors ${errMsg}`);

}

const postCourses = async (data) => {
  await fetch('/addcourse', {
    method: 'POST',
    headers:{
      'Accept' : 'application/json',
      'Content-Type' : 'application/json'
    },
    body : JSON.stringify(data)

  })
}

const handleSubmit = async (e) => {
  e.preventDefault();
  const errors = validate();
  if(Object.keys(errors).length === 0){
    setIsSubmitting(true);
    await postCourses(form);
    setIsSubmitting(false);
    setForm({
    mentor_id:"",
    name :"" ,
    mentor: "",
    pricing : "",
    duration : "",
    description:"",
    created_at:"",
    image_enc_data:""
    })
    fetchCourse();
  }else{
    showError(errors);
  }
}

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-gray-800 text-xl font-bold">Add Course</h6>
            <button
              className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button" onClick={event =>  window.location.href='/courses'}
            >
              All Courses
            </button>
          </div>
        </div>
        {isSubmitting ? (
          <div><h2>Loading...</h2> </div>
        ) : ('')}
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form onSubmit={handleSubmit}>
            <h6 className="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
              Course Information
            </h6>
            <div className="flex flex-wrap">
        
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                   Course Name
                  </label>
                  <input
                    type="text"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    name="name"
                    id="name"
                    placeholder="Enter Course Name" 
                    onChange={handleChange}
                  />
                </div>
              </div>
            
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                   Mentor Name
                  </label>
                  <input
                    type="text"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    name="mentor"
                    id="mentor"
                    placeholder="Select Mentor's Name" 
                    onChange={handleChange}
                  />

                  
                </div>
              </div>
            
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                  Pricing
                  </label>
                  <input
                    type="number"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    name="pricing"
                    id="pricing"
                    placeholder="course price"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Course Duration
                  </label>
                  <input
                    type="text"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    name="duration"
                    id="duration"
                    placeholder="duration"
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              
            </div>

            <hr className="mt-6 border-b-1 border-gray-400" />


            <h6 className="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
            Course Description
            </h6>
            <div className="flex flex-wrap">
            
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Course description
                  </label>
                  <textarea
                    type="text"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    name="description"
                    id="description"
                    placeholder="Enter Course Description"
                    onChange={handleChange}
                    rows="4"
                  ></textarea>
                </div>
              </div>
             
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                   created at
                  </label>
                  <input
                    type="date"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    name="created_at"
                    id="created_at"
                    placeholder="Enter date" 
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <hr className="mt-6 border-b-1 border-gray-400" />

            <h6 className="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
              Image
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                  Course Image
                  </label>
                  <input type="file" 
                  name="image_enc_data"
                  id="image_enc_data"
                  onChange={handleChange}/> <br/>
                  {/* <Coursepic /> */}
                </div>
              </div>
            </div>

            <center> <button  type="submit" style={{backgroundColor:'grey',color:'white',bordercolor:'white',width:'100%',height:'40px'}}>
                                                Submit
                     </button>
            </center>

          </form>
          <div style={{width:"400"}}>
              {/* {titles} */}
          </div>
        </div>
      </div>
    </>
  );
}
