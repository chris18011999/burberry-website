import ProductCard from "@/components/product-card";
import { Skeleton } from "@nextui-org/react";

export default async function Home() {
  const products = await fetch('https://fakestoreapi.com/products').then(data => data.json())

  return (
    <main className="flex min-h-screen flex-col items-center">
      <h1 className="text-3xl font-bold text-burberry-blue">Products</h1>
      <div className="overflow-x-auto flex gap-x-3 align-items-center py-3 px-3 w-full">
        {products.length ? products.map((product: any) => {
          return <ProductCard product={product} key={product.id}></ProductCard>
        }) : Array(10).fill(null).map((_, index) => <Skeleton key={index}></Skeleton>)}
      </div>
    </main>
  );
}
