import "./style.css";

export const CentralButton = ({ setLat, setLon }) => {
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      navigator.geolocation.getCurrentPosition(
        function async(pos) {
          setLat(pos.coords.latitude);
          setLon(pos.coords.longitude);
        },
        function error(err) {
          console.warn("ERROR(" + err.code + "): " + err.message);
        },
        {
          enableHighAccuracy: false,
          timeout: 5000,
          maximumAge: 0,
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">
        <img
          src="/IMG/GPS-animacion.gif"
          alt="Botón central del GPS"
          id="centralButton"
        ></img>{" "}
        <h2> GPS</h2>
      </button>
    </form>
  );
};
