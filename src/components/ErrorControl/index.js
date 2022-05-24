import "./style.css";
export const ErrorControl = ({ error }) => {
  return (
    <article id="errorControl">
      <img
        src="/IMG/error-animacion.gif"
        alt="Se ha producido un error"
        id="error"
      />
      <h2>{error}</h2>
    </article>
  );
};
