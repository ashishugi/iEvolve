import React from "react";


import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ThreeDRotation from '@material-ui/icons/ThreeDRotation';

import ThumbUpIcon from '@material-ui/icons/ThumbUp';
function SkillCard(){

    return (
        <div className="skill">
            <div className="container">
                <div className="row skillCard">
                <i class="fas fa-user-shield"></i>
                    <div className="col-md-4">
                        <ThumbUpIcon /> 
                        <span><p>Level:</p></span>
                        <h3>Skilled</h3>
                        
                    </div>
                    <div className="col-md-2">
                        <h3>120</h3>
                        <p>Learning Points</p>
                    </div>
                    <div className="col-md-2">
                        <h3>120</h3>
                        <p>Learning Points</p>
                    </div>
                    <div className="col-md-2">
                        <h3>120</h3>
                        <p>Learning Points</p>  
                    </div>
                    <div className="col-md-2">
                        <h3>120</h3>
                        <p>Learning Points</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SkillCard;