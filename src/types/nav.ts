export interface ProductInfo {
  productName?: string;
  couponCode?: string | null;
  cpu: string;
  memory: string;
  disk: string;
  traffic: string;
  location: string;
  additional: string;
  price: string;
  stock: number;
  urls: {
    normal: string;
    aff?: string;
  };
}

export interface NavItem {
  title: string;
  description: string;
  url: string;
  categoryId: string;
  icon: string;
  id: string;
  telegram?: {
    group?: string;
    channel?: string;
  };
  guide?: string;
  products?: ProductInfo[];
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
}