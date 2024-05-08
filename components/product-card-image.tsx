import { HOST } from "@/data/fetcher";
import Image from "next/image";

export default function ProductCardImage({
  image,
  alt,
  width = 300,
  height = 200,
}: {
  image: string;
  alt: string;
  width?: number;
  height?: number;
}) {
  const imageSrc = image?.includes("http") ? image : `${HOST}${image}`;
  const is_default_image = image.includes("default_");

  return (
    <Image
      width={width}
      height={height}
      alt={alt}
      className={`object-contain block`}
      src={imageSrc}
    />
  );
}
