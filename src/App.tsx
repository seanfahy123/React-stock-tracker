import React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import StockInfo from "./components/StockInfo";
import { Container } from "semantic-ui-react";
import { connect } from "react-redux";
import updateStock from "./actions/stockActions";

interface IProps {
  stocks: any;
  updateStock: any;
}

const App: React.FC<IProps> = (props: IProps) => {
  const add = (searchText: string, searchQuantity: number) => {
    console.log(
      "new stock, ticker: " + searchText + " quantity: " + searchQuantity
    );
    props.updateStock(searchText, searchQuantity);
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

const mapDispatchToProps = (dispatch: any) => {
  return {
    updateStock: (ticker: string, quantity: number) => {
      dispatch(updateStock(ticker, quantity));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
