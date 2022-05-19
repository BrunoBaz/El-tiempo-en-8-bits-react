import { useEffect, useState } from "react";
import "./App.css";
import { ButtonGPS } from "./components/ButtonGPS";
import { MainPage } from "./components/MainPage";
import { SearchCurrentWeather } from "./components/SearchCurrentWeather";

function App() {
  return (
    <>
      <header>
        <img src="/IMG/logo.svg" alt="El tiempo en 8-bits logo" id="logo"></img>
      </header>
      <main>
        <MainPage />
      </main>
    </>
  );
}

export default App;
