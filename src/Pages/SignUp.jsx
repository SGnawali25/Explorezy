import React from "react";
import { useState } from "react";
import { supabase } from "../Client";

const SignUp = () =>{

    const [userData,setUserData] = useState({username:"", password:""});

    const handleChange = (event) => {
        const {name, value} = event.target;
        
        setUserData((prev) => {
            return{
                ...prev,[name]:value,
            }
        })
    }

    const submitData = async(event) =>{
        console.log(userData)
        event.preventDefault();

        await supabase
            .from("LoginCredentials")
            .insert({
                username: userData.username,
                password: userData.password
            })
            .select();

            window.location = "/Login";
    }

    return(
        <div className="SignupPage">
            <label>Username</label>
            <br/>
            <input
                type="text"
                placeholder="Username"
                id="username"
                value={userData.username}
                name="username"
                onChange={handleChange}
            />   
            <br/>
            <label>Password</label>
            <br/>
            <input
                type="password"
                placeholder="Password"
                id="password"
                value={userData.password}
                name="password"
                onChange={handleChange}
            />   
            <br/>

            <button onClick={submitData}>Submit</button>           


        </div>
    )
}

export default SignUp;