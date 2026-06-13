export type Product = {
  id: number;
  name: string;
  price: number;
  category: "magazine" | "pastel";
  image: string | null;
  description: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Magazine — Seri 01",
    price: 150000,
    category: "magazine",
    image: "/assets/tshirt/kyoto.png",
    description: "Kaos sablonan premium, limited edition.",
  },
  {
    id: 2,
    name: "Magazine — Seri 02",
    price: 150000,
    category: "magazine",
    image: "/assets/tshirt/tokyo.png",
    description: "Kaos sablonan premium, limited edition.",
  },
  {
    id: 3,
    name: "Pastel — Seri 03",
    price: 165000,
    category: "pastel",
    image: "/assets/tshirt/kyoto-pastel-2.png",
    description: "Kaos sablonan premium, limited edition.",
  },
  {
    id: 4,
    name: "Pastel — Seri 04",
    price: 165000,
    category: "pastel",
    image: "/assets/tshirt/tokyo-pastel-2.png",
    description: "Kaos sablonan premium, limited edition.",
  },
];