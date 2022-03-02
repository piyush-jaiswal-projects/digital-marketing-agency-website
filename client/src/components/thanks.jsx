import React from "react";

function thanks(){

    function handleLogoClick(){
        window.location.replace("/");
    }

    return(
        <div className="thanks-div">
            <div className="contact-company-info">
        <img className="company-logo" src="images/logo.png" alt="logo" onClick={handleLogoClick}></img>
        <h3 className="company-name" onClick={handleLogoClick}>Digital Buddy</h3>
        </div>
        <div className="thanks-info-div">
        <h2 className="thanks-heading">Thanks for filling out the contact form.</h2>
        <h3 className="thanks-para">We will reach out to you as soon as possible.</h3>
        <button className="thanks-btn" onClick={handleLogoClick}>Go to home page</button>
        </div>
        </div>
    );
}

export default thanks;