import React from "react";
import HeaderImage from "../assets/getjob logo.png";
import "./index.scss";

export default function Header() {
    return(
        <div className="header">
            <div className="header-image">
                <img src={HeaderImage} alt="" />
            </div>
            <div className="links">
                <p>Companies</p>
                <p>Candidates</p>
                <p>Assessment</p>
                <p>Post a Job</p>
                <p>Career Advice</p>
            </div>
            <div className="buttons">
                <div className="signUp">Sign Up</div>
                <div className="logIn">Log In</div>
            </div>
        </div>
    )

}