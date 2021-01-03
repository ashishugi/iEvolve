import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App";
import { Redirect } from "react-router";
import Login from "./component/Login";
import Home from "./component/Home";
import Ongoing from "./component/Inprogress/Ongoing";
import Completed from "./component/CompletedCourses/Completed";

const userName = "Ashish";
const password = "ashish";


// function isLoggedIn(values) {
//     console.log("inseide the index")
//     console.log(values);
//     if (values.username === userName && password == values.password) {
//         ReactDOM.render( < Home / > , document.getElementById("root"));
//     } else {
//         ReactDOM.render( < Login isLoggedIn = { isLoggedIn }
//             / > , document.getElementById("root"));
//         }
//     }


// function isLoggedIn(values) {
//     console.log(values);
//     if (values.username === userName && password == values.password) {
//         console.log("if");
//         return ( < Redirect to = "/Home" / > );
//     } else {
//         return ReactDOM.render( < Login isLoggedIn = { isLoggedIn }
//             / > , document.getElementById("root"));
//         }
//     }


// ReactDOM.render( < Login isLoggedIn = { isLoggedIn }
//         / > , document.getElementById("root"));

// ReactDOM.render( < Home / > , document.getElementById("root"));
// ReactDOM.render( < Ongoing / > , document.getElementById("root"));
// ReactDOM.render( < Completed / > , document.getElementById("root"));
// ReactDOM.render( < Login / > , document.getElementById("root"));




ReactDOM.render( < Completed / > , document.getElementById("root"));