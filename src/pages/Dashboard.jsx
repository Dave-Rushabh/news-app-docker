import React from "react";
import { useSelector } from "react-redux";
import ArticlesListPage from "../components/ArticlesList";
import DateOption from "../components/DateOption";
import Dropdown from "../components/Dropdown";
import FiltersList from "../components/FiltersList";
import NewsSourceList from "../components/NewsSourceList";
import SearchBar from "../components/SearchBar";
import "../styles/pages/Dashboard.css";

const Dashboard = () => {
  const { selectedProvider } = useSelector((state) => state.newsReducer);

  return (
    <>
      <div className="dashboard-wrapper">
        <div className="header">
          <div className="news-provider">{selectedProvider}</div>
        </div>
        <div className="content">
          <div className="filters">
            <DateOption />
            <Dropdown title={"Categories"}>
              <FiltersList />
            </Dropdown>
            <Dropdown title={"Source"}>
              <NewsSourceList />
            </Dropdown>
            <SearchBar />
          </div>
        </div>
        <ArticlesListPage />
      </div>
    </>
  );
};

export default Dashboard;
