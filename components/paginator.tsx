"use client";

import { Pagination } from "@nextui-org/react";
import { Button } from "./button";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export function Paginator({
  paginator,
  onClick,
}: {
  paginator: T_Paginator;
  onClick: Function;
}) {
  const [currentPage, setCurrentPage] = useState(paginator.page);

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
  const updateUrl = async (page: number) => {
    let newUrl =
      page > paginator.page
        ? paginator.next_page_search_link
        : page < paginator.page ? paginator.prev_page_search_link : null;

    if(!newUrl) return;

    const query = extractQueryParams(newUrl || "");

    global.history.pushState(query, "", query);

    await onClick(newUrl);
  };

  useEffect(() => {
    updateUrl(currentPage);
  }, [currentPage]);

  return (
    <Pagination
      className="flex py-8 justify-center"
      showControls
      variant="light"
      color="primary"
      total={paginator.num_pages}
      initialPage={currentPage}
      onChange={setCurrentPage}
    />
  );
}
