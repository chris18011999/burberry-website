"use client";
import { debounce } from "lodash";
import { useCallback, useEffect, useState } from "react";
import { handleSearch } from "./searchAction";
import dataFetcher from "@/data/fetcher";
import Image from "next/image";
import ProductCardImage from "../product-card-image";
import Link from "next/link";

export function HeaderSearch() {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState<T_AutocompleteResultProduct>();

  async function _fetchResults(term: string) {
    if (!term || term.length < 3) {
      setResults(undefined);
      return;
    }

    const data = await dataFetcher.dangerousFetch<T_AutocompleteResultProduct>(
      `/nl-nl/api/v1/autocomplete/product-suggestions/?search_term=${term}`
    );
    setResults(data);
  }

  const fetchResults = useCallback(
    debounce((term) => {
      _fetchResults(term);
    }, 200),
    []
  );

  useEffect(() => {
    fetchResults(term);
  }, [term, fetchResults]);

  function useHandleSearch(formData: FormData) {
    handleSearch(formData)
    setResults(undefined);
  }

  return (
    <div className="relative">
      <form
        action={useHandleSearch}
        className="flex items-center gap-3 flex-1 max-w-[500px] min-w-[200px]"
      >
        <div className="flex-1">
          <input
            type="search"
            name="search_term"
            value={term}
            onChange={(e) => {
              setTerm(e.target.value);
            }}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="What are you looking for today?"
          />
        </div>

        <button>search</button>
      </form>
      {results?.data?.length ? (
        <div className="absolute bg-white p-4 border-1 z-30">
          <div className="flex flex-col gap-3">
            {results.data.map((product) => (
              <Link href={`/product/${product.id}`} onClick={() => setResults(undefined)} className="flex items-center gap-4" key={product.id}>
                <ProductCardImage width={50} height={50} image={product.picture} alt={product.value}/>
                {product.value}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
