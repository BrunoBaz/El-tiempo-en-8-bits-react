import { useEffect, useState } from "react";

export const useSearchWeatherByLocation = (city) => {
  const [longitude, setLongitude] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [errorCity, setErrorCity] = useState("");
  useEffect(() => {
    if (city !== "") {
      const fetchApi = async () => {
        try {
          const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`
          );
          if (res.ok) {
            const data = await res.json();

            setLatitude(data.coord.lat);
            setLongitude(data.coord.lon);
          } else {
            throw new Error("La ciudad introducida no es válida");
          }
        } catch (err) {
          setErrorCity(err.message);
        }
      };

      fetchApi();
    }
  }, [city]);
  /*   console.log("probando lat"); */
  return { latitude, longitude, errorCity };
};
