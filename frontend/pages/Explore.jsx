import CategoryChips from "../components/CategoryChips";
import VideoCard from "../components/VideoCard";
import { exploreVideos } from "../data/dummyData";

export default function Explore() {
  return (
    <div style={{ padding: "20px", width: "100%" }}>
      <h2>Explore</h2>

      <CategoryChips />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {exploreVideos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
}
