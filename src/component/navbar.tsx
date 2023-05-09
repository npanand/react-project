import React from "react";
import App from '../App';
import { Link } from "react-router-dom";

function navbar() {
  return (
    <div>
       <nav>        
        <ol>
            <li><Link to="/hooks">hooks</Link></li>
            <li><Link to="/formcheckup">formcheckup</Link></li>
            <li> <Link  to="../customformvalidation">customvalidation</Link></li>
        </ol>
       </nav>
    </div>
  )
}

export default navbar;