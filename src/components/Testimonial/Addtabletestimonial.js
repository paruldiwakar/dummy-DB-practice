import React, {useEffect,useState} from "react";
// import Button from 'react-bootstrap/Button'

// components
// import Testimonialpic from "components/Testimonial/Testimonialpic";

export default function Edittestimonialtable() {
       
  const [addtestimonial, setAddtestimonial] = useState(null);
  const [form, setForm] = useState({
    
    name:"",
    body:"",
    title:"",
 
    image_enc_data:""
  });

const [isSubmitting, setIsSubmitting] = useState(false);

useEffect(() => {
  fetchTestimonial();
}, [])

const fetchTestimonial = async () => {
  setIsSubmitting(true);
  const res = await fetch('/addtestimonial');
 //cds-back.uurl.xyz/api/v1/testimonial');
    // '/addtestimonial');
  const data = await res.json();
  setIsSubmitting(false);
  setAddtestimonial(data);
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

  // if(!form.name){
  //   err.name='testimonial name is required'
  // }
  // if(!form.body){
  //   err.body='testimonial body is required'
  // }
  // if(!form.title){
  //   err.title='testimonial title is required'
  // }
  // if(!form.image_enc_data){
  //   err.cimage_enc_data='testimonial pictureis required'
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


const postTestimonials = async (data) => {
  await fetch('/addtestimonial', {
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
    await postTestimonials(form).
    then(alert("submitted"));
    setIsSubmitting(false);
    setForm({

      name:"",
      body:"",
      title:"",

      image_enc_data:""
    })
    fetchTestimonial();
  }else{
    showError(errors);
  }
}
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-gray-800 text-xl font-bold">Add Testimonial</h6>
            <button
              className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button" onClick={event =>  window.location.href='/testimonial'}
            >
              All Testimonials
            </button>
          </div>
        </div>
        {isSubmitting ? (
          <div><h2>Loading...</h2> </div>
        ) : ('')}
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form onSubmit={handleSubmit}>
            <h6 className="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
              Testimonial Information
            </h6>
            <div className="flex flex-wrap">
            {/* <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                   ID
                  </label>
                  <input
                    type="text"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    name="id"
                    id="id"
                    placeholder="Enter id"
                    onChange={handleChange}
                  />
                </div>
              </div> */}
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
                    name="name"
                    id="name"
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
                    Title
                  </label>
                  <input
                    type="text"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    name="title"
                    id="title"
                    placeholder="Enter Title"
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
                    rows="4" 
                    name="body"
                    id="body"
                    placeholder="Enter body"
                    onChange={handleChange}
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
                  name="image_enc_data"
                  id="image_enc_data"
                  onChange={handleChange}/> <br/>
                  {/* <Testimonialpic /> */}
                </div>
              </div>
            </div>

            <center> <button type="submit"  style={{backgroundColor:'grey',color:'white',bordercolor:'white',width:'100%',height:'40px'}}>
                                                Submit
                     </button>
            </center>

          </form>
          <div style={{width:"400"}}>
              {JSON.stringify(addtestimonial,null,8)}
          </div>
        </div>
      </div>
    </>
  );
}


