import { HOST } from "@/data/fetcher";
import ProductCardImage from "./product-card-image";
import { priceFormatter } from "@/utils/price-formatter";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Link from "next/link";

export default function ProductCard({ product }: { product: T_Product }) {
  

  return (
    <Card
      className="border-1 h-full"
      radius="sm"
      as={Link}
      href={`/product/${product.id}`}
      isPressable
      shadow="none"
    >
      <CardHeader className="justify-stretch">
        <ProductCardImage
          className="h-[260px]"
          image={product.picture.small as string}
          alt={product.name}
        ></ProductCardImage>
      </CardHeader>
      <CardBody className="flex-row items-end justify-between h-full pt-0">
        <div className="flex flex-col h-full">
          <p className="text-large">{product.name}</p>
          <p className="font-bold mt-auto">
            {priceFormatter.format(Number(product.prices.sale))}
          </p>
        </div>
      </CardBody>
    </Card>
  );
}
