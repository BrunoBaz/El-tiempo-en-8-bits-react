import { useEffect, useState } from "react";

export const useGetDataApi = (lat, lon, url) => {
  const [weatherByHours, setWeatherByHours] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (lat !== null && lon !== null) {
      const fetchApi = async () => {
        try {
          const res = await fetch(url);
          if (res.ok) {
            const data = await res.json();
            setWeatherByHours(data);
            setCurrentWeather(data);
          } else {
            throw new Error("Se ha producido un problema con el fetch");
          }
        } catch (err) {
          console.log(err.message);
          setError(err.message);
        }
      };
      fetchApi();
    }
    /*     console.log("IsError", isError); */
  }, [lat, lon, url]);

  return { weatherByHours, currentWeather, error };
};
