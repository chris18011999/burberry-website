"use client";

import { useState } from "react";
import ProductCard from "./product-card";
import { ProductFilters } from "./product-filters";
import dataFetcher from "@/data/fetcher";
import { Paginator } from "./paginator";
import { Skeleton } from "@nextui-org/react";

export function ProductGrid({
  products,
  filters,
  total_found,
  tree,
  paginator,
}: {
  products: T_Product[];
  filters?: T_TreeSearchResultFilters;
  total_found: number;
  tree?: T_Tree;
  paginator?: T_Paginator;
}) {
  const [loadingProducts, setLoadingProducts] = useState(false);
  const [stateProducts, setStateProducts] = useState(products);
  const [stateFilters, setStateFilters] = useState(filters);
  const [statePaginator, setStatePaginator] = useState(paginator);

  const onChange = async (url: string) => {
    setLoadingProducts(true);
    const filterData = await dataFetcher.dangerousFetch<
      T_TreeSearchResultProducts & T_TreeSearchResultFilters
    >(url);

    setStateFilters(filterData);
    setStateProducts(filterData.products);
    setStatePaginator(filterData.paginator);
    setLoadingProducts(false);
    window.scrollTo({top: 0})
  };

  return (
    <div className="flex gap-4">
      <div className="hidden md:block flex-2 w-[25%]">
        <ProductFilters onChange={onChange} filters={stateFilters!} />
      </div>
      <div className="w-[100%] md:w-[75%]">
        <h2 className="text-3xl mb-3 font-bold flex items-center justify-between flex-wrap">
          {tree?.name}

          <span className="font-normal text-sm">{total_found} products</span>
        </h2>
        <Skeleton isLoaded={!loadingProducts}>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {stateProducts.map((product) => {
              return <ProductCard product={product} key={product.id} />;
            })}
          </div>
        </Skeleton>
        <Paginator onClick={onChange} paginator={statePaginator!} />

      </div>
    </div>
  );
}
