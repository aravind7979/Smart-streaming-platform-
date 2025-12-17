import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>SmartStream</h2>

      <input
        type="text"
        placeholder="Search"
        style={styles.search}
      />

      <div style={styles.actions}>
        <Link to="/upload">Upload</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 20px",
    borderBottom: "1px solid #ddd",
    position: "sticky",
    top: 0,
    background: "#fff",
    zIndex: 10,
  },
  logo: {
    margin: 0,
  },
  search: {
    width: "40%",
    padding: "8px",
  },
  actions: {
    display: "flex",
    gap: "15px",
  },
};
