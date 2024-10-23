const Footer = () => {
  return (
    <footer>
      <div className="footer__container container">
        <h1 className="footer__title">Peony beauty</h1>
        <p>Natural Skincare Products</p>
        <ul className="footer__list">
          <li className="nav__item">
            <a href="#home" className="nav__link active-link">
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
        </ul>

        <ul
          className="footer__social"
          style={{ marginTop: "15px", direction: "rtl" }}
        >
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

        <span className="footer__copy">Copyright Peony beauty &#169;2024.</span>
      </div>
    </footer>
  );
};

export default Footer;
