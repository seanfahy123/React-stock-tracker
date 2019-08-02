import React from "react";
import "./App.css";
import StockInfo from "./components/StockInfo";

const App: React.FC = () => {
  return (
    <div id="main-content">
      <StockInfo />
    </div>
  );
};

export default App;
