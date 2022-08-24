import "./style.css";

export const WeatherByHours = ({ weatherByHours }) => {
  return (
    <article className="carrusel-container">
      <ul id="carrusel">
        {weatherByHours.hourly.slice(1, 9).map((datos) => {
          return (
            <li key={datos.dt} className="carrusel">
              <h3>
                {new Date(datos.dt * 1000).toLocaleString("es-ES", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </h3>
              <img
                draggable={false}
                src={`/IMG/${datos.weather.map((e) => e.icon)}.gif`}
                alt={datos.weather.map((e) => e.icon)}
              ></img>
              <h4>{Math.round(datos.temp)}ºC</h4>
            </li>
          );
        })}
      </ul>
    </article>
  );
};
