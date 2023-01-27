import Datetime from "./Datetime";
import type { Frontmatter } from "src/types";

export interface Props {
  href?: string;
  post: Frontmatter;
  secHeading?: boolean;
}

const styles = {
  cardContainer: "my-6",
  titleLink:
    "flex flex-col bg-skin-card rounded-md hover:-translate-y-1 hover:shadow-lg transition-all flex-1 items-center p-4",
  titleHeading:
    "font-medium text-2xl text-center decoration-dashed hover:underline p-4",
  titleDesc: "text-sm text-skin-card font-medium p-4",
};

export default function Card({ href, post }: Props) {
  return (
    <a href={href} className={styles.titleLink}>
      <h1 className={styles.titleHeading}>{post.title}</h1>
      <h2 className={styles.titleDesc}>{post.description}</h2>
    </a>
  );
}
