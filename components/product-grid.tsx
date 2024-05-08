"use client";

import { useState } from "react";
import ProductCard from "./product-card";
import { ProductFilters } from "./product-filters";
import dataFetcher from "@/data/fetcher";

export function ProductGrid({
  products,
  filters,
  total_found,
  tree
}: {
  products: T_Product[];
  filters?: T_TreeSearchResultFilters;
  total_found: number;
  tree?: T_Tree
}) {
  const [loadingProducts, setLoadingProducts] = useState(false);
  const [stateProducts, setStateProducts] = useState(products);
  const [stateFilters, setStateFilters] = useState(filters);
  const [stateTotalFound, setStateTotalFound] = useState(total_found);

  const onChange = async (url: string) => {
    setLoadingProducts(true);
    const filterData = await dataFetcher.dangerousFetch<
      T_TreeSearchResultFilters & { products: T_Product[] }
    >(url);

    setStateTotalFound(filterData.total_found);
    setStateFilters(filterData);
    setStateProducts(filterData.products);
    setLoadingProducts(false);
  }
  
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
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {stateProducts.map((product) => {
            return <ProductCard product={product} key={product.id}/>;
          })}
        </div>
      </div>
    </div>
  );
}
