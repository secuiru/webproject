import React from 'react'
import { Link } from 'react-router-dom'



export default function Home(props) {



  return (
    <div>
      <div class="linkbtn">
        {props.userLoggedIn ?
          <Link to="protected">Go to charts</Link>
          :
          <>
            <Link to="register">Sign up</Link><br />
            <Link to="login">Login</Link>
          </>


        }

      </div>
    </div>
  )
}