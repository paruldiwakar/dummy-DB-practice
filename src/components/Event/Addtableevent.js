import React, {useEffect,useState} from "react";
// import Button from 'react-bootstrap/Button'

// components
import Eventpic from "components/Event/Eventpic";
import Speakerpic from "components/Event/Speakerpic";




export default function Addtableevent() {
     
  const [addevent, setAddevent] = useState(null);


  const [form, setForm] = useState({
    id:"",
    title:"",
    start_date:"",
    end_date:"",
    location:"",
    details:"",
    content: "",
   name:"",
    // eventpicture:"",
    image_enc_data:"",
    booked_slot:"",
    catagory:"",
    created_at:"",
    total_slot:"",
    facebook_id:"",
    linkedin_id:"",
    tweeter_id:""

  });
 
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchEvent();
  }, [])

  const fetchEvent = async () => {
    setIsSubmitting(true);
    const res = await fetch('/addevent');
    // https://cds-back.uurl.xyz/api/v1/event');
    const data = await res.json();
    setIsSubmitting(false);
    setAddevent(data);
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
  
    if(!form.title){
      err.title='title is required'
    }
    if(!form.start_date){
      err.start_date='start date  is required'
    }
    if(!form.end_date){
      err.end_date='end date is required'
    }
    if(!form.location){
      err.location='location is required'
    }
    if(!form.details){
      err.details='details is required'
    }
    // if(!form.content){
    //   err.content='content is required'
    // }
    // if(!form.eventpicture){
    //   err.eventpicture='event picture is required'
    // }
    // if(!form.image_enc_data){
    //   err.image_enc_data='speaker picture is required'
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

  const postEvent = async (data) => {
    await fetch('/addevent', {
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
      await postEvent(form);
      setIsSubmitting(false);
      setForm({
        id:"",
        title:"",
        start_date:"",
        end_date:"",
        location:"",
        details:"",
        content: [],
       name:"",
        // eventpicture:"",
        image_enc_data:"",
        booked_slot:"",
        catagory:"",
        created_at:"",
        total_slot:"",
        facebook_id:"",
        linkedin_id:"",
        tweeter_id:""
      })
      fetchEvent();
    }else{
      showError(errors);
    }
  }
  


  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-gray-800 text-xl font-bold">Add Event</h6>
            <button
              className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button" onClick={event =>  window.location.href='/event'}
            >
              All Event
            </button>
          </div>
        </div>
        {isSubmitting ? (
          <div><h2>Loading...</h2> </div>
        ) : ('')}

        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form onSubmit={handleSubmit}>
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
                   ID
                  </label>
                  <input
                    type="text"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                   name="id"
                   id="id"
                    placeholder="id"  
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
                   Event title
                  </label>
                  <input
                    type="text"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                   name="title"
                   id="title"
                    placeholder="Name"  
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
                  Total Slot
                  </label>
                  <input
                    type="number"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                   name="total_slot"
                   id="total_slot"
                    placeholder="total slots"  
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
                   Speaker Name
                  </label>
                  <input
                    type="text"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                   name="name"
                   id="name"
                    placeholder="Speaker's Name"  
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
                    name="start_date"
                    id="start_date"
                    placeholder="star tdate"
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
                    End date
                  </label>
                  <input
                    type="date"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    name="end_date"
                    id="end_date"
                    placeholder="end date"
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
                    Location
                  </label>
                  <input
                    type="text"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    name="location"
                   id="location"
                    placeholder="location"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <hr className="mt-6 border-b-1 border-gray-400" />

            <h6 className="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
              Details
            </h6>
            <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                   Event Category
                  </label>
                  <input
                    type="text"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                   name="catagory"
                   id="catagory"
                    placeholder="category"  
                    onChange={handleChange}
                  />
                </div>
              </div>

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
                    rows="4"
                    onChange={handleChange}
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
                    rows="4"
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Booked Slot
                  </label> 
                  <input
                    type="number"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    name="booked_slot"
                   id="booked_slot"
                    placeholder="slot number"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <hr className="mt-6 border-b-1 border-gray-400" />

<h6 className="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
  Socials
</h6>
<div className="flex flex-wrap">
<div className="w-full lg:w-6/12 px-4">
    <div className="relative w-full mb-3">
      <label
        className="block uppercase text-gray-700 text-xs font-bold mb-2"
        htmlFor="grid-password"
      >
      Facebook
      </label>
      <input
        type="text"
        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
       name="facebook_id"
       id="facebook_id"
        placeholder="facebook id"  
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
      LinkedIn
      </label>
      <input
        type="text"
        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
       name="linkedin_id"
       id="linkedin_id"
        placeholder="linkedin id"  
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
      Twitter
      </label>
      <input
        type="text"
        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
       name="tweeter_id"
       id="tweeter_id"
        placeholder="tweeter_id"  
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
                   Speaker Image
                  </label>
                  <input type="file" 
                  name="image_enc_data"
                  id="image_enc_data"
                  onChange={handleChange}/> <br/>
                  {/* <Speakerpic /> */}
                </div>
              </div>
            </div>

            <center> <button type="submit" style={{backgroundColor:'grey',color:'white',bordercolor:'white',width:'100%',height:'40px'}}>
                                                Submit
                     </button>
            </center>

          </form>
          <div style={{width:"400"}}>
              {JSON.stringify(addevent,null,8)}
          </div>
        </div>
      </div>
    </>
  );
}


