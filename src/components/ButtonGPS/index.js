import "./style.css";
export const ButtonGPS = ({ setLat, setLon }) => {
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
    <form onSubmit={handleSubmit} id="button">
      <button type="submit">
        <img src="/IMG/GPS-animacion.gif" alt="" id="GPS-button"></img>
      </button>
    </form>
  );
};
