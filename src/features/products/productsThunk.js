import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    console.log("🔥 API CALLED");
    const res = await fetch("https://fakestoreapi.com/products");
    return res.json();
  }
);