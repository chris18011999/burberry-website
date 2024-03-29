import ProductCardImage from "@/components/product-card-image";
import { priceFormatter } from "@/utils/price-formatter";
import { Metadata, ResolvingMetadata } from "next";

export async function generateStaticParams() {
  const products = await fetch(`https://fakestoreapi.com/products/`).then(
    (data) => data.json()
  );

  return products.map(({ id }: { id: number }) => id);
}

export async function generateMetadata(
  { params }: { params: { id: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id;

  // fetch data
  const product = await fetch(`https://fakestoreapi.com/products/${id}`).then((res) => res.json());

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: product.title,
    description: product.description,
    openGraph: {
      images: [product.image, ...previousImages],
    },
  };
}

export default async function ProductDetails({
  params,
}: {
  params: { id: number };
}) {
  const product = await fetch(
    `https://fakestoreapi.com/products/${params.id}`
  ).then((data) => data.json());

  return (
    <main className="container mx-auto px-4">
      <div className="columns-2">
        <div>
          <ProductCardImage image={product.image} alt={product.name} />
        </div>
        <div>
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <div>Rating: {product.rating.rate}</div>
          <br></br>
          <br></br>
          <br></br>
          <div>Price: {priceFormatter.format(product.price)}</div>
        </div>
      </div>
    </main>
  );
}
