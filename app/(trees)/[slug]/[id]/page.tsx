import { ProductGrid } from "@/components/product-grid";
import fetcher from "@/data/fetcher";

export async function generateStaticParams({
  params,
}: {
  params: { slug: string; id: string };
}) {
  const trees = await fetcher.getTrees();

  return trees.map((tree) => ({
    slug: tree.slug,
    id: `${tree.id}`,
  }));
}

export default async function CategoryPage({
  params,
}: {
  params: { slug: string; id: number };
}) {
  const { products, total_found, search_term } =
    await fetcher.getProductsByTree(params.id);
  const filters = await fetcher.getFiltersByTree(params.id);

  return (
    <main className="container mx-auto">
      <ProductGrid
        products={products}
        filters={filters}
        total_found={total_found}
      ></ProductGrid>
    </main>
  );
}
