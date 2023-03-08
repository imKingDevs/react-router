import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <div className="menubar">
        <h1>
          <a href="/">CBC</a>
        </h1>
        <div className="menu">
          <NavLink activeclassname='active' to='/'>Home</NavLink>
          <NavLink activeclassname='active' to='/about'>About</NavLink>
          <NavLink activeclassname='active' to='/search'>Search</NavLink>
          <NavLink activeclassname='active' to='/user/Coder/King'>User</NavLink>
          <NavLink activeclassname='active' to='/help'>Help</NavLink>
        </div>
      </div>
    </>
  )
}

export default Menu;