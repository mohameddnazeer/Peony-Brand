import React, { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    // Log scroll position for debugging
    console.log(window.scrollY);

    if (window.scrollY > 100) {
      // Change this value to a lower number for testing
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <a
          href="#"
          className="scrollup"
          id="scroll-up"
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            color: "white",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            textDecoration: "none",
          }}
        >
          <i className="ri-arrow-up-circle-line"></i>
        </a>
      )}
    </>
  );
};

export default ScrollToTopButton;
