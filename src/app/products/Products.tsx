"use client";

import Image from "next/image";
import styles from "./Products.module.scss";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";

export default function Products() {
  const { replace, push, back, forward } = useRouter(); //Содержит функции работы с навигацией
  //back-переход к предыдущей странице
  //forward - переход к следующей
  //push - редирект на заданный путь
  //replace - редирект на заданный путь с очисткой истории(невозможно вернуться на предыдущую страницу)

  const pathname = usePathname(); //Возвращает путь текущего маршрута
  const queryParams = useSearchParams(); //Возвращает объект с параметрами запроса и методами работы с ними
  const params = useParams<{ slug: string }>(); //Возвращает объект с параметрами запроса [slug]
  console.log(params.slug);
  return (
    <div className={styles.products}>
      <Image src="/next.svg" alt="next-logo" width={200} height={50} />
    </div>
  );
}
