import React from "react";

const ArticleCard = ({ data }) => {
  const {
    author,
    title,
    description,
    url,
    urlToImage,
    publishedAt,
    source: { id, name },
  } = data;

  return (
    <>
      <div className="article-card">
        <p className="title">{title}</p>
        <p className="author">{author}</p>
        <p className="published-at">{new Date(publishedAt).toLocaleString()}</p>
        <p className="description">{description}</p>
        <div className="img-wrapper">
          <img src={urlToImage} alt={title} />
        </div>
        <a href={url} target="_blank" className="read-more">
          Read More
        </a>
      </div>
    </>
  );
};

export default ArticleCard;
