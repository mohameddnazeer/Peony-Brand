import React from "react";
import img1 from "../assets/img/1.jpg";

const offers = [
  {
    id: 1,
    price: "100 ج.م",
    description: "استمتع بعرض خاص على جميع منتجات العناية بالبشرة.",
    image: img1,
  },
  {
    id: 2,
    price: "150 ج.م",
    description: "احصل على خصم 20% على أول طلب لك.",
    image: img1,
  },
];

const Offers = () => {
  const phoneNumber = "201234567890"; // Replace with your actual phone number with country code

  const handleWhatsAppLink = (offerId) => {
    const offer = offers.find((o) => o.id === offerId);
    const message = `مرحبا، أود معرفة المزيد عن عرض ${offerId} - ${offer.description}`;
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section className="offers" id="offers">
      <h2 className="offers__title" style={{color:"#99484d"}}>عروض خاصة</h2>
      <div className="offers__container container section__border">
        {offers.map((offer) => (
          <div className="offers__card" key={offer.id}>
            <img
              src={offer.image}
              alt={`Product ${offer.id}`}
              className="offers__image"
            />
            <p className="offers__price">{offer.price}</p>
            <p className="offers__description">{offer.description}</p>
            <a
              href={handleWhatsAppLink(offer.id)}
              className="offers__button"
              target="_blank" // Open link in a new tab
              rel="noopener noreferrer" // Security best practice
            >
              تواصل معنا 
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Offers;
