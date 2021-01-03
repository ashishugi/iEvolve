import React from "react";

import CourseData from "./CourseData";
import Card from "../Card";
function Courses(){


    return (
        <div className="courses">
            <h1>Ongoing Courses</h1>
            <div className="row">
            
            {CourseData.map((value,index)=>{
                return   (
                  
                      <div className="col-md-3">
                      <Card title={value.title}  content={value.content} value="Complete Now" key={index} id={index} />
                      </div>
                 
                );
            })}
        </div>
        </div>
    );
}

export default Courses;