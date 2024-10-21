import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (id) => {
    setActiveIndex(activeIndex === id ? null : id);
  };

  const faqItems = [
    { question: " ما هي  المكونات الأساسية للمنتج هذا ؟", answer: "المنتج مكون من مجموعة زبدات وزيوت طبيعية مثل زبدة الأفوكادو والشيا، مع زيت الأرجان وبذور العنب، بالإضافة إلى فيتامين E. كل هذه المكونات توفر ترطيباً علاجياً فعالاً في وقت قصير.", id: 1 },
    { question: "كيف يتم استخدام المنتج ؟", answer: "يتم تمرير اللوشن بار مباشرة على الجلد حتى تترك كمية مناسبة من المنتج، ثم يتم تدليك المنتج على البشرة جيداً وتركه حتى يتم امتصاصه بالكامل.", id: 2  },
    { question: "ما هي الفائدة المهمة لهذا المنتج ؟", answer: "يستخدم لعلاج حالات جفاف الجلد الشديد، وله تأثير تجميلي وعلاجي.", id: 3 },
    { question: "ماذا تعني كلمة Lotion Bar ؟", answer: "هو عبارة عن قطعة صلبة مركزة من المواد المرطبة العلاجية، تتحول إلى سائل بمجرد ملامستها لحرارة الجسم، وتترك كمية مناسبة على البشرة يتم امتصاصها بسرعة.", id: 4 },
    { question: "هل تحتوي على أي مواد ضارة للجلد ؟", answer: "المنتج خالٍ تماماً من أي مواد قد تكون ضارة للبشرة.", id: 5   },
    { question: "ما هي مدة فعالية  Lotion Bar  ؟", answer: "يمكن أن يستمر تأثير الترطيب من 8 إلى 12 ساعة بناءً على نوع البشرة ودرجة الجفاف.", id: 6 },
    { question: "هل يمكن استخدام اللوشن بار على جميع أنواع البشرة ؟", answer: "نعم، اللوشن بار مناسب لجميع أنواع البشرة، بما في ذلك البشرة الحساسة، بفضل مكوناته الطبيعية الخالية من المواد الكيميائية الضارة.", id: 7  },
    { question: "هل اللوشن بار آمن للاستخدام على بشرة الأطفال ؟", answer: "نعم، بفضل مكوناته الطبيعية الخالية من المواد الضارة، يمكن استخدامه على بشرة الأطفال، لكن يُفضل استشارة الطبيب في حالة البشرة الحساسة جداً.", id:8   },
  ];

  return (
    <section className="faq section" id="faq">
      <h2 className="section__title" style={{color:"#99484d",marginBottom:"1rem"}}>أهم الأسئلة والإجابة عليها</h2>
      {/* <span className="section__subtitle">ما هي طريقة الاستخدام؟</span> */}

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
