import { Metadata } from "next";

export const fetchPost = async (slug: string) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${slug}`,
    {}
  );
  if (response.ok) {
    const data = response.json();
    return data;
  }
  return response.statusText;
};

//Добавление динамических метаданных для SEO-оптимизации
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await fetchPost(params.slug);
  return { title: post?.title };
}

export default async function Page() {
  return <p>Slug</p>;
}
