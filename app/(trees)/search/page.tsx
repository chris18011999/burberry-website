
import { ProductGrid } from "@/components/product-grid";
import fetcher from "@/data/fetcher";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { search_term: string };
}) {

  const { products, total_found } =
    await fetcher.getProductsBySearchTerm(searchParams.search_term);

  return (
    <main className="container mx-auto">
      <ProductGrid
        key={JSON.stringify(searchParams)}
        tree={undefined}
        products={products}
        filters={undefined}
        total_found={total_found}
      ></ProductGrid>
    </main>
  );
}
