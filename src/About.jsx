import React from "react";
import { NavLink } from "react-router-dom";

const About = (props) => {
  return (
    <>
      <h1>
        More About {props.name}
      </h1>
      <NavLink activeclassname='active' to='/about/Devloper'>
        <button>
          Click For Devloper
        </button>
      </NavLink>
    </>
  )
}

export default About;