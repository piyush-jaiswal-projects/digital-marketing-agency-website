import React from "react";
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Header from "./components/header.jsx";
// import SampleText from "./components/sampleText.jsx";
import HomeLandingSection from "./components/homeLandingSection.jsx";
import Testimonials from "./components/testimonials.jsx";
import Service from "./components/services.jsx";
import Contact from "./components/contact.jsx";
import Founders from "./components/founders.jsx";
import Features from "./components/features.jsx";
import ContactDetails from "./components/contactDetails.jsx";
import Footer from "./components/footer.jsx";
import ContactForm from "./components/contactForm.jsx"

const rootElement = document.getElementById("root");

render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div>
          <Header />
          <HomeLandingSection />
          <Testimonials />
          <Service />
          <Contact />
          <Founders />
          <Features />
          <ContactDetails />
          <Footer />
          </div>
        } />
        <Route path="/contact-form" element={<div><ContactForm /></div>} />
      </Routes>
    </BrowserRouter>,
    rootElement
  );
