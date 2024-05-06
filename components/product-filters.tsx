import dataFetcher from "@/data/fetcher";
import { Checkbox, Skeleton } from "@nextui-org/react";
import { useState } from "react";

export function ProductFilters({
  filters,
  onChange,
}: {
  filters: T_TreeSearchResultFilters;
  onChange: (filters: T_TreeSearchResultFilters, products: T_Product[]) => void;
}) {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [renderFilters, setRenderFilters] =
    useState<T_TreeSearchResultFilters>(filters);

  const updateUrl = async (url: string) => {
    setLoading(true);
    setUrl(url);

    const filterData = await dataFetcher.dangerousFetch<
      T_TreeSearchResultFilters & { products: T_Product[] }
    >(url);

    onChange(filterData, filterData.products);
    setRenderFilters(filterData);
    setLoading(false);
  };

  return (
    <div className="flex flex-col gap-4">
      <Skeleton isLoaded={!loading} className="radius-sm">
        {renderFilters.attributes.map((filter) => {
          return (
            <div key={filter.id} className="flex flex-col gap-1">
              <strong>{filter.name}</strong>
              <div>{filter.description}</div>
              <ul className="flex flex-col gap-1">
                {filter.values.map((value) => {
                  return (
                    <li
                      key={value.id}
                      className="flex align-items-center gap-2"
                    >
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
      </Skeleton>
    </div>
  );
}
