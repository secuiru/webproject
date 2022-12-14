import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Constants from '../Constants.json'

export default function Delete(props) {



    var searchURL;


    const navigate = useNavigate();

    const handleDelSubmit = async (event) => {
        event.preventDefault();
        searchURL = Constants.API_ADDRESS + "delete?username=" + event.target.username.value + "&password=" + event.target.password.value
        console.log(event.target.username.value);
        console.log(event.target.password.value);
        try {
            const result = await axios.post(searchURL);
            console.log(searchURL)
            navigate("/register", { replace: true });
            //console.log(result);
            const receivedJWT = result.data;
            //console.log(receivedJWT)
            props.logout();
        }
        catch (error) {
            console.error(error);
        }
    }
    return (
        <div>
            <button onClick={props.logout}>logout</button>
            <h3>Provide username and password to delete your account</h3>
            <form onSubmit={handleDelSubmit}>
                <div>
                    Username <br />
                    <input type="text" required name="username" minLength="2" />
                </div>
                <div>
                    Password <br />
                    <input type="text" required name="password"  minLength="2" />
                </div>
                <div>
                    <button type="submit">Delete account</button>
                </div>
            </form>
        </div>
    )
}