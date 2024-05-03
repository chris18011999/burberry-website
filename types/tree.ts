type T_Product = {
  id:                   number;
  slug:                 string;
  name:                 string;
  name_with_attributes: string;
  description:          string;
  description2:         string;
  description3:         string;
  code:                 string;
  code_ean:             string;
  code_oem:             string;
  catalogs:             number[];
  partition_catalog:    T_PartitionCatalog;
  brand:                T_Brand;
  picture:              T_ProductPicture;
  default_picture:      T_ProductPicture;
  extra_pictures:       T_ProductPicture[];
  variant:              T_ProductVariantVariant;
  num_variants:         number;
  rating:               T_ProductRating;
  un_classifications:   T_ProductUnClassifications;
  configurator:         T_ProductConfigurator;
  featured_attributes:  any[];
  attributes:           T_ProductAttributes;
  tags:                 T_ProductTag[];
  trees:                T_Tree[];
  status:               T_ProductStatus;
  prices:               T_ProductPrices;
  stock:                T_ProductStock;
  ordering:             T_ProductOrdering;
  shipping:             T_ProductShipping;
  assets:               T_ProductAsset[];
  page_link:            string;
  analytics_tree_path:  string[];
  variants:             T_ProductVariantElement[];
}

type T_ProductAsset = {
  type:       string;
  asset:      string;
  identifier: string;
  language:   null;
  name:       string;
  shop:       null;
}

type T_ProductAttributes = {
  group_name: null;
  properties: Properties;
}

type Properties = {
  cms_data:             null;
  description:          null;
  group_display_mode:   null;
  name:                 null;
  picture:              null;
  css_color:            null;
  property_description: null;
  property_id:          null;
  uom:                  null;
  value:                null;
}

type T_Brand = {
  id:          number;
  slug:        string;
  name:        string;
  description: string;
  picture:     string;
}

type T_ProductConfigurator = {
  id:  null;
  url: null;
}

type T_ProductPicture = {
  src:    null | string;
  mini:   null | string;
  small:  null | string;
  normal: null | string;
  large:  null | string;
}

type T_ProductOrdering = {
  default_uom:                    string;
  sale_uom:                       string;
  out_of_assortment:              null | string;
  salable:                        boolean;
  default_order_quantity:         number | null;
  maximum_order_quantity:         null;
  maximum_order_quantity_warning: null;
  minimum_order_quantity:         number | null;
  order_quantity:                 number | null;
}

type T_PartitionCatalog = {
  name:                 null;
  description:          null;
  partition_free_char1: null;
  partition_free_char2: null;
  partition_free_char3: null;
}

type T_ProductPrices = {
  type:                string;
  currency_code:       null | string;
  sale:                number;
  sale_taxed:          number;
  list:                number;
  consumer:            null | string;
  consumer_uom:        null;
  consumer_discount:   null | string;
  customer:            null;
  customer_uom:        null;
  price_per_price_uom: boolean;
  display_as_discount: boolean;
}

type T_ProductRating = {
  combine_reviews: null;
  main:            Main;
  variant:         Main;
}

type Main = {
  value: number;
  count: number;
}

type T_ProductShipping = {
  delivery_days: null;
}

type T_ProductStatus = {
  email:             boolean;
  can_order_product: boolean;
  message:           null | string;
}

type T_ProductStock = {
  amount:   number;
  message:  string;
  message2: string;
}

type T_ProductTag = {
  id:          number;
  name:        string;
  slug:        string;
  description: string;
  picture:     string;
  show_icon:   boolean;
  catalog:     null;
  as_badge:    boolean;
  badge_type:  null | string;
}

type T_ProductUnClassifications = {
  spsc:   string;
  cefact: null;
}

type T_ProductVariantVariant = {
  id:         number;
  name:       string;
  attributes: Attribute[];
}

type Attribute = {
  id:           number;
  name:         Name;
  value:        string;
  value_id:     number;
  picture:      string;
  css_color:    string;
  display_mode: DisplayMode;
}

enum DisplayMode {
  Dropdown = "dropdown",
  ProductImage = "product_image",
  PropertyColor = "property_color",
}

enum Name {
  Kleurgroep = "Kleurgroep",
  Maat = "Maat",
  Poot = "Poot",
  PootMateriaal = "Poot materiaal",
}

type T_ProductVariantElement = {
  id:                   number;
  slug:                 string;
  name:                 string;
  name_with_attributes: string;
  description:          string;
  description2:         string;
  description3:         string;
  code:                 string;
  code_ean:             string;
  code_oem:             string;
  catalogs:             number[];
  partition_catalog:    T_PartitionCatalog;
  brand:                T_Brand;
  picture:              T_ProductPicture;
  default_picture:      T_ProductPicture;
  extra_pictures:       any[];
  variant:              T_ProductVariantVariant;
  num_variants:         null;
  rating:               T_ProductRating;
  un_classifications:   T_ProductUnClassifications;
  configurator:         T_ProductConfigurator;
  featured_attributes:  any[];
  attributes:           T_ProductAttributes;
  tags:                 T_ProductTag[];
  trees:                T_Tree[];
  status:               T_ProductStatus;
  prices:               T_ProductPrices;
  stock:                T_ProductStock;
  ordering:             T_ProductOrdering;
  shipping:             T_ProductShipping;
  assets:               T_ProductAsset[];
  page_link:            string;
  analytics_tree_path:  string[];
  variants:             null;
  filtered_product:     null;
}

type T_TreeAsset = {
  type: string;
  asset: string;
  identifier: string;
  language: string;
  name: string;
  shop: number;
};

type T_Tree = {
  id: number;
  name: string;
  slug: string;
  hidden: boolean;
  type: string;
  description1: string;
  description2: string;
  page_title: string;
  page_description: string;
  parent_id: number;
  assets: T_TreeAsset[];
  children: T_Tree[];
};

type T_Paginator = {
  num_pages: number;
  page: number;
  page_size: number;
  has_prev: boolean;
  has_next: boolean;
  prev_page_api_link?: string;
  next_page_api_link?: string;
  prev_page_search_link?: string;
  next_page_search_link?: string;
};

type T_SortMode = {
  id: string;
  name: string;
  api_link: string;
  search_link: string;
  selected: boolean;
};

type T_TreeSearchResultProducts = {
  total_found: number;
  search_term?: string;
  suggested_search_term?: string;
  search_filters: Record<string, any>;
  paginator: T_Paginator;
  sort_modes: T_SortMode[];
  products: T_Product[];
};

type T_TreeSearchResultFilters_Tree = {
  id: number;
  name: string;
  slug: string;
  api_link: string;
  count: number;
}

type T_TreeSearchResultFilters_Brand = {
  id: number;
  slug: string;
  name: String;
  count: number;
  selected: boolean;
  api_link: string;
  sequence: number;
}
type T_TreeSearchResultFilters_AttributeValue = {
  id: number;
  count: number;
  name: string;
  description: string;
  picture: string;
  css_color: string;
  api_link: string;
  selected: boolean
}

type T_TreeSearchResultFilters_Attribute = {
  id: number;
  display_mode: "default" | "color" | "graph";
  type: string;
  name: string;
  description: string;
  values: T_TreeSearchResultFilters_AttributeValue[];
}

type T_TreeSearchResultFilters = {
  total_found: number;
  search_term?: string;
  suggested_search_term?: string;
  search_filters: Record<string, number>;
  selected_filters: any[];
  trees: T_TreeSearchResultFilters_Tree[];
  brands: T_TreeSearchResultFilters_Brand[];
  attributes: T_TreeSearchResultFilters_Attribute[];
}

type T_TreeResult = T_Tree[];
