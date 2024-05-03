"use client";

import { Skeleton } from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";

export default function ProductCardImage({
  image,
  alt,
}: {
  image: string;
  alt: string;
}) {
  const [isLoaded, setLoaded] = useState(false);

  return <Skeleton isLoaded={isLoaded} className="w-[100%]">
    <Image
      width={300}
      height={300}
      alt={alt}
      className="w-[100%] object-contain h-[300px] block"
      src={image}
      onLoad={() => {
        setLoaded(true);
      }}
    />
  </Skeleton>;
}
