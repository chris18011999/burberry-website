"use client";
import fetcher from "@/data/fetcher";
import Link from "next/link";
import { Button } from "../button";
import Image from "next/image";
import { useParams } from "next/navigation";

export async function HeaderNav() {
  const { slug: activeSlug } = useParams();

  const trees: T_TreeResult = await fetcher.getTrees();

  return (
    <nav className="container mx-auto py-5 sticky top-[15px] z-[100] bg-white rounded-md shadow-md">
      <div className="flex gap-6">
        <Link href="/">
          <Image alt="Logo" src={"/logo.svg"} height={41.3} width={200} />
        </Link>
        <div className="flex gap-6 ms-auto">
          {trees.map((tree) => {
            const tree_is_active = tree.slug === activeSlug
            return (
              <Link key={tree.id} href={`/${tree.slug}/${tree.id}`}>
                <Button is_selected={tree_is_active}>{tree.name}</Button>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
