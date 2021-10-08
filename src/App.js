import Header from "./components/Header";
import Map from "./components/Map";
import "./assets/css/style.css";

function App() {
  const handleSearch = () => {};

  return (
    <>
      <Header onSearch={handleSearch} />
      {/* <Map /> */}
    </>
  );
}

export default App;
