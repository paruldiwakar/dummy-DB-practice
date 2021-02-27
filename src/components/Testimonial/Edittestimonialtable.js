import React, {useState,useEffect} from "react";
import Axios from 'axios';
// import Button from 'react-bootstrap/Button'

// components
// import Testimonialpic from "components/Testimonial/Testimonialpic";

export default function Edittestimonialtable(props) {
      
 const url = 'http://localhost:5000/addtestimonial/'
 // const url = 'https://cds-back.uurl.xyz/api/v1/';


  const [addtestimonial, setAddtestimonial] = useState(null);
  const [data, setData] = useState({
    // testimonialname:"",
    // testimonialbody:"",
    // testimonialtitle:"",
    // testimonialpicture:""
    });

    useEffect(
      () => { 
     const id = props.match.params.id
     console.log("this is useeffect")
     console.log(id)
      Axios.get(url+id)
      .then(
          res =>{
          // console.log(res.data)
          setData(res.data)
          console.log("this is testimonial")
          console.log(res.data)
      }).catch(err => console.log(err))
      

  }, []);


  function submit(e){
    
    e.preventDefault()
    const id = props.match.params.id
    data["is_active"] = true
    console.log("this is submit")
    console.log(data["is_active"])
    Axios.put(url+id,data)
    .then(res =>{
        console.log(res.data)
        props.history.push("/")
    }).catch(err => console.log(err))

    }
    // console.log("this is testimonial")
    // console.log(data)
    function handleChange(e){
      
      const newdata={...data}
      newdata[e.target.id]=e.target.value
      
      setData(newdata)
   }


  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-gray-800 text-xl font-bold">Edit Testimonial</h6>
            <button
              className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button" onClick={event =>  window.location.href='/testimonial'}
            >
              All Testimonial
            </button>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form onSubmit={submit}>
            <h6 className="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
              Testimonial Information
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    placeholder="Name"  
                    name="name"
                    id="name"
                    value={data.name}
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
                    Title
                  </label>
                  <input
                    type="text"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    placeholder="Title"
                    name="title"
                    id="title"
                    value={data.title}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <hr className="mt-6 border-b-1 border-gray-400" />

            <h6 className="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
              Body
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Testimonial body
                  </label>
                  <textarea
                    type="text"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    name="lbody"
                    id="body"
                    value={data.body}
                    onChange={handleChange}
                    rows="4"
                  ></textarea>
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
                   Profile Image
                  </label>
                  <input type="file" 
                  name="testimonialpicture"
                  id="testimonialpicture"
                  // value={data.testimonialpicture[0]}
                  onChange={handleChange}/> <br/>
                  {/* <Testimonialpic /> */}
                </div>
              </div>
            </div>

            <center> <button type="submit"   style={{backgroundColor:'grey',color:'white',bordercolor:'white',width:'100%',height:'40px'}}>
                                                Submit
                     </button>
            </center>

          </form>
        </div>
      </div>
    </>
  );
}


