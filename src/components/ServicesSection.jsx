import React from "react";

const ServicesSection = () => {
  return (
    <section className="services section" id="services">
      <h2 className="section__title" style={{color:"#99484d"}}>خدماتنا</h2>
      <span className="section__subtitle" style={{color:"#99484d"}}>نبذة عنّا</span>

      <div className="services__container container grid section__border">
        <div className="services__card">
          <i className="ri-leaf-line" style={{color:"#99484d"}}></i>

          <h2 className="services__title" style={{color:"#99484d"}}>الاستدامة</h2>

          <p className="services__description" style={{ direction: "rtl" }}>
            نؤمن بأهمية الاستدامة ونهدف إلى تقديم منتجات تعكس التزامنا بحماية
            البيئة. نستخدم مكونات محلية وطبيعية، ونعمل على تقليل الأثر البيئي في
            جميع عملياتنا. اختر <span style={{color:"#99484d"}}> [Peony beauty] </span>
            لدعم العناية بالبشرة المسؤولة.
          </p>

          <div className="services__border"></div>
        </div>

        <div className="services__card">
          <i className="ri-empathize-line" style={{color:"#99484d"}}></i>

          <h2 className="services__title" style={{color:"#99484d"}}>العناية بالبشرة</h2>

          <p className="services__description" style={{ direction: "rtl" }}>
            نحن ملتزمون بتقديم منتجات طبيعية للعناية بالبشرة تساعد على تغذية
            وحماية بشرتك. هدفنا هو استخدام مكونات طبيعية بالكامل لابتكار منتجات
            فعّالة وآمنة لجميع أنواع البشرة. نحن نفخر بصنع منتجات مستدامة وصديقة
            للبيئة من دون مواد كيميائية قاسية. مهمتنا هي تزويدك بتجربة عناية
            بالبشرة توفر لك الترطيب والحماية لتكون بشرتك صحية ومتألقة كل يوم.
          </p>

          <div className="services__border"></div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
