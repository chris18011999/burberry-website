"use client";

import { Button } from "./button";

export function Paginator({
  paginator,
  onClick,
}: {
  paginator: T_Paginator;
  onClick: Function;
}) {

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
    const query = extractQueryParams(url);

    global.history.pushState(query, "", query);

    await onClick(url);
  };

  return (
    <div className="flex items-center justify-center py-5 gap-4">
      <Button
        disabled={!paginator.has_prev}
        onClick={() => {
          updateUrl(paginator.prev_page_search_link!)
        }}
      >
        Prev
      </Button>
      Page {paginator.page} / {paginator.num_pages}
      <Button
        disabled={!paginator.has_next}
        onClick={() => {
          updateUrl(paginator.next_page_search_link!)
        }}
      >
        Next
      </Button>
    </div>
  );
}
