import React from 'react';
//import Menubar from '../components/Menubar';
//import Footer from '../components/footer';
import ReactToPrint from "react-to-print";
import logo from '../static/images/logo/cds logo-02.svg'
import { ComboBox } from '@progress/kendo-react-dropdowns';
import { Modal } from "react-responsive-modal";
import {Button} from 'react-bootstrap';
//import ImageUploader from 'react-images-upload';
import Main from './FormTable/Main';
import Main3 from './FormTable/Main3';
import Main2 from './FormTable/Main2';
import Main4 from './FormTable/Main4';
import ReCAPTCHA from "react-google-recaptcha";
//import { align } from '@progress/kendo-drawing';


//recapcha  test key
const TEST_SITE_KEY = "6LfVRgYaAAAAAMnmfxYDLp-omY8Hu2VfqUTwbxti"
const DELAY = 1500;



class Prints extends React.Component {

    //readio button
    // radioChange(event) {
    // console.log(event.target.value);
    // }

    //combo box dropdown sex
    comboChangesex(event) {
        console.log(event.target.value);
    }
    sex = ["Male","Female","Others"];

    //combo box dropdown appli cource
    comboChange(eventcombo) {
        console.log(eventcombo.target.value);
    }
    sports = [ "Certified Ethical Hacker - CEH V11", "Ethical Hacking", "Network Penitration Testing", "WebApplication Penitration Testing","Advance WebApplication Penitration Testing","Android Application Penitration Testing","Computer Hacking Forensic Investigator(CHFI)","Exploied Development","Cyber Security - Defense in depth","Internet of Things Exploit Development","Reverse Engineering on 32-bit and 64-bit Arm","Android intro Exploit Development","CCNA Initial","Firewall Administration","Industry ready Ruby","Industry ready Python","Industry ready JAVA","Industry ready C","Industry ready Perl","Industry ready DataStructure","Industry redy HTML","Industry ready CSS","Industry ready jquery","Industry ready React js","Industry ready Angular js","Industry ready Native App","Industry ready 	Hybride App","Machine Learning using Python","Data Science","Manual Software Testing","Python+Robot Framework","Selenium Web Driver with JAVA - Novice to Ninja","Selenium Web Driver with Python - Novice to Ninja","Selenium Automation + Testing Framework" ];
    
    //check box
    constructor(props) {
        super(props);

      //recaptcha 
      this._reCaptchaRef = React.createRef();  
      this.handleSubscribe = this.handleSubscribe.bind(this); 

        //check box
      this.state = { checked: false };
      this.handleChange = this.handleChange.bind(this);
     
      //upload images
      this.state = {
        file: null
      }
      this.image = this.image.bind(this)


      //input text value
      this.state = {
        Name: '',
        Guardian_name:'',
        dob:'',
        presentaddress:'',
        permanentaddress:'',
        phnohome:'',
        phone:'',
        mobile:'',
        email:'',
        data:'',
        place:'',
        signature:''
      };
    }
//check box
    handleChange() {
        this.setState({
          checked: !this.state.checked
      })
    }
//recaptcha
    componentDidMount() {
      setTimeout(() => {
        this.setState({ load: true });
      }, DELAY);
      console.log("didMount - reCaptcha Ref-", this._reCaptchaRef);
    }
  
    handle = value => {
      console.log("Captcha value:", value);
      this.setState({ value});
      // if value is null recaptcha expired
      if (value === null) this.setState({ expired: "true" });
    };
  
    asyncScriptOnLoad = () => {
      this.setState({ callback: "called!" });
      console.log("scriptLoad - reCaptcha Ref-", this._reCaptchaRef);
    };  
    //button recapcha check
    handleSubscribe = () =>{ 
      if(this.state.value==null)
      { 
          alert("please verify you are human"); 
      }
      else
      { 
          alert('successfully submitted'); 
      } 

    } 
    //modal
    state = {
        open: false,
    };

    //image upload
      image(event) {
        this.setState({
          file: URL.createObjectURL(event.target.files[0])
        })
      }
      
