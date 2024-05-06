import { Metadata } from "next";
import Products from "./Products";
import NotFound from "../not-found";

//Добавление статических метаданных для SEO-оптимизации
export const metadata: Metadata = {
  title: "Products",
  description: "Products page",
};

//SSR, ISR, SSG - варианты подгрузки данных в Next
//SSR - Server Side Rendering - серверный рендеринг
//ISR - Incremental Static Regeneration - обнавляемая статика
//SSG - Static Site Generation - статика

export const revalidate = 3600; //для обновления данных один раз в час, если получение реализовано
//без fetch, например GraphQL

async function fetchUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    // cache: "force-cache", //для SSG статики
    next: {
      revalidate: 3600, //для ISG обновления данных один раз в час
    },
  });
  if (response.ok) {
    const data = response.json();
    return data;
  }
  return response.statusText;
}

export default async function Page() {
  const data = await fetchUsers();

  if (!data) {
    NotFound();
  }

  console.log(data);
  return <Products />;
}
