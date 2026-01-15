import { useDispatch } from "react-redux";
import { setCategory, setSort } from "../features/products/productsSlice";

export default function Filters() {
  const dispatch = useDispatch();

  return (
    <>
      <select onChange={(e) => dispatch(setCategory(e.target.value))} style={{ padding: "8px", width: "200px",margin:"10px" }}>
        <option value="all">All</option>
        <option value="men's clothing">Men</option>
        <option value="women's clothing">Women</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewellery</option>
      </select>

      <select onChange={(e) => dispatch(setSort(e.target.value))} style={{ padding: "8px", width: "200px",margin:"10px" }}>
        <option value="none">Sort</option>
        <option value="low">Price: Low → High</option>
        <option value="high">Price: High → Low</option>
      </select>
    </>
  );
}