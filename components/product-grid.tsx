"use client";

import { useState } from "react";
import ProductCard from "./product-card";
import { ProductFilters } from "./product-filters";

export function ProductGrid({
  products,
  filters,
  total_found,
}: {
  products: T_Product[];
  filters?: T_TreeSearchResultFilters;
  total_found: number;
}) {
  const [stateProducts, setStateProducts] = useState(products);
  const [stateFilters, setStateFilters] = useState(filters);

  const filterChange = (filters: T_TreeSearchResultFilters, products: T_Product[]) => {
    setStateProducts(products);
    setStateFilters(filters)
  }

  return (
    <div className="flex gap-4">
      <div className="hidden md:flex flex-2 w-[25%]">
        <h2>Filters</h2>
        <ProductFilters onChange={filterChange} filters={stateFilters!} />
      </div>
      <div className="w-[100%] md:w-[75%]">
        <h2>{total_found} Products</h2>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {stateProducts.map((product) => {
            return <ProductCard product={product} key={product.id} />;
          })}
        </div>
      </div>
    </div>
  );
}
