import React, {useEffect,useState} from "react";

// import Mentorpic from "components/Mentor/Mentorpic";

export default function Addtablementor() {

  const [addmentor, setAddmentor] = useState(null);
  const [form, setForm] = useState({
   course:"",
    email : "",
    firstname:"",
    lastname: "",
     middlename: "",
    contact_number : "",
    age:"",
    sex:"",
    rating:"",
    // address: "",
    // city : "",
    // country : "",
    // pincode : "",
    description:"",
    // linkedin:"",
    // facebook:"",
    // twitter : "",
    image_enc_data:""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);


useEffect(() =>{
   fetchMentor();
}, [])
 
const fetchMentor = async () => {
  setIsSubmitting(true);
  const res = await fetch('/addmentor');
  //https://cds-back.uurl.xyz/api/v1/mentor');
  // 
  const data = await res.json();
  setIsSubmitting(false);
  setAddmentor(data);
}

const handleChange = (e) => {
  setForm({
    ...form,
    [e.target.name]: e.target.value
  })
}

// const uploadImage = async (e) => {
//   console.log("the file to be uploades =>>> "+ e.target.files[0])
//   let file = e.target.files[0]

//   const base64 = await convertBase64(file);
//   console.log(base64)
//   form["image_enc_data"] = String(base64);
  
// }

// const convertBase64 = (file) => {
//   return new Promise((resolve,reject) =>{
//    const fileReader = new FileReader();
//    fileReader.readAsDataURL(file);

//    fileReader.onload =() => {
//      resolve(fileReader.result);
//    };

//    fileReader.onerror = (error) => {
//      reject(error);
//    }
//   })
// }

const validate = () => {
  let err = {};

  if(!form.description){
    err.description='designation is required'
  }
  if(!form.email){
    err.email='email is required'
  }
  if(!form.firstname){
    err.firstname='first name is required'
  }
  if(!form.contact_number){
    err.contact_number='phone number is required'
  }
  // if(!form.pincode){
  //   err.pincode='pincode is required'
  // }
  // if(!form.city){
  //   err.city='city is required'
  // }
  // if(!form.address){
  //   err.ddress='address is required'
  // }
  return err; 
}

const showError = (errorObj) => {
  let errMsg = '';

  for(let err in errorObj){
    errMsg += `${errorObj[err]}. `;
  }
 
  alert(`Errors ${errMsg}`);

}

const postMentors = async (data) => {
  await fetch('/addmentor', {
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
    await postMentors(form);
    setIsSubmitting(false);
    setForm({
      course:"",
    email : "",
    firstname:"",
    lastname: "",
     middlename: "",
    contact_number : "",
    age:"",
    sex:"",
    rating:"",
    // address: "",
    // city : "",
    // country : "",
    // pincode : "",
    description:"",
    // linkedin:"",
    // facebook:"",
    // twitter : "",
    image_enc_data:""
    })
    fetchMentor();
  }else{
    showError(errors);
  }
}
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
        
          <div className="text-center flex justify-between">
            <h6 className="text-gray-800 text-xl font-bold">Add Mentor</h6>
           
           
            <button
              className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button" onClick={event =>  window.location.href='/mentors'}
            >
              All Mentors
            </button>
          </div>
        </div>
        {isSubmitting ? (
          <div><h2>Loading...</h2> </div>
        ) : ('')}
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form  onSubmit={handleSubmit}>
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
                   course
                  </label>
                  <input
                    type="text"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    name ="course"
                    id="course"
                    placeholder="course" 
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
                   First Name
                  </label>
                  <input
                    type="text"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    name ="firstname"
                    id="firstname"
                    placeholder="first Name" 
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
                  Middle  Name 
                  </label>
                  <input
                    type="text"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    name ="middlename"
                    id="middlename"
                    placeholder="middle Name" 
                    onChange={handleChange}
                  />
                </div>
              </div><div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                   Last Name
                  </label>
                  <input
                    type="text"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    name ="lastname"
                    id="lastname"
                    placeholder="last name" 
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
                    Contact Number 
                  </label>
                  <input
                    type="text"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    name="contact_number"
                    id="contact_number"
                     
                    placeholder="Enter contact number "
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
                   Age
                  </label>
                  <input
                    type="number"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    name="age"
                    id="age"
                     
                    placeholder="Enter age"
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
                    Sex
                  </label>
                  <input
                    type="text"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    name="sex"
                    id="sex"
                     
                    placeholder="Enter sex"
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
                    Rating
                  </label>
                  <input
                    type="text"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    name="rating"
                    id="rating"
                     
                    placeholder="Enter rating"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <hr className="mt-6 border-b-1 border-gray-400" />

            {/* <h6 className="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
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
                    
                    placeholder="Enter Pincode"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div> */}

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
                   name="description"
                id="description"
                  placeholder="Enter description"
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
                  name="image_enc_data"
                  id="image_enc_data"
                  accept=".jpeg, .png"
                  onChange={handleChange}/>
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
          <div style={{width:"400"}}>
              {JSON.stringify(addmentor,null,8)}
          </div>
        </div>
      </div>
    </>
  );
}


