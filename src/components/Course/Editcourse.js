import React, {useState,useEffect} from "react";
import Axios from 'axios';
//image
import logo from 'static/images/cds logo-02.svg'

// components
import Sidebar from "components/Sidebar/Sidebar.js";

//table
// import CardSettings from "components/Course/CardSettings.js";

// Susmita __ Taar-kata

export default function Editcourse(props) {

    const url = 'http://localhost:5000/addcourse/'

    const [mentor, setMentor] = useState(null);
    const [data, setData] = useState({
        // index : "",
        // coursename :"" ,
        // coursetitle : "",
        // teacher: "",
        // coursetype : "",
        // regiistrations : "",
        // courseduration : "",
        // topics:"",
        // details:"",
        // curriculum:"",
        // coursepicture:""
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
                        <center><h1><u>EDIT COURSE</u></h1></center>
                    {/* table */}
                    <div className="flex flex-wrap mt-4">
                        <div className="w-full mb-12 px-4">
                            {/* <CardSettings /> */}
                            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form onSubmit={submit}>
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
                    INDEX NUMBER
                  </label>
                  <input
                    type="number"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    name="index"
                    id="index"
                    value={data.index}
                    placeholder="index"
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
                   Course Name
                  </label>
                  <input
                    type="text"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    name="coursename"
                    id="coursename"
                    value={data.coursename}
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
                   Course Title
                  </label>
                  <input
                    type="text"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    name="coursetitle"
                    id="coursetitle"
                    value={data.coursetitle}
                    placeholder="Enter Course Title" 
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
                    name="teacher"
                    id="teacher"
                    value={data.teacher}
                    placeholder="Enter Mentor's Name" 
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
                  Course Type
                  </label>
                  <input
                    type="text"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    name="coursetype"
                    id="coursetype"
                    value={data.coursetype}
                    placeholder="Free/Paid " 
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
                  Registrations
                  </label>
                  <input
                    type="number"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    name="regiistrations"
                    id="regiistrations"
                    value={data.regiistrations}
                    placeholder="no. of registrations"
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
                    name="courseduration"
                    id="courseduration"
                    value={data.courseduration}
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
                    Topics
                  </label>
                  <textarea
                    type="text"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    name="topics"
                    id="topics"
                    value={data.topics}
                    placeholder="Enter Course Description"
                    onChange={handleChange}
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
                    Course Details
                  </label>
                  <textarea
                    type="text"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    name="details"
                    id="details"
                    value={data.details}
                    placeholder="Enter Course Description"
                    onChange={handleChange}
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
                    Course Curriculum
                  </label>
                  <textarea
                    type="text"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    name="curriculum"
                    id="curriculum"
                    value={data.curriculum}
                    placeholder="Enter Course Description"
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
                  Course Image
                  </label>
                  <input type="file" 
                  name="coursepicture"
                  id="coursepicture"
                  // value={data.coursepicture[0]}
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
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </>
  );
}
