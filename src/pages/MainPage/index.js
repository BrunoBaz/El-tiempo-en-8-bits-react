import { SearchCurrentWeather } from "../../components/SearchCurrentWeather";
import { useState } from "react";
import { CurrentWeather } from "../CurrentWeather";
import { SearchWeatherByHours } from "../../components/SearchWeatherByHours";
import { WeatherByHours } from "../WeatherByHours";
import { SearchWeatherByLocation } from "../../components/SearchWeatherByLocation";
import "./style.css";

export const MainPage = ({ lat, lon, city, setLat, setLon }) => {
  const [currentWeather, setCurrentWeather] = useState("");
  const [weatherByHours, setWeatherByHours] = useState("");

  return (
    <>
      {city !== "" && (
        <SearchWeatherByLocation
          city={city}
          setLat={setLat}
          setLon={setLon}
          lat={lat}
          lon={lon}
        />
      )}
      {lat !== 0 && lon !== 0 && (
        <SearchCurrentWeather
          lat={lat}
          lon={lon}
          setCurrentWeather={setCurrentWeather}
        />
      )}
      {currentWeather !== "" && (
        <CurrentWeather currentWeather={currentWeather} />
      )}

      {lat !== 0 && lon !== 0 && (
        <SearchWeatherByHours
          lat={lat}
          lon={lon}
          setWeatherByHours={setWeatherByHours}
        />
      )}

      {weatherByHours !== "" && (
        <article className="weatherCarrousel">
          <WeatherByHours weatherByHours={weatherByHours} />
        </article>
      )}
    </>
  );
};
