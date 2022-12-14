import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Constants from '../Constants.json'

export default function Login(props) {
    var searchURL;
    const [loginProcessState, SetloginProcessState] = useState("idle")





    const navigate = useNavigate();

    const handleloginSubmit = async (event) => {
        event.preventDefault();

        SetloginProcessState("processing");



        searchURL = Constants.API_ADDRESS + "login?username=" + event.target.username.value + "&password=" + event.target.password.value

        try {
            const result = await axios.post(searchURL);
            console.log(searchURL)
            navigate("/", { replace: true });
            //console.log(result);
            const receivedJWT = result.data;
            props.login(receivedJWT);
            //console.log(receivedJWT)
        }
        catch (error) {
            console.error(error);
            navigate("/", { replace: true });

        }

    }
    let loginUIControls = null;
    switch (loginProcessState) {
        case "idle":
            loginUIControls = <div class="logout"><button type="submit">Login</button></div>
            break;

        case "processing":
            loginUIControls = <span> Processing....</span>
            break;
        case "loginSuccess":
            loginUIControls = <span style={{ color: "green" }} >login success</span>
            break;
        case "loginFailure":
            loginUIControls = <span style={{ color: "red" }}>Error</span>
            break;
    }


    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleloginSubmit}>
                <div>
                    Username <br />
                    <input type="text" required name="username" minLength="2" />
                </div>
                <div>
                    Password <br />
                    <input type="text" required name="password" minLength="2" />
                </div>

                <div>
                    {loginUIControls}
                </div>

            </form>
        </div>
    )
}