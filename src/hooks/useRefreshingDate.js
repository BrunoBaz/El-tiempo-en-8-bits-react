import { useEffect, useState } from "react";

export const useRefreshingDate = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const time = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(time);
  }, []);

  return dateTime;
};
