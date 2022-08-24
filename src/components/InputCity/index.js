import { useState } from "react";
import { ButtonGPS } from "../ButtonGPS";
import "./style.css";
export const InputCity = ({ setCity, lat, lon, setLat, setLon }) => {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setValue("");
    setCity(value);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <article className="all-inputs">
      {lat !== null && lon !== null && (
        <ButtonGPS setLat={setLat} setLon={setLon} />
      )}
      <form onSubmit={handleSubmit}>
        <label htmlFor="search" id="formBuscador">
          <input
            type="search"
            id="search"
            placeholder="Ciudad..."
            value={value}
            onChange={handleChange}
          ></input>
          <button
            type="submit"
            id="botonBuscador"
            onClick={() => {
              setLoading(true);
              setTimeout(() => {
                setLoading(false);
              }, 3000);
            }}
          >
            {!loading ? (
              <img src="/IMG/GPS-buscador.gif" alt="" className="GPSBuscador" />
            ) : (
              <img src="/IMG/GPSViajar.gif" alt="" className="GPSBuscador" />
            )}
          </button>
        </label>
      </form>
    </article>
  );
};
