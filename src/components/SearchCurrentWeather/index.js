import { useEffect } from "react";

export const SearchCurrentWeather = ({
  latitude,
  longitude,
  setCurrentWeather,
}) => {
  const fetchApi = async () => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&lang=sp&appid=${process.env.REACT_APP_API_KEY}`
    );
    const data = await res.json();

    setCurrentWeather(data);
  };

  useEffect(() => {
    fetchApi();
  }, []);
};
