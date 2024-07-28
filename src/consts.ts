// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Practical Algorithms";
export const SITE_DESCRIPTION = "Welcome!";
export const TAGS = [
  "algorithms",
  "data structures",
  "Posn",
  "Pre-Posn",
  "TOI",
  "Tech",
  "Story",
  "Other",
] as const;

export type Tag = typeof TAGS[number];
