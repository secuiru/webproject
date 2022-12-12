import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Constants from '../Constants.json'
export default function Login(props) {



    var searchURL;


    const navigate = useNavigate();

    const handleSignupSubmit = async (event) => {

        event.preventDefault();

        searchURL = Constants.API_ADDRESS+ "login?username=" + event.target.username.value + "&password=" + event.target.password.value

        console.log(event.target.username.value);
        console.log(event.target.password.value);


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

        }

        
    }

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSignupSubmit}>
                <div>
                    Username <br />
                    <input type="text" required name="username"  minLength="2" />
                </div>
                <div>
                    Password <br />
                    <input type="text" required name="password" minLength="2" />
                </div>
                <div>
                <button type="submit">Login</button>
                </div>


            </form>
        </div>
    )
}