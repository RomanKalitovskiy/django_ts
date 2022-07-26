import { IPage } from "../Models/page";

export const pages: IPage[] = [
  { title: "Про нас", url: "/about", component: () => <>1</> },
  { title: "Доставка та оплата", url: "/delivery", component: () => <>1</> },
  { title: "Акції", url: "/discounts", component: () => <>1</> },
  { title: "Контакти", url: "/contacts", component: () => <>1</> },
  { title: "Вакансії", url: "/job", component: () => <>1</> },
  { title: "Новини", url: "/news", component: () => <>1</> },
  { title: "FAQ", url: "/faq", component: () => <>1</> },
];
