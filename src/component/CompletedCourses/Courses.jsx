import React from "react";

import Card from "../Card";
import CompletedData from "./CompletedData";
import AttachFileIcon from '@material-ui/icons/AttachFile';

function Courses(){
   return (
       <div className="completed">
           <h1>Completed Courses</h1>
           <div className="row" >
           {CompletedData.map((values,index)=>{
               return (<div className="col-md-3">
                   <Card title={values.title}  content={values.content} value="Generate Certificate" id={index} key={index}/>
                   <a target="_blank" href="https://www.canva.com/design/DAEBs2JRQSQ/OpC6ml5B0tgX4rV70tiafg/view?utm_content=DAEBs2JRQSQ&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" download >
                      <AttachFileIcon/> Click here</a>
               </div>);
        })}
        </div>
       </div>
   );
} 

export default Courses;