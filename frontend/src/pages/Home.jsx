import { content } from "../data/dummyData";
import Card from "../components/Card";

export default function Home() {
  return (
    <div>
      <h3>Recommended</h3>
      {content.map(item => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}