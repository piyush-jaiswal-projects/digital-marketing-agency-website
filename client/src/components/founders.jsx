import React from "react";

function founders(){
    return(
    <div class="founders-section" id="founderSection">
    <div class="founders-message-section">
    <p class="testimonial-heading founder-heading">Who We Are</p>
    <h1 class="services-heading founder-main-heading">We are a team of experienced marketing experts dedicated to build your presence online.</h1>
    <p class="service-para founder-para">We specialize in various forms of digital marketing. SOme are facebook ads, google ads, SEO, email marketing, influencer marketing, etc.</p>
    <a href="#learn-how-ref"><button class="heading-btn founder-btn">Learn how<p class="animation-content">--&gt;</p></button></a>
    </div>

    <div class="founders-intro-section">
    <div class="service-box wrapper founder1">
    <img class="service-image founder-image" src="./images/person.png" alt="Piyush Jaiswal"></img>
    <h2 class="services-heading founder-name">Piyush Jaiswal</h2>
    <h4 class="founder-tagline">Co-founder</h4>
    <p class="service-para">Expert in developing websites, social media marketing and content creation.</p>
    </div>

    <div class="service-box wrapper founder2">
    <img class="service-image founder-image" src="./images/person.png" alt="Digital Buddy"></img>
    <h2 class="services-heading founder-name">Digital Buddy</h2>
    <h4 class="founder-tagline">Co-founder</h4>
    <p class="service-para">Certified digital marketer, helped many brands to grow their presence from zero to 2M+ following.</p>
    </div>
    </div>
    </div>
    );
}

export default founders;