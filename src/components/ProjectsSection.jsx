import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import img1 from "../assets/img/lotion3.webp";
import img2 from "../assets/img/lotionStick.webp";
import img3 from "../assets/img/bodyButter.webp";

const ProjectsSection = ({ deviceType }) => {
  // Define an array for the project items
  const projects = [
    {
      id: 1,
      image: img1,
      subtitle: "Lotion Bar",
      description:
        "تتميز بقوامها الصلب وتُستخدم لترطيب البشرة بعمق. تذوب عند ملامستها للجلد، مما يجعلها مثالية للاستخدام المنزلي لترطيب المناطق الكبيرة. ممتازة للأشخاص الذين يفضلون المنتجات الطبيعية والبسيطة.",
    },
    {
      id: 2,
      image: img2,
      subtitle: "Lotion Stick",
      description:
        "تشبه قضبان المستحضر لكن تأتي في عبوة مريحة وسهلة الاستخدام. مثالية للأشخاص أثناء التنقل، فهي تُطبق مباشرة على البشرة دون الحاجة للمس المنتج باليد، مما يجعلها أكثر نظافة ودقة في التطبيق.",
    },
    {
      id: 3,
      image: img3,
      subtitle: "Body Butter",
      description:
        "مستحضر كريمي سميك يقدم ترطيبًا مكثفًا وطويل الأمد. يُستخدم عادة بعد الاستحمام أو قبل النوم لتهدئة البشرة الجافة والمتهيجة. يُعتبر الخيار الأفضل لمن يعانون من جفاف شديد ويريدون تغذية عميقة للبشرة.",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
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
      <h2 className="section__title" style={{ color: "#99484d" }}>المنتجات</h2>
      <span className="section__subtitle" style={{ color: "#99484d" }}>الأكثر مبيعاً</span>

      <div className="container section__border">
        <Carousel
          responsive={responsive}
          swipeable={false}
          draggable={false}
          showDots={true}
          ssr={true} // Server-side rendering for better performance
          infinite={true}
          autoPlay={deviceType !== "mobile"}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {projects.map((project) => (
            <div className="projects__content swiper-slide" key={project.id}>
              <img
                src={project.image}
                alt={`Project ${project.id}`}
                className="projects__img"
                style={{ width: "300px", height: "300px" }}
              />
              <div>
                <span className="projects__subtitle" style={{ color: "#99484d" }}>
                  {project.subtitle}
                </span>
                <h1 className="projects__title">
                  {project.description}
                </h1>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default ProjectsSection;
