import type { MDXComponents } from "mdx/types";

//MDX - формат, совмещеающий md и jsx.Полезен для статики
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  };
}
