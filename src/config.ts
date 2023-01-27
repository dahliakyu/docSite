import type { SocialObjects } from "./types";

export const SITE = {
  website: "https://astro-paper.pages.dev/",
  author: "el",
  desc: "A doc space",
  title: "aquapeach",
  //  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 5,
};

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};
export type Sidebar = Record<string, { text: string; link: string }[]>;

export const SIDEBAR: Sidebar = {
  "Section Header": [
    { text: "Introduction", link: "en/introduction" },
    { text: "Page 2", link: "en/page-2" },
    { text: "Page 3", link: "en/page-3" },
  ],
  "Another Section": [{ text: "Page 4", link: "en/page-4" }],
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/dahliakyu",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/dahliakyu/",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/tingyuan-zheng-2a8b929b/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "lamiyavi@hotmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/tobecbalage",
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
  },
  {
    name: "Mastodon",
    href: "https://mastodon.gamedev.place/@dahliakyu",
    linkTitle: `${SITE.title} on Mastodon`,
    active: true,
  },
];
