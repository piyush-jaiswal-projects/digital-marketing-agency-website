import React from "react";

function contactDetails(){
    return(
        <div class="contact-details-section">
        <h1 class="services-heading wrapper contact-section-title">Contact us</h1>
        <div class="contact-address">
        <img src="./images/location.png" class="location-image" alt="location"></img>
        <h3 class="testimonial-heading address-title">Address</h3>
        <p class="contact-section-para">
            XYZ City, New Delhi<br></br>
            Pincode- Ax0012
        </p>
        </div>
        <div class="contact-emails">
        <img src="./images/email.png" class="location-image email-image" alt="email"></img>
        <h3 class="testimonial-heading address-title">Email Us</h3>
        <p class="contact-section-para">
            piyush@digitalbuddy.com<br></br>
            contact@digitalbuddy.com
        </p>
        </div>
        </div>
    );
}

export default contactDetails;