import React from "react";

import CallMissedOutgoingIcon from '@material-ui/icons/CallMissedOutgoing';
import BeenhereIcon from '@material-ui/icons/Beenhere';
 
import Ongoing from "./Ongoing";
function MainContent(){




     function handleCompleted(){
         console.log("I am inside the mainContent page");
        return (<Ongoing />);
     }
    return (
        <div className=" mainContent">
            <div className="row">
                <div className="col-md-6 mainContentCard">
                   <div className="firstIcon">
                        <CallMissedOutgoingIcon />
                   </div>
                   <h1>Ongoing </h1>
                   <p>Run Quickly to met the Deadlines !</p>
                   <button onClick={handleCompleted} className="btn btn-danger" >View</button>
                </div>
                <div className="col-md-6">
                    <div className="firstIcon">
                        <BeenhereIcon />
                   </div>
                   <h1> Completed </h1>
                    <p>Relax : P</p>
                    <button onClick={handleCompleted} className="btn btn-danger" >View</button>
                </div>
            </div>
            
        </div>
    );
}

export default MainContent;