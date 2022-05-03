import "./App.css";
import Cards from "./components/Cards";
import data from "./data.json";

function App() {
  return (
    <div className="app">
      {data.map((item) => (
        <Cards
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

export default App;
