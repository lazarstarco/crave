export const categoryMenuList = [
  {
    id: 1,
    title: "Ženske majice",
    src: "/zenske-majice.png",
    href: "/shop/zenske-majice",
  },
  {
    id: 2,
    title: "Korseti",
    src: "/korseti.png",
    href: "/shop/korseti",
  },
  {
    id: 3,
    title: "Suknje",
    src: "/suknje.png",
    href: "/shop/suknje",
  },
  {
    id: 4,
    title: "Ženske pantalone",
    src: "/zenske-pantalone.png",
    href: "/shop/zenske-pantalone",
  },
  {
    id: 5,
    title: "Muške majice",
    src: "/muske-majice.png",
    href: "/shop/muske-majice",
  },
  {
    id: 6,
    title: "Muške pantalone",
    src: "/muske-pantalone.png",
    href: "/shop/muske-pantalone",
  },
  {
    id: 7,
    title: "Aksesoari",
    src: "/aksesoari.png",
    href: "/shop/aksesoari",
  },
  {
    id: 8,
    title: "Obuća",
    src: "/obuca.png",
    href: "/shop/obuca",
  },
];

export const incentives = [
  {
    name: "Free Shipping",
    description:
      "Our shipping is completely free and that is completely good for our customers.",
    imageSrc: "/shipping icon.png",
  },
  {
    name: "24/7 Customer Support",
    description:
      "Our support is working all day and night to answer any question you have.",
    imageSrc: "/support icon.png",
  },
  {
    name: "Fast Shopping Cart",
    description:
      "We have super fast shopping experience and you will enjoy it.",
    imageSrc: "/fast shopping icon.png",
  },
];

export const navigation = {
  sale: [
    { name: "Discounts", href: "/discounts" },
    { name: "New Arrivals", href: "/new-arrivals" },
    { name: "Seasonal Offers", href: "/seasonal-offers" },
  ],
  about: [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Company Profile", href: "/company-profile" },
    { name: "Our Mission", href: "/mission" },
  ],
  buy: [
    { name: "Loyalty Card", href: "/loyalty-card" },
    { name: "Terms of Use", href: "/terms-of-use" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Return Policy", href: "/return-policy" },
    { name: "Partners", href: "/partners" },
  ],
  help: [
    { name: "Contact Us", href: "/contact" },
    { name: "How to Buy", href: "/how-to-buy" },
    { name: "FAQ", href: "/faq" },
    { name: "Shipping Information", href: "/shipping-info" },
    { name: "Support Center", href: "/support-center" },
  ],
};
export const isValidNameOrLastname = (input: string) => {
  const regex = /^[a-zA-Z\s]+$/;
  return regex.test(input);
};

export const isValidEmailAddressFormat = (input: string) => {
  const regex = /^\S+@\S+\.\S+$/;
  return regex.test(input);
};

export const isValidCardNumber = (input: string) => {
  const cleanedInput = input.replace(/[^0-9]/g, "");

  const regex = /^\d{13,19}$/;
  return regex.test(cleanedInput);
};

export const isValidCreditCardExpirationDate = (input: string) => {
  const regex = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
  return regex.test(input);
};

export const isValidCreditCardCVVOrCVC = (input: string) => {
  const regex = /^[0-9]{3,4}$/;
  return regex.test(input);
};
