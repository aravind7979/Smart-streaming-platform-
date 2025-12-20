export default function Card({ item }) {
  return (
    <div style={{ border: "1px solid gray", margin: 10, padding: 10 }}>
      <h4>{item.title}</h4>
      <p>Creator: {item.creator}</p>
      <p>Type: {item.type}</p>
      <p>Duration: {item.duration}</p>
    </div>
  );
}