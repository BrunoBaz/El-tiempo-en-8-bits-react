import { useState } from "react";

export const InputCity = ({ setCity }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(value);
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search">
        <input
          type="search"
          id="search"
          placeholder="Ciudad..."
          value={value}
          onChange={handleChange}
        ></input>
        <button type="submit">Buscar</button>
      </label>
    </form>
  );
};
