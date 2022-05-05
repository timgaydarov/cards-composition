import AnimalBody from "./AnimalBody";
import data from "../data.json";

function Animal() {
  return (
    <div className="app">
      {data.map((item) => (
        <AnimalBody
          key={item.name}
          name={item.name}
          scientificName={item.scientificName}
          size={item.size}
          diet={item.diet}
          img={item.img}
        />
      ))}
    </div>
  );
}

export default Animal;
