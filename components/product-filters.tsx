import dataFetcher from "@/data/fetcher";
import { Checkbox } from "@nextui-org/react";
import { useState } from "react";

export function ProductFilters({
  filters,
  onChange
}: {
  filters: T_TreeSearchResultFilters;
  onChange: (filters: T_TreeSearchResultFilters, products: T_Product[]) => void
}) {
  const [url, setUrl] = useState("");
  const [renderFilters, setRenderFilters] = useState<T_TreeSearchResultFilters>(filters);

  const updateUrl = async (url: string) => {
    setUrl(url);

    const filterData = await dataFetcher.dangerousFetch<T_TreeSearchResultFilters & { products: T_Product[] }>(url);
    console.log(filterData)

    onChange(filterData, filterData.products)
    setRenderFilters(filterData)
  }

  return (
    <div className="flex flex-col gap-4">
      {renderFilters.attributes.map((filter) => {
        return (
          <div key={filter.id} className="flex flex-col gap-1">
            <strong>{filter.name}</strong>
            <div>{filter.description}</div>
            <ul className="flex flex-col gap-1">
              {filter.values.map((value) => {
                return (
                  <li className="flex align-items-center gap-2" key={value.id}>
                    <Checkbox
                      checked={value.selected}
                      onChange={() => {
                        updateUrl(value.api_link);
                      }}
                    >
                      {value.name}
                    </Checkbox>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
