import React from "react";
import $ from 'jquery';

function Header(){

    function handleClick(){
        window.location.replace("/contact-form");
    }
    function handleLogoClick(){
        window.location.replace("/");
    }
    return(
        <div class="header-bar" id="header">
        <div class="company-info">
        <img class="company-logo" src="images/logo.png" alt="logo" onClick={handleLogoClick}></img>
        <h3 class="company-name" onClick={handleLogoClick}>Digital Buddy</h3>
        </div>

        <div class="nav-bar">
        <a href="#landingSection" class="nav-links nav1">Home</a>
        <a href="#serviceSection" class="nav-links nav2">Our Services</a>
        <a href="#founderSection" class="nav-links nav3">About</a>
        <a href="#contactSection" class="nav-links nav4">Contact</a>
        <button class="nav-btn" onClick={handleClick}>Let's connect</button>
        </div>

        </div>      
    );
}
$(window).scroll(function(){
    if ($(this).scrollTop() > 50) {
       $('#header').addClass('header-bar-scroll');
    } else {
       $('#header').removeClass('header-bar-scroll');
    }
});
export default Header;