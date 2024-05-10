import ProductCardImage from "@/components/product-card-image";
import { priceFormatter } from "@/utils/price-formatter";
import { CommentOutlined, CustomerServiceOutlined } from "@ant-design/icons";
import FloatButton from "antd/lib/float-button/FloatButton";
import FloatButtonGroup from "antd/lib/float-button/FloatButtonGroup";
import { Metadata, ResolvingMetadata } from "next";
import dataFetcher from "@/data/fetcher";

export async function generateMetadata(
  { params }: { params: { id: number } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id;

  // fetch data
  const product = await dataFetcher.getProductById(id);

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      images: [product.picture.normal as string, ...previousImages],
    },
  };
}

export default async function ProductDetails({
  params,
}: {
  params: { id: number };
}) {
  const product = await dataFetcher.getProductById(params.id);

  return (
    <main className="container mx-auto px-4">
      <div className="columns-2">
        <div className="p-5 bg-white">
          <ProductCardImage
            className="w-full h-[400px]"
            image={product.picture.normal as string}
            alt={product.name}
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <div>Rating: {product.rating.main.value}</div>
          <br></br>
          <br></br>
          <br></br>
          <div>Price: {priceFormatter.format(Number(product.prices.sale))}</div>
        </div>
      </div>
    </main>
  );
}
