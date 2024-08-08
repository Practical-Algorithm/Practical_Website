import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge";
import type { CollectionEntry } from "astro:content";
import { z } from "zod";
import { Authors, type Author } from "@/consts";

type BlogPostType = CollectionEntry<"blog">;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatBlogPost(
  blogs: BlogPostType[],
  limit: number | undefined = undefined,
  sortCriteria: (a: BlogPostType, b: BlogPostType) => number = (a, b) =>
    new Date(b.data.pubDate) - new Date(a.data.pubDate),
  filterOutDrafts = true,
  filterOutFuturePosts = true
) {
  return blogs
    .filter((blog) => {
      if (filterOutDrafts && blog.data.draft) {
        return false;
      }
      if (filterOutFuturePosts && new Date(blog.data.pubDate) > new Date()) {
        return false;
      }
      return true;
    })
    .sort(sortCriteria)
    .slice(0, limit ?? blogs.length);
}

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
    coverImage: blog.data.coverImage,
    coverImageAlt: blog.data.coverImageAlt,
    
  };
}

export function formatDateTime(date: string | Date) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

// Ref: https://dev.to/michaelburrows/calculate-the-estimated-reading-time-of-an-article-using-javascript-2k9l
export function calculateReadingTime(text: string) {
  const averageWPM = 225;

  const words = text.trim().split(/\s+/);

  const adjustedText = text.replace(/(.)\1+/g, "$1");

  const adjustedSentences = adjustedText.replace(/([.!?])\s*\1+/g, "$1");

  const adjustedWords = adjustedSentences.trim().split(/\s+/);
  const adjustedWordCount = adjustedWords.length;

  const adjustedTime = adjustedWordCount / averageWPM;
  const formattedAdjustedTime =
    adjustedTime > 1 ? Math.round(adjustedTime) + " min" : "Less than 1 min";

  return formattedAdjustedTime;
}

export function getAuthorProfile(name: Author) {
  try {
    const author = Authors[name];
    return {
      name: author.name,
      profile: author.profile,
      profileAlt: author.profileAlt,
      bio: author.bio,
    };
  } catch (e) {
    return {
      name: "Practical Algorithm",
      profile: "/images/PracticalAlgo_profile.jpg",
      profileAlt: "Practical Algorithm Profile",
      bio: "Goo goo ga ga",
    };
  }
}
