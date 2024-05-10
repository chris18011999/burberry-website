import dataFetcher from "@/data/fetcher";
import { Checkbox, Skeleton } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function ProductFilters({
  filters,
  onChange,
}: {
  filters?: T_TreeSearchResultFilters;
  onChange: (url: string) => Promise<void>;
}) {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  function extractQueryParams(url: string): string {
    // Find the index of the '?' character
    const queryIndex = url.indexOf("?");

    if (queryIndex !== -1) {
      // Extract the query parameters
      const queryParams = url.substring(queryIndex);
      return queryParams;
    } else {
      return "";
    }
  }

  const updateUrl = async (url: string) => {
    setLoading(true);

    const query = extractQueryParams(url);

    global.history.pushState(query, "", query);

    await onChange(url);
    setLoading(false);
  };

  return (
    filters != undefined ? <div
      className="flex flex-col gap-4 p-3 bg-white border-1 rounded-small"
      key={filters.selected_filters.toString()}
    >
      {filters.trees.length > 0 && (
        <>
          <div className="flex flex-col gap-1" key={"tree-filters"}>
            <strong>Categories</strong>
            <ul className="flex flex-col gap-1">
              {filters.trees.map((value) => {
                return (
                  <Skeleton isLoaded={!loading} key={value.id}>
                    <li className="flex align-items-center gap-2">
                      <Link href={`/${value.slug}/${value.id}/`}>
                        {value.name}
                      </Link>
                    </li>
                  </Skeleton>
                );
              })}
            </ul>
          </div>
          <hr />
        </>
      )}
      {filters.brands.length > 0 && (
        <>
          <div className="flex flex-col gap-1" key={"brand-filters"}>
            <strong>Brands</strong>
            <ul className="flex flex-col gap-1">
              {filters.brands.map((value) => {
                return (
                  <Skeleton isLoaded={!loading} key={value.id}>
                    <li className="flex align-items-center gap-2">
                      <Checkbox
                        checked={value.selected}
                        isSelected={value.selected}
                        onChange={() => {
                          updateUrl(value.api_link);
                        }}
                      >
                        {value.name}
                      </Checkbox>
                    </li>
                  </Skeleton>
                );
              })}
            </ul>
          </div>
          <hr />
        </>
      )}
      {filters.attributes && (
        <div className="flex flex-col gap-4">
          {filters.attributes.map((filter) => {
            return (
              <div className="flex flex-col gap-1" key={filter.id}>
                <strong>{filter.name}</strong>
                <div>{filter.description}</div>
                <ul className="flex flex-col gap-1">
                  {filter.values.map((value) => {
                    return (
                      <Skeleton isLoaded={!loading} key={value.id}>
                        <li className="flex align-items-center gap-2">
                          <Checkbox
                            checked={value.selected}
                            isSelected={value.selected}
                            onChange={() => {
                              updateUrl(value.api_link);
                            }}
                          >
                            {value.name}
                          </Checkbox>
                        </li>
                      </Skeleton>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      )}
    </div> : null
  );
}
