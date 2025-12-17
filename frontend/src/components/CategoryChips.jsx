const categories = [
  "All",
  "Technology",
  "Music",
  "Education",
  "Podcasts",
  "Gaming",
  "Movies",
];

export default function CategoryChips() {
  return (
    <div style={styles.wrapper}>
      {categories.map((cat) => (
        <button key={cat} style={styles.chip}>
          {cat}
        </button>
      ))}
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    gap: "10px",
    overflowX: "auto",
    paddingBottom: "10px",
  },
  chip: {
    padding: "8px 14px",
    borderRadius: "20px",
    border: "1px solid #ccc",
    background: "#f5f5f5",
    cursor: "pointer",
    whiteSpace: "nowrap",
  },
};
