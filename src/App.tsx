import React, { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import StockInfo from "./components/StockInfo";
import { Container } from "semantic-ui-react";

const App: React.FC = () => {
  const [searchStock, setSearchStock] = useState("");

  const search = (searchText: string) => {
    setSearchStock(searchText);
  };

  return (
    <div id="main-content">
      <Container>
        <SearchBar search={search} />
        <StockInfo ticker={searchStock} />
      </Container>
    </div>
  );
};

export default App;
