import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  
  const src = '../Media/Images/ErrorPage.jpg';
  
  return (
    <>
      <div className="notfound">
        <img className="img" src={src} />
        <NavLink activeclassname='active' to='/'>
          <button>
            Go Home
          </button>
        </NavLink>
        <NavLink activeclassname='active' to={-1}>
          <button>
            Go Back
          </button>
        </NavLink>
      </div>
    </>
  )
}

export default NotFound;