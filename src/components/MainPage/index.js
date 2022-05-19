import { ButtonGPS } from "../ButtonGPS";
import { SearchCurrentWeather } from "../SearchCurrentWeather";
import { useState } from "react";
import { CurrentWeather } from "../../pages/CurrentWeather";
import { SearchWeatherByHours } from "../SearchWeatherByHours";
import { WeatherByHours } from "../../pages/WeatherByHours";
import "./style.css";

export const MainPage = () => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [currentWeather, setCurrentWeather] = useState("");
  const [weatherByHours, setWeatherByHours] = useState("");
  // console.log(result.weather.map((e) => e.description));
  console.log(weatherByHours);
  return (
    <>
      <section className="main">
        <article>
          <ButtonGPS setLatitude={setLatitude} setLongitude={setLongitude} />
        </article>

        {latitude !== 0 && longitude !== 0 && (
          <SearchCurrentWeather
            latitude={latitude}
            longitude={longitude}
            setCurrentWeather={setCurrentWeather}
          />
        )}
        {currentWeather !== "" && (
          <CurrentWeather currentWeather={currentWeather} />
        )}

        {latitude !== 0 && longitude !== 0 && (
          <SearchWeatherByHours
            latitude={latitude}
            longitude={longitude}
            setWeatherByHours={setWeatherByHours}
          />
        )}

        {weatherByHours !== "" && (
          <article className="weatherCarrousel">
            <WeatherByHours weatherByHours={weatherByHours} />
          </article>
        )}
      </section>
    </>
  );
};
