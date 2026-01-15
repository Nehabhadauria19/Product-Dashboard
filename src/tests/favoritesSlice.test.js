import { describe, expect, it } from "vitest";
import favoritesReducer, {
  addFavorite,
  removeFavorite,
} from "../features/favorites/favoritesSlice";

describe("favoritesSlice", () => {
  it("should add and remove favorite", () => {
    const product = { id: 1, title: "Test Product" };

    let state = favoritesReducer([], addFavorite(product));
    expect(state.length).toBe(1);

    state = favoritesReducer(state, removeFavorite(1));
    expect(state.length).toBe(0);
  });
});