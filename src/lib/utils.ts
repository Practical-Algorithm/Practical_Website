import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import type { CollectionEntry } from "astro:content"

type BlogPostType = CollectionEntry<"blog">

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function formatBlogPost(
  blogs: BlogPostType[],
  sortCriteria: (a: BlogPostType, b: BlogPostType) => number 
  = (a, b) =>
    new Date(b.frontmatter.date) - new Date(a.frontmatter.date),
  filterOutDrafts = true,
  filterOutFuturePosts = true,
  limit = undefined
) {
  
}
