import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect} from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

//index
import Index from "components/Home/Index.js";


//login
import Login from "components/Login.js";

//mentor pages
import Mentors from "components/Mentor/Mentors.js";
import Editmentor from "components/Mentor/Editmentor.js";
import Mentoradd from "components/Mentor/Mentoradd.js";

//course pages
import Courses from "components/Course/Courses.js";
import Editcourse from "components/Course/Editcourse.js";
import Courseadd from "components/Course/Courseadd.js";

//testimonial 
import Testimonial from "components/Testimonial/Testimonial"
import Testimonialedit from "components/Testimonial/Testimonialedit"
import Testimonialadd from "components/Testimonial/Testimonialadd"
import Edittestimonialtable from "components/Testimonial/Edittestimonialtable";
import DeactivateTestimonial from "components/Testimonial/DeactivateTestimonial";

//Event
import Event from "components/Event/Event.js";
import Editevent from "components/Event/Editevent.js";
import Eventadd from "components/Event/Eventadd.js";
import Editeventtable from "components/Event/Editeventtable";


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      
      {/* login */}
      <Route path="/Login" component={Login} />

      {/* mentor page */}
      <Route path="/mentors"  component={Mentors} />
      <Route path="/CardTable1/:id" component={Editmentor} />
      <Route path="/Mentoradd" component={Mentoradd} />
     
      {/* course page */}
      <Route path="/courses"  component={Courses} />
      <Route path="/CardTable2/:id" component={Editcourse} />
      <Route path="/Courseadd" component={Courseadd} />

      {/* testimonial page */}
      <Route path="/testimonial" component={Testimonial} />
      <Route path="/Testimonialtable/:id/:is_active"  component={DeactivateTestimonial} />
      <Route path="/Testimonialtable/:id"  component={Edittestimonialtable} />
      <Route path="/testimonialadd"  component={Testimonialadd} />

      {/* Event page */}
      <Route path="/event" exact component={Event} />
      <Route path="/Eventtable/:id" exact component={Editeventtable} />
      <Route path="/eventadd" exact component={Eventadd} />


      {/* index */}
      <Route path="/" exact component={Index} />

      {/* add redirect for first page */}
      <Redirect from="*" to="/" />

    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
