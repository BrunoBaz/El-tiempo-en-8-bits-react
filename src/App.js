import { useState } from "react";
import "./App.css";
import { ButtonGPS } from "./components/ButtonGPS";
import { InputCity } from "./components/InputCity";
import { MainPage } from "./pages/MainPage";

function App() {
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);

  const [city, setCity] = useState("");

  return (
    <>
      <header>
        <img src="/IMG/logo.svg" alt="El tiempo en 8-bits logo" id="logo"></img>
        <ButtonGPS setLat={setLat} setLon={setLon} />
        <InputCity setCity={setCity} />
      </header>
      <main>
        <MainPage
          lat={lat}
          lon={lon}
          city={city}
          setLat={setLat}
          setLon={setLon}
        />
      </main>
      {/* <footer>Bruno Baz ÁLvarez</footer> */}
    </>
  );
}

export default App;
