import React, { useEffect } from "react";
import img1 from "../assets/img/lotion1.jpg";
// import img2 from "../assets/img/lotion2.jpg";
import img3 from "../assets/img/lotion3.webp";
import img4 from "../assets/img/lotionStick.webp";
import img5 from "../assets/img/lotionStick2.webp";
import img6 from "../assets/img/bodyButter.webp";
import img7 from "../assets/img/bodyButter2.webp";
// import "../index.css";
// import "../App.css";
const HomeSection = () => {
  useEffect(() => {
    const images = document.querySelectorAll(".slideshow img");
    let currentImageIndex = 0;

    const showNextImage = () => {
      images[currentImageIndex].classList.remove("active");
      currentImageIndex = (currentImageIndex + 1) % images.length;
      images[currentImageIndex].classList.add("active");
    };

    const intervalId = setInterval(showNextImage, 3000);
    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  const handleFaqClick = (e) => {
    const faqItem = e.currentTarget.parentElement;
    faqItem.classList.toggle("active");
  };

  useEffect(() => {
    document.querySelectorAll(".faq__question").forEach((question) => {
      question.addEventListener("click", handleFaqClick);
    });

    return () => {
      document.querySelectorAll(".faq__question").forEach((question) => {
        question.removeEventListener("click", handleFaqClick);
      });
    };
  }, []);

  return (
    <section className="home section" id="home">
      <div className="home__container container grid section__border">
        {/* Left Side: Image */}
        <div className="slideshow">
          <img src={img1} alt="Lotion Bar Image" />
          {/* <img src={img2} alt="Lotion Bar Image" /> */}
          <img src={img3} alt="Lotion Bar Image" />
          <img src={img4} alt="Lotion Bar Image" />
          <img src={img5} alt="Lotion Bar Image" />
          <img src={img6} alt="Lotion Bar Image" />
          <img src={img7} alt="Lotion Bar Image" />
        </div>

        {/* Right Side: Text Content */}
        <div className="home__content">
          <h1 className="home__title" style={{ color: "#99484d" }}>
            Peony beauty
          </h1>
          <p className="home__description">
            مرحبًا بكم في{" "}
            <span style={{ color: "#99484d" }}>[Peony beauty]</span> – العناية
            الطبيعية ببشرتك. في
            <span style={{ color: "#99484d" }}> [Peony beauty]</span>، نؤمن بقوة
            الطبيعة في تغذية وحماية بشرتك. تُصنع قضبان المستحضر ومنتجات العناية
            بالجسم المصنوعة يدويًا من مكونات طبيعية بالكامل، وهي مصممة لترطيب
            بشرتك وتهدئتها وتجديد شبابها دون استخدام مواد كيميائية قاسية.
          </p>

          <p className="home__description">
            استكشف مجموعتنا من قضبان المستحضر الفاخرة والغنية وزبدة الجسم
            والمقشرات - مثالية لتدليل نفسك أو إهدائها لأحد أحبائك. تم تصميم كل
            منتج بعناية ليمنحك بشرة متوهجة وصحية.
          </p>
          <p className="home__description">
            انضم إلينا في رحلتنا نحو الجمال الطبيعي وجرب الفرق الذي يمكن أن
            يحدثه العناية بالبشرة النظيفة والصديقة للبيئة,
            <strong style={{ color: "#99484d" }}> للجميع، رجالًا ونساءً</strong>
          </p>

          <ul className="home__social" style={{ direction: "rtl" }}>
            <a
              href="https://www.instagram.com/peonybeauty.eg"
              target="_blank"
              rel="noopener noreferrer"
              className="home__social-link"
            >
              <i className="ri-instagram-line"></i>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61567468675793&mibextid=LQQJ4d"
              target="_blank"
              rel="noopener noreferrer"
              className="home__social-link"
            >
              <i className="ri-facebook-circle-line"></i>
            </a>
            <a
              href="https://x.com/peonybeaut45301?s=21&t=N6BfgpbP7WCPU11xqFL_3w"
              target="_blank"
              rel="noopener noreferrer"
              className="home__social-link"
            >
              <i className="ri-twitter-line"></i>
            </a>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
