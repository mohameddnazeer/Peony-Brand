import React from "react";
// import "swiper/swiper.min.css";
// import "swiper/modules/navigation/navigation.min.css";
// import "swiper/modules/pagination/pagination.min.css";

import Header from "../src/components/Header";
import HomeSection from "./components/HomeSection";
import "./App.css";
// import "../src/assets/css/swiper-bundle.min.css";
// import "../src/assets/css/swiper-element-bundle.min.css";
import ServicesSection from "./components/ServicesSection";
import ProjectsSection from "./components/ProjectsSection";
import Offers from "./components/Offers";
import Testimonial from "./components/Testimonial";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
const App = () => {
  return (
    <div>
      <Header />
      <HomeSection />
      <ServicesSection />
      <ProjectsSection />
      <Offers />
      <Testimonial />
      <FAQ />
      <Footer />
      <ScrollToTopButton />
      {/* Other components can be added here */}
    </div>
  );
};

export default App;
