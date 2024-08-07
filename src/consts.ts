// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Practical Algorithms";
export const SITE_DESCRIPTION = "Welcome!";
export const TAGS = [
  "Algorithms",
  "Data structures",
  "Posn",
  "Pre-Posn",
  "Math",
  "TOI",
  "Tech",
  "Story",
  "Other",
] as const;

export type Tag = typeof TAGS[number];

export const StaticTexts = {
  NAVBAR: {
    HOME: "หน้าแรก",
    BLOG: "บทความ",
    QUIZ: "ควิซ",
    LEARN: "เริ่มเรียน",
    ABOUT: "เกี่ยวกับเรา",
  },
};

export const Authors = {
  Practical: {
    name: "Practical Algorithm",
    profile: "/images/PracticalAlgo_profile.jpg",
    profileAlt: "Practical Algorithm Duck Profile",
    bio: "ผู้เขียน Algo ก๊าบ",
  },
  other: {
    name: "Other",
    profile: "/images/PracticalAlgo_profile.jpg",
    profileAlt: "Practical Algorithm Profile",
    bio: "Quack Quack!",
  },
} as const;

export type Author = keyof typeof Authors;
