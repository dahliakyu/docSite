import type { SocialObjects, Doccard, Sidebar } from "./types";

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

export const VIM_NAV: Sidebar = {
  Introduction: [{ text: "Introduction", link: "docs/vim/building-blocks" }],
};

export const TSGAME_NAV: Sidebar = {
  Introduction: [
    {
      text: "Introduction and basic Setup",
      link: "docs/ts-game-engine/intro-and-basic-setup",
    },
    {
      text: "Initializing WebGL",
      link: "docs/ts-game-engine/initializing-webgl",
    },
  ],
};
export const DOCCARD: Doccard = [
  {
    title: "Pathway to Vim Mater",
    desc: "一起吃键盘hshshhshshs",
    link: "docs/vim/building-blocks",
  },
  {
    title: "Tyscript Game Engine",
    desc: "WebGL good",
    link: "docs/ts-game-engine/intro-and-basic-setup",
  },
];

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
