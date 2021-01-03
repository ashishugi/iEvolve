import React from "react";

function Button(props){
    const [isSet,setButton] = React.useState(false);
    function handleOver(){
        setButton(true);
    }
    function handleOut(){
        setButton(false);
    }

    return (
        <button onMouseOver={handleOver} style={{backgroundColor:isSet?"black":"#b83b5e"}} type={props.type} onMouseOut={handleOut}>{props.value}</button>
    );
}

export default Button;