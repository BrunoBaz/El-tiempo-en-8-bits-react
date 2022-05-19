// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

import { useEffect } from "react";

export const SearchWeatherByHours = ({
  latitude,
  longitude,
  setWeatherByHours,
}) => {
  const fetchApi = async () => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=days,minutely&units=metric&lang=sp&appid=${process.env.REACT_APP_API_KEY}`
    );
    const data = await res.json();

    setWeatherByHours(data);
  };

  useEffect(() => {
    fetchApi();
  }, []);
};
