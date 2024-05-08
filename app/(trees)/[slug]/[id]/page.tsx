
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
  searchParams,
}: {
  params: { slug: string; id: number };
  searchParams: { tree_id: string; v?: string[] };
}) {
  const searchFilters = Array.isArray(searchParams.v)
    ? searchParams.v
    : [searchParams.v];

  const { products, total_found } =
    await fetcher.getProductsByTree(params.id, searchFilters);

  const treeData = await fetcher.getTreeById(params.id);
  const filters = await fetcher.getFiltersByTree(params.id, searchFilters);

  console.log(treeData)

  return (
    <main className="container mx-auto">
      <ProductGrid
        key={JSON.stringify(searchParams)}
        tree={treeData}
        products={products}
        filters={filters}
        total_found={total_found}
      ></ProductGrid>
    </main>
  );
}
