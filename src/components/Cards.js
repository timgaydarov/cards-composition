import Card from "./Card";

export default function Cards(props) {
  return (
    <Card title="Animal">
      <h1>{props.name}</h1>
      <img className="style-img" src={props.img} />
      <div>{props.scientificName}</div>
      <div>{props.size}kg</div>
      <div>{props.diet.join(", ")}</div>
    </Card>
  );
}
