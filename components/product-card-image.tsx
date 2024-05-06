import Image from "next/image";

export default function ProductCardImage({
  image,
  alt,
}: {
  image: string;
  alt: string;
}) {
  const is_default_image = image.includes('default_');

  return <Image
      width={300}
      height={300}
      alt={alt}
      className={`w-[100%] object-${is_default_image ? "cover" : "contain"} h-[300px] block`}
      src={image}
    />;
}
