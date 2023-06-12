import React from "react";
import { useState } from "react";

const Login = (props) =>{

    const credentials = props.data;

    const [providedData, setProvidedData] = useState({username:"",password:""});
    

    const handleChange = (event) =>{
        const {name, value} = event.target;
        setProvidedData((prev) => {
            return{
                ...prev,[name]:value,
            }
        })
    }
    

    const checkAuthentication = () =>{
        if (credentials && credentials.length > 0){
            let output = false;
            let authentication = false;
            for (let i = 0; i < credentials.length; i++){
                if (credentials[i].username === providedData.username){
                    output = true;
                    if (credentials[i].password === providedData.password){
                        authentication = true;
                    }

                }
            }

            if (!output){
                alert("User with the provided username is not registered.");
            } else if (!authentication){
                alert("You entered the wrong password.");
            } else {
                window.location = "/see";
            }
        }
    }


    return(
        <div className="LoginPage">
            <label>Username</label>
            <br/>
            <input
                type="text"
                placeholder="username"
                id="username"
                name="username"
                value={providedData.username}
                onChange={handleChange}
            />
            <br/>
            <label>Password</label>
            <br/>
            <input
                type="password"
                placeholder="password"
                id="password"
                name="password"
                value={providedData.password}
                onChange={handleChange}
            />
            <br/>

            <button onClick={checkAuthentication}>Login✅</button>

        </div>
    )
}

export default Login;