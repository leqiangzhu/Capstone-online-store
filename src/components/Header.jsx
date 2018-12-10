import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
 
    let today=new Date();
    let todayDate=today.getDate();
    let weekday = new Array(7);
        weekday= ["Sunday","Monday","Tuesday","Wednesday","Thursday", "Friday","Saturday"]  
     let todayDay = weekday[today.getDay()];

    let todayMonth=today.getMonth()+1;
  return (
     

    <div className="container">
      <style jsx>{`
        ul {
       
        }
        li{
            font-size: 14px;
            display: inline-block;
            margin-right: 75px;
            padding: 5px;
            
        }
        img {
         width:9%;
        }
      `}</style>
      <div className="jumbotron">
        <ul>
          <li>
            <Link to="/">
            {/* <img src=''></img> */}
            </Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* <li>
            <Link to="/event">Event</Link>
          </li> */}
          <li>
            <Link to="/signin">Sign in</Link>
          </li>
          <li>
            <Link to="#">Sign up</Link>
          </li>
          <li>
   
              {/* <strong>Today is:</strong>
              <span></span> */}
          </li>


        </ul>

        <div>
            <strong>Today is:<span>{todayMonth}/{todayDate},<strong>{todayDay}</strong></span></strong>
        
            </div>
      </div>
    </div>
  );
}

export default Header;

