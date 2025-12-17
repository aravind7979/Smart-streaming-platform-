import CategoryChips from "../components/CategoryChips";
import VideoCard from "../components/VideoCard";
import { videos } from "../data/dummyData";

export default function Home() {
  return (
    <div style={{ padding: "20px", width: "100%" }}>
      <CategoryChips />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
}
