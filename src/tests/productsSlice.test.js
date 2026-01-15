import { describe, expect, it } from "vitest";
import productsReducer, {
  setSearch,
  setCategory,
  setSort,
} from "../features/products/productsSlice";

describe("productsSlice", () => {
  const initialState = {
    items: [],
    status: "idle",
    error: null,
    search: "",
    category: "all",
    sort: "none",
  };

  it("should return initial state", () => {
    expect(productsReducer(undefined, { type: "unknown" })).toEqual(
      initialState
    );
  });

  it("should set search value", () => {
    const state = productsReducer(initialState, setSearch("shirt"));
    expect(state.search).toBe("shirt");
  });

  it("should set category", () => {
    const state = productsReducer(initialState, setCategory("electronics"));
    expect(state.category).toBe("electronics");
  });

  it("should set sort order", () => {
    const state = productsReducer(initialState, setSort("low"));
    expect(state.sort).toBe("low");
  });
});