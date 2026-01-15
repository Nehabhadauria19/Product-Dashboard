import { useDispatch } from "react-redux";
import { setSearch } from "../features/products/productsSlice";
import { useEffect, useState } from "react";

export default function SearchBar() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setSearch(value));
    }, 500);

    return () => clearTimeout(timer);
  }, [value, dispatch]);

  return (
    <input
      placeholder="Search products..."
      value={value}
      onChange={(e) => setValue(e.target.value)}
      aria-label="Search products"
      style={{ padding: "8px", width: "200px",margin:"10px" }}    
    />
  );
}