import React from "react";

import Button from "./Button";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
function Login(props){

    const [userInfo ,setInfo] = React.useState({
        username:"",
        password:""
    })
    function handleChange(event){
        
        
        const {name,value} = event.target;
        console.log(name);
        console.log(value);
        setInfo((prev)=>{
             return {
                 ...prev,
                 [name]:value

             }
        });
    }


    function handleSubmit(event){
        event.preventDefault();
        props.isLoggedIn(userInfo);
    }
    return (<div className="login" >
                <div className="row loginCard" >
                        <div className="col-md-6 ">
                           <AccountBoxIcon className="loginPic" />
                        </div>
                    <div className="col-md-6 login-form ">
                        <h1 className="loginHeader">Member Login</h1>
                            <form onSubmit={handleSubmit}>
                                <label>User Name</label>
                               
                                <input  className="form-control" placeholder= "@username" type="text" onChange={handleChange} name="username" value={userInfo.username} />
                                <label>Password</label>
                                <input  className="form-control" type="text" placeholder="password" onChange={handleChange} name="password" value={userInfo.password} />
                                <br/>
                                <button type="submit" className="btn btn-success"  value="Login">Log In</button>
                            </form>
                    </div>
            
            </div>
        
        </div>)

}

export default Login;