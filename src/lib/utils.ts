import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import type { CollectionEntry } from "astro:content"
import { z } from "zod"

type BlogPostType = CollectionEntry<"blog">

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function formatBlogPost(
  blogs: BlogPostType[],
  limit: number | undefined = undefined,
  sortCriteria: (a: BlogPostType, b: BlogPostType) => number 
  = (a, b) =>
    new Date(b.data.pubDate) - new Date(a.data.pubDate),
  filterOutDrafts = true,
  filterOutFuturePosts = true,
) {
  
  return blogs.filter((blog) => {
    if (filterOutDrafts && blog.data.draft) {
      return false
    }
    if (filterOutFuturePosts && new Date(blog.data.pubDate) > new Date()) {
      return false
    }
    return true
  })
    .sort(sortCriteria)
    .slice(0, limit ?? blogs.length)
}

export const schemaForType = <T>() => <S extends z.ZodType<T, any, any>>(arg: S) => {
  return arg;
};

// use like this:
const dog = schemaForType<Dog>()(
  z.object({
    name: z.string(),
    neutered: z.boolean(),
  })
);

export function getBlogData(blog: BlogPostType) {
  return {
    title: blog.data.title,
    description: blog.data.description,
    slug: blog.slug,
    author: blog.data.author,
    pubDate: blog.data.pubDate,
    tags: blog.data.tags,
    heroImage: blog.data.heroImage,
    heroImageAlt: blog.data.heroImageAlt,
  };
}