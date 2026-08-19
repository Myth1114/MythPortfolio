import Badge from "../primitives/Badge";
import Pin from "../primitives/Pin";

import "./BlogCard.css";

function BlogCard({ article, index }) {
  const pinColors = ["accent", "olive", "neutral"];

  return (
    <article className="blog-card">
      <Pin position="top-right" color={pinColors[index % pinColors.length]} />

      <div className="blog-card__top">
        <span className="blog-card__number">{article.number}</span>

        <Badge variant="neutral">{article.category}</Badge>
      </div>

      <div className="blog-card__body">
        <h2>{article.title}</h2>

        <p>{article.excerpt}</p>
      </div>

      <div className="blog-card__footer">
        <span>{article.date}</span>
        <span>{article.readingTime}</span>
      </div>
    </article>
  );
}

export default BlogCard;
