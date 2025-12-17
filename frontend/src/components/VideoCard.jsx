export default function VideoCard({ video }) {
  return (
    <div style={styles.card}>
      <img src={video.thumbnail} alt={video.title} style={styles.thumb} />
      <div style={styles.info}>
        <h4>{video.title}</h4>
        <p>{video.channel}</p>
        <small>{video.views} • {video.duration}</small>
      </div>
    </div>
  );
}

const styles = {
  card: {
    cursor: "pointer",
  },
  thumb: {
    width: "100%",
    borderRadius: "8px",
  },
  info: {
    marginTop: "8px",
  },
};
