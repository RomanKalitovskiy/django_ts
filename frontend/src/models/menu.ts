export interface IMenuPosition {
  id: number;
  title: string;
  description: string;
  price: number;
  weight: number;
  image: string;
  bonus_increment: number;
  is_active: boolean;
}

export interface IMenuCategory {
  id: number;
  category: string;
  url: string;
  icon: string;
}
