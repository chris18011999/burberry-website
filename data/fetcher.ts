export const HOST = "https://test-vanilla.cloudsuite.com";
export const LANGUAGE_CODE = "/nl-nl";
export const PAGE_SIZE = 18;

async function doFetch<T>(url: string): Promise<T> {
  return await fetch(`${HOST}${url}`).then((data) => data.json());
}

async function getTrees(): Promise<T_TreeResult> {
  return await doFetch<T_TreeResult>(
    `${LANGUAGE_CODE}/api/v1/tree/?tree_id=1&depth=3`
  );
}

async function getProductsByTree(
  tree_id: number,
  filters?: any[],
  page?: number
): Promise<T_TreeSearchResultProducts> {
  return await doFetch<T_TreeSearchResultProducts>(
    `${LANGUAGE_CODE}/api/v1/search/products/?page_size=${PAGE_SIZE}&page=${page || 1}&tree_id=${tree_id}&v=${filters?.join(
      "&v="
    )}`
  );
}

async function getProductsBySearchTerm(
  search_term: string,
  page?: number
): Promise<T_TreeSearchResultProducts> {
  return await doFetch<T_TreeSearchResultProducts>(
    `${LANGUAGE_CODE}/api/v1/search/?page_size=${PAGE_SIZE}&page=${page || 1}&search_term=${search_term}`
  );
}

async function getTreeById(tree_id: number): Promise<T_Tree> {
  return await doFetch<T_Tree>(`${LANGUAGE_CODE}/api/v1/tree/${tree_id}/`);
}

async function getFiltersByTree(
  tree_id: number,
  filters?: any[],
  page?: number
): Promise<T_TreeSearchResultFilters> {
  const _filters = await doFetch<T_TreeSearchResultFilters>(
    `${LANGUAGE_CODE}/api/v1/search/filters/?page_size=${PAGE_SIZE}&page=${page || 1}&tree_id=${tree_id}&v=${filters?.join(
      "&v="
    )}`
  );

  return _filters;
}
async function getFiltersBySearchTerm(
  search_term: string,
  filters?: any[],
  page?: number
): Promise<T_TreeSearchResultFilters> {
  const _filters = await doFetch<T_TreeSearchResultFilters>(
    `${LANGUAGE_CODE}/api/v1/search/filters/?page_size=${PAGE_SIZE}&page=${page || 1}&search_term=${search_term}&v=${filters?.join(
      "&v="
    )}`
  );

  return _filters;
}
async function getAllProducts(): Promise<T_Product[]> {
  return (
    await doFetch<{ total_found: number; products: T_Product[] }>(
      `${LANGUAGE_CODE}/api/v1/product/v2/`
    )
  ).products;
}

async function dangerousFetch<T>(url: string): Promise<T> {
  return await doFetch<T>(url);
}

async function getProductById(product_id: number): Promise<T_Product> {
  const features = [
    ["features", "prices"],
    ["features", "variant"],
    ["features", "attributes"],
    ["features", "stock"],
    ["features", "featured_attributes"],
  ];

  const featureList = new URLSearchParams(features);
  return await doFetch<T_Product>(
    `${LANGUAGE_CODE}/api/v1/product/v2/${product_id}/?${featureList}`
  );
}

const dataFetcher = {
  getTrees,
  getProductsByTree,
  getProductById,
  getFiltersByTree,
  getAllProducts,
  dangerousFetch,
  getTreeById,
  getProductsBySearchTerm,
  getFiltersBySearchTerm
};

export default dataFetcher;
