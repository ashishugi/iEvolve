import React from "react";

import Navbar from "../Navbar";
import Footer from "../Footer";
import Courses from "./Courses";
import CourseData from "./CompletedData";

function Completed(){
    return (
        <div >
            <Navbar />
            <Courses />
            <Footer/>
        </div>
    );
}

export default Completed;