import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addFavorite } from "../features/favorites/favoritesSlice";
import { useEffect, useState } from "react";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then(setProduct);
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>₹ {product.price}</p>

      <button onClick={() => dispatch(addFavorite(product))}>
        Add to Favorites
      </button>
    </div>
  );
}