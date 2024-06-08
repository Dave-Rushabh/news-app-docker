import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { NoDataFound } from "../assets/icons";
import "../styles/components/ArticlesList.css";
import { fetchNews } from "../utils";
import ArticleCard from "./ArticleCard";
import DateSelection from "./DateSelection";

const ArticlesList = () => {
  const {
    isLoading,
    articles,
    selectedSource,
    searchTerm,
    selectedCategory,
    dateRange,
  } = useSelector((state) => state.newsReducer);

  useEffect(() => {
    fetchNews(selectedSource.value, searchTerm, selectedCategory, dateRange);
  }, [selectedSource, searchTerm, selectedCategory, dateRange]);

  return (
    <>
      {isLoading ? (
        <div className="loader" />
      ) : (
        <>
          {articles.length ? (
            <div className="articles-wrapper">
              {articles.map((article, idx) => {
                return <ArticleCard key={idx} data={article} />;
              })}
            </div>
          ) : (
            <div className="no-data-found">
              <NoDataFound />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default ArticlesList;
