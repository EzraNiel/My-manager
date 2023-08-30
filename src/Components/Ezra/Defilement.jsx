import React, { useState } from "react";
import PremierPage from "./PremierPage";
import DeuxiemePage from "./DeuxiemePage";
import TroisiemePage from "./TroisiemePage";
import QuatriemePage from "./QuatriemePage";
// import "../ ../Style/Defilement.css";                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               "                                                               n  nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn

function Defilement() {
  // State
  const [currentPage, setCurrentPage] = useState(1);

  // Comportement

  const goToNextPage = () => {
    setCurrentPage((prevPage) => (prevPage < 4 ? prevPage + 1 : prevPage));
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  //   Affichage ou render
  return (
    <>
      <div className="home-container">
        <div
          className="pages-container"
          style={{ transform: `translateX(-${(currentPage - 1) * 100}%)` }}
        >
          <PremierPage></PremierPage>
          <DeuxiemePage></DeuxiemePage>
          <TroisiemePage></TroisiemePage>
          <QuatriemePage></QuatriemePage>
        </div>
        <button onClick={goToPreviousPage}>Précédent</button>
        <button onClick={goToNextPage}>Suivant</button>
      </div>
    </>
  );
}

export default Defilement;
