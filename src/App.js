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
  //url fetch
  const urlByHours = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=days,minutely&units=metric&lang=sp&appid=${process.env.REACT_APP_API_KEY}`;
  const urlCurrent = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=sp&appid=${process.env.REACT_APP_API_KEY}`;

  const { latitude, longitude, errorCity } = useSearchWeatherByLocation(city);
  const [weatherByHours, errorByHours] = useGetDataApi(lat, lon, urlByHours);
  const [currentWeather, errorCurrent] = useGetDataApi(lat, lon, urlCurrent);
  /*   const dateTime = useRefreshingDate();
  const hours = dateTime.getHours(); */
  useEffect(() => {
    setLat(latitude);
    setLon(longitude);
  }, [latitude, longitude]);

  return (
    <section
      /*  className={hours >= "20" || hours <= "07" ? "noche" : null} */
      id="mainRoot"
    >
      <header>
        <img src="/IMG/logo.svg" alt="El tiempo en 8-bits logo" id="logo"></img>
        <h2>
          {/*  {dateTime.toLocaleString("es-ES", {
            hour: "2-digit",
            minute: "2-digit",
          })} */}
        </h2>
        <article className="headerInputs">
          <InputCity
            setCity={setCity}
            setLat={setLat}
            setLon={setLon}
            lat={lat}
            lon={lon}
          />
        </article>
      </header>{" "}
      {lat === null && lon === null && !errorCity ? (
        <CentralButton setLat={setLat} setLon={setLon} />
      ) : null}
      {errorByHours || errorCurrent || errorCity ? (
        <ErrorControl error={errorByHours || errorCurrent || errorCity} />
      ) : null}
      <main className="weathers">
        {!errorCity && !errorCurrent && currentWeather && (
          <CurrentWeather currentWeather={currentWeather} />
        )}
        {!errorCity && !errorByHours && weatherByHours && (
          <WeatherByHours weatherByHours={weatherByHours} />
        )}
      </main>
      <footer>Bruno Baz Álvarez</footer>
    </section>
  );
}

export default App;
