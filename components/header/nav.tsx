import fetcher from "@/data/fetcher";
import Link from "next/link";
import { Button } from "../button";
import Image from "next/image";

import { redirect } from 'next/navigation'

async function handleSearch(formData: FormData) {
  "use server";
  const search_term = formData.get('search_term')?.toString();

  if(!search_term || search_term.length < 3) {
    return;
  }

  redirect(`/search/?search_term=${search_term}`);
}

export async function HeaderNav() {

  return (
    <nav className="container mx-auto py-5 sticky top-[15px] z-[100] bg-white rounded-md shadow-md max-w-[calc(100%-30px)]">
      <div className="flex gap-6 flex-wrap">
        <Link href="/">
          <Image alt="Logo" src={"/logo.svg"} height={41.3} width={200} />
        </Link>
        <form action={handleSearch} className="flex items-center gap-3 flex-1 max-w-[500px] min-w-[200px]">
          <div className="flex-1">
              <input type="search" name="search_term" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="What are you looking for today?" />
          </div>

          <button>search</button>
        </form>
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
