import { cookies, headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const isAbout = req.url.startsWith("/about");

  const cooks = cookies().get("key"); //получение серверных куки(которых нет в браузере)
  const heads = headers().get("Authorization"); //получение хедеров

  if (isAbout) {
    if (true) {
      //при выполнении условия пользователь проходит по маршруту
      return NextResponse.next();
    }
  }
  return NextResponse.redirect(new URL("/home", req.url));
}
//middleware - функция, которая отрабатывает при определенном в config условии
//Используетс в основном для проверки авторизационных данных
export const config = {
  matcher: ["/about/:path*", "/dashboard/:path*"], //по данным марш-ам отрабатывает middleware
};
