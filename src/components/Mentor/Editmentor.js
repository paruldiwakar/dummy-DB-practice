import React, {useState,useEffect} from "react";
import Axios from 'axios';
//image
import logo from 'static/images/cds logo-02.svg'

// components
import Sidebar from "components/Sidebar/Sidebar.js";

//table
import CardSettings from "components/Mentor/CardSettings.js";

// Susmita __ Taar-kata

export default function Editmentor(props) {

    const url = 'http://localhost:5000/addmentor/'
    // const url = 'https://cds-back.uurl.xyz/api/v1/mentor';

    const [mentor, setMentor] = useState(null);
    const [data, setData] = useState({
      // email : "",
      // fullname :"" ,
      // mobile : "",
      // address: "",
      // city : "",
      // country : "",
      // pincode : "",
      // designation:"",
      // linkedin:"",
      // facebook:"",
      // twitter : "",
      // mentorpicture:""
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
                        <center><h1><u>EDIT MENTOR</u></h1></center>
                    {/* table */}
                    <div className="flex flex-wrap mt-4">
                        <div className="w-full mb-12 px-4">
                            {/* <CardSettings /> */}
                            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form 
           onSubmit={submit}
           >
            <h6 className="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
              Mentor Information
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
                    name ="fullname"
                    id="fullname"
                    value={data.fullname}
                    placeholder="Enter Name" 
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
                    Email address
                  </label>
                  <input
                    type="email"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    name="email"
                    id="email"
                    value={data.email}
                    placeholder="Enter Email address"
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
                    Mobile no.
                  </label>
                  <input
                    type="text"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    name="mobile"
                    id="mobile"
                    value={data.mobile}
                    placeholder="Enter mobile no."
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <hr className="mt-6 border-b-1 border-gray-400" />

            <h6 className="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
              Address Information
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                   name="address"
                 id="address"
                 value={data.address}
                    placeholder="Enter address"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    name="city"
                    id="city"
                    value={data.city}
                    placeholder="Enter City"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Country
                  </label>
                  <input
                    type="text"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                 name = "country"
                id = "country"
                value={data.country}
                    placeholder="Enter Country"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Pincode Code
                  </label>
                  <input
                    type="text"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                   name="pincode"
                  id ="pincode"
                  value={data.pincode}
                    placeholder="Enter Pincode"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <hr className="mt-6 border-b-1 border-gray-400" />

            <h6 className="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
              Designation
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Designation
                  </label>
                  <textarea
                    type="text"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                   name="designation"
                id="designation"
                value={data.designation}
                  placeholder="Enter Designation"
                  onChange={handleChange}
                    rows="4"
                  ></textarea>
                </div>
              </div>
            </div>

            <hr className="mt-6 border-b-1 border-gray-400" />

            <h6 className="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
              Social
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Linkedln link
                  </label>
                  <input
                    type="text"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                   name="linkedin"
                  id="linkedin"
                  value={data.linkedin}
                    placeholder="Enter Linkedln link"
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
                    Facebook link
                  </label>
                  <input
                    type="text"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    name="facebook"
                    id="facebook"
                    value={data.facebook}
                    placeholder="Enter Facebook link"
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
                   Twitter link 
                  </label>
                  <input
                    type="text"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                  name="twitter"
                  id="twitter"
                  value={data.twitter}
                    placeholder="Enter Twitter link "
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
                   Profile Image
                  </label>
                  <input type="file" 
                  name="mentorpicture"
                  id="mentorpicture"
                  // value={data.mentorpicture[0]}
                  onChange={handleChange}
                  />
                  <br/>
                  {/* <Mentorpic /> */}
                  {/* <div >
                <img alt="image not inserted" src={imgData} />
              </div> */}
                </div>
              </div>
            </div>
            {/* onClick={handleSubmit} onChange={handleInputChange}  */}
            <center> <button type="submit"  style={{backgroundColor:'grey',color:'white',bordercolor:'white',width:'100%',height:'40px'}}>
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
