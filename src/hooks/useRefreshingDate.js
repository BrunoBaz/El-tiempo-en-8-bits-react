import { useEffect, useState } from "react";

export const useRefreshingDate = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => setDateTime(new Date()), 1000);
  }, []);

  return dateTime;
};
