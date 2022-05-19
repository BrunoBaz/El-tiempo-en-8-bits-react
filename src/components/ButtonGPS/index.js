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
          enableHighAccuracy: true,
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
      <button type="submit">GPS</button>
    </form>
  );
};
