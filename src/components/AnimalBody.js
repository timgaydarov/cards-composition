import AnimalWrapper from "./AnimalWrapper";

export default function AnimalBody(props) {
  return (
    <AnimalWrapper title="Animal">
      <h1>{props.name}</h1>
      <img className="style-img" src={props.img} />
      <div>{props.scientificName}</div>
      <div>{props.size}kg</div>
      <div>{props.diet.join(", ")}</div>
    </AnimalWrapper>
  );
}
