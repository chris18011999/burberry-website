import ProductCard from "@/components/product-card";
import { ProductFilters } from "@/components/product-filters";
import fetcher from "@/data/fetcher";

export default async function CategoryPage({
  params,
}: {
  params: { slug: string; id: number };
}) {
  const { products, total_found, search_term } = await fetcher.getProductsByTree(params.id);
  const filters = await fetcher.getFiltersByTree(params.id);

  return (
    <main className="container mx-auto">
      <ProductGrid products={products} filters={filters} total_found={total_found}></ProductGrid>
    </main>
  );
}


export function ProductGrid({ products, filters, total_found }: { products: T_Product[], filters?: T_TreeSearchResultFilters, total_found: number }) {
  return <div className="flex gap-4">
    <div className="flex-2 w-[25%]">
      <h2>Filters</h2>
      <ProductFilters filters={filters!}/>
    </div>
    <div className="w-[75%]">
      <h2>{total_found} Products</h2>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => {
          return <ProductCard product={product} key={product.id}/>;
        })}
      </div>
    </div>
  </div>
}
