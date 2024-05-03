"use client";

import { HOST } from "@/data/fetcher";
import ProductCardImage from "./product-card-image";
import { priceFormatter } from "@/utils/price-formatter";
import { Avatar, Card, CardBody, CardHeader } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./button";
import { ShoppingCartOutlined } from "@ant-design/icons";


export default function ProductCard({ product }: { product: T_Product }) {
  const imageSrc = product.picture.small?.includes("http")
    ? product.picture.small
    : `${HOST}${product.picture.small}`;

  return (
    <Link href={`/product/${product.id}`}>
      <Card radius="none" shadow="none">
        <CardHeader>
          <ProductCardImage
            image={imageSrc}
            alt={product.name}
          ></ProductCardImage>
        </CardHeader>
        <CardBody className="flex-row items-end justify-between">
          <div>
            <p className="text-large">{product.name}</p>
            <p className="font-bold">
              {priceFormatter.format(Number(product.prices.sale))}
            </p>
          </div>
          <Button><ShoppingCartOutlined /></Button>
        </CardBody>
      </Card>
    </Link>
  );
}
