/**
 * api/v1/categories/top.d.d.ts
 * Type for https://kick.com/api/v1/categories/top
 * 
 * method: GET
 */
// category informations
type Category = {
  id: number;
  category_id: number;
  name: string;
  slug: string;
  tags: string[];
  description: null;
  deleted_at: null;
  is_mature: boolean;
  is_promoted: boolean;
  viewers: number;
  is_fallback: boolean;
  banner: {
    src: string;
    srcset: string;
  };
  category: {
    id: number;
    name: string;
    slug: string;
    icon: string;
  };
};
// RESPONSE
export declare type ApiV1CategoriesTop = Category[];