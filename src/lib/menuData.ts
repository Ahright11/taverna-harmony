import { siteConfig } from '@/config/site.config';

export interface MenuItem {
  name: string;
  description?: string;
  price: number;
  isSpecial?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = siteConfig.menu;
