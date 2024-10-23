import React from "react";

const ServicesSection = () => {
  return (
    <section className="services section" id="services">
      <h2 className="section__title">خدماتنا</h2>
      <span className="section__subtitle">نبذة عنّا</span>

      <div className="services__container container grid section__border">
        <div className="services__card">
          <i className="ri-leaf-line"></i>
          <h2 className="services__title">الاستدامة</h2>
          <p className="services__description">
            نؤمن بأهمية الاستدامة ونهدف إلى تقديم منتجات تعكس التزامنا بحماية
            البيئة. نستخدم مكونات محلية وطبيعية، ونعمل على تقليل الأثر البيئي في
            جميع عملياتنا, اختر{" "}
            <span style={{ color: "#99484d" }}> [Peony beauty] </span>
            لدعم العناية بالبشرة المسؤولة.
          </p>
          <div className="services__border"></div>
        </div>

        <div className="services__card">
          <i className="ri-empathize-line"></i>
          <h2 className="services__title">العناية بالبشرة</h2>
          <p className="services__description">
            نحن ملتزمون بتقديم منتجات طبيعية للعناية بالبشرة تساعد على تغذية
            وحماية بشرتك. هدفنا هو استخدام مكونات طبيعية بالكامل لابتكار منتجات
            فعّالة وآمنة لجميع أنواع البشرة. نحن نفخر بصنع منتجات مستدامة
            وصديقة.
          </p>
          <div className="services__border"></div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
