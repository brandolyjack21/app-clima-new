import React from "react";
import "./../style/loadingPage.css";
import RadialGradient from "./RadialGradient";

function LoadingPage() {
  return (
    <div className="container-loading">
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
