import React from "react";

function contact(){

    function handleClick(){
        window.location.replace("/contact-form");
    }
    return(
        <div class="contact-section wrapper" id="contactSection">
        <h2 class="contact-heading">Get in touch</h2>
        <p class="contact-para">Want to know how we can help you to reach your customers all over the world? Let's discuss!</p>
        <button class="nav-btn contact-button" onClick={handleClick}>Contact us</button>
        </div>
    );
}

export default contact;