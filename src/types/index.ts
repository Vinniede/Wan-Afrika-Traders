export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  shortDescription: string;
  image: string;
  price?: number;
  features?: string[];
}

export type ProductCategory = 
  | 'water-treatment'
  | 'pumps'
  | 'hdpe-pipes'
  | 'pvc-upvc'
  | 'ppr'
  | 'valves'
  | 'irrigation'
  | 'cpvc-fittings'
  | 'parts-accessories';

export interface Solution {
  id: string;
  title: string;
  description: string;
  image: string;
  benefits: string[];
  relatedProducts: string[];
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  image: string;
  galleryImages?: string[];
  location?: string;
  completionDate?: string;
}

export type ProjectCategory = 
  | 'irrigation'
  | 'water-treatment'
  | 'borehole'
  | 'commercial';

export interface CatalogueItem {
  productId: string;
  productName: string;
  quantity: number;
  price?: number;
}

export interface QuoteRequest {
  fullName: string;
  companyName: string;
  phoneNumber: string;
  email: string;
  projectLocation: string;
  additionalNotes?: string;
  products: CatalogueItem[];
  totalAmount?: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface CompanyStats {
  yearsInBusiness: number;
  productsOffered: number;
  clientsSatisfied: number;
  projectsCompleted: number;
}

