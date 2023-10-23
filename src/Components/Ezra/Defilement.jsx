import React, { useState } from "react";
import PremierPage from "./PremierPage";
import DeuxiemePage from "./DeuxiemePage";
import TroisiemePage from "./TroisiemePage";
import NavDefilement from "./NavDefilement";
import "../../Style/Defilement.css";

function Defilement() {
  const pages = [<PremierPage />, <DeuxiemePage />, <TroisiemePage />];
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const handleScroll = () => {
    setCurrentPageIndex((prevIndex) => (prevIndex + 1) % pages.length);
  };

  return (
    <>
      <NavDefilement></NavDefilement>
      {/* <div className="home-container">
        <div className="pages-container">{pages[currentPageIndex]}</div>
        <div className="navigation-buttons">
          <button onClick={handleScroll}>Passez</button>
        </div>
      </div> */}
    </>
  );
}

export default Defilement;
