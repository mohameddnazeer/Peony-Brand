import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "../assets/img/feedback1.jpg";
import img2 from "../assets/img/feedback2.jpg";
import img3 from "../assets/img/feedback3.jpg";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const Testimonial = () => {
  return (
    <section className="testimonial section" id="testimonial">
      <h2 className="section__title" style={{ marginBottom: "1rem" }}>
        آراء العملاء
      </h2>
      {/* <span className="section__subtitle">My client saying</span> */}

      <div className="container section__border">
        <Carousel
          responsive={responsive}
          infinite={true}
          showDots={true}
          className="testimonial__container"
        >
          {/*==================== TESTIMONIAL 1 ====================*/}
          <div className="testimonial__content">
            <img src={img1} alt="feedback" className="testimonial__image" />
          </div>

          {/*==================== TESTIMONIAL 2 ====================*/}
          <div className="testimonial__content">
            <img src={img2} alt="feedback" className="testimonial__image" />
          </div>
          {/*==================== TESTIMONIAL 3 ====================*/}
          <div className="testimonial__content">
            <img src={img3} alt="feedback" className="testimonial__image" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonial;
