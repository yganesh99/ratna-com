export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  slug: string;
  shortDescription: string;
  description: string;
  specs: { [key: string]: string };
  useCases: string[];
  image: string;
  datasheetUrl: string;
}

export interface QuoteRequest {
  name: string;
  company: string;
  email: string;
  phone: string;
  productId?: string;
  productName?: string;
  quantity: string;
  notes: string;
}
