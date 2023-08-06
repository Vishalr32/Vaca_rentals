import "./login.css"
import React from "react"
import { Link } from "react-router-dom";

export default function login() {
  return (
    <div className="login">
        <div className="loginwrapper">
            <div className="loginleft">
                <h2 className="loginlogo" color="black">
                    VacaRentals
                </h2>
                <span className="loginDesc">Explore the world by traveling </span>
            </div>
            <div className="loginright">
                <div className="loginBox">
                    <div className="loginheading">Login to VacaRentals</div>
                        <input placeholder="Email" className="logininput"/>
                        <input placeholder="Password" className="logininput"/>
                    <Link to="/0">
                        <button className="loginbutton">Login</button>
                    </Link>
                    {/* <button className="Createaccount">Create A New Account</button> */}
                </div>
            </div>
        </div>

    </div>
  )
}
