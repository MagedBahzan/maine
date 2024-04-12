import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Layout from "./componants/layout/Layout";
import CoursesPage from "./CoursesPage";
import CoursesDetailesPage from "./CourseDetailesPage";
import PricingPage from "./PricingPage";
import AboutPage from "./AboutPage";
import BenefitsPage from "./BenefitsPage";
import FAQsection from "./componants/home-componants/FAQsection";
import TestimonialsSection from "./componants/home-componants/TestimonialsSection";
import BenefitsDetailesPage from "./BenefitsDetailes";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="*" element={<h1>404 Not Found</h1>} />
            <Route path="/" element={<Home />} />
            <Route path="courses">
              <Route index element={<CoursesPage />} />
              <Route path=":id" element={<CoursesDetailesPage />} />
            </Route>
            <Route path="pricing" element={<PricingPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="Benefits" >
              <Route index element={<BenefitsPage />} />
              <Route path=":id" element={<BenefitsDetailesPage />} />
            </Route>
            <Route path="testimonials" element={<TestimonialsSection />} />
            <Route path="FAQ" element={<FAQsection />} />
            <Route path="Skillbridge-login" element={<LoginPage />} />
            <Route path="Skillbridge-Sign-Up" element={<SignUpPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
