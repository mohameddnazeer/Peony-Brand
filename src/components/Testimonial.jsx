import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "../assets/img/feedback1.jpg";
import wave from "../assets/img/shape-wawes.svg";
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
      <h2 className="section__title" style={{color:"#99484d", marginBottom:"1rem"}}>آراء العملاء</h2>
      {/* <span className="section__subtitle">My client saying</span> */}

      <div className="container section__border">
        <Carousel
          responsive={responsive}
          infinite={true}
          className="testimonial__container"
        >
          {/*==================== TESTIMONIAL 1 ====================*/}
          <div className="testimonial__content">
            <img
              src={img1}
              alt="feedback"
              style={{ width: "400px", height: "400px" }}
            />
            <div>
              <h3 className="testimonial__name">Client 1</h3>
              <span className="testimonial__subtitle">Client</span>
            </div>
          </div>

          {/*==================== TESTIMONIAL 2 ====================*/}
          <div className="testimonial__content">
            <img
              src={img1}
              alt="feedback"
              style={{ width: "400px", height: "400px" }}
            />
            <div>
              <h3 className="testimonial__name">Client 2</h3>
              <span className="testimonial__subtitle">Client</span>
            </div>
          </div>

          {/*==================== TESTIMONIAL 3 ====================*/}
          {/* Uncomment and fill in if needed */}
          {/* <div className="testimonial__content">
            <p className="testimonial__description">
              "Working with Mohamed is to give a good impression, I carry out my project at a good cost
              ,with excellent quality and attention. Great service and recommended."
            </p>
            <div>
              <h3 className="testimonial__name">Client 3</h3>
              <span className="testimonial__subtitle">Client</span>
            </div>
          </div> */}
        </Carousel>
      </div>
      <img src={wave} alt="" className="testimonial__img" />
    </section>
  );
};

export default Testimonial;
