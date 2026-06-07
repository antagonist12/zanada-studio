export type Product = {
  id: number;
  name: string;
  price: number;
  category: "tee" | "hoodie";
  image: string | null;
  description: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Tee — Seri 01",
    price: 150000,
    category: "tee",
    image: "/assets/tshirt/egypt_tshirt.png",
    description: "Kaos sablonan premium, limited edition.",
  },
  {
    id: 2,
    name: "Tee — Seri 02",
    price: 150000,
    category: "tee",
    image: "/assets/tshirt/london_tshirt.png",
    description: "Kaos sablonan premium, limited edition.",
  },
  {
    id: 3,
    name: "Tee — Seri 03",
    price: 165000,
    category: "tee",
    image: "/assets/tshirt/rome_tshirt.png",
    description: "Kaos sablonan premium, limited edition.",
  },
  {
    id: 4,
    name: "Tee — Seri 04",
    price: 165000,
    category: "tee",
    image: "/assets/tshirt/paris_tshirt.png",
    description: "Kaos sablonan premium, limited edition.",
  },
];