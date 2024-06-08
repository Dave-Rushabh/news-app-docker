import axios from "axios";
import store from "../redux/store";
import {
  setArticleFetchStatus,
  setArticlesInfo,
  setSearchTerm,
} from "../redux/reducers/newsReducer";

export const fetchNews = async (
  source = "",
  searchTerm = "",
  selectedCategory = null,
  selectedDates = null
) => {
  store.dispatch(setArticleFetchStatus(true));
  const API_KEY = "28d91253e97341368ae967af6b21e6d7";
  try {
    let config;
    if (selectedCategory !== null) {
      config = {
        method: "get",
        url: encodeURI(
          `https://newsapi.org/v2/top-headlines?language=en&q=${searchTerm}&category=${selectedCategory}&apiKey=${API_KEY}`
        ),
      };
    } else {
      config = {
        method: "get",
        url: encodeURI(
          `https://newsapi.org/v2/everything?sources=${source}&language=en&q=${searchTerm}&from=${selectedDates.from}&to=${selectedDates.to}&apiKey=${API_KEY}`
        ),
      };
    }

    const response = await axios.request(config);
    store.dispatch(setArticlesInfo(response.data.articles));
  } catch (error) {
    console.error(error, "<<== Error while fetching news");
  } finally {
    store.dispatch(setArticleFetchStatus(false));
  }
};

export const clearSearchField = () => {
  const elem = document.querySelector(".react-debounced-cross-icon");
  if (elem) {
    elem.click();
    store.dispatch(setSearchTerm(""));
  }
};
