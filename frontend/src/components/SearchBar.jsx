export default function SearchBar() {
  return (
    <input
      type="text"
      placeholder="Search videos, audio, channels..."
      style={styles.input}
    />
  );
}

const styles = {
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    marginBottom: "20px",
  },
};
