import sary1 from "../../Assets/Image/react1png.png";
import "../../Style/PremierPage.css";

function PremierPage() {
  // State

  // Comportement

  //   Affichage ou render
  return (
    <>
      <div className="page"></div>
      <h1>Premier Page</h1>
      <img
        alt=""
        src={sary1}
        min-width="100vh"
        className="d-inline-block align-top"
      />
    </>
  );
}

export default PremierPage;
