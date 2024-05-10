import fetcher from "@/data/fetcher";
import Link from "next/link";
import { Button } from "../button";
import Image from "next/image";
import { HeaderSearch } from "./search";
import { NavbarTrees } from "./navTrees";

export async function HeaderNav() {
  const trees = await fetcher.getTrees();

  return (
    <nav className="container mx-auto py-5 sticky top-[15px] z-[100] bg-white rounded-md shadow-md max-w-[calc(100%-30px)]">
      <div className="flex gap-6 flex-wrap justify-between">
        <Link href="/">
          <Image alt="Logo" src={"/logo.svg"} height={41.3} width={200} />
        </Link>
        <HeaderSearch/>
        <div className="flex gap-6 ms-auto overflow-x-auto flex-[100%]">
          <NavbarTrees trees={trees}/>
        </div>
      </div>
    </nav>
  );
}
