import React from "react";


function Card(props){

    return (
        <div className="card">
            <div className="card-body">
                <h2 className="card-title">{props.title}</h2>
                {props.content}
                <br/>
            <button className="btn btn-danger" > {props.value}</button>
            </div>
        </div>
    );
}
export default Card;