import ProductCard from "@/components/product-card";
import { ProductFilters } from "@/components/product-filters";
import { ProductGrid } from "@/components/product-grid";
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
