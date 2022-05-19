export const ButtonGPS = ({ setLatitude, setLongitude }) => {
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      await navigator.geolocation.getCurrentPosition(function async(pos) {
        setLatitude(pos.coords.latitude);
        setLongitude(pos.coords.longitude);
      });
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
