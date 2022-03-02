import React from "react";
import axios from "axios";

function ContactForm(){

     
    const [name, setName] = React.useState(" ");
    const [email, setEmail] = React.useState(" ");
    const [phone, setPhone] = React.useState(" "); 
    const [company, setCompany] = React.useState(" "); 
    const [website, setWebsite] = React.useState(" ");  
    const [services, setServices] = React.useState(" ");

    function handleUsernameChange(event) {
        setName(event.target.value);
    }
    function handleEmailChange(event) {
        setEmail(event.target.value);
    }
    function handlePhoneChange(event) {
        setPhone(event.target.value);
    }
    function handleCompanyChange(event) {
        setCompany(event.target.value);
    }
    function handleWebsiteChange(event) {
        setWebsite(event.target.value);
    }
    function handleServicesChange(event) {
        setServices(event.target.value);
    }

    function handleButtonClick(){
        axios.post('/contactData', {
            'Name': name,
            'Email': email,
            'Phone': phone,
            'Company': company,
            'Website': website,
            'Services': services
        }).then((res) => {
            if(res.data.Message === "Contact data added."){
                window.location.replace("/thanks");
            }
        })
    }

    
        function handleLogoClick(){
            window.location.replace("/");
        }

    return(
        <div className="contact-form">
        <div className="contact-company-info">
        <img className="company-logo" src="images/logo.png" alt="logo" onClick={handleLogoClick}></img>
        <h3 className="company-name" onClick={handleLogoClick}>Digital Buddy</h3>
        </div>
        <div className="form-div">
        <form className="form">
        <label className="form-label">Fill in the details, and we will contact you as soon as possible</label>
        <br></br>
        <br></br>
            <label className="form-label">What should we call you? *</label>
            <br></br>
            <input className="form-input" type="text" name="Username" id="userName" value={name} onChange={handleUsernameChange}></input>
            <br></br>
            <label className="form-label">What's your email? *</label>
            <br></br>
            <input className="form-input" type="email" name="Email" id="userEmail" value={email} onChange={handleEmailChange}></input>
            <br></br>
            <label className="form-label">Your phone number? *</label>
            <br></br>
            <input className="form-input" type="text" name="Phone" id="userPhone" value={phone} onChange={handlePhoneChange}></input>
            <br></br>
            <label className="form-label">Your company's name? *</label>
            <br></br>
            <input className="form-input" type="text" name="Companyname" id="companyName" value={company} onChange={handleCompanyChange}></input>
            <br></br>
            <label className="form-label">Please enter your company's website link</label>
            <br></br>
            <input className="form-input" type="text" name="Link" id="websiteLink" value={website} onChange={handleWebsiteChange}></input>
            <br></br>
            <label className="form-label">Last question, what services are you interested in? *</label>
            <br></br>
            <input className="form-input" type="text" name="Services" id="servicesRequired" value={services} onChange={handleServicesChange}></input>
            <br></br>
            <button type="submit" className="form-submit-button" onClick={handleButtonClick}>Submit</button>
            <br></br>
        </form>
        </div>
        </div>
    );
}

export default ContactForm;