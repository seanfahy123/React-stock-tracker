import React, { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import StockInfo from "./components/StockInfo";
import { Container } from "semantic-ui-react";

const App: React.FC = () => {
  const [addedStocks, setAddedStocks] = useState<any>([]);

  const add = (searchText: string) => {
    if (!addedStocks.includes(searchText)) {
      setAddedStocks([...addedStocks, { ticker: searchText }]);
    } else {
      console.log("This has already been added");
    }
  };

  return (
    <div id="main-content">
      <Container>
        <SearchBar add={add} />
        <div id="stocks">
          {addedStocks.map((stock: any) => (
            <StockInfo ticker={stock.ticker} key={stock.ticker} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default App;
