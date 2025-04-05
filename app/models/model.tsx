export type ProductList = Product[];

export interface Product {
  _id: Id;
  vendor: Vendor;
  series: Series;
  description_details: DescriptionDetails;
  main_image: string;
  price: number;
  names: Names;
  images: string[];
  product_code: string;
}

export interface Id {
  $oid: string;
}

export interface Vendor {
  name: string;
}

export interface Series {
  name: string;
  item_quantity: number;
}

export interface DescriptionDetails {
  en: En;
}

export interface En {
  fabric: string;
  model_measurements: string;
  sample_size?: string;
  product_measurements?: string;
}

export interface Names {
  en: string;
}
