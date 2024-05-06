import fetcher from "@/data/fetcher";
import Link from "next/link";
import { Button } from "../button";
import Image from "next/image";

export async function HeaderNav() {

  return (
    <nav className="container mx-auto py-5 sticky top-[15px] z-[100] bg-white rounded-md shadow-md max-w-[calc(100%-30px)]">
      <div className="flex gap-6 flex-wrap">
        <Link href="/">
          <Image alt="Logo" src={"/logo.svg"} height={41.3} width={200} />
        </Link>
        <div className="flex gap-6 ms-auto overflow-x-auto">
          {(await fetcher.getTrees()).map((tree) => {
            return (
              <Link key={tree.id} href={`/${tree.slug}/${tree.id}`}>
                <Button>{tree.name}</Button>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
