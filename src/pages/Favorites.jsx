import { useSelector, useDispatch } from "react-redux";
import { removeFavorite } from "../features/favorites/favoritesSlice";

export default function Favorites() {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  if (!favorites.length) return <p>No favorites yet</p>;

  return favorites.map((item) => (
    <div key={item.id}>
      <img src={item.image} alt={item.title} width={50} />
      <span>{item.title}</span>
      <button onClick={() => dispatch(removeFavorite(item.id))}>
        Remove
      </button>
    </div>
  ));
}