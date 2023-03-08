import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const User = () => {
    const {name, nick} = useParams();
    const location = useLocation();
    const history = useNavigate();
    console.log(history);
    
    return (
        <>
            <h1>Hello! {name + nick}</h1>
            <br/>
            <p>Your Location is {location.pathname}</p>
            {location.pathname === `/user/Parth/King` ? 
                <button onClick={() => {alert('I am King')}}>Click me</button> : null}
        </>
    )
}

export default User;