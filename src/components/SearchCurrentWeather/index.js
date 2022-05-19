import { useEffect } from "react";

export const SearchCurrentWeather = ({
  lat,
  lon,
  setCurrentWeather,
  cityResult,
}) => {
  const fetchApi = async () => {
    console.log(cityResult);
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=sp&appid=${process.env.REACT_APP_API_KEY}`
    );
    const data = await res.json();

    setCurrentWeather(data);
  };

  useEffect(() => {
    fetchApi();
  }, [lat, lon]);
};