      //update input text value
      updateName(evt) {
        this.setState({
          Name: evt.target.value,
        });
      }
      updateGuardian_name(evt) {
        this.setState({
          Guardian_name:evt.target.value
        });
      }
      updatedob(evt) {
        this.setState({
          dob:evt.target.value
        });
      }
      updatepresentaddress(evt) {
        this.setState({
          presentaddress:evt.target.value
        });
      }
      updatepermanentaddress(evt) {
        this.setState({
          permanentaddress:evt.target.value
        });
      }
      updatephnohome(evt) {
        this.setState({
          phnohome:evt.target.value
        });
      }
      updatephno(evt) {
        this.setState({
          phno:evt.target.value
        });
      }
      updatemobile(evt) {
        this.setState({
          mobile:evt.target.value
        });
      }
      updatedate(evt) {
        this.setState({
          date:evt.target.value
        });
      }
      updateplace(evt) {
        this.setState({
          place:evt.target.value
        });
      }
      updatesignature(evt) {
        this.setState({
          signature:evt.target.value
        });
      }
      updateemail(evt) {
        this.setState({
          email:evt.target.value
        });
      }


   render() {
       //check box show/hide button
                const content = this.state.checked 
                ? 
                <div className="row">
                <div className="col-md-4 col-sm-4 col-xs-2"></div>  
                <div className="col-md-4 col-sm-4 col-xs-8">
                <center>
                    {/* recaptcha */}
                    <ReCAPTCHA
                    style={{ display: "inline-block" }}
                    theme="dark"
                    ref={this._reCaptchaRef}
                    sitekey={TEST_SITE_KEY}
                    onChange={this.handle}
                    asyncScriptOnLoad={this.asyncScriptOnLoad}
                    render="explicit" 
                    />
                    <br/><br/>
                    {/* button */}
                    <button type="submit" onClick={this.handleSubscribe}
                     className="hvr-trim" style={{width:'100%',height:'40px',backgroundColor:'Blue',color:'white',borderRadius:'12px'}}  ><b>Submit</b></button>
                </center>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-2"></div>
                </div>
                : null;
    return (
        <div>
           
      <div >

      
            <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12">
                <center>
                    <img src={logo} alt="Logo"  style={{width:'130px', height:'130px'}} /> 
                </center>
                </div>
            </div>
            <div className="row">
                <div className="col-md-1 col-sm-1 col-xs-1"></div>
                <div className="col-md-5 col-sm-5 col-xs-5">
                    <h6 className="float-left" >
                        Form No :  01
                    </h6>
                </div>
                <div className="col-md-5 col-sm-5 col-xs-5">
                    <h6 className="float-right" >
                        Location :  Kolkata
                    </h6>
                </div>
                <div className="col-md-1 col-sm-1 col-xs-1"></div>
            </div>
            <br/>
            <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12">
                <center>
                    <h5><b>TRAINING ADMISSION FORM</b></h5><p>CDS-TAF-V 1.0</p>
                </center>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-md-6 col-sm-6 col-xs-12">
                <center>
                    {/* <img src={logo} alt="Logo"  style={{width:'130px', height:'130px'}} />  */}
                    {/* <ImageUploader withIcon={true} buttonText='Choose images' onChange={this.onDrop} imgExtension={['.jpg', '.gif', '.png', '.gif']} maxFileSize={5242880} style={{width:'130px', height:'130px'}} /> */}
                    
                        <input name="file" type="file" onChange={this.image}/><br/>
                        <img src={this.state.file} alt="" style={{width:'300px', height:'200px'}} />
                    
                </center>
                </div>
                <div className="col-md-6 col-sm-6 col-xs-12">
                    <center><input name="Name" type="text" value={this.state.Name} onChange={evt => this.updateName(evt)} placeholder="Name of Candidate" style={{width:'80%',height:'40px',border:'none',borderBottom:'3px solid black'}}/></center>
                    <br/>
                    <center><input name="Guardian_name" type="text" value={this.state.Guardian_name} onChange={evt => this.updateGuardian_name(evt)} placeholder="Guardian's Name" style={{width:'80%',height:'40px',border:'none',borderBottom:'3px solid black'}}/></center>
                    <br/>
                    <center><h6>Date of Birth</h6></center>
                    <br/>
                    <center>
                        <input name="dob" type="date" name="birthday" value={this.state.dob} onChange={evt => this.updatedob(evt)} placeholder="Date of Birth" style={{width:'80%',height:'40px',border:'none',borderBottom:'3px solid black'}} />
                    </center>
                    <br/><br/>
                    <center>
                         <center><h6>SEX</h6></center>
                        <br/>
                        <center>
                            <ComboBox name="sex" data={this.sex} onChange={(a) => this.comboChangesex(a)} style={{width:'80%',height:'40px',border:'none',borderBottom:'3px solid black'}} />
                        </center>
                    </center>
                </div>
            </div>
            <br/><br/>
            <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12">
                
                    <center><input name="presentaddress" type="text" value={this.state.presentaddress} onChange={evt => this.updatepresentaddress(evt)} placeholder="Present Address" style={{width:'80%',height:'40px',border:'none',borderBottom:'3px solid black'}}/></center>
                    <br/>
                    <center><input name="permanentaddress" type="text" value={this.state.permanentaddress} onChange={evt => this.updatepermanentaddress(evt)} placeholder="Permanent Address" style={{width:'80%',height:'40px',border:'none',borderBottom:'3px solid black'}}/></center>
                    <br/>
                    <center><input name="phnohome" type="text" value={this.state.phnohome} onChange={evt => this.updatephnohome(evt)} placeholder="Phone No.(Residence)" maxlength="10" style={{width:'80%',height:'40px',border:'none',borderBottom:'3px solid black'}}/></center>
                    <br/>
                    <center><input  name="phno" type="text" value={this.state.phno} onChange={evt => this.updatephno(evt)} placeholder="Phone No.(Office -if any)" maxlength="10" style={{width:'80%',height:'40px',border:'none',borderBottom:'3px solid black'}}/></center>
                    <br/>
                    <center><input name="mobile" type="text" value={this.state.mobile} onChange={evt => this.updatemobile(evt)} placeholder="Mobile" maxlength="10" style={{width:'80%',height:'40px',border:'none',borderBottom:'3px solid black'}}/></center>
                    <br/>
                    <center><input name="email" type="email" value={this.state.email} onChange={evt => this.updateemail(evt)} placeholder="Email" style={{width:'80%',height:'40px',border:'none',borderBottom:'3px solid black'}}/></center>
                    <br/><br/>
                    <center>
                    <h6>Education Qualification : </h6>
                    <br/>
                    <div style={{width:"90%", overflowInline:"auto"}} >
                    <Main/>
                    </div>
                    
                    </center>
                    <br/>
                    <center>
                    <div className="row">
                        <div className="col-md-4 col-sm-4 col-xs-12"><br/><h5>Applied For Courses : </h5></div>
                        <div className="col-md-8 col-sm-8 col-xs-12"><ComboBox data={this.sports} onChange={(a) => this.comboChange(a)} style={{width:'70%',height:'40px',border:'none',borderBottom:'3px solid black'}} /></div>
                    </div>
                    </center>
                    <br/><br/>
                    <center>
                    <h6>Prior Computer / Programming Knowledge : </h6>
                    <br/>
                        <div style={{width:"90%"}} >
                    <Main2/>
                    </div>
                    </center>
                    <br/><br/><br/><br/>
                    <div className="row">
                        <div className="col-md-3 col-sm-3"></div>
                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <center><u><h4>For Office Use Only</h4></u></center>
                        </div>
                        <div className="col-md-3 col-sm-3"></div>
                    </div>
                    <br/>
                    <center>
                    <br/>
                    <div style={{width:"90%"}} >
                    <Main3/>
                    </div>
                    </center>
                    <br/>
                    <center>
                        <div style={{width:"90%"}} >
                    <Main4/>
                    </div>
                    </center>
                    <br/><br/><br/><br/>
                    <div className="row">
                        <div className="col-md-1 col-sm-1 col-xs-1"></div>
                        <div className="col-md-5 col-sm-5 col-xs-5">
                            <span className="float-left" >
                            <center><input name="date" type="date" name="date" value={this.state.date} onChange={evt => this.updatedate(evt)} placeholder="Date" style={{width:'80%',height:'20px',border:'none',borderBottom:'3px solid black'}}/></center>
                            </span>
                        </div>
                        <div className="col-md-5 col-sm-5 col-xs-5">
                            <span className="float-right" >
                            <center><input name="place" type="text" value={this.state.place} onChange={evt => this.updateplace(evt)} placeholder="Place" style={{width:'80%',height:'20px',border:'none',borderBottom:'3px solid black'}}/></center>
                            </span>
                        </div>
                        <div className="col-md-1 col-sm-1 col-xs-1"></div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-md-3 col-sm-3"></div>
                        <div className="col-md-6 col-sm-6 col-xs-12">
                        <center><input  name="signature" type="text" value={this.state.signature} onChange={evt => this.updatesignature(evt)} placeholder="Signature" style={{width:'50%',height:'20px',border:'none',borderBottom:'3px solid black'}}/></center>
                        <br/>
                        <center>
                            <h6><input name="checked" type="checkbox" checked={ this.state.checked } onChange={ this.handleChange } />    I Agree 
                                <Button onClick={() => this.setState({ showModal:true})}  style={{backgroundColor:'white',color:'blue',borderColor:'white'}}>
                                   <u> Terms & Conditions </u>
                                </Button>
                            </h6>
                            <Modal  open={this.state.showModal} onClose={() => this.setState({ showModal:false})} >
                                <br/><br/>
                                <div className="row">
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                    <center>
                                        <img src={logo} alt="Logo"  style={{width:'130px', height:'130px'}} /> 
                                    </center>
                                    </div>
                                </div>
                                <br/>
                                <div className="row">
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                    <center>
                                        <h4><b>TERMS & CONDITION FOR ADMISSION</b></h4><p>CDS-TAF-Annexure-A-V 1.0</p>
                                    </center>
                                    </div>
                                </div>
                                <br/><br/>
                                <div className="row">
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <h5>1. &nbsp;&nbsp;&nbsp; Admission  :</h5>
                                        <br/>
                                        <p>1.1. &nbsp;&nbsp;&nbsp;	The Cyber Security Training courses are meant and made available to students/professional for developing Cyber Security knowledge, building their career in the field and making them industry ready. We build Ethical Hackers here at the institute. The student/candidate will be sole responsible for any misuse of the knowledge earned from here, in any illegal way which goes against the IT-Act of the Law of India.</p>
                                        <br/>
                                        <p>1.2. &nbsp;&nbsp;&nbsp;	Admission to any courses offered by the Cyber Defence Solutions is governed by specified eligibility, details are available with the Counsellor</p>
                                        <br/>
                                        <p>1.3. &nbsp;&nbsp;&nbsp;	Some courses need some particular academic prerequisites. While the counsellor will inform the candidate of these prerequisites and help to assess the student, ultimately it is the Student who needs to be sure that he/she possesses the prior knowledge required for admission into a course.</p>
                                        <br/>
                                        <p>1.4. &nbsp;&nbsp;&nbsp;	Admission to a Course is not transferable to any other individual.</p>
                                        
                                        <br/><br/>
                                        
                                        <h5>2. &nbsp;&nbsp;&nbsp; Enrolment Agreement  :</h5>
                                        <br/>
                                        <p>&nbsp;&nbsp;&nbsp;This Agreement accumulates the entire agreement between the Cyber Defence Solutions and the student about all matters herein referred to. A student who has registered for a course is assumed to have understood this document after going through properly.</p>
                                        
                                        <br/><br/>

                                        <h5>3. &nbsp;&nbsp;&nbsp; Admission Validity  :</h5>
                                        <br/>
                                        <p>3.1.&nbsp;&nbsp;&nbsp;Admission is valid for 1.5 months from the date of admission. The student has to start his’ her class with this period and complete the course as per respective course duration.</p>
                                        <br/>
                                        <p>3.2.&nbsp;&nbsp;&nbsp;A student may book a seat in a particular course by paying the applicable non-refundable Booking Fee. This seat will be reserved for the student till 20 days from the date of booking. The student need to enrol by paying the entire fees within this 30 days period before starting.</p>
                                        <br/>
                                        <p>3.3.&nbsp;&nbsp;&nbsp;Expiry of admission occurs upon the completion of the student's course, with the certificate having been awarded. Cancellation of admission can take place for disciplinary reasons, as explained in section 5 below. Unless normally expired or cancelled, a student's admission to a program remains valid till 3 months from the date of admission.</p>
                                        
                                        <br/><br/>
                                        
                                        <h5>4. &nbsp;&nbsp;&nbsp;Fees  :</h5>
                                        <br/>
                                        <p>4.1.&nbsp;&nbsp;&nbsp;A student has to pay full course fee during the admission or minimum 50% of the course fee at the time of admission and rest 50% need to be paid within next 1 month of the course.</p>
                                        <br/>
                                        <p>4.2.&nbsp;&nbsp;&nbsp;For some courses and/or for some specific reasons instalment payment options has been incorporated. But the instalment payment needs to be made on the specific date of the month as discussed with the authority and finalized at the time of course admission.</p>
                                        <br/>
                                        <p>4.3.&nbsp;&nbsp;&nbsp;All payment needs to be done by Cheque/Cash/NEFT. No Credit card or Debit card payment accepted.  </p>
                                        <br/>
                                        <p>4.4.&nbsp;&nbsp;&nbsp;Total Fees payment includes Training fees + GST @18%</p>
                                        <br/>
                                        <p>4.5.&nbsp;&nbsp;&nbsp;Students has to collect the money receipt or invoice upon complete payment and keep the same for future reference.</p>
                                        
                                        <br/><br/>
                                        
                                        <h5>5. &nbsp;&nbsp;&nbsp;	Admission Cancellation  :</h5>
                                        <br/>
                                        <p>5.1. &nbsp;&nbsp;&nbsp;	It is expected from the candidates to adhere to the norms and professionalism while undergoing any course at Cyber Defence Solutions. Non-adherence will lead to cancellation of admission with no refund.</p>
                                        <br/> 
                                        <p>5.2. &nbsp;&nbsp;&nbsp;	Students also need to display continuous participating interest during the training period. Discontinuation or gap or non-participating mood of the student may lead to cancellation of the admission.</p>
                                        <br/><br/>
                                    </div>
                                </div>
                            </Modal>
                        </center>
                        </div>
                        <div className="col-md-3 col-sm-3"></div>
                    </div>
                    <br/><br/>
                    <div>{ content }</div>
                    <br/><br/>
                </div>
            </div>
            </div>
          
        </div> 
    );
  }
}

class form extends React.Component {
  constructor() {
    super();
    this.operation = this.operation.bind(this);
   this.state = {
     showButton : true
     
   }
   //check box
   this.state = { checked: false };
  }
  operation = () =>{
   this.setState({
     checked : !this.state.checked,
     showButton : !this.state.showButton
   })
  }

    render() {
      return (
        <div >
          <Prints ref={(el) => (this.componentRef = el)} />
          
           <div className="col-md-12 col-sm-12 col-xs-12" style = {{ bottom:"0", 
           marginBottom:"2%", position:"relative" }}>
                <center>
                <h6><input  name="checked" type="checkbox" checked={ this.state.checked } onChange={ this.operation } />  Agreement Confirmation </h6>
                {this.state.showButton?
                <div>
                   <ReactToPrint
                    trigger={() => 
                <Button onClick={this.handleChange} >Form Copy</Button> }
                    content={() => this.componentRef}
                  />
                </div>:
                null
                }
                  </center>
                </div>
          
                
          
        </div>
      );
    }
  }
  

export default form;