import React, { useState } from "react";
import "./../style/loadingPage.css";
import RadialGradient from "./RadialGradient";

function LoadingPage() {

  const [ isVisible, setIsVisible ] = useState(true)

  setTimeout(() => {
      setIsVisible(false)
  },5000)
  return (
    <div className={ isVisible ? 'container-loading': 'container-loading container-loading-not-visible' }>
      <ul className="loading-header-container">
        <div className="loading-nav">
          <RadialGradient/>
        </div>
        <div className="loading-data">
          <div className="loading-temperature">
          <RadialGradient/>
          </div>
          <div className="loading-weather">
          <RadialGradient/>
          </div>
          <div className="loading-data-city">
          <RadialGradient/>
          </div>
        </div>
      </ul>
      <div className="loading-data-box">
        <div className="loading-data-box-container">
          <div className="loading-data-box-text">
            <RadialGradient/>
          </div>
          <div className="loading-data-box-text">
            <RadialGradient/>
          </div>
          <div className="loading-data-box-text">
            <RadialGradient/>
          </div>
          <div className="loading-data-box-text">
            <RadialGradient/>
          </div>
          <div className="loading-data-box-button">
          <RadialGradient/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoadingPage;
