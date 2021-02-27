import React from "react";

//image
import logo from 'static/images/cds logo-02.svg'

// components
import Sidebar from "components/Sidebar/Sidebar.js";

//table
import Addtableevent from "components/Event/Addtableevent.js";


export default function Testimonialadd() {
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
                        <center><h1><u>ADD Event</u></h1></center>
                    {/* table */}
                    <div className="flex flex-wrap mt-4">
                        <div className="w-full mb-12 px-4">
                            <Addtableevent/>
                        </div>
                    </div>
            </div>
        </div>
    </>
  );
}
