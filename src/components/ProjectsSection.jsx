import React from "react";
import img1 from "../assets/img/1.jpg";
import img2 from "../assets/img/2.jpg";
import img3 from "../assets/img/3.jpg";
import img4 from "../assets/img/4.jpg";
import img5 from "../assets/img/5.jpg";
import img6 from "../assets/img/6.jpg";
import img7 from "../assets/img/7.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ProjectsSection = ({ deviceType }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">المنتجات</h2>
      <span className="section__subtitle">الاكثر مبيعا</span>

      <div className="container section__border ">
        {/* <div className="projects__container swiper">
          <div className="swiper-wrapper "> */}
        <Carousel
          responsive={responsive}
          swipeable={false}
          draggable={false}
          showDots={true}
          ssr={true}
          infinite={true}
          autoPlay={deviceType !== "mobile"}
          autoPlaySpeed={4000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {/*==================== PROJECT1 ====================*/}
          <div className="projects__content swiper-slide">
            <img
              src={img1}
              alt="projects image"
              className="projects__img"
              style={{ width: "300px", height: "300px" }}
            />
            <div>
              <span className="projects__subtitle">Natural Skincare</span>
              <h1 className="projects__title">Natural Skincare</h1>
            </div>
          </div>

          {/*==================== PROJECT2 ====================*/}
          <div className="projects__content swiper-slide">
            <img
              src={img2}
              alt="projects image"
              className="projects__img"
              style={{ width: "300px", height: "300px" }}
            />
            <div>
              <span className="projects__subtitle">Natural Skincare</span>
              <h1 className="projects__title">Natural Skincare</h1>
            </div>
          </div>

          {/*==================== PROJECT3 ====================*/}
          <div className="projects__content swiper-slide">
            <img
              src={img3}
              alt="projects image"
              className="projects__img"
              style={{ width: "300px", height: "300px" }}
            />
            <div>
              <span className="projects__subtitle">Natural Skincare</span>
              <h1 className="projects__title">Natural Skincare</h1>
            </div>
          </div>

          {/*==================== PROJECT4 ====================*/}
          <div className="projects__content swiper-slide">
            <img
              src={img4}
              alt="projects image"
              className="projects__img"
              style={{ width: "300px", height: "300px" }}
            />
            <div>
              <span className="projects__subtitle">Natural Skincare</span>
              <h1 className="projects__title">Natural Skincare</h1>
            </div>
          </div>
        </Carousel>
        {/* </div>
        </div> */}
      </div>
    </section>
  );
};

export default ProjectsSection;
