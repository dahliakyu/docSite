import { slug as slugger } from "github-slugger";
import type { Frontmatter } from "src/types";

const slugify = (frontmatter: Frontmatter) =>
  frontmatter.mom ? slugger(frontmatter.mom) : slugger(frontmatter.slug);

export default slugify;
