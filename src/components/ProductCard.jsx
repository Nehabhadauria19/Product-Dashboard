export default function ProductCard({ product }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "12px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <img
        src={product.image}
        alt={product.title}
        style={{
          height: "180px",
          objectFit: "contain",
          width: "100%",
        }}
      />

      <h3 style={{ fontSize: "14px" }}>{product.title}</h3>
      <p style={{ fontWeight: "bold" }}>₹ {product.price}</p>
    </div>
  );
}