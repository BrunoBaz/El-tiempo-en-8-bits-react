import { useEffect } from "react";

export const SearchWeatherByLocation = ({ city, setLat, setLon, lat, lon }) => {
  const fetchApi = async () => {
    console.log("probando");
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},ES&appid=${process.env.REACT_APP_API_KEY}`
    );
    const data = await res.json();

    setLat(data.coord.lat);
    setLon(data.coord.lon);

    console.log("location", data);
  };

  useEffect(() => {
    console.log("Lanzando useEffect");
    fetchApi();
  }, [city]);

  return <></>;
};
