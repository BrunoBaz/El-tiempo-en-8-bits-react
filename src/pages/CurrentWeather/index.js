import "./style.css";

export const CurrentWeather = ({ currentWeather }) => {
  const ubicacion = currentWeather.name;

  const clima = currentWeather.weather.map((e) => e.description.toUpperCase());
  const main = currentWeather.weather.map((e) => e.icon);
  const temperatura = Math.round(currentWeather.main.temp);

  return (
    <article className="currentWeather">
      <h2>{`${ubicacion}`}</h2>

      <img className="mainImg" src={`/IMG/${main}.gif`} alt={clima}></img>
      <h2>{`${temperatura}ºC`}</h2>
      <h2> {`${clima}`}</h2>
    </article>
  );
};
