import "./style.css";

export const WeatherByHours = ({ weatherByHours }) => {
  return (
    <ul id="carrusel">
      {" "}
      {weatherByHours.hourly.slice(1, 9).map((datos) => {
        // console.log(datos);
        return (
          <li key={datos.dt} className="carrusel">
            <p>
              {new Date(datos.dt * 1000).toLocaleString("es-ES", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
            <p>{datos.temp}ºC</p>
            <img
              src={`/IMG/${datos.weather.map((e) => e.main)}.gif`}
              alt={datos.weather.map((e) => e.description)}
            ></img>

            <h2>{datos.weather.map((dato) => dato.description)}</h2>
          </li>
        );
      })}
    </ul>
  );
};
