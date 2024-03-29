import { Card, CardBody, CardFooter, Image, Skeleton } from "@nextui-org/react";
import Link from "next/link";
import ProductCardImage from "./product-card-image";
import { priceFormatter } from "@/utils/price-formatter";

export default function ProductCard({ product }: { product: any }) {
  return (
    <Card
      shadow="sm"
      className="min-w-[300px] w-[300px]"
      isPressable
      href={'/product/'+product.id}
      as={Link}
    >
      <CardBody className="overflow-visible p-0 h-[300px] relative">
        <ProductCardImage image={product.image} alt={product.name}/>
      </CardBody>
      <CardFooter className="text-small justify-between text-left">
        <div>    
            <div className="text-small">{product.category}</div>
            <b>{product.title}</b>
        </div>
        <p className="text-default-500">{priceFormatter.format(product.price)}</p>
      </CardFooter>
    </Card>
  );
}
