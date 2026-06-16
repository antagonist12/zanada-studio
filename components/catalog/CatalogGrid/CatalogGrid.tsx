import { products } from "@/data/products";
import CategorySection, { CategoryProps } from "../../Category/CategorySection/CategorySection";

export default function CatalogGrid() {
  const categories: CategoryProps[] = [
    {
      title: "90s Travel Magazine",
      subtitle: "Vintage Aesthetics & Timeless Journeys",
      bgImage: "/assets/tshirt/paralax_90s.png",
      bgPosition: "right",
      items: products.filter(p => p.category === "magazine")
    },
    {
      title: "Soft Pastel",
      subtitle: "Dreamy Hues & Delicate Touches",
      bgImage: "/assets/tshirt/paralax_pastel.png",
      bgPosition: "left",
      items: products.filter(p => p.category === "pastel")
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {categories.map((category, index) => (
        <CategorySection key={index} {...category} />
      ))}
    </div>
  );
}