import React, {useState,useEffect} from "react";
import Axios from 'axios';
//image
import logo from 'static/images/cds logo-02.svg'

// components
import Sidebar from "components/Sidebar/Sidebar.js";

//table
import Edittestimonialtable from "components/Testimonial/Edittestimonialtable.js";

// Susmita __ Taar-kata

export default function Testimonialedit() {
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
                        <center><h1><u>EDIT TESTIMONIALS</u></h1></center>
                    {/* table */}
                    <div className="flex flex-wrap mt-4">
                        <div className="w-full mb-12 px-4">
                            <Edittestimonialtable />
                        </div>
                    </div>
            </div>
        </div>
    </>
  );
}
