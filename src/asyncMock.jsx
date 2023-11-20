const products = [
  {
    id: 1,
    name: "Nike Men's Winter Advantage Print Crew",
    price: 80,
    category: "clothing",
    img: "https://img.tennis-warehouse.com/watermark/rs.php?path=NMWIAPC-GR-1.jpg&nw=321",
    stock: 10,
    description:
      "Add some extra energy to your on-court look with the Nike Advantage Print Crew.",
  },
  {
    id: 2,
    name: "Nike Men's Winter Rafa Advantage Short",
    price: 80,
    category: "clothing",
    img: "https://img.tennis-warehouse.com/watermark/rs.php?path=NMWIRAS-GR-1.jpg&nw=321",
    stock: 10,
    description:
      "The ultra lightweight Nike Rafa Advantage Shorts are ready for the intensity of match play.",
  },
  {
    id: 3,
    name: "Babolat Pure Aero 98 2023",
    price: 279,
    category: "racquets",
    img: "https://img.tennis-warehouse.com/watermark/rs.php?path=BARO98-1.jpg&nw=540",
    stock: 10,
    description:
      "The Pure Aero 98 delivers the spin and power of a modern players racquet but with the control and feel needed to fully engage with your targets.",
  },
  {
    id: 4,
    name: "Babolat Pure Aero 12 Pack Bag",
    price: 145,
    category: "equipment",
    img: "https://img.tennis-warehouse.com/watermark/rs.php?path=BA12RH-1.jpg&nw=540",
    stock: 10,
    description:
      "Three main compartments, two with Isothermal Protection to prevent tension loss in strings.",
  },
  {
    id: 5,
    name: "Head Sonic Pro 17/1.25 String",
    price: 11,
    category: "accessories",
    img: "https://img.tennis-warehouse.com/watermark/rs.php?path=SONIC17-BK-1.jpg&nw=540",
    stock: 10,
    description:
      "Made from uniquely refined co-polymer polyester with a soft molecular construction.",
  },
  {
    id: 6,
    name: "Adidas Barricade Clay Arctic Night/White Men's Shoes",
    price: 99,
    category: "clothing",
    img: "https://img.tennis-warehouse.com/watermark/rs.php?path=AMBCANW-1.jpg&nw=540",
    stock: 10,
    description:
      "Stability and durability, now with more comfort and a more flexible feel than before.",
  },
];

export function getProducts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
}

export function getProductById(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((product) => Number(id) === product.id));
    }, 500);
  });
}

export function getProductsByCategory(category) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((product) => category === product.category));
    }, 500);
  });
}
