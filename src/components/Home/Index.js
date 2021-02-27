/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

//image
import logo from 'static/images/cds logo-02.svg'


//components
import Sidebar from "components/Sidebar/Sidebar.js";
// import AdminNavbar from "components/Home/AdminNavbar.js";

export default function Index() {
  return (
    <>
      <Sidebar />
      {/* Header */}
      
        <div className="relative md:ml-64 bg-gray-200">
            <br/><br/>
        {/* <AdminNavbar /> */}
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
                        <center><h1><u>WELCOME</u></h1></center>
            </div>
        </div>
    </>
  );
}
