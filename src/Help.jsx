import React from "react";
import { NavLink } from "react-router-dom";

const Help = () => {
  return (
    <>
      <h1>
        You Need Help
      </h1>
      <NavLink activeclassname='active' to='/help/Community'>
        <button>
          Click For Community
        </button>
      </NavLink>
    </>
  )
}

export default Help;