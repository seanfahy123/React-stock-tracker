import React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import StockInfo from "./components/StockInfo";
import { Container } from "semantic-ui-react";
import { connect } from "react-redux";
import { updateStock } from "./actions/stockActions";
import Title from "./components/Title";

interface IProps {
  stocks: any;
  updateStock: Function;
}

const App: React.FC<IProps> = (props: IProps) => {
  const add = (searchText: string, searchQuantity: number) => {
    props.updateStock(searchText, searchQuantity);
  };

  if (props.stocks) {
    return (
      <div id="main-content">
        <Container>
          <Title />
          <SearchBar add={add} />
          <div id="stocks">
            {props.stocks.map((stock: any) => (
              <StockInfo
                ticker={stock.ticker}
                key={stock.ticker}
                quantity={stock.quantity}
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

export default connect(
  mapStateToProps,
  { updateStock }
)(App);
