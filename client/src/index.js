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

const rootElement = document.getElementById("root");

render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div>
          <Header />
          <HomeLandingSection />
          </div>
        } />
      </Routes>
    </BrowserRouter>,
    rootElement
  );
