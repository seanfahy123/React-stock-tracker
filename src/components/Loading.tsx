import React from "react";
import LoadingSvg from "../images/Loading.svg";

const Loading = () => {
  return (
    <div id="loading">
      <img id="loadingSvg" src={LoadingSvg} alt="Loading..." />
    </div>
  );
};

export default Loading;
