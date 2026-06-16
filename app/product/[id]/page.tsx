import { products } from "@/data/products";
import { notFound } from "next/navigation";
import ProductDetails from "@/screens/ProductDetails/ProductDetails";

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const product = products.find((p) => p.id.toString() === resolvedParams.id);

  if (!product) {
    notFound();
  }

  return <ProductDetails product={product} />;
}
