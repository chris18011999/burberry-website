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
      height={200}
      alt={alt}
      className={`w-[100%] object-contain h-[200px] block`}
      src={image}
    />;
}
