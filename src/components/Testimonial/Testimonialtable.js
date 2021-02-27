import React,{useState,useEffect} from "react";
import PropTypes from "prop-types";

import 'react-confirm-alert/src/react-confirm-alert.css';

import axios from 'axios';



export default function Testimonialtable({ color }) {

  const [posts,setPosts]=useState([])
  // const url = 'https://cds-back.uurl.xyz/api/v1';
  const url = 'http://localhost:5000/addtestimonial/'
  useEffect(() => {
    // axios.get('/addtestimonial')
    axios.get('http://localhost:5000/addtestimonial')
    .then(res =>{
      console.log(res)
      setPosts(res.data)
    })
    .catch(err =>{
      console.log(err)
    })

    
  },[])

  function handleClick(e) {
    e.preventDefault();
    // confirmAlert({
    //   title: 'Do you want to delete',
    //   message: 'Are you sure to do this.',
    //   buttons: [
    //     {
    //       label: 'Yes',
    //       onClick: () => alert('Deleted')
    //     },
    //     {
    //       label: 'No',
    //       onClick: () => alert('Cancel')
    //     }
    //   ]
    // });
    let id = posts[e.target.id]
     console.log("function activated")
    //  console.log(generateid)
     console.log(id);
  }
// const generateid =(id) =>{
//   return id;
//  }

  function handleDactivate(e){
    e.preventDefault();
  let id = posts[e.target.id]
     console.log("function activated")
    //  console.log(generateid)
     console.log(id);
   }
  // const handleDactivate = (e) =>{
  //   // e.preventDefault();
  //    console.log("function activated")
  //   //  console.log(url+id);
  
  //  }

  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-blue-900 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-gray-800" : "text-white")
                }
              >
                Testimonial
              </h3>
            </div>
            <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
              <button
                className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button" onClick={event =>  window.location.href='/testimonialadd'}
              >
                Add New Testimonial
              </button>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
              <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-gray-100 text-gray-600 border-gray-200"
                      : "bg-blue-800 text-blue-300 border-blue-700")
                  }
                >
                ID
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-gray-100 text-gray-600 border-gray-200"
                      : "bg-blue-800 text-blue-300 border-blue-700")
                  }
                >
                  Image
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-gray-100 text-gray-600 border-gray-200"
                      : "bg-blue-800 text-blue-300 border-blue-700")
                  }
                >
                  Name
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-gray-100 text-gray-600 border-gray-200"
                      : "bg-blue-800 text-blue-300 border-blue-700")
                  }
                >
                  Title
                </th>
               
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-gray-100 text-gray-600 border-gray-200"
                      : "bg-blue-800 text-blue-300 border-blue-700")
                  }
                >
                  Testimonial body
                </th>
                
               
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-gray-100 text-gray-600 border-gray-200"
                      : "bg-blue-800 text-blue-300 border-blue-700")
                  }
                >
                  Edit
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-gray-100 text-gray-600 border-gray-200"
                      : "bg-blue-800 text-blue-300 border-blue-700")
                  }
                >
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
            {posts.map(post =>(
              <tr key={post.id}>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                  {post.id}
                </td>
                <th  className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left flex items-center">
                  {/* <img
                    src={require("assets/img/bootstrap.jpg")}
                    className="h-12 w-12 bg-white rounded-full border"
                    alt="..."
                  ></img>{" "} */}
                      {post.icon_link}
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                  {post.name}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                  {post.title}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                  {post.body}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 ">
                   <a href={'/Testimonialtable/'+post.id}   className="anchorTags">
                      <i className="fas fa-edit fa-lg" />Edit
                   </a>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 ">
                  
                  <a href={`/Testimonialtable/${post.id}/${post.is_active}` } >
                    <i className="fa fa-trash" ></i>
                  </a>
                </td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

Testimonialtable.defaultProps = {
  color: "light",
};

Testimonialtable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
