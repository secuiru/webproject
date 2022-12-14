import React from 'react'
import { Link } from 'react-router-dom'



export default function Home(props) {



  return (
    <div>
      <div class="container">
        {props.userLoggedIn ?
          <div class="btn"><a href="protected">Go to charts</a></div>
          :
          <>
            <div class="btn"><a href="register">Sign up</a></div>
            <div class="btn"><a href="login">login</a></div>
          </>

        }

      </div>
    </div>
  )
}
