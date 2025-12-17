import SearchBar from "../components/SearchBar";
import VideoCard from "../components/VideoCard";
import { videos } from "../data/dummyData";

export default function Search() {
  return (
    <div style={{ padding: "20px", width: "100%" }}>
      <h2>Search</h2>

      <SearchBar />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
}
