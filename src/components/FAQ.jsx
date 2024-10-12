import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (id) => {
    setActiveIndex(activeIndex === id ? null : id);
  };

  const faqItems = [
    { question: "بالنسبة :", answer: "إجابة السؤال 1", id: 1 },
    { question: "بالنسبة :", answer: "إجابة السؤال 2", id: 2 },
  ];

  return (
    <section className="faq section" id="faq">
      <h2 className="section__title">أهم الأسئلة والإجابة عليها</h2>
      <span className="section__subtitle">ما هي طريقة الاستخدام؟</span>

      <div className="container section__border">
        <div className="faq__container">
          {faqItems.map((item) => (
            <div className="faq__item" key={item.id}>
              <div
                className="faq__question"
                onClick={() => toggleAnswer(item.id)}
                style={{
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span>{item.question}</span>
                {activeIndex === item.id ? (
                  <i
                    className={`ri-close-line ${
                      activeIndex === item.id ? "active" : ""
                    }`}
                  ></i>
                ) : (
                  <i
                    className={`ri-add-line ${
                      activeIndex === item.id ? "active" : ""
                    }`}
                  ></i>
                )}
              </div>
              {activeIndex === item.id && (
                <>
                  <p style={{ marginRight: "30px" }}>{item.answer}</p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
