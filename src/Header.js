import React from 'react'
import { Link, Route } from 'react-router-dom';
import logo from "./trello-logo/trellologo.svg";

const Header = React.forwardRef((props,ref) => (
    
        <header className="App-header" ref={ref}>
           <img src={logo} className="App-logo"/>
           <div className="sign">
               <a id="signin" style={{color:'white'}}>Sign In</a>           
              <Link id="signupBtn" to="/signup">Sign Up</Link>
           </div>
       </header>
   
))  


export default Header;
