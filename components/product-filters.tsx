"use client";

import { Checkbox } from "@nextui-org/react";

export function ProductFilters({ filters }: { filters: T_TreeSearchResultFilters }) {
  return <div className="flex flex-col gap-4">
    {filters.attributes.map(filter => {
      return <div key={filter.id} className="flex flex-col gap-1">
        <strong>{filter.name}</strong>
        <div>{filter.description}</div>
        <ul className="flex flex-col gap-1">
          {filter.values.map(value => {
            return <li className="flex align-items-center gap-2" key={value.id}>
              <Checkbox checked={value.selected}>
                {value.name}
              </Checkbox>
            </li>
          })}
        </ul>
      </div>
    })}
  </div>
}