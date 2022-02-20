import React from "react";

function ourServices(){
return(
    <div class="services-section">
    <h3 class="testimonial-heading">Our Services</h3>
    <h1 class="services-heading">Here's what we offer</h1>
    <div class="services-container">

    <div class="service-box service1">
    <img class="service-image" src="./images/s1.png" alt="Facebook Ads"></img>
    <h2 class="service-title">Facebook Ads</h2>
    <p class="service-para">We will run ads on facebook to help you reach your targeted audience.
    dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
    </div>

    <div class="service-box service2">
    <img class="service-image" src="./images/s2.png" alt="Google Ads"></img>
    <h2 class="service-title">Google Ads</h2>
    <p class="service-para">We will run ads on google to help you reach your targeted audience.
    dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
    </div>

    <div class="service-box service3">
    <img class="service-image" src="./images/s3.png" alt="SEO"></img>
    <h2 class="service-title">Search Engine Optimisation</h2>
    <p class="service-para">We will help you to rank your website and content at top on every search engine.
    dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
    </div>

    </div>
    </div>
);
}

export default ourServices;