import { createSelector } from "@reduxjs/toolkit";

export const selectProducts = (state) => state.products.items;
export const selectSearch = (state) => state.products.search;
export const selectCategory = (state) => state.products.category;
export const selectSort = (state) => state.products.sort;

export const selectFilteredProducts = createSelector(
  [selectProducts, selectSearch, selectCategory, selectSort],
  (products, search, category, sort) => {
    let filtered = products.filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase())
    );

    if (category !== "all") {
      filtered = filtered.filter((p) => p.category === category);
    }

    if (sort === "low") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sort === "high") {
      filtered.sort((a, b) => b.price - a.price);
    }

    return filtered;
  }
);