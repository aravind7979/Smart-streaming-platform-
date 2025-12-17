import { Link } from "react-router-dom";

export default function SideMenu() {
  return (
    <aside style={styles.menu}>
      <Link to="/">Home</Link>
      <Link to="/explore">Explore</Link>
      <Link to="/search">Search</Link>
      <Link to="/playlist/1">Playlists</Link>
    </aside>
  );
}

const styles = {
  menu: {
    width: "200px",
    minHeight: "calc(100vh - 60px)",
    borderRight: "1px solid #ddd",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
};
