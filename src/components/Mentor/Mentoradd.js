import React from "react";

//image
import logo from 'static/images/cds logo-02.svg'

// components
import Sidebar from "components/Sidebar/Sidebar.js";

//table
import Addtablementor from "components/Mentor/Addtablementor.js";


export default function Mentoradd() {
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
                        <center><h1><u>ADD MENTOR</u></h1></center>
                    {/* table */}
                    <div className="flex flex-wrap mt-4">
                        <div className="w-full mb-12 px-4">
                            <Addtablementor />
                        </div>
                    </div>
            </div>
        </div>
    </>
  );
}
