import "./App.css";
import { useEffect, useState } from "react";
import { ButtonGPS } from "./components/ButtonGPS";
import { InputCity } from "./components/InputCity";
import { useRefreshingDate } from "./hooks/useRefreshingDate";
import { useSearchWeatherByLocation } from "./hooks/useSearchByLocation";
import { useGetDataApi } from "./hooks/useGetDataApi";
import { CurrentWeather } from "./pages/CurrentWeather";
import { WeatherByHours } from "./pages/WeatherByHours";
import { CentralButton } from "./components/CentralButton";
import { ErrorControl } from "./components/ErrorControl";

function App() {
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [city, setCity] = useState("");
  const urlByHours = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=days,minutely&units=metric&lang=sp&appid=${process.env.REACT_APP_API_KEY}`;
  const urlCurrent = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=sp&appid=${process.env.REACT_APP_API_KEY}`;

  const { latitude, longitude, errorCity } = useSearchWeatherByLocation(city);
  const { weatherByHours, error } = useGetDataApi(lat, lon, urlByHours);
  const { currentWeather } = useGetDataApi(lat, lon, urlCurrent);
  console.log(errorCity);
  const dateTime = useRefreshingDate();
  const hours = dateTime.getHours();
  useEffect(() => {
    setLat(latitude);
    setLon(longitude);
  }, [latitude, longitude]);

  return (
    <section
      className={hours >= "20" || hours <= "07" ? "noche" : null}
      id="mainRoot"
    >
      <header>
        <img src="/IMG/logo.svg" alt="El tiempo en 8-bits logo" id="logo"></img>
        <h2>
          {dateTime.toLocaleString("es-ES", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </h2>
        <article className="headerInputs">
          {lat !== null && lon !== null && (
            <ButtonGPS setLat={setLat} setLon={setLon} />
          )}
          <InputCity setCity={setCity} />
        </article>
      </header>{" "}
      {lat === null && lon === null ? (
        <CentralButton setLat={setLat} setLon={setLon} />
      ) : (
        (error || errorCity ? (
          <ErrorControl error={error || errorCity} />
        ) : null) || (
          <main className="weathers">
            {currentWeather && (
              <CurrentWeather currentWeather={currentWeather} />
            )}
            {weatherByHours && (
              // <article className="weatherCarrousel">
              <WeatherByHours weatherByHours={weatherByHours} />
              // </article>
            )}
          </main>
        )
      )}
      <footer>Bruno Baz Álvarez</footer>
    </section>
  );
}

export default App;
