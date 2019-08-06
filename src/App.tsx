import React, { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import StockInfo from "./components/StockInfo";
import { Container } from "semantic-ui-react";
import { connect } from "react-redux";

interface IProps {
  stocks: any;
}

const App: React.FC<IProps> = (props: IProps) => {
  const [addedStocks, setAddedStocks] = useState<any>([] as object[]);

  const add = (searchText: string, searchQuantity: number) => {
    console.log(
      "new stock, ticker: " + searchText + " quantity: " + searchQuantity
    );
    if (!addedStocks.includes(searchText)) {
      setAddedStocks([...addedStocks, { ticker: searchText }]);
    } else {
      console.log("This has already been added");
    }
  };

  if (props.stocks) {
    return (
      <div id="main-content">
        <Container>
          <SearchBar add={add} />
          <div id="stocks">
            {props.stocks.map((stock: any) => (
              <StockInfo
                ticker={stock.ticker}
                key={stock.ticker}
                quantity={40}
              />
            ))}
          </div>
        </Container>
      </div>
    );
  } else return null;
};

const mapStateToProps = (state: any) => {
  return {
    stocks: state.stock.stocks
  };
};

export default connect(mapStateToProps)(App);
