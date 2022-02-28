import React from "react";

function contactForm(){

    
        function handleLogoClick(){
            window.location.replace("/");
        }

    return(
        <div class="contact-form">
        <div class="contact-company-info">
        <img class="company-logo" src="images/logo.png" alt="logo" onClick={handleLogoClick}></img>
        <h3 class="company-name" onClick={handleLogoClick}>Digital Buddy</h3>
        </div>
        <div class="form-div">
        <form class="form">
        <label class="form-label">Fill in the details, and we will contact you as soon as possible</label>
        <br></br>
        <br></br>
            <label class="form-label">What should we call you? *</label>
            <br></br>
            <input class="form-input" type="text" name="Username" id="userName"></input>
            <br></br>
            <label class="form-label">What's your email? *</label>
            <br></br>
            <input class="form-input" type="email" name="Email" id="userEmail"></input>
            <br></br>
            <label class="form-label">Your phone number? *</label>
            <br></br>
            <input class="form-input" type="text" name="Phone" id="userPhone"></input>
            <br></br>
            <label class="form-label">Your company's name? *</label>
            <br></br>
            <input class="form-input" type="text" name="Companyname" id="companyName"></input>
            <br></br>
            <label class="form-label">Please enter your company's website link</label>
            <br></br>
            <input class="form-input" type="text" name="Link" id="websiteLink"></input>
            <br></br>
            <label class="form-label">Last question, what services are you interested in? *</label>
            <br></br>
            <input class="form-input" type="text" name="Services" id="servicesRequired"></input>
            <br></br>
            <button type="submit" class="form-submit-button">Submit</button>
            <br></br>
        </form>
        </div>
        </div>
    );
}

export default contactForm;