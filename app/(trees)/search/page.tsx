
import { ProductGrid } from "@/components/product-grid";
import fetcher from "@/data/fetcher";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { search_term: string, page?: number, v?: string[] };
}) {

  const { products, total_found, paginator } =
    await fetcher.getProductsBySearchTerm(searchParams.search_term, searchParams.page);

    const filters = await fetcher.getFiltersBySearchTerm(searchParams.search_term, searchParams.v, searchParams.page)
  return (
    <main className="container mx-auto">
      <ProductGrid
        key={JSON.stringify(searchParams)}
        tree={undefined}
        products={products}
        filters={filters}
        total_found={total_found}
        paginator={paginator}
      ></ProductGrid>
    </main>
  );
}
