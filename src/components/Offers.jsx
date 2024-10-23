import React from "react";
import img1 from "../assets/img/1.jpg";

const offers = [
  {
    id: 1,
    price: "300 ج.م",
    description:
      "احصل على مجموعة العناية بالبشرة كاملة (اللوشن بار، اللوشن ستيك، وزبدة الجسم) بسعر مميز.",
    image: img1,
  },
  {
    id: 2,
    price: "200 ج.م",
    description: "احصل على خصم 15% عند شراء زبدة الجسم مع أي منتج آخر.",
    image: img1,
  },
];

const Offers = () => {
  const phoneNumber = "201234567890"; // Replace with your actual phone number with country code

  const handleFacebookLink = (offerId) => {
    // Find the offer based on the given offerId
    const offer = offers.find((o) => o.id === offerId);

    // Check if the offer exists
    if (!offer) {
      return "Offer not found!";
    }

    // Create the pre-filled message
    const message = `مرحبا، أود معرفة المزيد عن عرض ${offerId} - ${offer.description}`;

    // Your Facebook profile ID
    const facebookProfileId = "61567468675793"; // Your Facebook profile ID

    // Create the Messenger link
    return `https://m.me/${facebookProfileId}?text=${encodeURIComponent(
      message
    )}`;
  };

  return (
    <section className="offers" id="offers">
      <h2 className="offers__title">عروض خاصة</h2>
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
              href={handleFacebookLink(offer.id)}
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
