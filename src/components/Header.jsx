import React, { useEffect } from "react";
import logo from "../assets/img/logo__1_-removebg-preview.png";

const Header = () => {
  useEffect(() => {
    const navMenu = document.getElementById("nav-menu");
    const navToggle = document.getElementById("nav-toggle");
    const navClose = document.getElementById("nav-close");
    const navLinks = document.querySelectorAll(".nav__link");
    const themeButton = document.getElementById("theme-button");
    const darkTheme = "dark-theme";
    const iconTheme = "ri-sun-line";

    const toggleMenu = () => navMenu.classList.add("show-menu");
    const closeMenu = () => navMenu.classList.remove("show-menu");
    const linkAction = () => navMenu.classList.remove("show-menu");

    if (navToggle) {
      navToggle.addEventListener("click", toggleMenu);
    }

    if (navClose) {
      navClose.addEventListener("click", closeMenu);
    }

    navLinks.forEach((n) => n.addEventListener("click", linkAction));

    const selectedTheme = localStorage.getItem("selected-theme");
    const selectedIcon = localStorage.getItem("selected-icon");

    if (selectedTheme) {
      document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
        darkTheme
      );
      themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
        iconTheme
      );
    }

    themeButton.addEventListener("click", () => {
      const currentTheme = document.body.classList.contains(darkTheme)
        ? "light"
        : "dark";
      document.body.classList.toggle(darkTheme);
      themeButton.classList.toggle(iconTheme);
      localStorage.setItem("selected-theme", currentTheme);
      localStorage.setItem(
        "selected-icon",
        currentTheme === "dark" ? iconTheme : "ri-moon-line"
      );
    });

    return () => {
      if (navToggle) {
        navToggle.removeEventListener("click", toggleMenu);
      }
      if (navClose) {
        navClose.removeEventListener("click", closeMenu);
      }
      navLinks.forEach((n) => n.removeEventListener("click", linkAction));
    };
  }, []);

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <div className="" style={{ width:"100px"}}>
        <img
          src={logo}
          alt="Logo"
          style={{ maxWidth: "100%", objectFit:'cover', backgroundColor:"transparent"}}
        />
        </div>
        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link       ">
                <i className="ri-home-4-line"></i> الرئيسية
              </a>
            </li>
            <li className="nav__item">
              <a href="#services" className="nav__link">
                <i className="ri-trophy-line"></i> من نحن
              </a>
            </li>
            <li className="nav__item">
              <a href="#projects" className="nav__link">
                <i className="ri-image-2-line"></i> المنتجات
              </a>
            </li>
            <li className="nav__item">
              <a href="#offers" className="nav__link">
                <i className="ri-book-mark-line"></i> العروض
              </a>
            </li>
            <li className="nav__item">
              <a href="#testimonial" className="nav__link">
                <i className="ri-briefcase-4-line"></i> آراء العملاء
              </a>
            </li>
          </ul>
          <div className="nav__close" id="nav-close">
            <i className="ri-close-line"></i>
          </div>
        </div>
        <div className="nav__buttons">
          <i className="ri-moon-line change-theme" id="theme-button"></i>
          <div className="nav__toggle" id="nav-toggle">
            <i className="ri-menu-4-line"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
