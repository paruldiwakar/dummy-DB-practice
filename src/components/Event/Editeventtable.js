import React, {useState,useEffect} from "react";
import Axios from 'axios';
// import Button from 'react-bootstrap/Button'

// components
import Eventpic from "components/Event/Eventpic";
import Speakerpic from "components/Event/Speakerpic";

export default function Editeventtable(props) {

  const url = 'http://localhost:5000/addevent/'

  const [data, setData] = useState({
    // title:"",
    // startdate:"",
    // enddate:"",
    // location:"",
    // details:"",
    // content:"",
    // speakername:"",
    // eventpicture:"",
    // speakerpicture:""

  });
       
  useEffect(
    () => { 
    const id = props.match.params.id
    Axios.get(url+id)
    .then(
        res =>{
        console.log(res.data)
        setData(res.data)
    }).catch(err => console.log(err))
    

}, []);


function submit(e){
  e.preventDefault()
  const id = props.match.params.id
  Axios.put(url+id,data)
  .then(res =>{
      console.log(res.data)
      props.history.push("/")
  }).catch(err => console.log(err))

  }

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
            <h6 className="text-gray-800 text-xl font-bold">Edit Event</h6>
            <button
              className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button" onClick={event =>  window.location.href='/event'}
            >
              All Event
            </button>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form onSubmit={submit}>
            <h6 className="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
              Event Information
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                   Event title
                  </label>
                  <input
                    type="text"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    placeholder="Name"  
                    name="title"
                    id="title"
                    value={data.title}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                   Speaker Name
                  </label>
                  <input
                    type="text"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                   name="speakername"
                   id="speakername"
                    placeholder="Speaker's Name"  
                    value={data.speakername}
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
                    start date
                  </label>
                  <input
                    type="date"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    placeholder="start date" 
                    name="startdate"
                    id="startdate"
                    value={data.startdate}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    End date
                  </label>
                  <input
                    type="date"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    placeholder="end date" 
                    name="enddate"
                    id="enddate"
                    value={data.enddate}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Location
                  </label>
                  <input
                    type="text"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    placeholder="location" 
                    name="location"
                    id="location"
                    value={data.location}
                  />
                </div>
              </div>
            </div>

            <hr className="mt-6 border-b-1 border-gray-400" />

            <h6 className="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
              Details
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Event Details
                  </label>
                  <textarea
                    type="text"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                     
                    name="details"
                    id="details"
                    value={data.details}
                    rows="4"
                  ></textarea>
                </div>
              </div>
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Event Content
                  </label>
                  <textarea
                    type="text"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                     
                    name="content"
                    id="content"
                    value={data.content}
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
                   Event Image
                  </label>
                  {/* <Eventpic /> */}
                  <input type="file" 
                  name="eventpicture"
                  id="eventpicture"
                  onChange={handleChange}/> <br/>
                </div>
              </div>
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                   Speaker Image
                  </label>
                  {/* <Speakerpic /> */}
                  <input type="file" 
                  name="speakerpicture"
                  id="speakerpicture"
                  onChange={handleChange}/> <br/>
                </div>
              </div>
            </div>

            <center> <button type="submit" style={{backgroundColor:'grey',color:'white',bordercolor:'white',width:'100%',height:'40px'}}>
                                                Submit
                     </button>
            </center>

          </form>
        </div>
      </div>
    </>
  );
}


