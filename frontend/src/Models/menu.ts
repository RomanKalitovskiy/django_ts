export interface IMenuPosition {
  category: string;
  title: string;
  description: string;
  price: number;
  weight: number;
  image: string;
  bonus_increment: number;
  is_active: boolean;
}

export interface IMenuGroup {
  category: string;
  results: IMenuPosition[];
}

export interface IMenuCategory {
  title: string;
  url: string;
  icon: string;
}
