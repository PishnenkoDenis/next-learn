/** @type {import('next').NextConfig} */

import createMDX from "@next/mdx";

const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  experimental: {
    optimizePackageImports: ["@matrial-ui/core"], //оптимизация кол-ва пакетов(подружаемых библ-к) для
    //уменьшения кол-ва модулей при сборке
  },
};

const withMDX = createMDX();

export default withMDX(nextConfig);
