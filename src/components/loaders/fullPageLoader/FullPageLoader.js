import React from "react";
import  "../fullPageLoader/FullPageLoader.css"

const FullPageLoader = ({showFullPageLoading}) => {
  return (
    showFullPageLoading && (
      <div className="page_processing_modal">
        <div className="loading-wrapper">
          <div className="loader">
            <div className="loader loader-inner"></div>
          </div>
        </div>
        <p style={{ paddingLeft: 0 }}>Submitting, Please wait...</p>
      </div>
    )
  );
};

export default FullPageLoader;
