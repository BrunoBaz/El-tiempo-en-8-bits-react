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

  return (
    <article className="currentWeather">
      <h2>{` Tu ubicación es ${ubicacion}`}</h2>
      <h3>
        {dateTime.toLocaleString("es-ES", {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </h3>
      <img className="mainImg" src={`/IMG/${main}.gif`} alt={clima}></img>
      <p> {`Ahora mismo hay ${clima}`}</p>
    </article>
  );
};
