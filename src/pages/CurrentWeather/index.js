import { useEffect, useState } from "react";
import "./style.css";
export const CurrentWeather = ({ currentWeather }) => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setDateTime(new Date()), 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  const ubicacion = currentWeather.name;

  const clima = currentWeather.weather.map((e) => e.description);
  const main = currentWeather.weather.map((e) => e.main);
  const temperatura=Math.round(currentWeather.main.temp)


  return (
    <article className="currentWeather">
      <h2>{`${ubicacion}`}</h2>
      <h3>
        {dateTime.toLocaleString("es-ES", {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </h3>
      <img className="mainImg" src={`/IMG/${main}.gif`} alt={clima}></img>
      <h2>{`${temperatura}ºC`}</h2>
      <h2> {`${clima}`}</h2>
    </article>
  );
};
