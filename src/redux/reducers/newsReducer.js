import { createSlice } from "@reduxjs/toolkit";
import { format, subDays } from "date-fns";

const newsSlice = createSlice({
  name: "NEWS_SLICE",
  initialState: {
    dateRange: {
      from: format(subDays(new Date(), 7), "yyyy-MM-dd"),
      to: format(new Date(), "yyyy-MM-dd"),
    },
    searchTerm: "",
    articles: [],
    isLoading: false,
    Providers: ["News API", "The Guardian"],
    sources: [
      { label: "BBC News", value: "bbc-news" },
      {
        label: "CNN",
        value: "cnn",
      },
      {
        label: "The Washington Post",
        value: "the-washington-post",
      },
    ],
    categories: [
      {
        label: "Business",
        value: "business",
      },
      {
        label: "Entertainment",
        value: "entertainment",
      },
      {
        label: "Health",
        value: "health",
      },
      {
        label: "General",
        value: "general",
      },
      {
        label: "Science",
        value: "science",
      },
      {
        label: "Sports",
        value: "sports",
      },
      {
        label: "Technology",
        value: "technology",
      },
    ],
    selectedSource: { label: "BBC News", value: "bbc-news" },
    selectedProvider: "News API",
    selectedCategory: null,
  },
  reducers: {
    setArticlesInfo: (state, action) => {
      state.articles = action.payload;
    },
    setArticleFetchStatus: (state, action) => {
      state.isLoading = action.payload;
    },
    setNewsSource: (state, action) => {
      state.selectedSource = action.payload;
    },
    setNewsProvider: (state, action) => {
      state.selectedProvider = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setDateRange: (state, action) => {
      state.dateRange = action.payload;
    },
  },
});

export const {
  setArticlesInfo,
  setArticleFetchStatus,
  setNewsSource,
  setNewsProvider,
  setSearchTerm,
  setSelectedCategory,
  setDateRange,
} = newsSlice.actions;
export default newsSlice.reducer;
