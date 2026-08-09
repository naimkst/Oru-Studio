import { Fragment } from "react";
import FallbackImage from "./FallbackImage";

export default function ArticleBlocks({ blocks = [], showMissingImageNotice = false }) {
  return blocks.map((block, index) => {
    const key = `${block.type || "paragraph"}-${index}`;

    if (block.type === "heading") {
      return <h2 key={key}>{block.text}</h2>;
    }

    if (block.type === "list") {
      return (
        <Fragment key={key}>
          {block.text && <p>{block.text}</p>}
          <ul className="article-list">
            {(block.items || []).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Fragment>
      );
    }

    if (block.type === "image") {
      return (
        <figure className="article-figure" key={key}>
          <FallbackImage src={block.src} alt={block.alt || ""} />
          {(block.caption || (showMissingImageNotice && block.imageMissing)) && (
            <figcaption>
              {block.caption}
              {showMissingImageNotice && block.imageMissing && (
                <span className="admin-image-missing">
                  Missing generated file: {block.originalSrc}
                </span>
              )}
            </figcaption>
          )}
        </figure>
      );
    }

    if (block.type === "callout") {
      return <p className="article-callout" key={key}>{block.text}</p>;
    }

    return <p key={key}>{block.text}</p>;
  });
}
